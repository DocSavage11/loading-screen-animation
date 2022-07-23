import React from 'react'

import './LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <div className="Loading-Canvas Hide">
        <img src={require('../../Assets/Images/Sun.webp')} className="Sun" alt="" />
    </div>
  )
}

export default LoadingScreen