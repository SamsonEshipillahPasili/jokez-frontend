import NavigationBar from "./views/dashboard/NavigationBar";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div>
            <NavigationBar className="sticky top-0 border-b"/>
            <div className="mt-4 mx-4 md:mx-auto md:w-3/4 ">
            <Outlet/>
            </div>
        </div>
    );
}

export default App;
