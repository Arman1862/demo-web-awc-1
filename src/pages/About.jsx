// src/pages/TentangKami.jsx

import React from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

// Gambar yang kamu sebutkan dari halaman Gallery
// Ganti URL ini dengan URL gambar yang kamu inginkan
const aboutUsImage = "https://i.pinimg.com/originals/01/1a/7b/011a7b977a318bc2e8597013cc580d31.jpg"; 

export default function About() {
  return (
    <div className="container pt-4">
      {/* Header sudah pas, jadi tidak perlu diubah */}
      <Header header_1="XII IPA 2" header_2="SMAN 00 JKT" />

      {/* Bagian gambar, kita pertahankan supaya di tengah */}
      <div className="d-flex justify-content-center my-4">
        <img 
          src={aboutUsImage} 
          width={300}
          alt="Foto Bersama Kelas XII TKJ" 
          className="img-fluid rounded-3 shadow-lg"
          style={{ maxWidth: '600px', maxHeight: '400px' }}
        />
      </div>

      {/* Ini bagian yang kita perbaiki. Card/box-nya dihilangkan. */}
      <div className="row justify-content-center">
        <div className="col-lg-8 text-white text-center">
          {/* <h2 className="mb-3">Tentang Kelas Kami</h2> */}
          <p className="mb-3 display-6 mx-3" style={{textAlign: "justify", fontSize: "1.25rem"}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie tincidunt pulvinar. Proin id sodales arcu, quis ornare elit. Aenean id dolor at eros dapibus consequat ac non lacus. Ut tincidunt, quam ullamcorper consequat eleifend, elit tellus tempor diam, non tristique lorem ipsum sed nulla. Duis sed ultrices diam, in ornare enim.          </p>
        </div>
      </div>
    </div>
  );
}