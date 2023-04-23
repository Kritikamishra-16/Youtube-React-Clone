import React from 'react';

const Button = ({name}) => {

 
  return (
    <div>
      <button
            className='rounded-lg bg-gray-200 px-3 py-1 m-1 '
        >{name}</button>
    </div>
  )
}

export default Button