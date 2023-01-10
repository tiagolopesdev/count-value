import { useEffect, useState } from "react";
import { Message } from "../message";

export const Home = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {        
        document.title = `Count in ${count}`
    }); 

    return (
        <>
            <h1>Hello guys</h1>            
            <Message 
                count={count}
            />

            <button onClick={() => setCount(count + 1)}>ADD VALUE</button>
        </>
    );
}
