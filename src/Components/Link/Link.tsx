import React, { FC } from 'react'
import './Link.css'

import { Link as _base, LinkProps } from 'react-router-dom'
import { KatanaMixin } from 'Types'

type KatanaLinkProps = LinkProps & KatanaMixin

const Link: FC<KatanaLinkProps> = (props) => {
	const { children, className, onWhite, ...rest } = props

	return <_base className={`${className} base ${onWhite && 'inverse'} --katana-link`} {...rest}><span>{children}</span></_base>
}

export default Link