import React, { useEffect } from 'react'
import { realdb } from './config';

export default function App() {
	useEffect(() => {
		realdb.ref("pesan").push({
			msh: "hello!"
		})
	}, [])
	return (
		<div>
			Hello World ! { process.env.REACT_APP_FIRE_AUTH_DOMAIN }
		</div>
	)
}