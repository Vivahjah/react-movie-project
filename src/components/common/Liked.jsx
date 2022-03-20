import React from 'react'

const Liked = ({like, onClick}) => {
  return (
    <i className={`fa fa-${!like ? 'heart-o' : 'heart'}`} onClick={onClick} ></i>
  )
}

export default Liked