import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { defaultErrorText } from "../../helper/constant";
import { api } from "../../modules/axios";
import { Header } from "./header";

export function Products() {
    const { data } = useQuery(["get_profile"], () => api.get("https://dummyjson.com/products?limit=10"), {
        onError: (error) => {
            if (error) {
                toast.error(error?.message ?? defaultErrorText);
            }
        },
        staleTime: 24 * 60 * 60 * 1000, // 1 day
    });

    return (
        <div className='h-screen border-2 border-black rounded-lg'>
            <Header />
        </div>
    );
}
