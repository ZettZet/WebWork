/* eslint-disable max-len */
import React, { ChangeEventHandler, FC, useEffect, useState } from 'react'
import { cn } from '@bem-react/classname'

import images from '../../Assets/*.png'
import { Box, Image, Stack, Typography } from '../../katana'

import './Calendar.scss'

const cnCalendar = cn('Calendar')

type Color = 'white' | 'blue' | 'green' | 'red' | 'yellow'
type Element = 'metall' | 'water' | 'wood' | 'fire' | 'earth'
type Side = 'Yin' | 'Yang'
type Animal =
	| 'boar'
	| 'rat'
	| 'ox'
	| 'tiger'
	| 'rabbit'
	| 'dragon'
	| 'snake'
	| 'horse'
	| 'sheep'
	| 'monkey'
	| 'rooster'
	| 'dog'

const colorElementSide = [
	['white', 'metall', 'Yang'],
	['white', 'metall', 'Yin'],
	['blue', 'water', 'Yang'],
	['blue', 'water', 'Yin'],
	['green', 'wood', 'Yang'],
	['green', 'wood', 'Yin'],
	['red', 'fire', 'Yang'],
	['red', 'fire', 'Yin'],
	['yellow', 'earth', 'Yang'],
	['yellow', 'earth', 'Yin']
] as const

const animals = [
	'monkey',
	'rooster',
	'dog',
	'boar',
	'rat',
	'ox',
	'tiger',
	'rabbit',
	'dragon',
	'snake',
	'horse',
	'sheep'
] as const

type Year = {
	color: Color
	element: Element
	side: Side
	animal: Animal
}

const Calendar: FC = () => {
	const [year, setYear] = useState<number>(0)
	const [cnYear, setCnYear] = useState<Year>()
	const [animalImage, setAnimalImage] = useState<string>('')
	const [elementImage, setElementImage] = useState<string>('')
	const [isYin, setIsYin] = useState<boolean>(false)
	const [borderColor, setBorderColor] = useState<string>('')

	const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setYear(Number(event.target.value))
	}
	useEffect(() => {
		const lastDigit = year % 10
		const modTwelve = year % 12
		const [color, element, side] = colorElementSide[lastDigit]
		const animal = animals[modTwelve]
		setAnimalImage(images[modTwelve])
		setElementImage(images[element])
		setCnYear({ color, element, side, animal })
		setIsYin(side === 'Yin')
		setBorderColor(color)
	}, [year])

	return (
		<Stack className={cnCalendar()} direction="vertical" black>
			<Box
				className={cnCalendar('Images')}
				black={isYin}
				style={{ borderColor }}
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
				{year} year was the year of {cnYear?.color}/{cnYear?.element}{' '}
				{cnYear?.animal} on {cnYear?.side}
			</Typography>
			<label htmlFor="year">Enter the year</label>
			<input
				id="year"
				type="number"
				value={year}
				onChange={onChange}
				min="0"
			/>
		</Stack>
	)
}

export default Calendar
