import NavigationBar from "./views/dashboard/NavigationBar";
import {Outlet} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationBar className="sticky top-0 border-b"/>
            <div className="mt-4 mx-4 md:mx-auto md:w-3/4 ">
                <Outlet/>
            </div>
        </QueryClientProvider>
    );
}

export default App;
