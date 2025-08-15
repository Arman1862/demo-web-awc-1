import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Anggota from './pages/Anggota'
import Jadwal from './pages/Jadwal'
import Gallery from './pages/Gallery'
import About from './pages/About'
import BottomNavbar from './components/BottomNavbar'
import Header from './components/Header'
import NotSupported from './components/NotSupported'
import './App.css'
// Import komponen baru
import KirimPesanAnonim from './components/KirimPesanAnonim'
import TampilPesanAnonim from './components/TampilPesanAnonim'


function App() {
  // state untuk trigger refresh pesan
  const [refreshKey, setRefreshKey] = useState(0);

  // fungsi untuk refresh pesan saat ada yang terkirim
  const handlePesanTerkirim = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) {
    // Tampilkan pesan error jika layar lebih lebar dari 480px
    return <NotSupported />;
  }


  return (
    <>
    <BottomNavbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/anggota' element={<Anggota/>} />
        <Route path='/jadwal' element={<Jadwal/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/about' element={<About/>} />
        <Route 
          path='/pesan-anonim' 
          element={
            <div className="container">
              <div className="row">
        <Header header_1="XII IPA 2" header_2="ANONIM MESSAGE"/>
                <div className="col-md-6">
                  <KirimPesanAnonim onPesanTerkirim={handlePesanTerkirim} />
                </div>
                <div className="col-md-6">
                  <TampilPesanAnonim refreshTrigger={refreshKey} />
                </div>
              </div>
            </div>
          } 
        />
    </Routes>
    </>
  )
}

export default App