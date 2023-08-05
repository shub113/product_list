import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { defaultErrorText } from "../../helper/constant";
import { api } from "../../modules/axios";
import { ProductCard } from "./productCard";
import { Spinner, Text } from "../../components/index";

export function ProductList() {
    const { data, isFetching, isFetched } = useQuery(
        ["get_products"],
        () => api.get("https://dummyjson.com/products?limit=10"),
        {
            onError: (error) => {
                if (error) {
                    toast.error(error?.message ?? defaultErrorText);
                }
            },
            staleTime: 24 * 60 * 60 * 1000, // 1 day
        }
    );
    const productList = data?.data?.products ?? [];
    return (
        <div className='min-h-screen py-2 px-4 border-b border-black'>
            {isFetching && (
                <div className='grid place-items-center'>
                    <Spinner svgSize='70px' /> <Text type='subtitle'>Fetching products...</Text>
                </div>
            )}
            {isFetched &&
                productList.map((product, index) => (
                    <ProductCard key={product?.id ?? index} productData={product} />
                ))}
        </div>
    );
}
