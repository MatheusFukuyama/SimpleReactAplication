import './Logo.css'
import React from 'react'
import logoImg from '../../assets/images/logo.png'

const logo = props => 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logoImg} alt="logo" />
        </a>
    </aside>

export default logo