import { useEffect } from "react";

const ExampleComponent = () => {
    useEffect(() => {
        console.log('Component mounted');
    },[]);
    return <div>Example Component</div>;
};

export default ExampleComponent