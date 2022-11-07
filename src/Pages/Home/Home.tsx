import React, { FC } from 'react'

import picture from '../../Assets/profile_photo.jpg'
import { Image, Link, Section, Stack, Typography } from '../../katana'

import './Home.scss'

const Home: FC = () => {
	return (
		<Section>
			<Stack direction="horizontal">
				<Stack
					className="Home_profile"
					direction="vertical"
					black
					mainAxis="start"
					crossAxis="start"
					spacing={[15, 'px']}
				>
					<Image
						src={picture}
						alt="Avatar"
						shape="circle"
						scale={[200, 'px']}
					/>

					<Typography size={[1.2, 'rem']} as="p">
						My name is Fedor Kuznetsov. I was born in Ufa in 2000.
						There for I&apos;m 22 at this moment.
					</Typography>
					<Typography size={[1.2, 'rem']} as="p">
						You can check my profiles or even write me an{' '}
						<a href="mailto:thanatocs@gmail.com"> email</a>
					</Typography>

					<Link
						className="Home_profile_link"
						to="https://github.com/ZettZet"
					>
						Github
					</Link>
					<Link
						className="Home_profile_link"
						to="https://vk.com/munzamt"
					>
						VK
					</Link>
				</Stack>
				<Stack direction="vertical" mainAxis="start">
					<Typography size={[2, 'rem']} as="h1">
						Welcome to blog
					</Typography>
				</Stack>
			</Stack>
		</Section>
	)
}

export default Home
