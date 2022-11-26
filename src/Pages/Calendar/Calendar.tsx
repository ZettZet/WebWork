import React, { ChangeEventHandler, FC, useEffect, useState } from 'react'
import { cn } from '@bem-react/classname'

import images from '../../Assets/calendar/*.png'
import { Box, Image, Numbers, Stack, Typography } from '../../katana'

import { _Animals, _ColorElement, _Side } from './constants'
import { Animal, Color, MagicalElement, Side } from './types'

import './Calendar.scss'

const cnCalendar = cn('Calendar')

type Year = {
	color: Color
	element: MagicalElement
	side: Side
	animal: Animal
}

const Calendar: FC = () => {
	const [year, setYear] = useState<number>(0)
	const [cnYear, setCnYear] = useState<Year>()

	const [animalImage, setAnimalImage] = useState<string>('')
	const [elementImage, setElementImage] = useState<string>('')

	const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setYear(Number(event.target.value))
	}
	useEffect(() => {
		const lastDigit = Math.floor((year % 10) / 2)
		const modTwelve = year % 12
		const side = _Side[year % 2]
		const [color, element] = _ColorElement[lastDigit]
		const animal = _Animals[modTwelve]
		setAnimalImage(images[modTwelve])
		setElementImage(images[element])
		setCnYear({ color, element, animal, side })
	}, [year])

	return (
		<Stack className={cnCalendar()} direction="vertical" spacing={[10, 'px']} black>
			<Box
				className={cnCalendar('Images')}
				black={cnYear?.side === 'Yin'}
				style={{ borderColor: cnYear?.color }}
			>
				<Image
					src={animalImage}
					alt="animal"
					scale={[200, 'px']}
					shape="square"
					className={cnCalendar('Image')}
					black={false}
				/>
				<Image
					src={elementImage}
					alt="element"
					scale={[200, 'px']}
					shape="square"
					className={cnCalendar('Image')}
					black={false}
				/>
			</Box>
			<Typography as="h1">
				Year {year}: {cnYear?.color}/{cnYear?.element} {cnYear?.animal} on {cnYear?.side}
			</Typography>
			<Numbers
				className={cnCalendar('Number')}
				id="year"
				value={year}
				onChange={onChange}
				min={0}
			/>
		</Stack>
	)
}

export default Calendar
