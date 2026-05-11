import { motion } from "framer-motion";

export default function OpeningCover({
  open,
  setOpen,
  setPlaying,
  guest,
}) {
  return (
    <>
      {!open && (
        <section className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200')] bg-cover bg-center scale-110"></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#1f2b1c]/70"></div>

          {/* Blur Glow */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>

          {/* Floral */}
          <div className="absolute bottom-0 left-0 w-48 opacity-70">
            <img
              src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-watercolor-white-flower-bouquet-png-image_11975565.png"
              alt=""
            />
          </div>

          <div className="absolute top-0 right-0 w-48 opacity-70 rotate-180">
            <img
              src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-watercolor-white-flower-bouquet-png-image_11975565.png"
              alt=""
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center px-6"
          >
            <p className="uppercase tracking-[6px] text-sm text-gray-200 mb-4">
              The Wedding Of
            </p>

            <h1 className="font-wedding text-3xl sm:text-5xl md:text-7xl text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">
              Meidy & Rais
            </h1>

            <div className="mt-8">
              <p className="text-gray-300 tracking-[3px] text-sm mb-3">
                Kepada Yth.
              </p>

              <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-[25px] px-8 py-5 inline-block shadow-2xl">
                <h3 className="text-xl sm:text-2xl text-white font-semibold break-words">
                  {guest}
                </h3>
              </div>
            </div>


            <button
              onClick={() => {
                setOpen(true);
                setPlaying(true);
              }}
              className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-2xl hover:scale-105 transition duration-300"
            >
              Buka Undangan
            </button>
          </motion.div>
        </section>
      )}
    </>
  );
}