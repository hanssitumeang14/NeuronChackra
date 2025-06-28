import Personal from "@/asset/svg-personal";
import ChakraTable from "@/asset/chakra-table";
import Information1 from "@/asset/information1";
import TextInfo from "@/asset/info-text";
import Script from "next/script";

export const metadata = {
  title: "Personal Matrix",
};

export default function PersonalMatrix() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] min-h-screen font-body overflow-hidden text-white">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full grid grid-cols-12 gap-px opacity-5">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="bg-white/5 aspect-square" />
            ))}
          </div>
        </div>

        <div className="container max-w-[1920px] mx-auto relative z-10">
          <div className="relative flex justify-center items-center uppercase py-16 px-0 text-white">
            <div className="absolute inset-0 flex justify-center items-center -z-10">
              <div className="w-[50em] h-[1.875em] bg-yellow-100/10 blur-[4.6875em]" />
            </div>

            <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 border border-slate-700 backdrop-blur-md ring-1 ring-slate-600">
              <div className="p-4 sm:p-6 md:px-20 lg:px-40">
                <div className="personal-calculator bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-600 text-center">
                  <p className="text-[#fcefb4] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider font-[Cinzel] drop-shadow-sm">
                    ✨ Temukan Nasibmu ✨
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-center text-white">
                  Masukkan nama, tanggal lahir, dan pilih jenis kelamin:
                </p>

                <div className="px-4 sm:px-6 md:px-10">
                  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg backdrop-blur-md border border-slate-700">
                    <div className="space-y-6 max-w-xl mx-auto">
                      <div>
                        <input
                          id="name"
                          type="text"
                          placeholder="Masukkan nama"
                          className="w-full bg-white/80 text-slate-900 placeholder-slate-600 border border-slate-500 rounded-xl px-4 py-3 sm:px-6 sm:py-4 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
                        />
                      </div>

                      <input
                        id="date"
                        type="date"
                        className="w-full bg-white/80 text-slate-900 border border-slate-500 rounded-xl px-4 py-3 sm:px-6 sm:py-4 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
                      />

                      <div>
                        <select
                          id="gender"
                          name="gender"
                          className="w-full bg-white/80 text-slate-900 border border-slate-500 rounded-xl px-4 py-3 sm:px-6 sm:py-4 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
                        >
                          <option value="" disabled className="text-slate-500">
                            Pilih Jenis Kelamin
                          </option>
                          <option value="laki-laki" className="text-black">
                            Laki-laki
                          </option>
                          <option value="perempuan" className="text-black">
                            Perempuan
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="birthday-container relative flex flex-col justify-center items-center mb-[5em]">
                <div className="w-[83%] mt-10 flex flex-col items-center gap-6">
                  <div className="flex justify-center pt-6">
                    <button
                      id="get_the_answer"
                      className="bg-gradient-to-r from-[#7e74d9] to-[#5dbde0] hover:from-[#6c63ff] hover:to-[#38bdf8] text-white font-semibold px-10 py-4 rounded-2xl transition shadow-md text-base md:text-lg"
                    >
                      Buat Hitungan
                    </button>
                  </div>
                </div>
                <div className="errorOutput text-base text-red-500 mt-4" />
              </div>

              <div className="matrix-container">
                <div className="w-full flex flex-col items-center justify-center">
                  <div className="personal-calculator bg-gradient-to-br from-[#1f1a3a] via-[#121428] to-[#1c1e2f] p-4 sm:p-6 rounded-2xl shadow-lg border border-indigo-700/30">
                    <p className="text-[#fcefb4] text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider font-[Cinzel] drop-shadow-sm text-center">
                      Hasil Perhitungan Personal
                    </p>
                  </div>
                  <div className="output-personal-date text-[#fff8db] mt-4 p-6 bg-gradient-to-br from-[#121428] via-[#1e1b4b] to-[#1e293b] rounded-2xl shadow-lg backdrop-blur-md border border-[#fff8db]/10" />
                  <Personal />
                  <ChakraTable />
                  <TextInfo />

                  <div className="flex flex-col items-center mb-14 space-y-4 mt-10">
                    <div className="flex flex-col items-center gap-6 mt-12 mb-16">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-purple-500 opacity-10 blur-xl rounded-full animate-pulse group-hover:opacity-20 transition"></div>
                        <button
                          id="decode-matrix-btn"
                          className="relative z-10 px-8 py-4 rounded-full text-lg font-semibold font-cosmic tracking-wide bg-gradient-to-br from-[#5e5fcf] via-[#6f88d2] to-[#4361ee] text-yellow-100 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
                        >
                          ✨ Bingung bacanya gimana?
                        </button>
                      </div>
                      <button
                        id="downloadPDF"
                        className="px-8 py-4 rounded-full text-lg font-semibold font-cosmic tracking-wide text-cyan-100 bg-[#2c2a5a] border border-white/20 backdrop-blur-md shadow-md hover:bg-[#3a396b] transition-all duration-300 ease-in-out"
                      >
                        ⬇️ Download PDF
                      </button>
                    </div>
                  </div>

                  <Information1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="/script_person.js" strategy="lazyOnload" />
    </>
  );
}
