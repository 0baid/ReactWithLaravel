import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';

function Example() {
    return (
        <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
