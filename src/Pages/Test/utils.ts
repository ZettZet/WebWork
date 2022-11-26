import { test } from './constants'

export const calcMark = (results: boolean[]) => {
	const x = results.filter((v) => v).length / results.length
	return Math.floor(x * 5)
}

type CustomRadioNodeList = RadioNodeList & ArrayLike<HTMLInputElement>
export type CustomForm = {
	[K in typeof test[number]['question']]: CustomRadioNodeList
}
