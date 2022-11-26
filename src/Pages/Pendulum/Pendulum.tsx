import React, { ChangeEventHandler, FC, useEffect, useRef, useState } from 'react'
import { cn } from '@bem-react/classname'

import { Numbers, Stack, Typography } from '../../katana'

import './Pendulum.scss'

const cnPendulum = cn('Pendulum')

const Pendulum: FC = () => {
	const divRef = useRef<HTMLDivElement | null>(null)
	const [axis, setAxis] = useState<{ big: number; small: number }>({ big: 100, small: 150 })
	const [angle, setAngle] = useState<number>(0)

	const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setAxis((prev) => ({ ...prev, [event.target.id]: Number(event.target.value) }))
	}

	useEffect(() => {
		if (!divRef.current) return

		const x = axis.big * Math.cos(angle)
		const y = axis.small * Math.sin(angle)

		const w = divRef.current.parentElement?.clientWidth
		const h = divRef.current.parentElement?.clientHeight
		const selfW = divRef.current.clientWidth
		const selfH = divRef.current.clientHeight
		if (!w || !h) return

		divRef.current.style.top = `${h / 2 + x - selfH / 2}px`
		divRef.current.style.left = `${w / 2 + y - selfW / 2}px`
		setTimeout(() => {
			setAngle((prev) => prev + 0.01)
		}, 5)
	}, [angle, axis])

	return (
		<Stack direction="vertical" spacing={[15, 'px']}>
			<div
				className={cnPendulum('Container')}
				style={{ width: 2 * axis.small, height: 2 * axis.big }}
			>
				<div ref={divRef} className={cnPendulum('Circle')} />
			</div>
			<Typography size={[1.5, 'rem']}>Bigger axis</Typography>
			<Numbers
				className={cnPendulum('Number')}
				id="big"
				value={axis.big}
				onChange={onChange}
			/>
			<Typography size={[1.5, 'rem']}>Smaller axis</Typography>
			<Numbers
				className={cnPendulum('Number')}
				id="small"
				value={axis.small}
				onChange={onChange}
			/>
		</Stack>
	)
}

export default Pendulum
