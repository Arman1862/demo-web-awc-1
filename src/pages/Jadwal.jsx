// di src/pages/Jadwal.jsx

import React from 'react';
import Header from '../components/Header.jsx'; // Jangan lupa diimpor
import '../components/Header.css'; // CSS-nya juga
import './Jadwal.css'
import JadwalCard from '../components/JadwalCard.jsx';
import { useState } from 'react';

function Jadwal() {
   const [activeTab, setActiveTab] = useState('pelajaran');

     // Data jadwal pelajaran
    const jadwalPelajaran = [
        { hari: "SENIN", daftarIsi: ["Pelajaran 1", "Pelajaran 2", "Pelajaran 3", "Pelajaran 4", "Pelajaran 5"] },
        { hari: "SELASA", daftarIsi: ["Pelajaran 1", "Pelajaran 2", "Pelajaran 3", "Pelajaran 4", "Pelajaran 5"] },
        { hari: "RABU", daftarIsi: ["Pelajaran 1", "Pelajaran 2", "Pelajaran 3", "Pelajaran 4", "Pelajaran 5"] },
        { hari: "KAMIS", daftarIsi: ["Pelajaran 1", "Pelajaran 2", "Pelajaran 3", "Pelajaran 4", "Pelajaran 5"] },
        { hari: "JUMAT", daftarIsi: ["Pelajaran 1", "Pelajaran 2", "Pelajaran 3", "Pelajaran 4", "Pelajaran 5"] },
    ];

    // Data jadwal piket (contoh, nanti bisa kamu ubah)
    const jadwalPiket = [
        { hari: "SENIN", daftarIsi: ["Anggota A", "Anggota B", "Anggota C"] },
        { hari: "SELASA", daftarIsi: ["Anggota D", "Anggota E", "Anggota F"] },
        { hari: "RABU", daftarIsi: ["Anggota G", "Anggota H", "Anggota I"] },
        { hari: "KAMIS", daftarIsi: ["Anggota J", "Anggota K", "Anggota L"] },
        { hari: "JUMAT", daftarIsi: ["Anggota M", "Anggota N", "Anggota O"] },
    ];

    const jadwalYangDitampilkan = activeTab === 'pelajaran' ? jadwalPelajaran : jadwalPiket;


    return (
        <div className="container py-4 text-center">
            <Header header_1="JADWAL" />
         <div className="d-flex justify-content-center align-items-center mb-2">
                <button
                    className={`btn-tab me-3 ${activeTab === 'pelajaran' ? 'active' : ''}`}
                    onClick={() => setActiveTab('pelajaran')}
                >
                    PELAJARAN
                </button>
                {/* <span className="garis-vertikal mx-3"></span> */}
                <button
                    className={`btn-tab ${activeTab === 'piket' ? 'active' : ''}`}
                    onClick={() => setActiveTab('piket')}
                >
                    PIKET
                </button>
            </div>

            <div className="jadwal-container">
                {jadwalYangDitampilkan.map((hari, index) => (
                    <div key={index} className="jadwal-card-wrapper">
                        <JadwalCard hari={hari.hari} daftarIsi={hari.daftarIsi} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Jadwal;