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
    const [searchText, setSearchText] = useState("");

    const { data, isFetching, isFetched } = useQuery(
        ["get_products", searchText],
        () => api.get(`https://dummyjson.com/products?limit=10&search${searchText}`),
        {
            onError: (error) => {
                if (error) {
                    toast.error(error?.message ?? defaultErrorText);
                }
            },
        }
    );
    const productList = data?.data?.products ?? [];

    return (
        <div className='border-2 border-black rounded-lg'>
            <ProductDataContext.Provider
                value={{
                    sort,
                    setSort,
                    data: data?.data ?? {},
                    isFetching,
                    isFetched,
                    productList,
                    searchText,
                    setSearchText,
                }}
            >
                <Header />
                <Actions />
                <ProductList />
            </ProductDataContext.Provider>
        </div>
    );
}
