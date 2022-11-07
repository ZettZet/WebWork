import React from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from '../NavBar'

import './Layout.scss'



const Layout = () => {
	return <>
		<NavBar />
		<main>
			<Outlet />
		</main>
	</>
}

export default Layout