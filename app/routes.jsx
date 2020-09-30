import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'


import AliDemo from './component/page/AliDemo';



const routes = (
    <HashRouter>
        <Switch>
            <Route path='/' component={AliDemo}/>
        </Switch>
    </HashRouter>
);


export default routes;
