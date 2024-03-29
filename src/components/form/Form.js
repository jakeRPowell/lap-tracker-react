import React, { useState } from 'react'

import Button from './Button'

const Form = ({
    runners, 
    setRunners, 
    startRace, 
    endRace}) => {

    const [inputValue, setInputValue] = useState('')

    const inputHandler = (e) => {
        setInputValue(e.target.value)  
        
    }

    const checkKey = (key) => {
        if (key === 'Enter') {
            addRunnerHandler()  
        }
    } 

    const addRunnerHandler = () => {
        let runnerName;
        if (inputValue === "") {
            runnerName = `Runner ${runners.length + 1}`
        } else {
            runnerName = inputValue
        }
        const runner = {
            name: runnerName,
            lapCount: 0,
            lapTimes: [],
            average: 0,
            total: 0,
            last: 0,
            id: runners.length
        }
        setRunners([
            ...runners,
            runner 
        ])
        setInputValue('')  
    }

    return (        
        <div className="form-controls">
            <input onChange={(e) => inputHandler(e)} onKeyUp={(e) => {checkKey(e.key)}} value={inputValue}></input>
            <Button 
                buttonType='add' 
                buttonFunction={() => {addRunnerHandler()}}>
                    Add runner
            </Button>
            <Button 
                buttonType='start' 
                buttonFunction={startRace}>
                    Start race
            </Button>
            <Button 
                buttonType='end' 
                buttonFunction={endRace}>
                    End race
            </Button>
        </div> 
        
    )
}

export default Form