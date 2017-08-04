/* eslint no-unused-vars: "off" */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import Root from './Roottwo'
import Foo from './Foo'
import MainLayout from './MainLayout'
import Movie from './Movie'
import './index.css'

// see https://github.com/ReactTraining/react-router
render((
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Root}/>
      <Route path="/foo" component={Foo}/>
      <Route path="/movie/:movieId" component={Movie}/>
    </Route>
  </Router>
), document.getElementById('root'))
