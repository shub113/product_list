import { useEffect, useState } from "react";
import { CgSortAz, CgSortZa } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import Select from "react-select";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { OverlayText, Input } from "../../components/index";
import { sortValues } from "../../helper/constant";
import { UseProductData } from "../../hooks/useProductData";
import { UseDebounce } from "../../hooks/useDebounce";
import { api } from "../../modules/axios";

const Sort = () => {
    const data = UseProductData();
    const sort = data?.sort ?? sortValues.default;
    const setSort = data?.setSort ?? (() => {});

    return (
        <div className='w-fit cursor-pointer '>
            {sort === sortValues.default && (
                <OverlayText text='sort by price (descending)'>
                    <CgSortAz
                        size={30}
                        onClick={() => {
                            toast.success("Currently data are sorted in DESCENDING ORDER");
                            setSort(sortValues.descending);
                        }}
                    />
                </OverlayText>
            )}
            {sort === sortValues.descending && (
                <OverlayText text='sort by price (ascending)'>
                    <CgSortZa
                        size={30}
                        className='text-blue-500'
                        onClick={() => {
                            toast.success("Currently data are sorted in ASCENDING ORDER");

                            setSort(sortValues.ascending);
                        }}
                    />
                </OverlayText>
            )}
            {sort === sortValues.ascending && (
                <OverlayText text='remove sorting'>
                    <CgSortAz
                        size={30}
                        className='text-blue-500'
                        onClick={() => {
                            toast.success("Currently data are NOT sorted in any order");
                            setSort(sortValues.default);
                        }}
                    />
                </OverlayText>
            )}
        </div>
    );
};

const Search = () => {
    const [input, setInput] = useState("");

    const productData = UseProductData();
    const setSearchText = productData?.setSearchText ?? (() => {});
    const setSkip = productData?.setSkip ?? (() => {});
    const category = productData?.category ?? "";
    const setCategory = productData?.setCategory ?? (() => {});
    const debouncedValue = UseDebounce(input, 400);

    useEffect(() => {
        setSearchText(debouncedValue);
        setSkip(0);
        if (!category) {
            setCategory("");
        }
    }, [debouncedValue]);

    return (
        <Input
            value={input}
            setValue={(value) => setInput(value)}
            placeholder='Search products'
            beforeComponent={<AiOutlineSearch size={25} />}
        />
    );
};

const Filter = () => {
    const [options, setOptions] = useState([]);

    const productData = UseProductData();
    const setCategory = productData?.setCategory ?? (() => {});
    const setSkip = productData?.setSkip ?? (() => {});
    const setSearchText = productData?.setSearchText ?? (() => {});
    const searchText = productData?.searchText ?? "";

    const { data, isFetching, isFetched } = useQuery(
        ["get_categories"],
        () => api.get(`https://dummyjson.com/products/categories`),
        {
            onError: (error) => {
                if (error) {
                    toast.error(error?.message ?? defaultErrorText);
                }
            },
        }
    );

    const categories = data?.data ?? [];

    useEffect(() => {
        if (isFetched) {
            setOptions(categories.map((item) => ({ value: item, label: item.toUpperCase() })));
        }
    }, [isFetched]);

    return (
        <Select
            options={options}
            onChange={(item) => {
                setSkip(0);
                if (!searchText) {
                    setSearchText("");
                }
                if (item) {
                    setCategory(item.value);
                    return;
                }
                setCategory("");
            }}
            isDisabled={isFetching}
            isClearable={true}
        />
    );
};

export function Actions() {
    return (
        <div className='py-3 px-4 md:py-6 grid grid-cols-1 grid-rows-3 gap-2 md:gap-4  md:grid-rows-1 md:grid-cols-[minmax(100px,_1fr)_minmax(300px,_6fr)_minmax(200px,_2fr)] border-b border-black'>
            <Sort />
            <Search />
            <Filter />
        </div>
    );
}
