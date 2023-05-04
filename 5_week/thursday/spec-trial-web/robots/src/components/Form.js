import React from 'react'

const Form = (props) => {

    return (
        <form  onSubmit={props.handleRobotAdd}>
            <p>What is your new robot's name?</p>
            <input 
                type='text' 
                placeholder='name'
                onChange={props.handleInput}
                onSubmit={props.handleRobotAdd}
                value={props.input}/>
            <button>Create Robot</button>
        </form>
    )
}

export default Form