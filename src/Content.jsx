import React from 'react'
import { useParams } from 'react-router-dom'

const Content = () => {
  const {username} = useParams();
  

  return (
    <div>
      {username}
    </div>
  )
}

export default Content
