import React from 'react';
import './App.css';
import Home from './Home';
import Animator from './Animator';
import Logins from './Logins';
import Register from './Register';
import Contact from './Contact';
import Profileupdate from './Profileupdate';
import Profile from './Profile';
import Blood from './Bloodbrowser';
import Terms from './Terms';
import Privacy from './Privacy';
import About from './About';
import Forgotpassword from './Forgotpassword';
import Drop from './Drop';


import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div>
        <Switch>
        <Route path="/" exact component={Animator}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/login" exact component={Logins}/>
        <Route path="/registration" exact component={Register}/>
        <Route path="/contact-us" exact component={Contact}/>
        <Route path="/profileupdate" exact component={Profileupdate}/>
        <Route path="/profile/:id"  component={Profile}/>
        <Route path="/about-us" exact component={About}/>
        <Route path="/bloodbrowser" exact component={Blood}/>
        <Route path="/terms-condition" exact component={Terms}/>
        <Route path="/privacy" exact component={Privacy}/>
        <Route path="/Forgotpassword" exact component={Forgotpassword}/>
        <Route path="/drop" exact component={Drop}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
