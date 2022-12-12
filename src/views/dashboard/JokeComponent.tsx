import Joke from "../../api/models/Joke";

interface JokeComponentProps {
    showUpdateControls: boolean
    joke: Joke
}

function JokeComponent({showUpdateControls, joke}: JokeComponentProps) {
    return (
        <div className="border p-4 space-y-3">
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {joke.content}
            </p>
            <div>
                <div className="text-xs text-gray-600">
                    Created By: <span className="font-medium">{joke.createdBy}</span> on <span className="font-medium">{joke.createdDate}</span>
                </div>
                {showUpdateControls &&
                    <div className="space-x-3">
                        <a className="text-blue-500 text-sm" href="#">Edit</a>
                        <a className="text-red-500 text-sm" href="#">Delete</a>
                    </div>
                }
            </div>
        </div>
    );
}

export default JokeComponent;
