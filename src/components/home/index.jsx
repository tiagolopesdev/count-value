import { useEffect, useState } from "react";
import { Message } from "../message";

export const Home = () => {

    const [count, setCount] = useState(0);

    useEffect((e) => {        
        document.title = `Count in ${count}`
    }, [count]); 

    const handlerChange = (e) => {

        console.log(e.target.value);

        if (e.target.value === null) {
            setCount(0);
        } else {
            setCount(parseInt(e.target.value));
        }
    };

    return (
        <>
            <h1>Hello guys</h1>            
            <Message 
                count={count}
            />
            <input value={count} onChange={handlerChange}/>
            <button onClick={() => setCount(count + 1)}>ADD VALUE</button>
        </>
    );
}
