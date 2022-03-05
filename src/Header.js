import React from 'react';
import './Header.css';

const name = "Alexandre Ross-Gautron"

function Header() {
  return (
    <div className='header'>
      <h1>{ name }</h1>
      <h3>ACS 1320 Final Assessment</h3>
    </div>
  )
}

export default Header