"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const baseImages = [
  "/gallery/galeri1.jpg",
  "/gallery/galeri2.jpg",
  "/gallery/galeri3.jpg",
  "/gallery/galeri4.jpg",
];


const images = [...baseImages, ...baseImages];

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState({});

  return (
    <section
      id="gallery-section"
      className="relative w-full py-24 px-6 bg-[#EBE6DA] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#374221] mb-14">
          Galeri Foto
        </h2>

        {/* Navigation Buttons */}
        <button
          className="swiper-button-prev absolute top-1/2 left-3 z-30 -translate-y-1/2 
          bg-[#6B5A35]/95 hover:bg-[#56492B] text-white p-3 rounded-full shadow-lg transition-all
          hidden md:flex"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          className="swiper-button-next absolute top-1/2 right-3 z-30 -translate-y-1/2
          bg-[#6B5A35]/95 hover:bg-[#56492B] text-white p-3 rounded-full shadow-lg transition-all
          hidden md:flex"
        >
          <ChevronRight size={22} />
        </button>

        <Swiper
          modules={[EffectCoverflow, Navigation, Autoplay]}
          effect="coverflow"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.2}
          loop={true}
          loopAdditionalSlides={4}
          speed={950}
          autoplay={{
            delay: 2600,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 8,
            stretch: 0,
            depth: 250,
            modifier: 1.4,
            slideShadows: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 2.6 },
          }}
          className="w-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[240px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl bg-gray-300">

                {/* Skeleton Loading */}
                {!loadedImages[i] && (
                  <div className="absolute inset-0 animate-pulse bg-gray-300" />
                )}

                <Image
                  src={img}
                  alt={`Foto ${i + 1}`}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  className={`object-cover duration-700 ease-out ${
                    loadedImages[i] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  onLoadingComplete={() =>
                    setLoadedImages((prev) => ({ ...prev, [i]: true }))
                  }
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
