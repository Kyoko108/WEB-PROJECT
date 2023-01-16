import React from 'react';
import hospital from './components/hospitals.mp4';

const Hospital = () => {
  return (
    <div>
      <video src = {hospital} autoPlay loop muted />
      Hospital</div>
  )
}

export default Hospital;