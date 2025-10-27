"use client";
import Image from "next/image";

const Potensi = () => {
  return (
    <section id="potensi-section" className="w-full min-h-[50vh] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-[#374221]">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Potensi Desa
          </h2>

          <div className="w-24 h-[3px] bg-[#B89F5B] mt-4 mb-6 rounded-full"></div>

          <p className="text-sm md:text-base leading-relaxed">
            Potensi Desa dan Galeri kumpulan foto kegiatan atau keindahan desa
            Desa Tondegesan Satu berada dalam wilayah dataran tinggi Minahasa dengan lahan kering dan non-sawah yang luas, menjadikannya basis utama aktivitas pertanian. Komoditas unggulan berpotensi berupa sayuran dan tanaman hortikultura seperti tomat, jagung, kacang-kacangan, serta sayuran dataran tinggi lainnya, yang dapat didorong melalui peningkatan akses bibit unggul, pupuk, dan teknik budidaya modern.

          </p>

          {/* Scroll to Gallery */}
          <button
            onClick={() =>
              document.querySelector("#gallery-section")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="mt-5 px-5 py-2 cursor-pointer text-sm font-semibold border-2 border-[#446622] text-[#446622] rounded-lg hover:bg-[#446622] hover:text-white transition-all"
          >
            Lihat Galeri
          </button>
        </div>

        <div className="relative w-full h-[260px] md:h-[380px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/potensi.jpg"
            alt="Potensi Desa Tondegesan"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Potensi;
