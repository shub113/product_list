import { useState, createContext } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { defaultErrorText } from "../../helper/constant";
import { api } from "../../modules/axios";
import { Header } from "./header";
import { ProductList } from "./productList";
import { Actions } from "./actions";
import { sortValues } from "../../helper/constant";

export const ProductDataContext = createContext(null);

export function Products() {
    const [sort, setSort] = useState(sortValues.default);

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
        <div className='border-2 border-black rounded-lg'>
            <ProductDataContext.Provider
                value={{ sort, setSort, data: data?.data ?? {}, isFetching, isFetched, productList }}
            >
                <Header />
                <Actions />
                <ProductList />
            </ProductDataContext.Provider>
        </div>
    );
}
