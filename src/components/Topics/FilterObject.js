import React, {Component} from "react";

class FilterObject extends Component{
    constructor(){
        super();

        this.state = {
            unfilteredArray: [
                {
                    name: "Graidan",
                    color: "white",
                    number: 3,
                    lovesCode: true
                },
                {
                    name: "Michael Jordan",
                    number: 23,
                    movie: "space jam",
                    sport: "basketball",
                    team: "bulls"
                },
                {
                    name: "Tiger Woods",
                    sport: "golf",
                    color: "red",
                    score: 65
                }
             ],

            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    filter(userProp){
        let tempFiltered = [];
        for(let i = 0; i < this.state.unfilteredArray.length; i++){
            for(let prop in this.state.unfilteredArray[i]){
                if(prop === userProp){
                    tempFiltered.push(this.state.unfilteredArray[i]);
                }
            }
        }   

        this.setState({
            filteredArray: tempFiltered
        })
        
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original:{ JSON.stringify(this.state.unfilteredArray, null, 10) } </span>
                <input onChange={(e)=> this.handleChange(e.target.value)} className="inputLine"/>
                <button className="confirmationButton" onClick={() => this.filter(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject;