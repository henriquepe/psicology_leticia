import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/home/index'
import About from '../pages/about/about'

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='psychology'/>
        </Switch>
    )
}

export default Routes;