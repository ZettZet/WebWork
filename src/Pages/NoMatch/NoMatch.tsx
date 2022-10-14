import React, { FC, } from 'react'
import { NavLink, } from 'react-router-dom'
import { Never, } from 'Types'
import './NoMatch.css'

const NoMatch: FC<Never> = () => {
	return <div className='no-match'>
		<div className='no-match__block'>
			<h1 className='no-match__header'>Oops</h1>
			<p className='no-match__description'>Something went wrong</p>
			<span className='no-match__solution'>Best we can do is to promt you back to <NavLink className='no-match__link' to='/'>Home</NavLink></span>
		</div>
	</div>
}

export default NoMatch