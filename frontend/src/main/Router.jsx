import React from "react";
import { Switch, Route, Redirect } from 'react-router'

import Home from '../componentes/home/Home'
import UserCrud from "../componentes/user/UserCrud";

const router = props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/'/>
    </Switch>

export default router