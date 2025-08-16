// di src/components/JadwalCard.jsx

import React from 'react';

function JadwalCard({ hari, daftarIsi }) {
  return (
    <div className="glass-box py-1 text-center mx-2" tabIndex="0">
      <h4 className="text-white fw-bold mb-0">{hari}</h4>
      <ul className="text-white list-unstyled small fs-6" style={{marginBottom: '0px'}}>
        {daftarIsi.map((pel, index) => (
          <li key={index}>{pel}</li>
        ))}
      </ul>
    </div>
  );
}

export default JadwalCard;