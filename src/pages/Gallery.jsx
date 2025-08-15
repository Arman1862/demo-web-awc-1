// di src/pages/Gallery.jsx

import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header.jsx';
import '../components/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

function Gallery() {
  const carouselPhotos = [
    { id: 'carousel-1', url: 'https://placehold.co/600x400', alt: 'Carousel Foto 1' },
    { id: 'carousel-2', url: 'https://placehold.co/600x400/000000/FFFFFF', alt: 'Carousel Foto 2' },
    { id: 'carousel-3', url: 'https://placehold.co/600x400/FF0000/FFFFFF', alt: 'Carousel Foto 3' },
  ];

  const allPhotos = [
    { id: 1, url: 'https://placehold.co/400x300', alt: 'Foto Kegiatan 1' },
    { id: 2, url: 'https://placehold.co/400x300', alt: 'Foto Kegiatan 2' },
    { id: 3, url: 'https://placehold.co/400x300', alt: 'Foto Kegiatan 3' },
    { id: 4, url: 'https://placehold.co/400x300', alt: 'Foto Kegiatan 4' },
    { id: 5, url: 'https://placehold.co/400x300', alt: 'Foto Kegiatan 5' },
    { id: 6, url: 'https://placehold.co/400x300', alt: 'Foto Kegiatan 6' },
    { id: 7, url: 'https://placehold.co/400x300', alt: 'Foto Kegiatan 7' },
    { id: 8, url: 'https://placehold.co/400x300', alt: 'Foto Kegiatan 8' },
    { id: 9, url: 'https://placehold.co/400x300', alt: 'Foto Kegiatan 9' },
    { id: 10, url: 'https://placehold.co/400x300', alt: 'Foto Kegiatan 10' },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photosToShow, setPhotosToShow] = useState(6);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const loadMorePhotos = () => {
    if (photosToShow < allPhotos.length) {
      setPhotosToShow(prevCount => prevCount + 6);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        loadMorePhotos();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [photosToShow]);

  return (
    <div className="py-5 text-center">
      <div className="container px-4">
        <Header header_1="GALLERY" header_2="KELAS XII IPA 2" />
      </div>

      {/* Hapus kelas container di div carousel */}
      <div className="mt-4 w-100">
        <Slider {...settings} ref={sliderRef}>
          {carouselPhotos.map(photo => (
            <motion.div key={photo.id} whileTap={{ scale: 0.98 }}>
              <img
                src={photo.url}
                alt={photo.alt}
                className="img-fluid rounded-3 mx-auto"
                style={{ cursor: 'pointer' }}
                width={300}
                onClick={() => openModal(photo)}
              />
            </motion.div>
          ))}
        </Slider>
      </div>

      <div className="container mt-5">
        {/* <h3 className="text-white">Foto-foto Kegiatan Kelas</h3> */}
        <div className="row g-3 mt-4">
          {allPhotos.slice(0, photosToShow).map(photo => (
            <motion.div
              key={photo.id}
              className="col-6 col-md-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="img-fluid rounded-3"
                style={{ cursor: 'pointer' }}
                onClick={() => openModal(photo)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <motion.div
          className="modal-backdrop"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1050
          }}
        >
          <motion.img
            src={selectedPhoto.url}
            alt={selectedPhoto.alt}
            className="img-fluid"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{ maxWidth: '90%', maxHeight: '90%' }}
          />
        </motion.div>
      )}
    </div>
  );
}

export default Gallery;