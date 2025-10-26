"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

const Sejarah = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="sejarah-section"
      className="w-full bg-[#EBE6DA] py-20 px-6 md:px-16 lg:px-24 text-[#374221] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bold mb-12"
        >
          Jejak Langkah<br />Sejarah Desa
        </motion.h2>


        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative flex justify-between items-center w-full border-t-[1.5px] border-[#556B2F] py-8 mt-10"
        >
          {[
            { year: "1884", desc: "Peresmian Desa\nJohanis J. Lapian" },
            { year: "1956", desc: "Berdirinya\nGereja GMIM" },
            { year: "2007", desc: "Pemekaran" },
            { year: "2010", desc: "Resmi Definitif" }
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-1/4 px-1"
            >
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#D4A01E]"></div>
              <p className="mt-3 font-semibold text-xs md:text-sm">{item.year}</p>
              <p className="text-[10px] md:text-sm mt-1 leading-tight whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>


        {/* Full History */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-4xl mx-auto mt-12 text-left"
        >
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
        </motion.div>

      </div>
    </section>
  );
};

export default Sejarah;
