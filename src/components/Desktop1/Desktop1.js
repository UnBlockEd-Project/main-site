import React from 'react';
import './Desktop1.css';
import Select from 'react-select'

{/* Add a function or something here that parses the institution list JSON and returns them in the form of the degrees */}

const institutions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

{/* This is not going to be as bad can construct the json myself (or hardcode into the const)*/}

const degrees = [
    { value: 'generic institution', label:"Institution Name"},
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

function Desktop1() {
    return (
        <div class='Desktop1'>
            <div class='row'>
                <div class='column'>
                    <h1> Map Degree Requirements</h1>
                    <h2>Starting Institution</h2>
                <div class='column1'>
                    <Select options={institutions} defaultValue={{ label: "Instiution Name", value: 'generic institution' }}/>
                </div>
                    <Select options={degrees}/>
                    <hr/>
                    <h2>Target Institution</h2>
                    <Select options={institutions}/>
                    <Select options={degrees}/>
                    <button> Let's Map It! </button>
                </div>
                <div class='column'>
                    <h1> How To Use This Feature?</h1>
                    <h2> Select your current institution and the institution you </h2>
                    <h2> are interested in transferring to. Then click “Let’s Map It!” </h2>
                    <h2> to learn how your credits will transfer.</h2>
                </div>
            </div>
        </div>
    )
  }
  
  export default Desktop1