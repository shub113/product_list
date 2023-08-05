import { useState, createContext } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { defaultErrorText } from "../../helper/constant";
import { api } from "../../modules/axios";
import { Header } from "./header";
import { ProductList } from "./productList";
import { Actions } from "./actions";
import { Footer } from "./footer";
import { sortValues } from "../../helper/constant";

export const ProductDataContext = createContext(null);

export function Products() {
    const [sort, setSort] = useState(sortValues.default);
    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState("");
    const [skip, setSkip] = useState(0);

    const { data, isFetching, isFetched } = useQuery(
        ["get_products", searchText, category, skip],
        () => {
            if (category) {
                return api.get(`https://dummyjson.com/products/category/${category}?limit=10&skip=${skip}`);
            }
            if (searchText) {
                return api.get(`https://dummyjson.com/products/search?q=${searchText}?limit=10&skip=${skip}`);
            }
            return api.get(`https://dummyjson.com/products?limit=10&skip=${skip}`);
        },
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
        <div className='border-2 border-black rounded-lg bg-white'>
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
                    setCategory,
                    setSkip,
                    category,
                    skip,
                }}
            >
                <Header />
                <Actions />
                <ProductList />
                <Footer />
            </ProductDataContext.Provider>
        </div>
    );
}
