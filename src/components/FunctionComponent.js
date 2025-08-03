import React,{useState} from "react";


function FunctionComponent(){
    const [counter, setCounter]=useState(0);
    function minusCounter(){
        if(counter>0){
            setCounter(counter-1)
        }
    }
    function addCounter(){
        setCounter(counter+1)
    }
    return(
        <div className="class-counter-Container">
            <h1>Functional Component</h1>
            <div className="counter-container">
                <button className="round-btn round-btn:hover " onClick={()=>minusCounter()}>-</button>
                <h1>{counter}</h1>
                <button className="round-btn round-btn:hover " onClick={()=>addCounter()}>+</button>
            </div>
        </div>
    )
}
export default FunctionComponent