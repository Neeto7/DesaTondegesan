"use client";
import { useState } from "react";

const Sejarah = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="w-full bg-[#EBE6DA] py-20 px-6 md:px-16 lg:px-24 text-[#374221]">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Jejak Langkah<br />Sejarah Desa
        </h2>

        {/* Timeline */}
        <div className="relative flex justify-between items-center w-full border-t-2 border-[#556B2F] py-10 mt-10">
          
          {/* 1884 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="w-5 h-5 rounded-full bg-[#D4A01E]"></div>
            <p className="mt-4 font-semibold">1884</p>
            <p className="text-sm mt-1 leading-tight">Peresmian Desa<br />Johanis J. Lapian</p>
          </div>

          {/* 1956 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="w-5 h-5 rounded-full bg-[#D4A01E]"></div>
            <p className="mt-4 font-semibold">1956</p>
            <p className="text-sm mt-1 leading-tight">Berdirinya<br />Gereja GMIM</p>
          </div>

          {/* 2007 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="w-5 h-5 rounded-full bg-[#D4A01E]"></div>
            <p className="mt-4 font-semibold">2007</p>
            <p className="text-sm mt-1 leading-tight">Pemekaran</p>
          </div>

          {/* 2010 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="w-5 h-5 rounded-full bg-[#D4A01E]"></div>
            <p className="mt-4 font-semibold">2010</p>
            <p className="text-sm mt-1 leading-tight">Resmi Definitif</p>
          </div>

        </div>

        {/* Sejarah Lengkap */}
        <div className="max-w-4xl mx-auto mt-12 text-left">
          <p className="text-base md:text-lg leading-relaxed">
            Desa Tondegesan awalnya dibentuk oleh sekelompok penduduk dari Kawangkoan
            yang pertama kali menetap di daerah Luasan, sekitar satu kilometer di timur
            Kawangkoan. Karena daerah tersebut tidak nyaman akibat penyakit, mereka
            berpindah ke lokasi baru yang kini dikenal sebagai Desa Tondegesan.
            {showMore && (
              <>
                {" "}
                Wilayah baru ini dipilih karena tanahnya subur, udaranya sejuk, dan
                lingkungannya hijau. Nama Tondegesan berarti tempat yang bebas dari
                penyakit. Pada tahun 1884, Tondegesan diresmikan sebagai desa dengan Johanis
                J. Lapian sebagai Hukum Tua pertama. Kehidupan masyarakatnya damai dan
                mayoritas beragama Kristen Protestan, ditandai dengan berdirinya Gereja
                GMIM pada tahun 1956 serta gereja-gereja lain seperti KGPM, Pantekosta,
                dan GSJA.
                <br /><br />
                Seiring bertambahnya penduduk, pada tahun 2006 pemerintah desa bersama
                BPD mengajukan pemekaran wilayah untuk meningkatkan pelayanan masyarakat.
                Pemekaran disetujui pada tahun 2007, sehingga Desa Tondegesan terbagi
                menjadi tiga bagian: Desa Tondegesan, Tondegesan Satu, dan Tondegesan Dua.
                Desa Tondegesan Satu resmi menjadi desa definitif pada 2 November 2010
                berdasarkan SK Bupati Minahasa Nomor 199 Tahun 2010.
                <br /><br />
                Desa ini memiliki luas sekitar 6.080 m², terbagi dalam beberapa wilayah
                jaga yang masing-masing dipimpin oleh seorang Pala dan Maweteng untuk
                mengoordinasikan kegiatan pembangunan dan pelayanan masyarakat. Sejak
                berdiri, Desa Tondegesan Satu telah dipimpin oleh tiga Hukum Tua, yaitu
                Jhoni Mangare (2008–2011), Yanrra Kalengkongan (2011–2022), dan Mimbri
                Marsel Pontoh (2022–sekarang).
              </>
            )}
          </p>

          {/* Button */}
          <button
            className="mt-4 text-sm font-semibold text-[#446622] hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Sembunyikan" : "Baca Selengkapnya"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Sejarah;
