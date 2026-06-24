function ShareButton({ shareWhatsApp, guest }) {
  return (
    <section className="py-20 text-center">

      <button
        onClick={() => shareWhatsApp(guest)}
        className="px-10 py-4 rounded-full bg-green-600 text-white shadow-2xl inline-block hover:scale-105 duration-300"
      >
        Share WhatsApp
      </button>

    </section>
  );
}

export default ShareButton;