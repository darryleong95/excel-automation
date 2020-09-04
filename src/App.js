import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Compile from './views/compile'
import Compare from './views/compare'
import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core';
import { useStyles } from './style'

const App = () => {

  const classes = useStyles()

  return (
    <Router>
      <AppBar position="static" style={{ backgroundColor: 'darkorange' }}>
        <Toolbar>
          <Typography className={classes.label} noWrap style={{ fontSize: '22px' }}>
            Wiselink Excel Automation
          </Typography>
          <div className={classes.grow} />
          <div className={classes.linkContainer}>
            <Link to={'/'} className={classes.link}>Compile</Link>
            <Link to={'/compare'} className={classes.link}>Compare</Link>
          </div>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path='/' component={Compile} />
        <Route path='/compare' component={Compare} />
      </Switch>
    </Router>
  )
}

export default App;
