import React, { FC, } from 'react'
import { Routes, Route, } from 'react-router'
import Layout from '../Layout/Layout'
import { About, Calculator, Home, NoMatch, Presentation, ShoppingCart, Test, } from '../../Pages'
import { Never, } from 'Types'

type RouteElement = {
	path: string
	Element: FC<Never>
	name: string
}

export const routes: RouteElement[] = [
	{
		path: '',
		Element: Home,
		name: 'Home',
	},
	{
		path: 'presentation',
		Element: Presentation,
		name: 'Presentation',
	},
	{
		path: 'about',
		Element: About,
		name: 'About me',
	},
	{
		path: 'calculator',
		Element: Calculator,
		name: 'Calculator',
	},
	{
		path: 'shopping_cart',
		Element: ShoppingCart,
		name: 'Shopping Cart',
	},
	{
		path: 'test',
		Element: Test,
		name: 'Test',
	},
	{
		path: '*',
		Element: NoMatch,
		name: 'NoMatch',
	},
]


const AppRoutes = () => {
	return <Routes>
		<Route path="/" element={<Layout />}>
			{routes.map(({ path, Element, },) => {
				if (path === '*') {
					return
				}
				if (path === '') {
					return <Route key={path} index element={<Element />} />
				}

				return <Route key={path} path={path} element={<Element />} />
			},)}
		</Route>
		<Route path='*' element={<NoMatch />} />
	</Routes>
}

export default AppRoutes