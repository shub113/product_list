import { CgSortAz, CgSortZa } from "react-icons/cg";

import { OverlayText } from "../../components/index";
import { sortValues } from "../../helper/constant";
import { UseProductData } from "../../hooks/useProductData";

const Sort = () => {
    const { sort, setSort } = UseProductData();
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

export function Actions() {
    return (
        <div className='py-2 px-4 border-b bg-white border-black'>
            <Sort />
        </div>
    );
}
