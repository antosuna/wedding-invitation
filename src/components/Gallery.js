// Importa los estilos CSS necesarios
import React, { useState, useCallback } from "react";
import PhotoGallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Separator from './Separator'
import './css/Gallery.css';


const Gallery = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    function columns(containerWidth) {
        let columns = 1;
        if (containerWidth >= 300) columns = 2;
        if (containerWidth >= 900) columns = 3;
        if (containerWidth >= 1500) columns = 4;
        return columns;
      }

  
    return (
        <div>
          <Separator title="Algunos de nuestros momentos" subtitle="...muchas aventuras juntos" />
          <PhotoGallery photos={images} onClick={openLightbox} direction={'column'} columns={columns}/>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={images.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      );
  };
  
export default Gallery;
