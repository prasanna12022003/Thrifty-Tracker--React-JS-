import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import './App.css';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/Page3/:id" component={Page3}></Route>
        <Route path="/Page2" component={Page2}></Route>
        <Route path="/" component={Page1}></Route>
      </Switch>
    </div>
  );
}

export default App;
