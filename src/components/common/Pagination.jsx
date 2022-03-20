import React from 'react'

const Pagination = ({onPageChange}) => {
  return (
   <nav>
       <ul className='pagination'>
         <li className="page-item">
         <button onClick={onPageChange} className='page-link'>1</button>
        </li>

       </ul>
   </nav>
  )
}

export default Pagination