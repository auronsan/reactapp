import React, { Component } from 'react';

// eslint-disable-next-line

import homeComponent from './components/Home';
import resumeComponent from './components/Resume';


import { Route,HashRouter } from 'react-router-dom'


class App extends Component {
 
render() {
 
  return (
    <HashRouter>
    <div>
   <Route exact path='/' component={homeComponent} />
   <Route exact path='/resume' component={resumeComponent} />
   </div>
    </HashRouter>
    
  );
}
}


export default App;
