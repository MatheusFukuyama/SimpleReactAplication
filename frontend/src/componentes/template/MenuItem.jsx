import './MenuItem.css'
import React from "react";
import { Link } from 'react-router-dom'

const menuItem = props => 
<Link to={props.path}>
    <i className={`fa fa-${props.icon}`}></i> {props.nome}
</Link>

export default menuItem