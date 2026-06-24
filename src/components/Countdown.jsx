function Countdown({ timeLeft }) {
  return (
    <section className="py-32 px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-100/30 blur-3xl rounded-full"></div>

      {/* Sparkle */}
      <div className="absolute top-20 left-10 text-yellow-400 text-2xl animate-pulse">
        ✦
      </div>

      <div className="absolute top-40 right-16 text-yellow-300 text-xl animate-bounce">
        ✧
      </div>

      <div className="absolute bottom-20 left-20 text-yellow-200 text-3xl animate-pulse">
        ❀
      </div>

      <div className="absolute bottom-32 right-20 text-yellow-300 text-2xl animate-bounce">
        ✦
      </div>

      {/* Header */}
      <div className="text-center relative z-10">

        <p className="tracking-[8px] uppercase text-yellow-700 text-sm mb-4">
          Wedding Day
        </p>

        <h2 className="font-wedding text-5xl sm:text-6xl md:text-7xl text-yellow-700 drop-shadow-sm">
          Save The Date
        </h2>

        <div className="flex justify-center items-center gap-4 mt-6 mb-8">

          <div className="w-16 h-[2px] bg-yellow-600"></div>

          <span className="text-yellow-600 text-2xl">
            ❦
          </span>

          <div className="w-16 h-[2px] bg-yellow-600"></div>

        </div>

        <p className="max-w-2xl mx-auto text-stone-500 leading-loose">
          Dengan penuh kebahagiaan kami menantikan kehadiran
          keluarga dan sahabat tercinta untuk menjadi bagian
          dari hari istimewa kami.
        </p>

      </div>

      {/* Countdown */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">

        {[
          {
            label: "Hari",
            value: timeLeft.days || 0,
          },
          {
            label: "Jam",
            value: timeLeft.hours || 0,
          },
          {
            label: "Menit",
            value: timeLeft.minutes || 0,
          },
          {
            label: "Detik",
            value: timeLeft.seconds || 0,
          },
        ].map((item, index) => (

          <div
            key={index}
            className="group relative overflow-hidden rounded-[40px] border border-white/30 bg-white/60 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.12)] py-12 px-6 text-center hover:-translate-y-3 duration-500"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/40 to-transparent opacity-0 group-hover:opacity-100 duration-500"></div>

            {/* Number */}
            <h3 className="relative z-10 text-5xl sm:text-6xl md:text-7xl font-bold text-yellow-700 drop-shadow-sm">
              {item.value}
            </h3>

            {/* Divider */}
            <div className="relative z-10 w-12 h-[2px] bg-yellow-500 mx-auto my-5"></div>

            {/* Label */}
            <p className="relative z-10 uppercase tracking-[5px] text-stone-500 text-sm">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Countdown;