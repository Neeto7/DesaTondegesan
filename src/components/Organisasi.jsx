"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Organisasi = () => {
  return (
    <section id="organisasi-section" className="w-full py-20 px-6 md:px-12 lg:px-24">
      <motion.div
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-[#374221]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-10">
          Struktur Organisasi & Visi Misi Kepala Desa
        </motion.h2>

        <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-12">
          <div className="relative w-[110px] h-[145px] rounded-md overflow-hidden shadow-sm">
            <Image
              src="/kepala-desa.jpg"
              alt="Kepala Desa"
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-xl font-bold">Kepala Desa</p>
            <p className="text-lg mt-1">Mimbri Marsel Pontoh</p>
          </div>
        </motion.div>

        <motion.h3 variants={fadeUp} className="text-xl font-semibold mb-4 border-l-4 border-[#889966] pl-3">
          Struktur Organisasi
        </motion.h3>

        <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6 text-base leading-tight">
          <div>
            <p><strong>Sekretaris Desa:</strong> Mareska E. Kalengkongan</p>
            <p><strong>Kasi Pembangunan:</strong> Jerry J. Kalengkongan</p>
            <p><strong>Kasi Pemerintahan:</strong> Junior L. G. Najoan</p>
            <p><strong>Kaur Umum:</strong> Chandra K. Tuwo</p>
            <p><strong>Kaur Keuangan:</strong> Yefta Z. Mangare</p>
          </div>
          <div>
            <p><strong>Kepala Jaga Satu:</strong> Jootje M. Mamahit</p>
            <p className="ml-4">Meweteng: Jendri P. Lapian</p>
            <p className="mt-3"><strong>Kepala Jaga Dua:</strong> Fransye Kalengkongan</p>
            <p className="ml-4">Meweteng: Delvian Tilaar</p>
            <p className="mt-3"><strong>Kepala Jaga Tiga:</strong> Hesky R. Rarung</p>
            <p className="ml-4">Meweteng: Johny R. Rumawow</p>
            <p className="mt-3"><strong>Kepala Jaga Empat:</strong> Frans Najoan</p>
            <p className="ml-4">Meweteng: Tirsani N. Kumajas</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-3 border-l-4 border-[#889966] pl-3">Visi</h3>
            <p className="italic">
              “Dengan Mapalus Kita Wujudkan Desa Tondegesan 1 Yang Mandiri Sebagai Wilayah Pertanian Pedesaan Yang Unggul…”
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 border-l-4 border-[#889966] pl-3">Misi</h3>
            <ul className="list-decimal list-inside space-y-2">
              <li>Meningkatkan kualitas sumber daya aparat desa</li>
              <li>Pelayanan administrasi desa yang ramah dan sederhana</li>
              <li>Pengelolaan keuangan desa yang transparan</li>
              <li>Pemberdayaan petani dan peternak yang mandiri</li>
              <li>Meningkatkan hasil produksi pertanian dan peternakan</li>
              <li>Pemberdayaan ekonomi masyarakat melalui BumDes</li>
              <li>Pembangunan infrastruktur desa terarah</li>
              <li>Sarana prasarana umum yang aman dan nyaman</li>
              <li>Pendidikan & kesehatan yang berkualitas</li>
              <li>Fasilitas penunjang generasi muda</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Organisasi;
