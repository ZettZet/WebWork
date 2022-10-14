import React from 'react'
import './NavBar.css'

import Link from '../Link'
import NavLink from '../NavLink'
import { routes, } from '../App/Routes'

const NavBar = () => {
	return <nav className='nav-bar'>
		<Link to='/' className='nav-bar__logo'>WebWork</Link>
		{routes.map(({ path, name, }, idx,) => {
			if (path === '' || path === '*') {
				return
			}

			return <NavLink key={idx} to={`/${path}`} className='nav-bar__link'>{name}</NavLink>
		},)}
	</nav>

}

export default NavBar