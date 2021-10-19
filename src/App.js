import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from './components/Appointment/Appointment';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import MenuBar from './components/Header/MenuBar/MenuBar';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Service from './components/Services/Service/Service';
import ServiceDetail from './components/Services/ServiceDetail/ServiceDetail';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <MenuBar></MenuBar>
          <Switch>
          <Route exact path="/">
              <Home></Home> 
            </Route>
            <Route path="/home">
              <Home></Home> 
            </Route>
            <PrivateRoute path="/detail/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <PrivateRoute path="/appointment">
                <Appointment></Appointment>
              </PrivateRoute>
              <PrivateRoute path="/contact">
                <ContactUs></ContactUs>
              </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
            <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
