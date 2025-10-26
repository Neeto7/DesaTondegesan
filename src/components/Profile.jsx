"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";


const textAnim = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};


const imageAnim = {
  hidden: { opacity: 0, scale: 0.9, rotate: -2, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const Profile = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="profile-section"
      className="w-full py-20 px-6 md:px-16 lg:px-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* 🖼️ Image — fade in saat di-scroll */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} 
          variants={imageAnim}
          className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/desa1.jpg"
            alt="Lanskap Desa Tondegesan"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 📜 Text — cinematic fade in saat di-scroll */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textAnim}
          className="text-[#374221] space-y-4"
        >
          <motion.h2
            variants={textAnim}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Profil <br /> Singkat Desa
          </motion.h2>

          <motion.div
            variants={textAnim}
            className="w-24 h-[3px] bg-[#B89F5B] rounded-full"
          />

          <motion.h3
            variants={textAnim}
            className="text-lg md:text-xl font-semibold"
          >
            Tondegesan Satu
          </motion.h3>

          <motion.p
            variants={textAnim}
            className="text-sm md:text-base leading-relaxed"
          >
            Desa Tondegesan Satu terletak di Kecamatan Kawangkoan, Kabupaten
            Minahasa, Provinsi Sulawesi Utara. Perekonomian desa ini berfokus
            pada sektor pertanian hortikultura seperti tomat, jagung,
            kacang-kacangan, dan sayuran dataran tinggi.
          </motion.p>

          {showMore && (
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textAnim}
              className="text-sm md:text-base leading-relaxed"
            >
              Aktivitas ekonomi desa didominasi usaha pertanian skala kecil hingga
              menengah, dengan distribusi hasil pertanian ke wilayah Minahasa dan sekitarnya.
              <br /><br />
              Desa ini memiliki fasilitas dasar seperti SD, posyandu, akses jalan,
              fasilitas ibadah dan kantor desa sebagai pusat kegiatan masyarakat.
              <br /><br />
              Desa juga memiliki kerja sama lintas wilayah dalam mendukung
              pembangunan bersama di Kecamatan Kawangkoan.
            </motion.p>
          )}

          <motion.button
            variants={textAnim}
            onClick={() => setShowMore(!showMore)}
            className="text-sm font-semibold text-[#446622] hover:underline transition"
          >
            {showMore ? "Sembunyikan" : "Baca Selengkapnya"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
