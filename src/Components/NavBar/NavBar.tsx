import React from 'react'

import { Link, NavLink } from '../../katana'
import { routes } from '../App/Routes'

import './NavBar.scss'

const NavBar = () => {
	return (
		<nav className="nav-bar">
			<Link as="Link" to="/" className="nav-bar__logo">
				WebWork
			</Link>
			{routes.map(({ path, name }, idx) => {
				if (path === '' || path === '*' || path === 'results') {
					return
				}

				return (
					<NavLink key={idx} to={`/${path}`} className="nav-bar__link">
						{name}
					</NavLink>
				)
			})}
		</nav>
	)
}

export default NavBar
