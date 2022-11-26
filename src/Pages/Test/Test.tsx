import React, { FC, FormEvent, FormEventHandler, useState } from 'react'
import { cn } from '@bem-react/classname'

import { Button, Stack } from '../../katana'

import { test } from './constants'
import { Results } from './Results'
import { SingleTest } from './SingleTest'
import { calcMark, CustomForm } from './utils'

import './Test.scss'

export const cnTest = cn('Test')

const Test: FC = () => {
	const [results, setResults] = useState<boolean[]>([])

	const handleSubmit: FormEventHandler<HTMLFormElement> = (event: FormEvent<CustomForm>) => {
		event.preventDefault()

		const target = event.currentTarget

		const results = test.map(({ question, multipleAnswer, correctAnswers }) => {
			const inputs = target[question]

			if (!multipleAnswer) return inputs.value === correctAnswers

			const givenAnswers = (Array.from(inputs) as HTMLInputElement[])
				.filter((input) => input.checked)
				.map((input) => input.value)

			return (
				givenAnswers.every((answer) => correctAnswers.includes(answer)) &&
				correctAnswers.every((answer) => givenAnswers.includes(answer))
			)
		})

		setResults(results)
	}

	const handleReset: FormEventHandler<HTMLFormElement> = () => {
		setResults([])
	}

	return (
		<Stack direction="vertical" className={cnTest()} spacing={[15, 'px']}>
			{results.length > 0 && <Results mark={calcMark(results)} />}
			<form onSubmit={handleSubmit} onReset={handleReset}>
				<Stack direction="vertical" spacing={[10, 'px']}>
					{test
						.map((question, idx) => ({ ...question, isCorrect: results[idx] }))
						.map((obj, idx) => (
							<SingleTest key={idx} {...obj} />
						))}
					<Stack direction="horizontal" spacing={[10, 'px']}>
						<Button className={cnTest('Button')} type="reset" negative>
							Clear
						</Button>
						<Button className={cnTest('Button')} type="submit" positive>
							Check
						</Button>
					</Stack>
				</Stack>
			</form>
		</Stack>
	)
}

export default Test
