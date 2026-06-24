function Navigation() {

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40">

      <div className="bg-[#314028]/80 border border-yellow-500/20 backdrop-blur-xl px-4 py-3 rounded-full flex justify-center gap-3 sm:gap-6 text-sm sm:text-base text-white shadow-2xl overflow-x-auto max-w-[95vw]">

        <button onClick={() => scrollToSection("home")}>
          Home
        </button>

        <button onClick={() => scrollToSection("mempelai")}>
          Mempelai
        </button>

        <button onClick={() => scrollToSection("acara")}>
          Acara
        </button>

        <button onClick={() => scrollToSection("gift")}>
          Kado
        </button>

        <button onClick={() => scrollToSection("rsvp")}>
          RSVP
        </button>

      </div>

    </div>
  );
}

export default Navigation;