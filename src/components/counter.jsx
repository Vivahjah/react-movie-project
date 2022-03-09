import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  
  

 const  state = {
  
   tags : ['tag1', 'tag2','tag3']

 }
  
    
   const {tags} = state
   
    
  return (
      <>
        <span className={`zero ${count <= 0 ? 'blue' : 'yellow'}`} >{count}</span>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>decrement</button>
        <div>
            {tags.length > 0 ? 
                <ul>
                  {tags.map((tag) => <li key={tag} >{tag}</li>)}
                </ul> : <h3>No tags to show</h3> }
        </div>
      
        
      </>
  )
}

export default Counter