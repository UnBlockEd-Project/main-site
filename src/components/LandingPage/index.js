import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    marginTop: theme.spacing(7),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  statistics: {
    marginTop: theme.spacing(3),
  },
  notifications: {
    marginTop: theme.spacing(6),
  },
  projects: {
    marginTop: theme.spacing(6),
  },
  todos: {
    marginTop: theme.spacing(6),
  },
}));

function Overview() {
  const classes = useStyles();

  return (
    <Container maxWidth='lg' className={classes.root} title='Overview'>
      <Header />
    </Container>
  );
}

export default Overview;
