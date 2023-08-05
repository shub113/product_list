import { Header } from "./header";
import { ProductList } from "./productList";

export function Products() {
    return (
        <div className='border-2 border-black rounded-lg'>
            <Header />
            <ProductList />
        </div>
    );
}
