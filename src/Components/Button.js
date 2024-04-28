import React from 'react'

const Button = ({item}) => {
  return (
      <div>
          <button className=' m-1 p-2 rounded-full px-4 bg-gray-300'>{item}</button>
    </div>
  )
}

export default Button