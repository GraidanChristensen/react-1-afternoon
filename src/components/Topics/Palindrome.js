import React, {Component} from "react";

class Palindrome extends Component{
    constructor(){
        super();

        this.state ={
            userInput: "",
            palindrome: ""
        }
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    checkPalindrome(){
        const {userInput} = this.state;
        let reversed ="";
        for(let i = userInput.length - 1; i >= 0; i--){
            reversed += userInput[i];
        }
        
        console.log(reversed);
        if(reversed === userInput){
            this.setState({
                palindrome: "True"
            })
        }
        else{
            this.setState({
                palindrome: "False"
            })
        }
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.checkPalindrome()}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;