import { FaHeart } from "react-icons/fa";

function Quote() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">

      <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-xl border border-white/40 rounded-[40px] shadow-2xl p-10 text-center">

        <FaHeart className="mx-auto text-yellow-600 text-3xl mb-6" />

        <p className="text-lg leading-loose text-gray-700 italic">
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia
          menciptakan untukmu pasangan hidup dari jenismu sendiri
          supaya kamu mendapat ketenangan hati dan dijadikan-Nya
          kasih sayang di antara kamu.”
        </p>

        <p className="mt-6 font-semibold text-yellow-700">
          QS. Ar-Rum : 21
        </p>

      </div>

    </section>
  );
}

export default Quote;