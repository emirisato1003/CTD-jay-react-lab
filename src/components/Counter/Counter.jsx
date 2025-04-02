import { useEffect, useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count === 0){
            console.log(`Count has started at: ${count}`)
        }else{
            console.log(`Count has changed to: ${count}`);
        }
    }, [count])
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Count: {count}</p>
        </>
    );
}