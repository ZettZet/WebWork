import React from 'react'
import './Layout.css'

import { Outlet, } from 'react-router-dom'
import NavBar from '../NavBar'



const Layout = () => {
	return <>
		<NavBar />
		<main className='container'>
			<Outlet />
		</main>
	</>
}

export default Layout