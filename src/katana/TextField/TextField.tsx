import React, { ComponentPropsWithoutRef, FC } from 'react'
import { KatanaMixin } from 'Types'

import { cn } from '../utils'
import { mergecn } from '../utils'

import './TextField.scss'

const cnTextField = cn('TextField')

const tag = 'input'

type KatanaTextFieldProps = Omit<ComponentPropsWithoutRef<typeof tag>, 'type'> & KatanaMixin

const TextField: FC<KatanaTextFieldProps> = (props) => {
	const { className, black, ...rest } = props

	const newClassName = cnTextField('Input', { black })
	return <span className={mergecn(cnTextField(), className)}>
		<input className={newClassName} {...rest} />
	</span>
}

export default TextField 