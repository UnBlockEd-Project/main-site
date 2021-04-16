import React, { useState } from 'react';
import './Desktop1.css';
// import Select from 'react-select';
import Verification from '../../components/Verification';
// import Demo from '../demo/Demo.vue';
import { VueInReact } from 'vuera';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: 15,
  },
}));

{
  /* Add a function or something here that parses the institution list JSON and returns them in the form of the degrees */
}

const sourceInstitutions = [
  {
    value: 'elizabethtown',
    label: 'Elizabethtown Community & Technical College',
  },
  { value: 'ashland', label: 'Ashland Community & Technical College' },
  { value: 'bluegrass', label: 'Bluegrass Community & Technical College' },
];

const destInstitutions = [
  { value: 'uk', label: 'University of Kentucky' },
  { value: 'wku', label: 'Western Kentucky University' },
  { value: 'murray', label: 'Murray State University' },
];

{
  /* This is not going to be as bad can construct the json myself (or hardcode into the const)*/
}

const degrees = [
  { value: 'cs', label: 'Computer Science' },
  { value: 'english', label: 'English' },
  { value: 'basketWeaving', label: 'Basket Weaving' },
];

function Desktop1() {
  //   const Component = VueInReact(Demo);
  const classes = useStyles();
  const [sourceInst, setSourceInst] = useState('');
  const [sourceProgram, setSourceProgram] = useState('');
  const [destInst, setDestInst] = useState('');
  const [destProgram, setDestProgram] = useState('');

  return (
    <div class='Desktop1'>
      <div class='row'>
        <div class='column'>
          <h1> Map Degree Requirements</h1>
          <h2>Starting Institution</h2>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='source-inst-label'>Institution Name</InputLabel>
            <Select
              labelId='source-inst-label'
              id='sourceInst'
              value={sourceInst}
              onChange={(event) => setSourceInst(event.target.value)}
              label='Institution Name'
            >
              {sourceInstitutions.map((inst) => (
                <MenuItem value={inst.value}>{inst.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='source-program-label'>Program Name</InputLabel>
            <Select
              labelId='source-program-label'
              id='sourceProgram'
              value={sourceProgram}
              onChange={(event) => setSourceProgram(event.target.value)}
              label='Program Name'
            >
              {degrees.map((inst) => (
                <MenuItem value={inst.value}>{inst.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <h2>Target Institution</h2>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='target-inst-label'>Institution Name</InputLabel>
            <Select
              labelId='target-inst-label'
              id='targetInst'
              value={destInst}
              onChange={(event) => setDestInst(event.target.value)}
              label='Institution Name'
            >
              {destInstitutions.map((inst) => (
                <MenuItem value={inst.value}>{inst.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant='outlined' className={classes.formControl}>
            <InputLabel id='target-program-label'>Program Name</InputLabel>
            <Select
              labelId='target-program-label'
              id='targetProgram'
              value={destProgram}
              onChange={(event) => setDestProgram(event.target.value)}
              label='Program Name'
            >
              {degrees.map((inst) => (
                <MenuItem value={inst.value}>{inst.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            disabled={!(sourceInst && sourceProgram && destInst && destProgram)}
          >
            Let's Map It!
          </Button>
        </div>
        {/* 

                    If you want to test the Verification component, just replace the <div>...</div> code below with this

                    <div class='column'>
                        <Verification /> 
                    </div>

                */}
        <div class='column'>
          <h1> How To Use This Feature?</h1>
          <h2> Select your current institution and the institution you </h2>
          <h2>are interested in transferring to. Then click “Let’s Map It!”</h2>
          <h2> to learn how your credits will transfer.</h2>
        </div>
        {/* <div class='column'>
          <Component />
        </div> */}
      </div>
    </div>
  );
}

export default Desktop1;
