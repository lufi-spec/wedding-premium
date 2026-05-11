import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpg";
import foto5 from "../assets/foto5.jpg";
import foto6 from "../assets/foto6.jpg";
import foto7 from "../assets/foto7.jpg";

function Gallery({ shareWhatsApp, guest }) {
  return (
    <>
      {/* GALLERY */}
      <h2 className="font-wedding text-4xl sm:text-5xl md:text-6xl text-yellow-700 text-center mb-6">
        Gallery
      </h2>

      <p className="text-stone-500 text-center mt-2 mb-10 tracking-widest">
        MOMENT OF LOVE
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
          },
        }}
        className="mt-10 px-6"
      >

        {[foto1, foto2, foto3, foto4, foto5, foto7].map(
          (foto, index) => (

            <SwiperSlide key={index}>

              <div className="overflow-hidden rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

                <img
                  src={foto}
                  className="w-full h-[520px] object-cover hover:scale-110 duration-700"
                  alt=""
                />

              </div>

            </SwiperSlide>

          )
        )}

      </Swiper>

      
    </>
  );
}

export default Gallery;