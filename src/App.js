import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MenuBar from './components/Header/MenuBar/MenuBar';
import Home from './components/Home/Home';
import Service from './components/Services/Service/Service';
import ServiceDetail from './components/Services/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div>
      <Router>
      <Route path="">
        <MenuBar></MenuBar>
      </Route>
        <Switch>
          <Route path="/home">
             <Home></Home> 
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/detail/:serviceId">
            <ServiceDetail></ServiceDetail>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
