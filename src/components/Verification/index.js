import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/xcode';
import 'brace/mode/sparql';
import 'jsoneditor-react/es/editor.min.css';
import 'brace/mode/json';
import 'brace/theme/github';
import { verifyCredential } from '../../utils/verifyCredential';
import 'ace-builds/src-noconflict/theme-github';
import { Ed25519Signature2018 } from '@transmute/ed25519-signature-2018';
import { documentLoader } from './documentLoader';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 35,
    width: '75%',
    height: '100%',
  },
  verify: {
    marginTop: 20,
  },
  disabled: {
    marginTop: 20,
    backgroundColor: theme.palette.verified,
  },
}));

export default function MultilineTextFields({
  handleVerificationStatus,
  verified,
}) {
  const classes = useStyles();
  const [jsonValue, setJsonValue] = useState(null);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    //Disables the Verify button unless the JSON is valid
    try {
      JSON.parse(jsonValue);
      setValid(true);
    } catch (error) {
      setValid(false);
    }
  }, [jsonValue]);

  const handleVerify = async (event) => {
    event.preventDefault();

    //The following use of the verifyCredential API is boilerplate from the W3C universal wallet interop spec
    const suite = new Ed25519Signature2018();
    const options = { suite, documentLoader };
    let verification = { verified: false };
    try {
      verification = await verifyCredential({
        credential: JSON.parse(jsonValue),
        options,
      });
    } catch (error) {
      //Verification failed for syntax reasons; perhaps because invalid JSON-LD
      handleVerificationStatus({ verified: false, status: error.message });
      window.alert(`Failed: ${error.message}`);
    }
    if (!verification.verified) {
      //Verification failed for signature validity reasons; perhaps because the transcript was tampered with
      const { error } = verification;
      if (error && error.errors && error.errors[0]) {
        handleVerificationStatus({
          verified: false,
          status: error.errors[0].message || error.errors[0],
        });
        window.alert(`Failed: ${error.errors[0].message || error.errors[0]}`);
      }
    } else {
      handleVerificationStatus({
        verified: true,
        status: 'Verified!',
        credential: JSON.parse(jsonValue),
      });
    }
  };

  return (
    <form
      //This `classes.root` follows the Material-UI pattern of using a JSON object
      //(see above declaration of `classes`)
      //to style an individual component with JSON instead of with CSS
      className={classes.root}
      noValidate
      autoComplete='off'
    >
      <AceEditor
        mode='json'
        theme='github'
        fontSize='14px'
        height='100%'
        width='100%'
        highlightActiveLine={true}
        showPrintMargin={true}
        showGutter={true}
        onChange={setJsonValue}
        style={{ minHeight: '350px' }}
        name='verify'
        placeholder='Insert Verifiable Credential Here'
        value={jsonValue}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 1,
        }}
      />
      <Button
        variant='contained'
        color='primary'
        disabled={!valid}
        onClick={handleVerify}
        className={classes.verify}
        disabled={verified}
      >
        {verified ? 'Successfully Verified!' : 'Verify'}
      </Button>
    </form>
  );
}
