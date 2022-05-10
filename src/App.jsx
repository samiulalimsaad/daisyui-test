import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container my-10 text-center mx-auto">
            <button class="text-3xl font-bold btn btn-primary ripple">
                Hello world!
            </button>
        </div>
    );
}

export default App;
