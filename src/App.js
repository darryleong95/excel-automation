import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Compile from './views/compile'
import Compare from './views/compare'

const App = () => {
  return (
    <Router>
      <div>
        <h2>Wiselink Excel Automation</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link">Compile</Link></li>
            <li><Link to={'/compare'} className="nav-link">Compare</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Compile} />
          <Route path='/compare' component={Compare} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
