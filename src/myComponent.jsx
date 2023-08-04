import { useQuery } from "react-query";

export function MyComponent() {
    const { data, error, isFetching } = useQuery(["get_profile"], () => {
        return fetch("https://fakestoreapi.com/products").then((res) => res.json());
    });
    console.log("#######", { data, error, isFetching });
    return <div>asfaksdfghsda</div>;
}
