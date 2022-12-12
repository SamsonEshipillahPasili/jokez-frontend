import { useEffect } from "react";
import { getMyJokes } from "../../api/auth-service";
import Joke from "../../api/models/Joke";
import { useAsyncLoader } from "../form-utils";
import JokeComponent from "./JokeComponent";
import LoadingJokesComponent from "./LoadingJokesComponent";
import LoadJokesErrorComponent from "./LoadJokesErrorComponent";

function MyJokes() {
    const {state, loader} = useAsyncLoader<Joke[]>();
    useEffect(() => {
        loader(async () => {
            const jokes = await getMyJokes();
            return jokes;
        });
    }, []);

    if (state.loading) {
        return (
              <LoadingJokesComponent />
            );
    }

    if (state.error) {
        return (
           <LoadJokesErrorComponent error={state.error} />
        );
    }

    return (
        <>
            <div className="space-y-4">
                {state.data?.map(it => <JokeComponent key={it.id} showUpdateControls={true} joke={it}/>)}
            </div>
        </>
    );
}

export default MyJokes;
