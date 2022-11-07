import React, { ComponentPropsWithoutRef, FC } from 'react'
import { KatanaMixin } from 'Types'

import { cn, mergecn } from '../utils'

import './Checkbox.scss'

const cnCheckbox = cn('Checkbox')

const tag = 'input'

type KatanaCheckboxProps = Omit<ComponentPropsWithoutRef<typeof tag>, 'type'> & KatanaMixin

const Checkbox: FC<KatanaCheckboxProps> = (props) => {
	const { title, className, black, value, ...rest } = props

	const newClassName = mergecn(cnCheckbox({ black }), className)
	return <label className={newClassName}>
		{title}
		<input type='hidden' {...rest} />
	</label>
}

export default Checkbox

