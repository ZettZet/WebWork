import React, { ComponentProps, FC } from 'react'
import { KatanaMixin, WithRequired } from 'Types'

import { CssValue } from '../common'
import { cn, mergecn } from '../utils'

import './Image.scss'

const cnImage = cn('Image')

const defaultElement = 'img'

type KatanaImageOwnProps = {
	shape: 'circle' | 'square'
	scale: CssValue
}
type KatanaImageProps = WithRequired<
	ComponentProps<typeof defaultElement>,
	'src' | 'alt'
> &
	KatanaImageOwnProps &
	KatanaMixin

const Image: FC<KatanaImageProps> = (props) => {
	const { className, black, shape, scale, ...rest } = props
	const newClassName = mergecn(cnImage({ black, shape }), className)
	return (
		<img
			style={{ width: scale.join(''), height: 'auto' }}
			className={newClassName}
			{...rest}
		/>
	)
}

export default Image
