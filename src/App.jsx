import { QueryClient, QueryClientProvider } from "react-query";

import { MyComponent } from "./myComponent";

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                ABC
                <MyComponent />
            </div>
        </QueryClientProvider>
    );
}

export default App;
