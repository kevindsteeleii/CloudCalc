import React from 'react'

export default function Button({ name, handleChange }) {
  return (
    <div>
      <button name={name} className='button' onClick={handleChange}>
        {name}
      </button>
    </div>
  )
}
