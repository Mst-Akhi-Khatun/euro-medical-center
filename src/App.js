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
        <Route path="">
          <MenuBar></MenuBar>
        </Route>
          <Switch>
            <Route path="/home">
              <Home></Home> 
            </Route>
            <Route path="/detail/:serviceId">
              <ServiceDetail></ServiceDetail>
            </Route>
            <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <PrivateRoute path="/appointment">
                <Appointment></Appointment>
              </PrivateRoute>
              <Route path="/contact">
                <ContactUs></ContactUs>
              </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Route path="">
            <Footer></Footer>
          </Route>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
