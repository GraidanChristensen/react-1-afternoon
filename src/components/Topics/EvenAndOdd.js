import React, {Component} from "react";

class EvenAndOdd extends Component{
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }

    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    sort(nums){
        let arrayNums = nums.split(',');
        let evens = [];
        let odds = []
        for(let i = 0; i < nums.length; i++){ 
            if(arrayNums[i] % 2 === 0 ){
                evens.push(arrayNums[i])
            }
            else if(arrayNums[i]%1 ===0){
                odds.push(arrayNums[i])
            }

        }

        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }

    display(arr){
        let str=""
        for(let i = 0; i < arr.length; i++){
            str += arr[i] + ", ";
        }
        return str;
    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input onChange={ (e) => this.handleChange(e.target.value)} className="inputLine"/>
                <button onClick={() => {this.sort(this.state.userInput)}} className="confirmationButton"> Sort </button>
                <span className="resultsBox">Evens: {this.display(this.state.evenArray)} </span>
                 <span className="resultsBox">Odds: {this.display(this.state.oddArray)} </span>
            </div>
            )
    }
}

export default EvenAndOdd;