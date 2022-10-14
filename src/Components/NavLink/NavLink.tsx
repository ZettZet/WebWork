import React, { FC } from 'react'
import './NavLink.css'

import { NavLink as _baseLink, NavLinkProps } from 'react-router-dom'
import { KatanaMixin } from 'Types'

type KatanaNavLinkProps = NavLinkProps & KatanaMixin

const NavLink: FC<KatanaNavLinkProps> = (props) => {
	const { children, className, onWhite, ...rest } = props
	const newClassName = `${className} base ${onWhite && 'inverse'} --katana-nav-link`

	if (typeof children === 'function') {
		return <_baseLink {...rest} className={newClassName}>
			{children}
		</_baseLink>
	}
	return <_baseLink {...rest} className={newClassName} >
		<span>{children}</span>
	</_baseLink>
}

export default NavLink