import {Button, Card} from "flowbite-react";

type LoadJokesErrorProps = {
    error: string
}

export default function LoadJokesErrorComponent({error}: LoadJokesErrorProps) {
    return <Card>
        <div className="space-y-4">
            <div className="text-center">
                <span>{error}</span>
            </div>
            <div className="flex justify-center">
                <Button outline={true} size="sm">Try Again</Button>
            </div>
        </div>
    </Card>;
}
