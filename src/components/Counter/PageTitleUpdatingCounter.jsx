import { useEffect, useRef, useState } from "react";

export default function PageTitleUpdatingCounter() {
    const [count, setCount] = useState(0);
    const title = useRef(document.querySelector('title'));

    console.log(title.current);
    useEffect(() => {
        title.current.text = `Times pressed: ${count}`;
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <div>{count}</div>
        </div>
    );
}