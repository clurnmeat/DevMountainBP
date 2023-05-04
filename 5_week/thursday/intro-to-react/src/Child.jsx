import React from "react";

function Child(props){
    return (
        <div>
            <p>Child component</p>
            <p>{props.userInput}</p>
        </div>
    )
}


export default Child