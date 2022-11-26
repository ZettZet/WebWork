import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import './NoMatch.scss'

const NoMatch: FC = () => {
	return (
		<div className="no-match">
			<div className="no-match__block">
				<h1 className="no-match__header">Oops</h1>
				<p className="no-match__description">Something went wrong</p>
				<span className="no-match__solution">
					Best we can do is to promt you back to{' '}
					<Link className="no-match__link" to="/">
						Home
					</Link>
				</span>
			</div>
		</div>
	)
}

export default NoMatch
