import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Admin from './pages/Admin'
// import componente from './caminho';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/Admin' component={Admin} />
            </Switch>
        </BrowserRouter>
    );
}