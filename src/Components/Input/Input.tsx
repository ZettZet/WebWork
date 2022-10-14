import React, { FC, ComponentProps } from 'react'
import { KatanaMixin } from 'Types'
import './Input.css'

const defaultElement = 'input'
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }
type KatanaInputProps = WithRequired<ComponentProps<typeof defaultElement>, 'placeholder' | 'type'> & KatanaMixin

const Input: FC<KatanaInputProps> = (props) => {
	const { className, onWhite, ...rest } = props

	const newClassName = `${className} --katana-input`
	return <input className={newClassName} {...rest} />
}

export default Input