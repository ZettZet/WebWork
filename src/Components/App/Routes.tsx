import React, { FC } from 'react'
import { Route, Routes } from 'react-router'

import {
	Calculator,
	Calendar,
	Home,
	NoMatch,
	Pendulum,
	Polygon,
	Presentation,
	Test
} from '../../Pages'
import Layout from '../Layout/'

type RouteElement = {
	path: string
	Element: FC
	name: string
}

export const routes: RouteElement[] = [
	{
		path: '',
		Element: Home,
		name: 'Home'
	},
	{
		path: 'presentation',
		Element: Presentation,
		name: 'Presentation'
	},
	{
		path: 'calculator',
		Element: Calculator,
		name: 'Calculator'
	},
	{
		path: 'calendar',
		Element: Calendar,
		name: 'Calendar'
	},
	{
		path: 'test',
		Element: Test,
		name: 'Test'
	},
	{
		path: 'pendulum',
		Element: Pendulum,
		name: 'Pendulum'
	},
	{
		path: 'polygon',
		Element: Polygon,
		name: 'Polygon'
	},
	{
		path: '*',
		Element: NoMatch,
		name: 'NoMatch'
	}
]

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{routes.map(({ path, Element }) => {
					if (path === '*') {
						return
					}
					if (path === '') {
						return <Route key={path} index element={<Element />} />
					}

					return (
						<Route key={path} path={path} element={<Element />} />
					)
				})}
			</Route>
			<Route path="*" element={<NoMatch />} />
		</Routes>
	)
}

export default AppRoutes
