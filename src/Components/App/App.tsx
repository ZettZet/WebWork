import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import AppRoutes from './Routes'


const App = () => {
	return <RecoilRoot>
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	</RecoilRoot>
}

export default App