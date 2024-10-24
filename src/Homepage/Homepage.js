import React from 'react'
import burg from '../burger.jpg'
import './Homepage.css'

const HomePage = () => {
  return (
    <div className='header'>
      <div className='content'>
      <img src={burg} style={{height:'100vh'}}/>
        {/* <img src={burger}/> */}
        <button>Order Online</button>
      </div>
    </div>
  )
}

export default HomePage
