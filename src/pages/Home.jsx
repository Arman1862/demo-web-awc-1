import React, { useState, useEffect } from "react";
import "./Home.css";
import { Instagram, UsersRound, Send,  } from "lucide-react";
import { Tiktok } from "react-bootstrap-icons";
import Header from "../components/Header";

// import gambar1 from "/pinimg/1200x/96/e5/98/96e59858155ba9c82ac3bde835bc7b15.jpg";
// import gambar2 from "/pinimg/1200x/a1/5b/c8/a15bc8e07220822fe43ab1c8581f72ca.jpg";
// import gambar3 from "/pinimg/736x/03/a4/76/03a47633bb7db985066c9ce120a9a400.jpg";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const images = [gambar1, gambar2, gambar3];
    const images = [
    "/pinimg/736x/d7/16/4f/d7164fc8da1c259216dae0e1c265b569.jpg",
    "/pinimg/736x/fc/92/3a/fc923ad3ef6d6602aa1f226c1a89487f.jpg",
    "/pinimg/736x/65/cb/7b/65cb7b9497de338f0d6732c4a9e5d2e6.jpg",
  ];


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    
    <div className="d-flex flex-column min-vh-100 position-relative overflow-hidden" id="Home">
      <div className="container d-flex flex-column flex-grow-1 text-center py-4 px-4 position-relative z-1">
        <Header header_1="XII IPA 2" header_2="SMAN 00 JKT"/>

        <div
          className="position-relative d-inline-block w-100 rounded-3 image-wrapper"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        >
          <div
            className="position-absolute w-100 h-100 top-0 start-0 d-flex flex-column align-items-center justify-content-center"
            id="welcome"
          >
            <div className="relative translate-down">
              <h1 className="display-4 fw-semibold mb-0 position-absolute w-100 custom-text-blur-effect">
                WELCOME
              </h1>
              <h1 className="display-4 fw-semibold mb-0 position-relative w-100">
                WELCOME
              </h1>
            </div>
            <div className="relative translate-up">
              <h3 className="fs-3 fw-normal mt-4 position-absolute w-100 custom-text-blur-effect">
                ＥＶＥＲＹＯＮＥ
              </h3>
              <h3 className="fs-3 fw-normal mt-4 position-relative w-100">
                ＥＶＥＲＹＯＮＥ
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-3 grid-container">
          <div id="box-instagram" className="glass-box d-flex flex-column justify-content-between text-start" tabIndex="0">
            <div>
              <Instagram size={24} className="mb-1" />
              <h5 className="text-white">Instagram Kami</h5>
            </div>
            <a href="https://www.instagram.com/awc_id/" className="text-decoration-none text-info d-flex align-items-center mb-2">
              Kunjungi <span className="ms-2">→</span>
            </a>
          </div>
          <div id="gatau" className="glass-box d-flex flex-column justify-content-between text-start" tabIndex="0">
            <div>
              <Tiktok size={24} className="mb-1" />
              <h5 className="text-white">Tiktok Kami</h5>
            </div>
            <a href="https://www.tiktok.com/@awc_id" className="text-decoration-none text-info d-flex align-items-center mb-2">
              Kunjungi <span className="ms-2">→</span>
            </a>
          </div>

          <div id="box-old-website" className="glass-box d-flex flex-column justify-content-between text-start" tabIndex="0">
            <div>
              <UsersRound size={24} className="mb-1" />
              <h5 className="text-white">Anggota Kelas</h5>
            </div>
            <a href="/anggota" className="text-decoration-none text-info d-flex align-items-center mb-2">
              Lihat <span className="ms-2">→</span>
            </a>
          </div>

          <div id="box-anonim" className="glass-box d-flex flex-column justify-content-between text-start" tabIndex="0">
            <div>
              <Send size={24} className="mb-1" />
              <h5 className="text-white">Pesan Anonim</h5>
            </div>
            <a href="/pesan-anonim" className="text-decoration-none text-info d-flex align-items-center mb-2">
              Mulai <span className="ms-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;