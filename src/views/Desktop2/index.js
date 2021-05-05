import React, { useEffect, useState } from 'react';
import './Desktop2.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import Verification from '../../components/Verification';
import axios from '../../utils/axios';
import clsx from 'clsx';
import nkuCs from '../../payloads/02_vc_nku_cs.js';
import ekuPhys from '../../payloads/02_vc_eku_phys';
import Demo from '../../components/demo/Demo.vue';
import { VueInReact } from 'vuera';

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
    marginTop: 10,
    maxWidth: 700,
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  loadingText: {
    marginTop: 10,
  },
  loadingColumn: {
    justifyContent: 'center',
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
}));

const destInstitutions = [
  {
    value: 'eku',
    label: 'Eastern Kentucky University',
    degrees: [
      { value: 'physics', label: 'Physics' },
      { value: 'bw', label: 'Basket Weaving' },
    ],
  },
  {
    value: 'murray',
    label: 'Murray State University',
    degrees: [
      { value: 'physics', label: 'Physics' },
      { value: 'english', label: 'English' },
      { value: 'cs', label: 'Computer Science' },
      { value: 'bw', label: 'Basket Weaving' },
    ],
  },
  {
    value: 'nku',
    label: 'Northern Kentucky University',
    degrees: [
      { value: 'cs', label: 'Computer Science' },
      { value: 'bw', label: 'Basket Weaving' },
    ],
  },
  {
    value: 'uk',
    label: 'University of Kentucky',
    degrees: [
      { value: 'bio', label: 'Biology' },
      { value: 'spanish', label: 'Spanish' },
      { value: 'cs', label: 'Computer Science' },
      { value: 'bw', label: 'Basket Weaving' },
    ],
  },
];

const degrees = [
  { value: 'Computer Science', label: 'Computer Science' },
  { value: 'English', label: 'English' },
  { value: 'Physics', label: 'Physics' },
];

// let json = require("./institutions.json");
// console.log(json, 'the json obj');
{
  /* Add a function or something here that parses the institution list JSON and returns them in the form of the degrees */
}

// const institutions = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

{
  /* This is not going to be as bad can construct the json myself (or hardcode into the const)*/
}

// const degrees = [
//   { value: 'generic institution', label: 'Institution Name' },
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

function Desktop2() {
  const classes = useStyles();
  const Component = VueInReact(Demo);
  const [sourceInst, setSourceInst] = useState('');
  const [sourceProgram, setSourceProgram] = useState('');
  const [destInst, setDestInst] = useState('');
  const [destProgram, setDestProgram] = useState('');
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [verified, setVerified] = useState(false);
  const [credentialSubjData, setCredentialSubjData] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    if (analysis && analysis.loading && analysis.step === 1) {
      setTimeout(() => {
        setAnalysis((prevAnalysis) => ({ ...prevAnalysis, step: 2 }));
      }, 3000);
    }
    if (analysis && analysis.loading && analysis.step === 2) {
      const degreePlan =
        destInst.value === 'nku' ? nkuCs : ekuPhys && ekuPhys.slice(2);
      debugger;
      setTimeout(() => {
        setAnalysis((prevAnalysis) => ({
          ...prevAnalysis,
          loading: false,
          step: 3,
          degreePlan,
        }));
      }, 3000);
    }
  }, [analysis]);

  useEffect(async () => {
    if (verificationStatus && verificationStatus.verified) {
      const instName =
        destInst && destInst.label && destInst.label.toUpperCase();
      const { credential } = verificationStatus;
      const { credentialSubject } = credential;
      const { academicRecord } = credentialSubject;
      const multiQuery = {};
      academicRecord.forEach((subRec) => {
        const { year } = subRec.semester;
        // const year = 2016;
        const { college } = subRec.academicProgram;
        const { coursesTransferred, coursesTaken } = subRec;
        (coursesTransferred || []).forEach((transObj) => {
          const { course, institution } = transObj;
          const { code } = course;
          multiQuery[code] = {
            selectDistinct: {
              '?newCourse': ['*'],
            },
            where: [
              ['?identifier', 'IdentifierValue/identifierValueCode', code],
              [
                '?course',
                'LearningOpportunityProfile/identifier',
                '?identifier',
              ],
              [
                '?course',
                'LearningOpportunityProfile/ownedBy',
                ['CredentialOrganization/name', institution.name],
              ],
              // [
              //   '?course',
              //   'LearningOpportunityProfile/effectiveDate',
              //   Number(year),
              // ],
              [
                '?valueProfile',
                'TransferValueProfile/transferValueFrom',
                '?course',
              ],
              [
                '?valueProfile',
                'TransferValueProfile/transferValueTo',
                '?newCourse',
              ],
              [
                '?newCourse',
                'LearningOpportunityProfile/ownedBy',
                [
                  'CredentialOrganization/name',
                  instName || 'EASTERN KENTUCKY UNIVERSITY',
                ],
              ],
              // [
              //   '?newCourse',
              //   'LearningOpportunityProfile/effectiveDate',
              //   Number(year),
              // ],
            ],
            opts: {
              compact: true,
              cache: true,
              fuel: 1000000000,
            },
          };
        });
        coursesTaken.forEach((courseObj) => {
          const { code } = courseObj.course;
          multiQuery[code] = {
            selectDistinct: {
              '?newCourse': ['*'],
            },
            where: [
              ['?identifier', 'IdentifierValue/identifierValueCode', code],
              [
                '?course',
                'LearningOpportunityProfile/identifier',
                '?identifier',
              ],
              [
                '?course',
                'LearningOpportunityProfile/ownedBy',
                ['CredentialOrganization/name', college],
              ],
              // [
              //   '?course',
              //   'LearningOpportunityProfile/effectiveDate',
              //   Number(year),
              // ],
              [
                '?valueProfile',
                'TransferValueProfile/transferValueFrom',
                '?course',
              ],
              [
                '?valueProfile',
                'TransferValueProfile/transferValueTo',
                '?newCourse',
              ],
              [
                '?newCourse',
                'LearningOpportunityProfile/ownedBy',
                [
                  'CredentialOrganization/name',
                  instName || 'EASTERN KENTUCKY UNIVERSITY',
                ],
              ],
              // [
              //   '?newCourse',
              //   'LearningOpportunityProfile/effectiveDate',
              //   Number(year),
              // ],
            ],
            opts: {
              compact: true,
              cache: true,
              fuel: 1000000000,
            },
          };
        });
      });
      debugger;
      const newCredentialSubject = await axios
        .post(
          'http://52.22.196.240:8090/fdb/transfer/test/multi-query',
          multiQuery
        )
        .then((res) => {
          const { data } = res;
          academicRecord.forEach((subRec, i) => {
            const { coursesTransferred, coursesTaken } = subRec;
            const { year } = subRec.semester;
            (coursesTransferred || []).forEach((transObj, j) => {
              const { course, institution } = transObj;
              const { code } = course;
              const transferDatum = data[code];
              const transValue = transferDatum.map((el) => ({
                code: el.identifier['IdentifierValue/identifierValueCode'],
                name: el.name,
                credit: el.creditValue || course.credit,
              }));
              credentialSubject.academicRecord[i].coursesTransferred[
                j
              ].equivalences = transValue;
            });
            coursesTaken.forEach((courseObj, j) => {
              const { course } = courseObj;
              const { code } = course;
              const transferDatum = data[code];
              const transValue = transferDatum.map((el) => ({
                code: el.identifier['IdentifierValue/identifierValueCode'],
                name: el.name,
                credit: el.creditValue || course.credit,
              }));
              credentialSubject.academicRecord[i].coursesTaken[
                j
              ].equivalences = transValue;
            });
          });
          debugger;
          return credentialSubject;
        })
        .catch((err) => {
          debugger;
        });
      setCredentialSubjData(newCredentialSubject);
      setVerified(true);
    }
  }, [verificationStatus]);

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
            How To Use This Feature?
          </Typography>
          <Typography variant='h2' color='primary' align='center' gutterBottom>
            {' '}
            1. Provide a verifiable credential of your transcript credits.{' '}
          </Typography>
          <Typography
            variant='h2'
            color='primary'
            align='center'
            className={classes.h2}
          >
            2. Select your desired destination institution & program.{' '}
          </Typography>
          <Typography
            variant='h2'
            color='primary'
            align='center'
            className={classes.h2}
          >
            3. Let us analyze how your transfer credits can provide maximum
            value towards your degree!{' '}
          </Typography>
          <Verification
            handleVerificationStatus={setVerificationStatus}
            verified={verified}
          />
        </div>
        {!(analysis && analysis.loading) && (
          <div class='column'>
            <Typography
              variant='h1'
              color='primary'
              className={classes.h1}
              align='center'
              gutterBottom
            >
              Transfer Credit Evaluation
            </Typography>
            <Typography
              variant='h2'
              color='primary'
              align='center'
              gutterBottom
              style={{ marginBottom: 20 }}
            >
              Target Institution
            </Typography>
            <FormControl variant='outlined' className={classes.formControl}>
              <InputLabel id='target-inst-label'>Institution Name</InputLabel>
              <Select
                labelId='target-inst-label'
                id='targetInst'
                value={destInst && destInst.value}
                onChange={(event) =>
                  setDestInst(
                    destInstitutions.find(
                      (inst) => inst.value === event.target.value
                    )
                  )
                }
                label='Institution Name'
              >
                {destInstitutions.map((inst) => (
                  <MenuItem value={inst.value}>{inst.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              variant='outlined'
              className={classes.formControl}
              disabled={!destInst.degrees}
            >
              <InputLabel id='target-program-label'>Program Name</InputLabel>
              <Select
                labelId='target-program-label'
                id='targetProgram'
                value={destProgram}
                onChange={(event) => setDestProgram(event.target.value)}
                label='Program Name'
              >
                {(destInst.degrees || degrees).map((inst) => (
                  <MenuItem value={inst.value}>{inst.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              disabled={!(destInst && destProgram && verified)}
              onClick={() =>
                setAnalysis({
                  credentialSubjData,
                  loading: true,
                  step: 1,
                  degreePlan: null,
                })
              }
            >
              Let's Map It!
            </Button>
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
        {analysis && analysis.degreePlan && (
          <div class='row'>
            <div className={classes.column}>
              <Typography variant='h4' className={classes.header}>
                {analysis.degreePlan.length || '6'} Semesters at{' '}
                {destInst.label || 'Eastern Kentucky University'}
              </Typography>
              <Component planTermData={analysis.degreePlan} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Desktop2;
