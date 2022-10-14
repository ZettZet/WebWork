import React, { FC, } from 'react'
import { Never, } from 'Types'
import Input from '../../Components/Input'
import style from './Home.css'

const Home: FC<Never> = () => {
	return <Input type='password' placeholder='Enter the something' />
}

export default Home