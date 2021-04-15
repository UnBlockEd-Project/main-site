import React from 'react';
import './Desktop2.css';
import Select from 'react-select';

// let json = require("./institutions.json");
// console.log(json, 'the json obj');
{
  /* Add a function or something here that parses the institution list JSON and returns them in the form of the degrees */
}

const institutions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

{
  /* This is not going to be as bad can construct the json myself (or hardcode into the const)*/
}

const degrees = [
  { value: 'generic institution', label: 'Institution Name' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function Desktop2() {
  return (
    <div class='Desktop1'>
      <div class='row'>
        <div class='column'>
          <h1>Transfer Credit Evaluation</h1>
          <h2>Target Institution</h2>
          <Select options={institutions} />
          <Select options={degrees} />
          <button> Analyze My Credits </button>
        </div>
        <div class='column'>
          <h1> How To Use This Feature?</h1>
          <h2> Find out how your transfer credits will apply </h2>
          <h2>to degree requirements at a target institution’s program</h2>
        </div>
      </div>
    </div>
  );
}

export default Desktop2;
