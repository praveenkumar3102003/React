import { Component } from "react";
class Incrementoperation extends Component{
    constructor(){
    super()
    this.state={
         count:0
        }
    }
    Increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    decrement(){
        this.setState({
            count:this.state.count-1
        })
    }
    reset(){
        this.setState({
            count:0
        })
    }
    render(){
        return(
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.Increment()}>+</button>
            <button onClick={()=>this.decrement()}>-</button>
            <button onClick={()=>this.reset()}>reset</button>
            </div>
        )
    }
}

export default Incrementoperation;