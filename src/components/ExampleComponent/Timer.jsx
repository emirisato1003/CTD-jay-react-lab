import { useEffect, useRef } from "react";

export default function Timer() {
    const count = useRef(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         count.current += 1;
    //         console.log(count.current);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    return <div>Check the console!</div>;
}