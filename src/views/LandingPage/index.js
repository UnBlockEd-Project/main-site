import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Page } from '@material-ui/core';
import Header from './Header';
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    // marginTop: theme.spacing(7),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
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

function Overview({ route }) {
  const classes = useStyles();

  return (
    <Container maxWidth='xl' className={classes.root} title='Overview'>
      <Header />
    </Container>
  );
}

export default Overview;
