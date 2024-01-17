import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Contacts from './components/Contacts';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/contacts" component={Contacts} />
            </Switch>
        </Router>
    );
}

export default App;
