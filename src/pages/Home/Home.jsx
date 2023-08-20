import React from 'react'
import './home.scss'
import { AcUnit } from '@mui/icons-material'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'

const home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured type='sd' />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default home
