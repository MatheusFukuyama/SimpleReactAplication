import './Header.css'
import React from 'react'

const cabecalho = props => 
    <header className="header d-none d-sm-flex">
        <div className="icon-sub">
            <h1 className="mt-3">
                <i className={`fa fa-${props.icon} `}></i> {props.title}
            </h1>
            <p className="lead text-muted">{props.subtitle}</p>
        </div>
    </header>

export default cabecalho