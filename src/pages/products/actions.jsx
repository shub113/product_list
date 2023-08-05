import { useEffect, useState } from "react";
import { CgSortAz, CgSortZa } from "react-icons/cg";

import { OverlayText, Input } from "../../components/index";
import { sortValues } from "../../helper/constant";
import { UseProductData } from "../../hooks/useProductData";
import { UseDebounce } from "../../hooks/useDebounce";

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

    return <Input value={input} setValue={(value) => setInput(value)} />;
};

export function Actions() {
    return (
        <div className='py-2 px-4 border-b bg-white border-black md:flex md:gap-3'>
            <Sort />
            <Search />
        </div>
    );
}
