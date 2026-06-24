function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#050505] overflow-hidden flex items-center justify-center z-[999]">

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl"></div>

      {/* Sparkles */}
      <div className="absolute top-20 left-16 text-yellow-400 text-2xl animate-pulse">
        ✦
      </div>

      <div className="absolute top-40 right-20 text-yellow-300 text-xl animate-bounce">
        ✧
      </div>

      <div className="absolute bottom-24 left-20 text-yellow-200 text-3xl animate-pulse">
        ❀
      </div>

      <div className="absolute bottom-32 right-16 text-yellow-400 text-2xl animate-bounce">
        ✦
      </div>

      {/* Main */}
      <div className="relative z-10 text-center px-6">

        {/* Spinner */}
        <div className="relative flex justify-center mb-10">

          <div className="w-28 h-28 rounded-full border-[5px] border-yellow-500/20"></div>

          <div className="absolute w-28 h-28 rounded-full border-[5px] border-transparent border-t-yellow-500 animate-spin"></div>

          <div className="absolute inset-0 flex items-center justify-center text-yellow-500 text-3xl">
            ❦
          </div>

        </div>

        {/* Arabic */}
        <p className="text-yellow-100/80 tracking-[6px] uppercase text-[10px] sm:text-xs leading-loose max-w-md mx-auto">
          Assalamu’alaikum Warahmatullahi Wabarakatuh
        </p>

        {/* Couple */}
    
    <div className="mt-10 flex flex-col items-center leading-none">

  <span className="font-wedding text-[90px] sm:text-[110px] text-yellow-500 ml-[-40px] drop-shadow-[0_0_20px_rgba(212,175,55,0.35)]">
    M
  </span>

  <span className="text-yellow-200 text-2xl -mt-5 ml-[-18px]">
  &
</span>

  <span className="font-wedding text-[90px] sm:text-[110px] text-yellow-500 ml-[40px] -mt-5 drop-shadow-[0_0_20px_rgba(212,175,55,0.35)]">
    R
  </span>

</div>

        {/* Subtitle */}
        <div className="flex justify-center items-center gap-4 mt-6">

          <div className="w-12 h-[1px] bg-yellow-600"></div>

          <p className="tracking-[5px] uppercase text-yellow-100/70 text-xs sm:text-sm">
            Wedding Invitation
          </p>

          <div className="w-12 h-[1px] bg-yellow-600"></div>

        </div>

        {/* Loading */}
        <p className="mt-10 text-stone-400 tracking-[4px] text-sm animate-pulse">
          Loading Your Special Moment...
        </p>

      </div>

    </div>
  );
}

export default LoadingScreen;