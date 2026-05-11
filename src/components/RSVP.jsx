function RSVP({
  handleSubmit,
  nama,
  setNama,
  kehadiran,
  setKehadiran,
  jumlah,
  setJumlah,
  ucapan,
  setUcapan,
}) {
  return (
    <section id="rsvp" className="py-24 px-6">

      <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-xl rounded-[40px] shadow-2xl p-10">

        <h2 className="font-wedding text-4xl text-yellow-700 text-center mb-10">
          RSVP
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Nama Lengkap"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full p-4 rounded-2xl border border-yellow-200 bg-white/70 outline-none"
          />

          <select
            value={kehadiran}
            onChange={(e) => setKehadiran(e.target.value)}
            className="w-full p-4 rounded-2xl border border-yellow-200 bg-white/70 outline-none"
          >
            <option value="">Konfirmasi Kehadiran</option>
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </select>

          <input
            type="number"
            placeholder="Jumlah Tamu"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
            className="w-full p-4 rounded-2xl border border-yellow-200 bg-white/70 outline-none"
          />

          <textarea
            rows="5"
            placeholder="Ucapan & Doa"
            value={ucapan}
            onChange={(e) => setUcapan(e.target.value)}
            className="w-full p-4 rounded-2xl border border-yellow-200 bg-white/70 outline-none"
          ></textarea>

          <button
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-2xl"
          >
            Kirim RSVP
          </button>

        </form>

      </div>

    </section>
  );
}

export default RSVP;