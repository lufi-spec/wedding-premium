
import acehLogo from "../assets/aceh.png";
import bsiLogo from "../assets/bsi.png";

function Gift({ toast }) {
  return (
    <section id="gift" className="py-24 px-6 relative overflow-hidden">

      {/* Floral */}
      <div className="absolute top-0 left-0 w-48 opacity-60">
        <img
          src="https://png.pngtree.com/png-vector/20240316/ourmid/pngtree-watercolor-white-flower-bouquet-png-image_11975565.png"
          className="w-full"
          alt=""
        />
      </div>

      <div className="max-w-5xl mx-auto text-center">

        <p className="tracking-[6px] uppercase text-yellow-700 text-sm mb-3">
          Wedding Gift
        </p>

        <h2 className="font-wedding text-4xl sm:text-5xl md:text-6xl text-yellow-700 mb-6">
          Tanda Kasih
        </h2>

        <div className="flex items-center justify-center gap-4 mb-16">

          <div className="w-16 h-[2px] bg-yellow-600"></div>

          <span className="text-yellow-600 text-2xl">
            ❦
          </span>

          <div className="w-16 h-[2px] bg-yellow-600"></div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* BANK ACEH */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-10 border border-white/40">

            <div className="flex justify-center mb-6">

  <img
    src={acehLogo}
    className="h-16 object-contain"
    alt="Bank Aceh"
  />

</div>

            <p className="mt-6 text-xl sm:text-2xl md:text-3xl break-all font-semibold text-stone-700">
              50702200043666
            </p>

            <p className="mt-3 text-gray-600 text-lg">
              a.n Meidy Tamara
            </p>

            <button
              onClick={() => {
                navigator.clipboard.writeText("50702200043666");
                toast.success("Nomor rekening berhasil disalin");
              }}
              className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-xl hover:scale-105 duration-300"
            >
              Salin Rekening
            </button>

          </div>

          {/* BSI */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-10 border border-white/40">

            <div className="flex justify-center mb-6">

  <img
    src={bsiLogo}
    className="h-14 object-contain"
    alt="BSI"
  />

</div>

            <p className="mt-6 text-xl sm:text-2xl md:text-3xl break-all font-semibold text-stone-700">
              7355674139
            </p>

            <p className="mt-3 text-gray-600 text-lg">
              a.n M Rais
            </p>

            <button
              onClick={() => {
                navigator.clipboard.writeText("7355674139");
                toast.success("Nomor rekening berhasil disalin");
              }}
              className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-xl hover:scale-105 duration-300"
            >
              Salin Rekening
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Gift;