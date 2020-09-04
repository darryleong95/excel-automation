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
          <img alt="Sample Format" src={require('./assets/logo.jpg')} width={"10%"} />
          <div className={classes.grow} />
          <div className={classes.linkContainer}>
            <Link to={'/excel-automation'} className={classes.link}>Compile</Link>
            <Link to={'/excel-automation/compare'} className={classes.link}>Compare</Link>
          </div>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path='/excel-automation' component={Compile} />
        <Route path='/excel-automation/compare' component={Compare} />
      </Switch>
    </Router>
  )
}

export default App;
