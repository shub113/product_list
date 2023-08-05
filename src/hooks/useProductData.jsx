import { useContext } from "react";

import { ProductDataContext } from "../pages/products/products";

export function UseProductData() {
    return useContext(ProductDataContext);
}
