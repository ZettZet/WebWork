import React, { FC, useReducer } from 'react'
import { cn } from '@bem-react/classname'

import { Button, Stack, Text } from '../../katana'
import Box from '../../katana/Box'

import { calculatorInitialState, reducer } from './Logic'

import './Calculator.scss'

const cnCalculator = cn('Calculator')

const structure = [
	[7, 8, 9, '/'],
	[4, 5, 6, 'x'],
	[1, 2, 3, '-'],
	['=', 0, 'C', '+']
] as const

const Calculator: FC = () => {
	const [{ current }, dispatch] = useReducer(reducer, calculatorInitialState)

	const cnButton = cnCalculator('Button')

	return (
		<Stack direction="horizontal">
			<Box className={cnCalculator()} black>
				<Text className={cnCalculator('Input')} value={current} />
				{structure.map((row) => (
					<Box key={row.join('')}>
						{row.map((elem) => (
							<Button onClick={() => dispatch(elem)} className={cnButton} key={elem}>
								{elem}
							</Button>
						))}
					</Box>
				))}
			</Box>
		</Stack>
	)
}

export default Calculator
