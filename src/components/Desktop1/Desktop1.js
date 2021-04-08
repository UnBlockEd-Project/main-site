import React from 'react';
import './Desktop1.css';
import Select from 'react-select';
import Verification from '../Verification';
import Demo from '../demo/Demo.vue';
import { VueInReact } from 'vuera';

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

function Desktop1() {
  const Component = VueInReact(Demo);
  return (
    <div class='Desktop1'>
      <div class='row'>
        <div class='column'>
          <h1> Map Degree Requirements</h1>
          <h2>Starting Institution</h2>
          <Select
            options={institutions}
            defaultValue={{
              label: 'Instiution Name',
              value: 'generic institution',
            }}
          />
          <Select options={degrees} />
          <h2>Target Institution</h2>
          <Select options={institutions} />
          <Select options={degrees} />
          <button> Let's Map It! </button>
        </div>
        {/* 

                    If you want to test the Verification component, just replace the <div>...</div> code below with this

                    <div class='column'>
                        <Verification /> 
                    </div>

                */}
        <div class='column'>
          <Component />
        </div>
      </div>
    </div>
  );
}

export default Desktop1;
