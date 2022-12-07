import {Link, useRouteError} from "react-router-dom";
import {Card} from "flowbite-react";

function ErrorPage() {
    const routeError: any = useRouteError();
    return (
        <>
            <div className="mx-5 mt-5 md:w-96 md:mx-auto">
                <Card className="text-center">
                    <h1 className="text-2xl font-bold text-gray-600 tracking-tight">There was an error</h1>
                    <p>{routeError.statusText || routeError.message}</p>
                    <Link to="/" className="text-blue-600">Back Home</Link>
                </Card>
            </div>
        </>
    );
}

export default ErrorPage;
