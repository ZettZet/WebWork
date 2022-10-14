import React, { ComponentProps, FC } from 'react'
import { KatanaMixin, } from 'Types'
import './Button.css'

const defaultElement = 'button'
type KatanaButtonProps = ComponentProps<typeof defaultElement> & KatanaMixin

const Button: FC<KatanaButtonProps> = (props) => {
	const { children, className, onWhite, ...rest } = props
	const newClassName = `${className} base ${onWhite && 'inverse'} --katana-button`

	return <button className={newClassName} {...rest} ><span>{children}</span></button>
}

export default Button