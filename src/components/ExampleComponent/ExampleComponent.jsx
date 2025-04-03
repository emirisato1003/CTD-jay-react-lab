import { useEffect, useState } from "react";

const ExampleComponent = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Mounted!');
    },[]);
    
    useEffect(() => {
        console.log('Rendered or Updated');
    })
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
};

export default ExampleComponent