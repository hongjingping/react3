import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import WikiHong from './wikiHong.js';
import WikiHong2 from './wikiHong2.js';
import WikiHong3 from './wikiHong3.js';
import Nav from './nav.js';

ReactDOM.render(
  <Router>
    <div>
      <Nav/>
      <Route exact path="/" component={WikiHong} />
      <Route path="/WikiHong2" component={WikiHong2} />
      <Route path="/WikiHong3" component={WikiHong3} />
    </div>
  </Router>,
  document.getElementById('app')
);