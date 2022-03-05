import React, { useState } from 'react';
import './Like.css';

function Like() {
  const [ like, setLike ] = useState(0)

return (
  <div className='Like'>
    <button onClick={()=>setLike(like-1)}>-</button>
      <input
        type='Like'
        value={like}
        onChange={(e) => setLike(parseFloat(e.target.value))}
        />
      <button onClick={()=>setLike(like+1)}>+</button>
  </div>
)

}

export default Like