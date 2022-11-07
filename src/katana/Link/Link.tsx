import React, { FC } from 'react'
import { Link as _base, LinkProps } from 'react-router-dom'
import { KatanaMixin } from 'Types'

import { cn, mergecn } from '../utils'

import './Link.scss'

const cnLink = cn('Link')

type KatanaLinkProps = LinkProps & KatanaMixin

const Link: FC<KatanaLinkProps> = (props) => {
	const { children, className, black, ...rest } = props
	const newClassName = mergecn(cnLink({ black }), className)
	return <_base className={newClassName} {...rest}><span>{children}</span></_base>
}

export default Link