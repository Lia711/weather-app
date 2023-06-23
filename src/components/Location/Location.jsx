import React, { useState } from 'react'
import "./Location.scss"
import Button from '../Button/Button';

const Location = (props) => {
    const {longitude, latitude, status} = props;
    
  return (
    <div className='locationCard'>
      {longitude ? <><p>{status}</p>
      <p>Location: longitude {longitude}, latitude {latitude}.</p></>: null } 
    </div>
  )
}

export default Location