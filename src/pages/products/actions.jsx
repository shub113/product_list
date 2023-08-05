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
                    <CgSortAz size={30} onClick={() => setSort(sortValues.descending)} />
                </OverlayText>
            )}
            {sort === sortValues.descending && (
                <OverlayText text='sort by price (ascending)'>
                    <CgSortZa
                        size={30}
                        className='text-blue-500'
                        onClick={() => setSort(sortValues.ascending)}
                    />
                </OverlayText>
            )}
            {sort === sortValues.ascending && (
                <OverlayText text='remove sorting'>
                    <CgSortAz
                        size={30}
                        className='text-blue-500'
                        onClick={() => setSort(sortValues.default)}
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
    const debouncedValue = UseDebounce(input, 400);

    useEffect(() => {
        setSearchText(debouncedValue);
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
                setCategory(item.value);
            }}
            isDisabled={isFetching}
        />
    );
};

export function Actions() {
    return (
        <div className='py-4 grid grid-cols-[minmax(100px,_1fr)] grid-rows-3 gap-2 px-4 md:grid-rows-1 md:grid-cols-[minmax(100px,_1fr)_minmax(300px,_6fr)_minmax(200px,_2fr)] border-b bg-white border-black'>
            <Sort />
            <Search />
            <Filter />
        </div>
    );
}
