import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const NoPathPage = lazy(() => import("./pages/noPath").then((module) => ({ default: module.NoPath })));
const PageLayout = lazy(() =>
    import("./pages/pageLayout").then((module) => ({ default: module.PageLayout }))
);

const Products = lazy(() =>
    import("./pages/products/products").then((module) => ({ default: module.Products }))
);

export function RouteList() {
    return (
        <Routes>
            <Route path='/product_list' element={<PageLayout />}>
                <Route index element={<Products />} />
            </Route>
            <Route path='*' element={<NoPathPage />} />
        </Routes>
    );
}
