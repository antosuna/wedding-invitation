import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Parallax } from 'react-parallax';
import './css/CoverPage.css'; // Importa los estilos CSS
import backgroundImage from '../assets/img/main-background.jpg'; 

const CoverPage = ({ names }) => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const dateRef = useRef(null);
  const buttonRef = useRef(null);

  const handleAddToCalendar = () => {
    const event = {
      title: 'Boda de MartySalva',
      description: 'Boda de Marty y Salva',
      startTime: '20241005T120000',
      endTime: '20241005T230000',
    };

    const calendarURL = encodeURI(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${event.title}&details=${event.description}&dates=${event.startTime}/${event.endTime}`
    );

    window.open(calendarURL, '_blank');
  };

  useEffect(() => {
    anime({
      targets: titleRef.current,
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 2000,
      easing: 'easeOutExpo',
    });

    anime({
      targets: subtitleRef.current,
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 2000,
      easing: 'easeOutExpo',
      delay: 500,
    });

    anime({
      targets: dateRef.current,
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 2000,
      easing: 'easeOutExpo',
      delay: 1000,
    });

    anime({
        targets: buttonRef.current,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 2000,
        easing: 'easeOutExpo',
        delay: 1500,
      });
  }, []);

  return (
    <Parallax bgImage={backgroundImage} strength={400} blur={3}>
      <header ref={headerRef} className="fh5co-cover">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="display-t">
                <div className="display-tc animate-box">
                  <div className='cover-text-main'><h1 ref={titleRef} className="cover-text title"><b>{names}</b> </h1> <h2> TE ESPERAMOS!</h2></div>
                  <h2 ref={subtitleRef} className="cover-text subtitle">Boda Marty & Salva</h2>
                  <p ref={dateRef} className="cover-text date">
                    <span className="icon-wedding-rings"></span>Córdoba, 5 de Octubre 2024<span className="icon-wedding-rings"></span>
                  </p>
                  <button ref={buttonRef} className="add-to-calendar-btn" onClick={handleAddToCalendar}>
                        Agregar al Calendario
                    </button>
                </div>
              </div>
            </div>
          </div>          
        </div>
        <span class="arrow"></span>
      </header>
    </Parallax>
  );
};

export default CoverPage;
