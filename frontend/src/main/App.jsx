import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import "./App.css"
import React from "react"
import { HashRouter } from 'react-router-dom'

import Logo from "../componentes/template/Logo"
import Nav from "../componentes/template/Nav"
import Router  from './Router'
import Footer from "../componentes/template/Footer"

const aplicacao = props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Router />
            <Footer />
        </div>
    </HashRouter>
export default aplicacao