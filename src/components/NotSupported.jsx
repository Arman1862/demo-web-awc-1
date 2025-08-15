// src/components/NotSupported.jsx

import React from 'react';

export default function NotSupported() {
  return (
    <div 
      className="d-flex flex-column justify-content-center align-items-center text-white" 
      style={{ height: '100vh', padding: '2rem', textAlign: 'center', backgroundColor: '#000' }}
    >
      <h1 className="display-4 fw-bold mb-3">TAMPILAN TIDAK DIDUKUNG</h1>
      <p className="lead mb-4">
        Website ini dirancang khusus untuk perangkat seluler.
        Silakan buka kembali menggunakan ponsel atau ubah ukuran layar browser Anda menjadi 480px atau lebih kecil.
      </p>
      <small className="text-white">
        Terima kasih atas pengertiannya!
      </small>
    </div>
  );
}