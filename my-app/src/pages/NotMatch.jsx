import React from 'react'
import notFound from '../assets/notFound.gif'

function NotMatch() {
  return (
    <div>
      <img src={notFound} style={{width: '100vw', height: '100vh'}} alt="loading"/>
    </div>
  )
}

export default NotMatch