import { useEffect, useState } from "react";

import { ProductCard } from "./productCard";
import { Spinner, Text } from "../../components/index";
import { UseProductData } from "../../hooks/useProductData";
import { sortValues } from "../../helper/constant";

export function ProductList() {
    const productData = UseProductData();
    const productList = productData?.productList ?? [];
    const isFetching = productData?.isFetching ?? false;
    const isFetched = productData?.isFetched ?? false;
    const sort = productData?.sort ?? sortValues.default;
    const data = productData?.data ?? {};
    const skip = data?.skip ?? "";
    const limit = data?.limit ?? "";

    const [list, setList] = useState([]);

    // sorting
    useEffect(() => {
        if (sort === sortValues.ascending) {
            const list = [...productList];
            list.sort((a, b) => a.price - b.price);
            setList(list);
            return;
        }
        if (sort === sortValues.descending) {
            const list = [...productList];
            list.sort((a, b) => b.price - a.price);

            setList(list);
            return;
        }
        setList(productList);
    }, [sort]);

    useEffect(() => {
        setList(productList);
    }, [skip, limit]);

    return (
        <div className='min-h-screen py-2 px-4 border-b border-black'>
            {isFetching && (
                <div className='grid place-items-center'>
                    <Spinner svgSize='70px' /> <Text type='subtitle'>Fetching products...</Text>
                </div>
            )}
            {isFetched &&
                list.map((product, index) => (
                    <ProductCard key={product?.id ?? index} productData={product} />
                ))}
        </div>
    );
}
