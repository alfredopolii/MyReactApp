import React from 'react';
import './Education.css'; // Impor file CSS untuk komponen Education

const Education = () => {
  return (
    <section className="education">
      <h2>Pendidikan</h2>
      <div className="degree">
        <h3>Program Studi</h3>
        <p>FILKOM</p>
        <p>Tanggal mulai 2022 - belum selesai</p>
        <p>Semoga lulus tepat waktu</p>
      </div>
      {/* Tambahkan lebih banyak pendidikan jika diperlukan */}
    </section>
  );
}

export default Education;
