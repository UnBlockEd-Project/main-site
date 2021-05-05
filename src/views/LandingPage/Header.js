import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, Hidden } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import MapIcon from '@material-ui/icons/Map';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    marginBottom: theme.spacing(15),
  },
  summaryButton: {
    backgroundColor: theme.palette.common.white,
    marginRight: theme.spacing(5),
    marginTop: theme.spacing(3),
  },
  barChartIcon: {
    marginRight: theme.spacing(1),
  },
  image: {
    width: '100%',
    maxHeight: 400,
  },
}));

function Header({ className, ...rest }) {
  const classes = useStyles();
  const session = useSelector((state) => state.session);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems='center' container justify='space-evenly' spacing={3}>
        <Grid item md={5} xs={12}>
          {/* <Typography component='h2' gutterBottom variant='overline'>
            Home
          </Typography> */}
          <Typography component='h1' gutterBottom variant='h1'>
            You Deserve All The Credit!
          </Typography>
          <Typography gutterBottom variant='h4'>
            UnBlockEd's Curricular Analytics platform is here to help you plan
            your degree and articulate transfer credit to get as much value from
            your courses as possible!
          </Typography>
          <Button
            className={classes.summaryButton}
            edge='start'
            variant='contained'
            component={RouterLink}
            to='/map'
          >
            <MapIcon className={classes.barChartIcon} />
            Map a Degree Plan
          </Button>
          <Button
            className={classes.summaryButton}
            edge='start'
            variant='contained'
            component={RouterLink}
            to='/transfer'
          >
            <NoteAddIcon className={classes.barChartIcon} />
            Use Your VC Transcript
          </Button>
        </Grid>
        <Hidden smDown>
          <Grid item md={5}>
            <img
              alt='Cover'
              className={classes.image}
              src='/images/intro.jpeg'
            />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
