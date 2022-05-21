import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container mx-auto my-10 text-center">
            <button className="text-3xl font-bold btn btn-primary ripple-bg-gray-300">
                Hello world!
            </button>
        </div>
    );
}

export default App;
