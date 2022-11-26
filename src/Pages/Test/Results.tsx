import React, { FC } from 'react'

import { Typography } from '../../katana'

type ResultsProps = {
	mark: number
}

export const Results: FC<ResultsProps> = (props) => {
	const { mark } = props
	return <Typography as="h1">You mark is {mark}</Typography>
}
