import React, { useState } from 'react'
import Sidebar from './StateTwoChilds/Sidebar'
import MainArea from './StateTwoChilds/MainArea'
import Footer from './StateTwoChilds/Footer'

function StateTwo() {
	const [size, setSize] = useState(25)
	const [color, setColor] = useState('green')
	const [likeCount, setLikeCount] = useState(0)

	return (
		<div className='grid-parent'>
			<div className='header'>
				<h1>Welcome To Our App</h1>
				<p>
					The current size is {size} and the current color is {color}.
				</p>
				<p>
					This page has been liked <strong>{likeCount}</strong> times.
				</p>
			</div>
			<Sidebar color={color} size={size} setSize={setSize} setColor={setColor} />
			<MainArea color={color} size={size} />
			<Footer setSize={setSize} setLikeCount={setLikeCount} />
		</div>
	)
}

export default StateTwo
