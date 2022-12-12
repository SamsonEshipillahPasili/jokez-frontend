import {Card, Spinner} from "flowbite-react";

export default function LoadingJokesComponent() {
    return <Card>
        <div className="flex gap-8 justify-center">
            <Spinner size="lg"/>
            <span className="pt-1">Loading jokes ...</span>
        </div>
    </Card>;
}
