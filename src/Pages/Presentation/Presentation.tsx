import React, { useEffect, useState } from 'react'

import images from '../../Assets/slides/*.png'
import white from '../../Assets/white.png'
import { Box, Image, Stack } from '../../katana'

import './Presentation.scss'

const imageLength = Object.keys(images).length
const indexes = [...new Array(imageLength).keys()]

const Presentation = () => {
	const [slide, setSlide] = useState<number>(0)
	const [timerId, setTimerId] = useState<number>()

	useEffect(() => {
		const id = setTimeout(() => {
			setSlide((p) => (p + 1) % imageLength)
		}, 3000)
		setTimerId(id)
	}, [slide])

	const handleClick = (i: number) => () => {
		setSlide(i)
		clearTimeout(timerId)
	}

	return (
		<>
			<Stack direction="vertical" spacing={[15, 'px']}>
				<Image src={images[slide]} alt="slides" scale={[1000, 'px']} />
				<Box style={{ display: 'flex', gap: 5 }}>
					{indexes.map((i) => (
						<Image
							key={i}
							src={i === slide ? white : images[i]}
							alt="dots"
							shape="circle"
							scale={[50, 'px']}
							onClick={handleClick(i)}
						/>
					))}
				</Box>
			</Stack>
		</>
	)
}

export default Presentation
