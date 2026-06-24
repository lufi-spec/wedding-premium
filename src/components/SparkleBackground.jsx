function SparkleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

      <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>

      <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>

      <div className="absolute bottom-40 left-1/3 text-2xl animate-bounce opacity-30">
        🌸
      </div>

      <div className="absolute bottom-20 right-10 text-xl animate-pulse opacity-30">
        ✨
      </div>

    </div>
  );
}

export default SparkleBackground;