import React, {Component} from "react";

class Sum extends Component{
    constructor(){
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    changeInput1(value){
        this.setState({
            number1: parseInt(value, 10)
        })
    }

    changeInput2(value){
        this.setState({
            number2: parseInt(value, 10)
        })
    }

    add(){
        let sum = this.state.number1 + this.state.number2;
        this.setState({
            sum: sum
        })
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.changeInput1(e.target.value)}/>
                <input className="inputLine" onChange={(e) => this.changeInput2(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.add()}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;