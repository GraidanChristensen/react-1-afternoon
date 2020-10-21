import React, {Component} from "react";

class FilterStrings extends Component{
    constructor(){
        super();

        this.state = {
            unfilteredArray: ['hello','my','name','is','graidan'],
            userInput: [],
            filteredArray: []
        }
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    filter(arr){
        const {filteredArray, userInput } = this.state;
        for(let i = 0; i < arr.length; i++){
            if(arr[i].includes(userInput)){
                filteredArray.push(arr[i]);
            }
        }

        this.setState({
            filteredArray: filteredArray
        })
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter Strings</h4>
                <span className="puzzleText">Unfiltered String: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filter(this.state.unfilteredArray)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered String: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterStrings;