import React, { useRef } from 'react'
import './list.scss'
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material'

import ListItem from '../listitem/ListItem'
const List = () => {
  const listRef = useRef()
  const handleClick = (Direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50
    if (Direction === 'left') {
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if (Direction === 'right') {
        listRef.current.style.transform = `translateX(${-230 + distance}px)`
      }

    console.log(distance)
  }

  return (
    <div className='list'>
      <span className='listTitle'>Continue to watch</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined
          className='sliderArrow left'
          onClick={() => handleClick('left')}
        />
        <div className='container' ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined
          className='sliderArrow right'
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default List
