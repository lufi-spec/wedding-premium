import { FaMapMarkerAlt } from "react-icons/fa";

function Location() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-4xl mx-auto text-center">

        <FaMapMarkerAlt className="mx-auto text-4xl text-yellow-700 mb-6" />

        <h2 className="font-wedding text-3xl sm:text-4xl md:text-5xl text-yellow-700 mb-6">
          Lokasi Acara
        </h2>

        <p className="text-lg leading-loose">
          Dusun Pantai Beringin
          <br />
          Desa Alur Cucur
          <br />
          Kec. Rantau
          <br />
          Kab. Aceh Tamiang
        </p>

        <a
          href="https://maps.app.goo.gl/kP8Ehpmrxynur9Ji9"
          target="_blank"
          className="inline-block mt-10 px-8 py-4 rounded-full bg-[#314028] text-white shadow-xl"
        >
          Buka Google Maps
        </a>

      </div>

    </section>
  );
}

export default Location;