// src/components/CeremonyInfo.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';
import './css/CeremonyInfo.css';
import backgroundImage from '../assets/img/cordoba-background.jpg';
import clockIcon from '../assets/img/icons/clock.svg';
import mapIcon from '../assets/img/icons/map.svg';
import busIcon from '../assets/img/icons/bus.svg';
import carIcon from '../assets/img/icons/car.svg';


const CeremonyInfo = () => {
  const { ref: whenRef, inView: whenInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: whereRef, inView: whereInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: howRef, inView: howInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Parallax className="ceremony-info-container" bgImage={backgroundImage} strength={400} blur={5}>
      <div className="parallax-background"></div>
      <div className="content-container">
        <div ref={whenRef} className={`card ${whenInView ? 'visible' : ''}`}>
          <img className="card-icon" src={clockIcon} alt="Clock Icon" />
          <div className="card-content">
            <h2>Cuando</h2>
            <h3>La ceremonia empezará a las 12:00 de la mañana</h3>
            <p>Por eso, a las 11:45 te esperamos allí. Salva estará listo para recibirte</p>
          </div>
        </div>
        <div ref={whereRef} className={`card ${whereInView ? 'visible' : ''}`}>
          <img className="card-icon" src={mapIcon} alt="Map Icon" />
          <div className="card-content">
            <h2>Dónde</h2>
            <h3>Los Jardines del Cardador</h3>
            <p>Ctra santuario virgen de linares, km 1, 14014 Córdoba, España</p><a href='https://www.google.com/maps/dir//Ctra+santuario+virgen+de+linares,+km+1,+1,+14014+C%C3%B3rdoba/@37.9240271,-4.8373809,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd6cdfd2f87ed133:0x7f973093aff66487!2m2!1d-4.7549799!2d37.9240558?entry=ttu' target='_blank'>Cómo Llegar</a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8357263837035!2d-4.789391284686826!3d37.900366079739775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6dd2028d251a6d%3A0x9605c5f3a3d9b6e7!2sJardines%20del%20Cardador!5e0!3m2!1sen!2sus!4v1621884957890!5m2!1sen!2sus"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div ref={howRef} className={`card ${howInView ? 'visible' : ''}`}>
          <img className="card-icon" src={busIcon} alt="Bus Icon" />
          <div className="card-content">
            <h2>Cómo llegar</h2>
            <h3>Habrá un servicio de autobús disponible</h3>
            <p>Con salida desde X hasta Los Jardines que saldrá a las X y volverá a las X</p>
            <p>Es muy importante que nos comuniques más abajo si vas a utilizarlo para ajustar el número de pasajeros</p>
          </div>
        </div>
        <div ref={howRef} className={`card ${howInView ? 'visible' : ''}`}>
          <img className="card-icon" src={carIcon} alt="Car Icon" />
          <div className="card-content">
            <h2>Cómo llegar</h2>
            <h3>Si prefieres llegar por tu cuenta</h3>
            <p>Los Jardines del Cardador dispone de un amplio parking privado</p>
            <p>Además, la línea N (Estación buses – Cerro Muriano) tiene una parada justo en la puerta de Los Jardines</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default CeremonyInfo;

