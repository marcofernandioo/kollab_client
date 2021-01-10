import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navigations from './Navigations';
import AllTasks from './AllTasks';
import LandingPage from './LandingPage';
import SignupPage from './SignupPage';


export default function Main () {
    return (
        <Switch>
            <Route path = '/home' component = {Navigations} />
            <Route path = '/tasks' component = {AllTasks} />
            <Route path = '/signup' component = {SignupPage} />
            <Route path = '/' component = {LandingPage} />
            
        </Switch>
    )
}