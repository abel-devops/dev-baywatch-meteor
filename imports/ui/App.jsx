import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BayAdmin from './BayAdmin';
 

export const App = () => (
  <div>
  {<Router>
    <div>
      <Route exact path="/" component={ BayAdmin } />
      {/* <Route exact path="/:loc(NY|LA)/:id" component={this.state.authenticated && BayClient} />
      <Route exact path="/:id" component={this.state.authenticated && BayClient} /> */}


    </div>
  </Router> }
  </div>
);