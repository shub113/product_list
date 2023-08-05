import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RouteList } from "./routeList";
import ErrorBoundry from "./modules/errorBoundry";
import { Spinner } from "./components/index";

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnMount: false } } });

const PageLoader = (
    <div className='flex h-screen w-screen items-center justify-center'>
        <Spinner svgSize='80' /> Loading...
    </div>
);

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundry>
                <ToastContainer position='top-center' />
                <BrowserRouter>
                    <Suspense fallback={PageLoader}>
                        <RouteList />
                    </Suspense>
                </BrowserRouter>
            </ErrorBoundry>
        </QueryClientProvider>
    );
}

export default App;
