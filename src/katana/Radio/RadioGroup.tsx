import React, { createContext, ReactNode, useContext, useState } from 'react'
import { FC } from 'react'

type RadioGroupProps = {
	children: ReactNode
	onChange?: (value: string) => void
}

const RadioContext = createContext<[string, (value: string) => void] | undefined>(undefined)

export const useRadioContext = () => {
	const context = useContext(RadioContext)
	if (!context) {
		throw new Error('Radio components cannot be rendered outside the RadioGroup')
	}
	return context
}

export const RadioGroup: FC<RadioGroupProps> = (props) => {
	const { children, onChange } = props
	const [value, setValue] = useState<string>('')

	const handleChange = (_value: string) => {
		setValue(_value)
		if (!onChange) return
		onChange(_value)
	}
	return <RadioContext.Provider value={[value, handleChange]}>{children}</RadioContext.Provider>
}
