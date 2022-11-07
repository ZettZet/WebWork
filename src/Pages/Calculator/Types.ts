export type Action = '+' | '-' | 'x' | '/' | 'C' | '='

export type CalculatorState = {
	previous: number
	current: number
	op: Action | null
	isResultOnScreen: boolean
}