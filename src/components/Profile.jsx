"use client";
import Image from "next/image";
import { useState } from "react";

const Profile = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="relative w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-md">
          <Image
            src="/desa.jpg"
            alt="Lanskap Desa Tondegesan"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="text-[#374221]">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Profil <br /> Singkat Desa
          </h2>

          <div className="w-24 h-[3px] bg-[#B89F5B] mt-4 mb-5 rounded-full"></div>

          <h3 className="text-lg md:text-xl font-semibold mb-4">
            Tondegesan Satu
          </h3>

          {/* Short Text */}
          <p className="text-sm md:text-base leading-relaxed">
            Desa Tondegesan Satu terletak di Kecamatan Kawangkoan, Kabupaten
            Minahasa, Provinsi Sulawesi Utara. Perekonomian desa ini berfokus
            pada sektor pertanian hortikultura seperti tomat, jagung, kacang-kacangan,
            dan sayuran dataran tinggi.
          </p>

          {/* Expandable Text */}
          {showMore && (
            <p className="text-sm md:text-base leading-relaxed mt-3 transition-all duration-300">
              Aktivitas ekonomi desa didominasi usaha pertanian skala kecil hingga
              menengah, dengan distribusi hasil pertanian ke wilayah Minahasa dan sekitarnya.
              <br /><br />
              Desa ini memiliki fasilitas dasar yang dikelola pemerintah desa dan kecamatan,
              termasuk akses pendidikan melalui SD setempat serta layanan kesehatan melalui
              posyandu yang terhubung dengan puskesmas terdekat.
              <br /><br />
              Infrastruktur desa meliputi jaringan jalan antar-dusun, saluran air,
              fasilitas ibadah, dan kantor desa sebagai pusat kegiatan sosial-ekonomi.
              Desa Tondegesan Satu juga membangun kerja sama dengan desa-desa tetangga
              di Kecamatan Kawangkoan dalam berbagai program pembangunan.
            </p>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 text-sm font-semibold text-[#446622] hover:underline transition"
          >
            {showMore ? "Sembunyikan" : "Baca Selengkapnya"}
          </button>

        </div>
      </div>
    </section>
  );
};

export default Profile;
