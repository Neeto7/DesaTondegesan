"use client";
import Image from "next/image";

const Organisasi = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-[#374221]">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Struktur Organisasi &<br />Visi Misi Kepala Desa
        </h2>

        {/* Foto & Kepala Desa */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-12">
          {/* Foto Placeholder */}
          <div className="w-[110px] h-[145px] bg-gray-300 rounded-md overflow-hidden relative">
            <Image
              src="/kepala-desa.jpg"
              alt="Kepala Desa"
              fill
              className="object-cover"
              sizes="110px"
            />
          </div>

          {/* Nama Jabatan */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold">Kepala Desa</p>
            <p className="text-lg mt-1">Mimbri Pontoh</p>
          </div>
        </div>

        {/* Struktur Organisasi */}
        <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#889966] pl-3">
          Struktur Organisasi
        </h3>

        <div className="grid md:grid-cols-2 gap-6 text-base leading-tight">
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
        </div>

        {/* Visi Misi */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-[#889966] pl-3">
            Visi
          </h3>
          <p className="text-base leading-relaxed italic">
            “Dengan Mapalus Kita Wujudkan Desa Tondegesan 1 Yang Mandiri Sebagai
            Wilayah Pertanian Pedesaan Yang Unggul Berbasis Kearifan Lokal Di Kabupaten Minahasa”
          </p>

          <h3 className="text-xl font-semibold mt-10 mb-4 border-l-4 border-[#889966] pl-3">
            Misi
          </h3>
          <ul className="list-decimal list-inside space-y-2 text-base leading-relaxed">
            <li>Meningkatkan kualitas sumber daya aparat desa yang profesional</li>
            <li>Menciptakan pelayanan administrasi desa yang ramah dan sederhana</li>
            <li>Menghadirkan manajemen pengelolaan keuangan desa yang terbuka, bertanggung jawab, dan bersahaja</li>
            <li>Mewujudkan peningkatan kemampuan sumber daya para petani dan peternak yang mandiri</li>
            <li>Memaksimalkan hasil produksi pertanian dan peternakan masyarakat</li>
            <li>Memberdayakan ekonomi masyarakat desa lewat Badan Usaha Milik Desa (BumDes) yang mandiri</li>
            <li>Membangun kualitas pembangunan infrastruktur desa yang terarah</li>
            <li>Memprioritaskan ketersediaan sarana dan prasarana umum yang aman dan nyaman</li>
            <li>Mengembangkan prioritas mutu pendidikan dan pelayanan kesehatan ibu hamil</li>
            <li>Mengadakan sarana dan prasarana penunjang bagi generasi muda desa yang mandiri</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Organisasi;
