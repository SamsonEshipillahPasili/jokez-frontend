import { Button, Card, Spinner } from "flowbite-react";
import { useEffect } from "react";
import { getJokes } from "../../api/auth-service";
import Joke from "../../api/models/Joke";
import { useAsyncLoader } from "../form-utils";
import JokeComponent from "./JokeComponent";

function MyJokes() {
    const {state, loader} = useAsyncLoader<Joke[]>();
    useEffect(() => {
        loader(async () => {
            const jokes = await getJokes();
            return jokes;
        });
    }, []);

    if (state.loading) {
        return (
                <Card>
                    <div className="flex gap-8 justify-center">
                        <Spinner size="lg" />
                        <span className="pt-1">Loading jokes ...</span>
                    </div>
                </Card>
            );
    }

    if (state.error) {
        return (
            <Card>
                <div className="space-y-4">
                    <div className="text-center">
                        <span>There was an error fetching jokes ...</span>
                    </div>
                    <div className="flex justify-center">
                        <Button outline={true} size="sm">Try Again</Button>
                    </div>
                </div>
            </Card>
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
