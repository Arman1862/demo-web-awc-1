import React, { useState } from 'react';
import Header from '../components/Header';
import MemberCard from '../components/MemberCard';
import '../components/Header.css';
import './Anggota.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import placeholder from '../assets/images/placeholder.jpg'

function Anggota() {
    const members = [
      { id: 1, name: "Slamet Kopling", role: "Ketua Kelas", photo: "https://i.pinimg.com/736x/2a/ea/3c/2aea3cdb5dad8175e2ad190d2f5df019.jpg" },
      { id: 2, name: "Rusdi Ngawi", role: "Wakil Ketua", photo: "https://i.pinimg.com/736x/fd/06/d7/fd06d7c99ba225a8bfd12cd4a7ea512d.jpg" },
      { id: 3, name: "Raja Kudus", role: "Sekretaris", photo: "https://i.pinimg.com/736x/cc/e8/07/cce8070d793a43a31ac8bfdd46a984b6.jpg" },
      { id: 4, name: "Anto Solo", role: "Bendahara", photo: "https://i.pinimg.com/736x/99/59/b5/9959b523da5a3e798603e8c171ce7320.jpg" },
      { id: 5, name: "Dino Bantul", role: "Anggota", photo: "https://i.pinimg.com/736x/18/8b/e9/188be96da84c9599b27b8c00b2af99ee.jpg" },
      { id: 6, name: "Joko Sleman", role: "Anggota", photo: "https://i.pinimg.com/736x/c1/c8/1e/c1c81e841318dabd85e89454ff45cc19.jpg" },
      { id: 7, name: "Ahmad Cilacap", role: "Anggota", photo: "https://i.pinimg.com/736x/2a/ea/3c/2aea3cdb5dad8175e2ad190d2f5df019.jpg" },
      { id: 8, name: "Dwi Palembang", role: "Anggota", photo: "https://i.pinimg.com/736x/c1/b5/11/c1b5115ef69aa60f88f4ccb708b86238.jpg" },
      { id: 9, name: "Udin Betot", role: "Anggota", photo: "https://i.pinimg.com/736x/d9/d2/7e/d9d27edd4dc7c598d8a2369c148943a2.jpg" },
      { id: 10, name: "Nana Ambyar", role: "Anggota", photo: "https://i.pinimg.com/736x/dc/0b/5c/dc0b5ca7885e089e154fdfb59628074d.jpg" },
      { id: 11, name: "Kusno Tegal", role: "Anggota", photo: "https://i.pinimg.com/1200x/f6/b5/14/f6b514b5780efaa7ad0e3dbab96066db.jpg" },
      { id: 12, name: "Bambang Kejepit", role: "Anggota", photo: "https://i.pinimg.com/736x/73/1e/49/731e497e0e7208a9297a36c92b9cffb2.jpg" },
      { id: 13, name: "Rizky Ngakak", role: "Anggota", photo: "https://i.pinimg.com/736x/7a/33/78/7a3378241819e2828b2785a2bdef7a36.jpg" },
      { id: 14, name: "Siti Blora", role: "Anggota", photo: "https://i.pinimg.com/736x/77/1a/74/771a747e768f8aa5c099b815d2270b35.jpg" },
      { id: 15, name: "Tejo Balapan", role: "Anggota", photo: "https://i.pinimg.com/736x/fd/06/d7/fd06d7c99ba225a8bfd12cd4a7ea512d.jpg" },
      { id: 16, name: "Dono Nggemeske", role: "Anggota", photo: "https://i.pinimg.com/736x/cc/e8/07/cce8070d793a43a31ac8bfdd46a984b6.jpg" },
      { id: 17, name: "Wawan Goyang", role: "Anggota", photo: "https://i.pinimg.com/736x/99/59/b5/9959b523da5a3e798603e8c171ce7320.jpg" },
      { id: 18, name: "Titi Gemes", role: "Anggota", photo: "https://i.pinimg.com/736x/18/8b/e9/188be96da84c9599b27b8c00b2af99ee.jpg" },
      { id: 19, name: "Banu Gembira", role: "Anggota", photo: "https://i.pinimg.com/736x/c1/c8/1e/c1c81e841318dabd85e89454ff45cc19.jpg" },
      { id: 20, name: "Bagus Pol", role: "Anggota", photo: "https://i.pinimg.com/736x/2a/ea/3c/2aea3cdb5dad8175e2ad190d2f5df019.jpg" },
      { id: 21, name: "Agus Santuy", role: "Anggota", photo: "https://i.pinimg.com/736x/c1/b5/11/c1b5115ef69aa60f88f4ccb708b86238.jpg" },
      { id: 22, name: "Hani Mabar", role: "Anggota", photo: "https://i.pinimg.com/736x/d9/d2/7e/d9d27edd4dc7c598d8a2369c148943a2.jpg" },
      { id: 23, name: "Eka Ceria", role: "Anggota", photo: "https://i.pinimg.com/736x/dc/0b/5c/dc0b5ca7885e089e154fdfb59628074d.jpg" },
      { id: 24, name: "Rian Ngegas", role: "Anggota", photo: "https://i.pinimg.com/1200x/f6/b5/14/f6b514b5780efaa7ad0e3dbab96066db.jpg" },
      { id: 25, name: "Farah Ngoding", role: "Anggota", photo: "https://i.pinimg.com/736x/73/1e/49/731e497e0e7208a9297a36c92b9cffb2.jpg" },
      { id: 26, name: "Galih Gaming", role: "Anggota", photo: "https://i.pinimg.com/736x/7a/33/78/7a3378241819e2828b2785a2bdef7a36.jpg" },
      { id: 27, name: "Rina Jago", role: "Anggota", photo: "https://i.pinimg.com/736x/77/1a/74/771a747e768f8aa5c099b815d2270b35.jpg" },
      { id: 28, name: "Bayu Geming", role: "Anggota", photo: "https://i.pinimg.com/736x/fd/06/d7/fd06d7c99ba225a8bfd12cd4a7ea512d.jpg" },
      { id: 29, name: "Anisa Ngesong", role: "Anggota", photo: "https://i.pinimg.com/736x/cc/e8/07/cce8070d793a43a31ac8bfdd46a984b6.jpg" },
      { id: 30, name: "Fajar Santoso", role: "Anggota", photo: "https://i.pinimg.com/736x/99/59/b5/9959b523da5a3e798603e8c171ce7320.jpg" },
      { id: 31, name: "Rudi Bawel", role: "Anggota", photo: "https://i.pinimg.com/736x/18/8b/e9/188be96da84c9599b27b8c00b2af99ee.jpg" },
      { id: 32, name: "Feri Ngapak", role: "Anggota", photo: "https://i.pinimg.com/736x/c1/c8/1e/c1c81e841318dabd85e89454ff45cc19.jpg" },
      { id: 33, name: "Cukurukuk Serius", role: "Anggota", photo: "https://i.pinimg.com/736x/2a/ea/3c/2aea3cdb5dad8175e2ad190d2f5df019.jpg" },
      { id: 34, name: "Hari Ngantuk", role: "Anggota", photo: "https://i.pinimg.com/736x/c1/b5/11/c1b5115ef69aa60f88f4ccb708b86238.jpg" },
      { id: 35, name: "Boni Wiro", role: "Anggota", photo: "https://i.pinimg.com/736x/d9/d2/7e/d9d27edd4dc7c598d8a2369c148943a2.jpg" },
      { id: 36, name: "Deni Lupa", role: "Anggota", photo: "https://i.pinimg.com/736x/dc/0b/5c/dc0b5ca7885e089e154fdfb59628074d.jpg" },
    ];
    const membersPerPage = 6;
    const [startIndex, setStartIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);

    const handleNext = () => {
      if (startIndex + membersPerPage < members.length) {
        setStartIndex(prevIndex => prevIndex + membersPerPage);
      }
    };

    const handlePrev = () => {
      if (startIndex > 0) {
        setStartIndex(prevIndex => prevIndex - membersPerPage);
      }
    };
    
    const handleTouchStart = (e) => {
      setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const swipeDistance = touchStartX - touchEndX;
      
      const swipeThreshold = 50;
      
      if (swipeDistance > swipeThreshold) {
        handleNext();
      }
      
      else if (swipeDistance < -swipeThreshold) {
        handlePrev();
      }
    };

    const membersToShow = members.slice(startIndex, startIndex + membersPerPage);

    return (
        <div className='container text-center py-3 px-4 position-relative'>
            <Header header_1="ANGGOTA"/>
            <div
              className="row gy-3 gx-4"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
                {membersToShow.map(member => (
                    <div key={member.id} className="col-6">
                        <MemberCard member={member} />
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center mt-4">
              <button onClick={handlePrev} className="btn btn-outline-light me-2" disabled={startIndex === 0}>Previous</button>
              <button onClick={handleNext} className="btn btn-outline-light" disabled={startIndex + membersPerPage >= members.length}>Next</button>
            </div>
        </div>
    );
}

export default Anggota;