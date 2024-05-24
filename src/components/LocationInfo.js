// src/components/LocationInfo.js
import React from 'react';
import './css/LocationInfo.css';

const LocationInfo = ({ date, place, mapUrl }) => {
  return (
    <div className="location-info">
      <h2>Detalles del Evento</h2>
      <p>Fecha: {date}</p>
      <p>Lugar: {place}</p>
      <iframe 
        src={mapUrl} 
        width="600" 
        height="450" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
};

export default LocationInfo;
