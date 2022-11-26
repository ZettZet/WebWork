import React, { FC } from 'react'

import { Checkbox, Stack, Typography } from '../../katana'
import Radio, { RadioGroup } from '../../katana/Radio'

import { cnTest } from './Test'
import { OneQuestion } from './types'

type SingleTestProps = OneQuestion & { isCorrect?: boolean }

export const SingleTest: FC<SingleTestProps> = (props) => {
	const { question, possibleAnswers, multipleAnswer, isCorrect } = props

	let state
	switch (isCorrect) {
		case undefined:
			state = 'unchecked'
			break
		case true:
			state = 'correct'
			break
		case false:
			state = 'incorrect'
	}

	return (
		<Stack
			className={cnTest('Single', { state })}
			direction="vertical"
			crossAxis="start"
			spacing={[5, 'px']}
		>
			<Typography size={[2, 'rem']}>{question}</Typography>
			<Stack direction="horizontal" spacing={[15, 'px']} mainAxis="start">
				{multipleAnswer ? (
					possibleAnswers.map((answer, idx) => (
						<Checkbox
							className={cnTest('Variant')}
							key={idx}
							value={answer}
							name={question}
						>
							{answer}
						</Checkbox>
					))
				) : (
					<RadioGroup>
						{possibleAnswers.map((answer, idx) => (
							<Radio
								className={cnTest('Variant')}
								key={idx}
								value={answer}
								name={question}
							>
								{answer}
							</Radio>
						))}
					</RadioGroup>
				)}
			</Stack>
		</Stack>
	)
}
