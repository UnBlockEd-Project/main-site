import React, { useState } from 'react';
import './Desktop0.css';
// import Select from 'react-select';
import Verification from '../../components/Verification';
// import Demo from '../demo/Demo.vue';
import { VueInReact } from 'vuera';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { ReactComponent as UnblockedLogo } from './logo.svg';

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

function Desktop0() {
  //   const Component = VueInReact(Demo);
  const classes = useStyles();

  return (
    <div class='Desktop0'>
      <div class='row'>
        <div class='column'>
          <h1>Map Degree Requirements</h1>
          <p>Use this to create a roadmap from a program at one Institution</p>
          <p>to a different program at another. E.g. find how degree requirements at a</p>
          <p>2-year community college apply to a degree at a 4-year university</p>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}>
            Map Degree Requirements
          </Button>
          <hr></hr>
          <h1>Credit Evaluation</h1>
          <p>Use this to upload a verifiable transcript, select a target academic program</p>
          <p>and determine how prior coursework applies towards the satisfaction of degree</p>
          <p>requirements</p>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}>
            Evaluate Transfer Credits
          </Button>
        </div>
        <div class='column'>
          <UnblockedLogo width='500' height='500'/>
          <h1>UnBlockEd</h1>
          <h2>Leveraging blockchain to empower credit recognition</h2>
        </div>
      </div>
    </div>
  );
}

export default Desktop0;