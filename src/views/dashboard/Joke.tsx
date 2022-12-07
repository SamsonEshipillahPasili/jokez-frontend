function Joke({showUpdateControls}: any) {
    return (
        <div className="border p-4 space-y-3">
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <div>
                <div className="text-xs text-gray-600">
                    Created By: <span className="font-medium">Jordan Petersen</span> on <span className="font-medium">12/01/2022</span>
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

export default Joke;
