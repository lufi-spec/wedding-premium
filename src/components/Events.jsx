import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Events() {
  return (
    <section
      id="acara"
      className="py-24 px-6 relative overflow-hidden"
    >

      {/* Heading */}
<div className="text-center mb-12">

  <h2 className="font-wedding text-4xl sm:text-5xl md:text-6xl text-yellow-700">
    Acara Pernikahan
  </h2>

  <div className="flex items-center justify-center gap-4 mt-4 mb-8">

    <div className="w-16 h-[2px] bg-yellow-600"></div>

    <span className="text-yellow-600 text-2xl">
      ❦
    </span>

    <div className="w-16 h-[2px] bg-yellow-600"></div>

  </div>

  <p className="max-w-2xl mx-auto text-base sm:text-lg leading-loose text-stone-600 italic">
    Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala,
    kami bermaksud menyelenggarakan acara pernikahan putra-putri kami
    yang insyaaAllah akan dilaksanakan pada:
  </p>

      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-10">

        {/* AKAD */}
<motion.div
  initial={{ opacity: 0, y: -100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    ease: "easeOut",
    delay: 0.2
  }}
  viewport={{ once: true, amount: 0.3 }}
  whileHover={{ y: -8 }}
  className="bg-white/70 backdrop-blur-xl rounded-[40px] p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.10)] border border-yellow-100/50 hover:shadow-[0_30px_80px_rgba(180,140,40,0.18)] duration-500 relative overflow-hidden"
>

<div className="absolute -top-20 -right-20 w-52 h-52 bg-yellow-100/30 rounded-full blur-3xl"></div>
          <div className="flex items-center gap-3 mb-8">

            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 text-xl">
              <FaCalendarAlt />
            </div>

            <div>

              <h3 className="font-wedding text-3xl sm:text-4xl text-yellow-700">
                Akad Nikah
              </h3>

              <p className="text-stone-500 text-sm tracking-widest uppercase">
                Wedding Ceremony
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-6 items-start">

            {/* Left */}
            <div>

              <p className="text-lg sm:text-2xl font-bold text-stone-700 leading-snug">
                Jumat,
                <br />
                26 Juni 2026
              </p>

              <div className="flex items-center gap-2 mt-5 text-stone-600">

                <FaClock className="text-yellow-700" />

                <p className="text-sm sm:text-lg">
                  09.00 WIB - Selesai
                </p>

              </div>

            </div>

            {/* Right */}
            <div className="space-y-2 text-sm sm:text-lg text-stone-600">

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="mt-1 text-yellow-700" />

                <div>
                  <p>Kantor KUA Rantau</p>
                  <p>Desa Alur Cucur</p>
                  <p>Kec. Rantau</p>
                  <p>Kab. Aceh Tamiang</p>
                </div>

              </div>

            </div>

          </div>

</motion.div>

{/* RESEPSI */}
        <div  className="bg-white/70 backdrop-blur-xl rounded-[40px] p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.10)] border border-yellow-100/50 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(180,140,40,0.18)] duration-500 relative overflow-hidden">
<div className="absolute -top-20 -right-20 w-52 h-52 bg-yellow-100/30 rounded-full blur-3xl"></div>
          <div className="flex items-center gap-3 mb-8">

            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 text-xl">
              <FaCalendarAlt />
            </div>

            <div>

              <h3 className="font-wedding text-3xl sm:text-4xl text-yellow-700">
                Resepsi
              </h3>

              <p className="text-stone-500 text-sm tracking-widest uppercase">
                Wedding Reception
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-6 items-start">

            {/* Left */}
            <div>

              <p className="text-lg sm:text-2xl font-bold text-stone-700 leading-snug">
                Sabtu,
                <br />
                27 Juni 2026
              </p>

              <div className="flex items-center gap-2 mt-5 text-stone-600">

                <FaClock className="text-yellow-700" />

                <p className="text-sm sm:text-lg">
                  10.00 WIB - Selesai
                </p>

              </div>

            </div>

            {/* Right */}
            <div className="space-y-2 text-sm sm:text-lg text-stone-600">

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="mt-1 text-yellow-700" />

                <div>
                  <p>Dusun Pantai Beringin</p>
                  <p>Desa Alur Cucur</p>
                  <p>Kec. Rantau</p>
                  <p>Kab. Aceh Tamiang</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Events;