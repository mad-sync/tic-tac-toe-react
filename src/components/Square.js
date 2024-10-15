import React from 'react'

const Square = ({value, handleClick}) => {
  return (
    <button className='w-32 h-32 border border-slate-500 text-7xl font-bold hover:bg-slate-500/50' onClick={handleClick}>{value}</button>
  )
}

export default Square