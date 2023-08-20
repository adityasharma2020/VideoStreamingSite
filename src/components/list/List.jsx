import React, { useState, useRef } from 'react'
import './list.scss'
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material'

import ListItem from '../listitem/ListItem'
const List = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false) // State to track animation
  const listRef = useRef()

  const handleClick = (Direction) => {
    if (!isAnimating) {
      setIsAnimating(true)
      let distance = listRef.current.getBoundingClientRect().x - 50
      if (Direction === 'left' && slideNumber > 0) {
        setSlideNumber(slideNumber - 1)
        listRef.current.style.transform = `translateX(${230 + distance}px)`
      }

      if (Direction === 'right' && slideNumber < 5) {
        setSlideNumber(slideNumber + 1)
        listRef.current.style.transform = `translateX(${-230 + distance}px)`
      }
      console.log(distance)
      // Use a timeout to reset the animation flag after the transition ends (1 second)
      setTimeout(() => {
        setIsAnimating(false) // Reset animation flag
      }, 1000)
    }
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
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
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
