import React, { useState } from 'react'

function StateOne() {
	const [size, setSize] = useState(25)
	const [color, setColor] = useState('green')
	const [likeCount, setLikeCount] = useState(0)

	function handleSizeChange(e) {
		setSize(e.target.value)
	}

	function handleButtonClick() {
		setSize(20)
		setColor('pink')
	}

	return (
		<div className='flex flex-col space-y-6'>
			<div className='bg-white p-6'>
				<h1 className='font-bold text-2xl mb-2'>Welcome To Our App</h1>
				<p>
					The current size is {size} and the current color is {color}.
				</p>
				<p className='mt-4 font-bold flex items-center'>
					This page has been liked <strong className='text-4xl mx-2'>{likeCount}</strong> times.
				</p>
			</div>
			<div className='bg-white p-6 flex flex-col space-y-3 md:flex-row md:space-y-0 space-x-3'>
				<input type='text' className='p-2 rounded rounded-sm border border-slate-500 border-1' value={size} onChange={handleSizeChange} />
				<input type='text' className='p-2 rounded rounded-sm border border-slate-500 border-1' value={color} onChange={e => setColor(e.target.value)} />
				<button className='px-4 py-2 bg-blue-500 text-white hover:bg-blue-900 duration-200' onClick={handleButtonClick}>
					Make the text 20px and pink
				</button>
			</div>
			<div className='bg-white p-6' style={{ color, fontSize: `${size}px` }}>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod obcaecati dolore debitis amet aut, excepturi voluptas ratione quibusdam laboriosam, optio pariatur provident doloremque consequatur animi? Consequuntur, officiis. Explicabo, vel.</p>
			</div>
			<footer className='p-6 bg-black text-white flex-grow'>
				<p>
					This is the footer. <button onClick={() => setSize(30)}>Make the text 30px but leave the color the same</button>
				</p>
				<p>
					<button onClick={() => setLikeCount(prev => prev + 1)}>Like The Page</button>
				</p>
			</footer>
		</div>
	)
}

export default StateOne
