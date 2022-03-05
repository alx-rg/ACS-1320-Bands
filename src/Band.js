import React from 'react';
import './Band.css';
import Like from './Like';

function Band(props) {
  const { band_name, fans, formed, origin, split, style} = props

  let splitBands;
  if (split === '-') {
    splitBands = false;
  } else {
    splitBands = true;
  }

  return (
  <div className='band'>
    <h2 className='band-name'>{ band_name }</h2>
    <div className='formed'><em>Formed: </em>{formed}</div>
    <div className='origin'><em>Origin: </em>{origin}</div>
    <div className='fans'><em>Fans: </em>{fans}</div>
    <div><em>Split: </em>{splitBands ? split : 'Still together'}</div>
    <div><em>Style: </em>{style}</div>
    <div>{splitBands ? "" : <Like />}</div>
    
  </div>
  )
}

export default Band