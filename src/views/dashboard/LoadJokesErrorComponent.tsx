import {Button, Card} from "flowbite-react";

type LoadJokesErrorProps = {
    error: string,
    tryAgainFunc: VoidFunction
}

export default function LoadJokesErrorComponent({error, tryAgainFunc}: LoadJokesErrorProps) {
    return <Card>
        <div className="space-y-4">
            <div className="text-center">
                <span>{error}</span>
            </div>
            <div className="flex justify-center">
                <Button outline={true} size="sm" onClick={tryAgainFunc} >Try Again</Button>
            </div>
        </div>
    </Card>;
}
