import { motion } from "framer-motion";

function OpeningCover({ onOpen }) {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#111] text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200')] bg-cover bg-center opacity-40"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Floating blur */}
      <div className="absolute w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <p className="uppercase tracking-[5px] text-sm mb-4">
          The Wedding Of
        </p>

        <h1 className="font-wedding text-7xl md:text-9xl text-yellow-500 mb-4">
          Meidy & Rais
        </h1>

        <p className="text-lg text-gray-200 mb-10">
          27 Juni 2026
        </p>

        <button
          onClick={onOpen}
          className="px-8 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:scale-105 transition duration-300"
        >
          Buka Undangan
        </button>
      </motion.div>
    </section>
  );
}

export default OpeningCover;