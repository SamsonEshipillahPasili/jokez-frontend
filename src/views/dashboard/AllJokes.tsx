import JokeComponent from "./JokeComponent";
import {useAsyncLoader} from "../form-utils";
import Joke from "../../api/models/Joke";
import {useEffect} from "react";
import {getAllJokes, getMyJokes} from "../../api/auth-service";
import LoadJokesErrorComponent from "./LoadJokesErrorComponent";
import LoadingJokesComponent from "./LoadingJokesComponent";


function AllJokes() {
    const {state, loader} = useAsyncLoader<Joke[]>();

    useEffect(() => {
        loader(async () => {
            return await getAllJokes();
        });
    }, []);

    if (state.loading) {
        return (
                <LoadingJokesComponent/>
            );
    }

    if (state.error) {
        return (
            <LoadJokesErrorComponent error={state.error}/>
        );
    }

    return (
        <>
            <div className="space-y-4">
                {state.data?.map(it => <JokeComponent key={it.id} showUpdateControls={false} joke={it}/>)}
            </div>
        </>
    );
}

export default AllJokes;