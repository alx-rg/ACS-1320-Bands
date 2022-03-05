import React from 'react';
import './Band.css';
import Like from './Like';

function Band(props) {
  const { band_name, fans, formed, origin, split, style} = props

  

  return (
  <div className='band'>
    <h2 className='band-name'>{ band_name }</h2>
    <p className='formed'><em>Formed: </em>{formed}</p>
    <p className='origin'><em>Origin: </em>{origin}</p>
    <p className='fans'><em>Fans: </em>{fans}</p>
    <p><em>Split: </em>{split}</p>
    <p><em>Style: </em>{style}</p>
    <Like />
  </div>
  )
}

export default Band