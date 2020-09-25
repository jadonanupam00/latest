import React from 'react';
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import SignLogin from './components/SignLogin';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from './components/pages/Test';

//import "../node_modules/bootstrap/dist/css/bootstrap.css";



const App = () =>{
  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <Switch>
      <Route exact path="/" component={Hero} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/about" component={About} />
      <Route exact path="/Services" component={Services} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/contact" component={Contacts} />
      <Route exact path="/SignLogin" component={SignLogin} />
      </Switch>
      <Testimonials />   
      <Footer />
      </div>
    </Router>
  );
}

export default App;
