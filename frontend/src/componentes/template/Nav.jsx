import './Nav.css'
import React from 'react'
import MenuItem from './MenuItem'

const menu = props =>
    <aside className="menu-area">
        <nav className="menu">
            <MenuItem icon="home" nome="Início" path="/"/>
            <MenuItem icon="users" nome="Usuários" path="/users"/>
        </nav>
    </aside>

export default menu