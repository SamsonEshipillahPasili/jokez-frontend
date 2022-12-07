import Joke from "./Joke";
import {Pagination} from "flowbite-react";

function MyJokes() {
    return (
        <>
            <div className="space-y-4">
                <Joke showUpdateControls={true}/>
                <Joke showUpdateControls={true}/>
                <Joke showUpdateControls={true}/>
            </div>
        </>
    );
}

export default MyJokes;
