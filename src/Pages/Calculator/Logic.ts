import { Action, CalculatorState } from './Types'

const reduceAction = (
	left: number,
	right: number,
	op: Action | null
): number | null => {
	switch (op) {
		case '+':
			return left + right
		case '-':
			return left - right
		case 'x':
			return left * right
		case '/':
			return left / right
		case 'C':
		case '=':
		case null:
			return null
	}
}

export const calculatorInitialState: CalculatorState = {
	previous: 0,
	current: 0,
	op: null,
	isResultOnScreen: false
} as const

export const reducer = (
	{ previous, current, op, isResultOnScreen }: CalculatorState,
	action: Action | number
): CalculatorState => {
	if (typeof action == 'number') {
		if (isResultOnScreen) {
			return {
				previous: current,
				current: action,
				op,
				isResultOnScreen: false
			}
		}

		return {
			previous,
			current: current * 10 + action,
			op,
			isResultOnScreen: false
		}
	}
	switch (action) {
		case 'x':
		case '/':
		case '+':
		case '-':
		case '=': {
			const result = reduceAction(previous, current, op)
			return {
				previous: current,
				current: result ? result : current,
				op: action,
				isResultOnScreen: true
			}
		}

		case 'C':
			return calculatorInitialState
	}
}