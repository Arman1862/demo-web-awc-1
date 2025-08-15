// di src/components/MemberCard.jsx

import React from 'react';

function MemberCard({ member }) { // Terima props 'member'
  return (
    <div className="card member-card glass-box px-0" tabIndex="0">
      {/* Bagian atas: Foto anggota */}
      <div className="text-center mb-3">
        <img
          src={member.photo} // Gunakan foto dari data
          alt={member.name}
          className="img-fluid"
          style={{ width: '160px', height: '100px', objectFit: 'cover' }}
        />
      </div>

      {/* Bagian bawah: Nama, jabatan, dll */}
      <div className="text-center">
        <h5 className="text-white">{member.name}</h5>
        <p className="text-white small">{member.role}</p>
      </div>
    </div>
  );
}

export default MemberCard;