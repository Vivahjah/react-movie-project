import React from 'react'

const counter = () => {
    const formatCount = () => count === 0 ? 'zero' : count;
    const state = {
        count : 0,
    }
    const { count } = state;
  return (
      <>
        <span className={ count === 0 ? 'yellow' : 'blue'} >{formatCount()}</span>
        <button>Increment</button>
      </>
  )
}

export default counter