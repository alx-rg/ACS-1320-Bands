import React from 'react';
import data from "./metal.json";
import './MetalMeta.css';

function MetalMeta() {
  const band_number = data.length
  return (
    <div className='MetalMeta'>
      <ul>
        <li>Metal Bands 🤘</li>
        <li>There are {band_number} bands</li>  
      </ul>
    </div>
  )
}

export default MetalMeta;

