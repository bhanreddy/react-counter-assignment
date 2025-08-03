import React,{Component} from "react";

class ClassCounter extends Component{
    
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
    minusCounter(){
        if(this.state.counter>0){
            this.setState({
                counter:this.state.counter-1
            })
        }
    }
    addCounter(){
        this.setState({
            counter:this.state.counter+1
        })
    }
    render(){
        return(
            <div className="class-counter-Container">
                <h1>Class Component</h1>
                <div className="counter-container">
                    <button className="round-btn round-btn:hover " onClick={()=>this.minusCounter()}>-</button>
                    <h1>{this.state.counter}</h1>
                    <button className="round-btn round-btn:hover " onClick={()=>this.addCounter()}>+</button>
                </div>
            </div>
        )
    }
}
export default ClassCounter