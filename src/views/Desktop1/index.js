import React, { useState, useEffect } from 'react';
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
import { Button, Typography } from '@material-ui/core';
import { withRouter } from 'react-router';
import kctcsAs from '../../payloads/kctcs_as';
import ekuPhys from '../../payloads/eku_phys';
import nkuCs from '../../payloads/nku_cs';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  h1: {
    margin: 30,
  },
  h2: {
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 700,
  },
  column: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flexBasis: '100%',
    flex: 1,
    '& > *': {
      minWidth: 1118,
    },
  },
  header: {
    marginTop: 50,
    textAlign: 'center',
    color: '#3b4391',
  },
  loadingColumn: {
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 10,
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
  { value: 'eku', label: 'Eastern Kentucky University' },
  { value: 'murray', label: 'Murray State University' },
  { value: 'nku', label: 'Northern Kentucky University' },
  { value: 'uk', label: 'University of Kentucky' },
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
  const [analysis, setAnalysis] = useState(null);
  const [sourceDegreePlan, setSourceDegreePlan] = useState(kctcsAs);
  const [destDegreePlan, setDestDegreePlan] = useState(null);

  useEffect(() => {
    if (analysis && analysis.loading && analysis.step === 1) {
      setTimeout(() => {
        setAnalysis((prevAnalysis) => ({ ...prevAnalysis, step: 2 }));
      }, 3000);
    }
    if (analysis && analysis.loading && analysis.step === 2) {
      setTimeout(() => {
        setAnalysis((prevAnalysis) => ({
          ...prevAnalysis,
          loading: false,
          step: 3,
          degreePlan: [sourceDegreePlan, destDegreePlan],
        }));
      }, 3000);
    }
  }, [analysis]);

  const handleSubmit = () => {
    switch (destInst) {
      case 'eku':
        setDestDegreePlan(ekuPhys);
        break;
      case 'nku':
        setDestDegreePlan(nkuCs);
        break;
    }
    setAnalysis({
      credentialSubjData: {
        sourceInst,
        sourceProgram,
        destInst,
        destProgram,
      },
      loading: true,
      step: 1,
      degreePlan: null,
    });
  };

  return (
    <div class='Desktop1'>
      <div class='row'>
        <div class='column'>
          <Typography
            variant='h1'
            color='primary'
            className={classes.h1}
            align='center'
          >
            {' '}
            Map Degree Requirements
          </Typography>
          <Typography variant='h2' color='primary' align='center' gutterBottom>
            Starting Institution
          </Typography>
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
          <Typography
            variant='h2'
            color='primary'
            align='center'
            gutterBottom
            className={classes.h2}
          >
            Target Institution{' '}
          </Typography>{' '}
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
            onClick={handleSubmit}
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
        {!(analysis && analysis.loading) && (
          <div class='column'>
            <Typography
              variant='h1'
              color='primary'
              className={classes.h1}
              align='center'
            >
              {' '}
              How To Use This Feature?
            </Typography>
            <Typography
              variant='h2'
              className={classes.h2}
              color='primary'
              align='center'
              gutterBottom
            >
              {' '}
              Select your current institution and degree program.
            </Typography>
            <Typography
              variant='h2'
              className={classes.h2}
              color='primary'
              align='center'
              gutterBottom
            >
              Then select the school & program you're interested in transferring
              to!
            </Typography>
            <Typography
              variant='h2'
              className={classes.h2}
              color='primary'
              align='center'
              gutterBottom
            >
              {' '}
              Click "Let's Map It!" to learn how your credits will transfer.
            </Typography>
          </div>
        )}
        {analysis && analysis.loading && (
          <div className={clsx(classes.loadingColumn, 'column')}>
            <div className={classes.loading}>
              <CircularProgress />
              <Typography variant='h1' className={classes.loadingText}>
                {analysis.step === 1
                  ? 'Evaluating Transfer Credit'
                  : 'Analyzing Degree Plan'}
              </Typography>
            </div>
          </div>
        )}
        {/* {analysis && analysis.degreePlan && (
          <div class='row'>
            <div className={classes.column}>
              <Typography variant='h4' className={classes.header}>
                6 Semesters at Eastern Kentucky University
              </Typography>
              <Component planTermData={degreePlan} />
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Desktop1;
