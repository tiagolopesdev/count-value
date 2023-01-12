import { useEffect, useState } from "react";
import { Message } from "../message";

export const Home = () => {

    const [count, setCount] = useState(0);

    useEffect((e) => {        
        document.title = `Count in ${count}`
    }, [count]); 

    const handlerChange = (e) => {
        setCount(parseInt(e.target.value));
    };

    const calcValue = (operation) => {    
        if (operation) {
            setCount(count + 1);
        } else {
            if (count > 0) {
                setCount(count - 1);
            }
        }
    };

    return (
        <>
            <h1>Hello guys</h1>            
            <Message 
                count={count}
            />
            <input value={count} onChange={handlerChange}/>
            <button onClick={() => calcValue(true)}>ADD(+)</button>
            <button onClick={() => calcValue(false)}>REMOVE(-)</button>
        </>
    );
}
