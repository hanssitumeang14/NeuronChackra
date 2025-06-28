import Personal from "@/asset/svg-personal";
import ChakraTable from "@/asset/chakra-table";
import Information from "@/asset/information";
import TextInfo from "@/asset/info-text";
import Script from "next/script";

export const metadata = {
  title: "Personal Matrix",
};

export default function PersonalMatrix() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-[#0d0b1f] to-[#1a103d] min-h-screen font-body overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full grid grid-cols-12 gap-px opacity-10">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="bg-[#00ffff]/10 aspect-square" />
            ))}
          </div>
        </div>

        <div className="container max-w-[1920px] mx-auto relative z-10">
          <div className="relative flex justify-center items-center uppercase py-16 px-0 text-white">
            <div className="absolute inset-0 flex justify-center items-center -z-10">
              <div className="w-[50em] h-[1.875em] bg-[#ffd700]/20 blur-[4.6875em]" />
            </div>

            <div className="bg-gradient-to-br from-sky-600/80 via-indigo-700/80 to-purple-900/90 rounded-3xl shadow-[0_0_30px_5px_rgba(14,165,233,0.7)] p-6 sm:p-8 md:p-10 border border-cyan-500/70 backdrop-blur-md ring-2 ring-cyan-500/80">
              <div className="p-4 sm:p-6 md:px-20 lg:px-40">
                <div className="personal-calculator bg-gradient-to-br from-[#2e003e] via-[#0b0c2a] to-[#000814] p-6 sm:p-8 rounded-2xl shadow-2xl border border-purple-600 text-center">
                  <p className="text-[gold] text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider font-[Cinzel] drop-shadow-[0_1px_5px_rgba(255,215,0,0.6)]">
                    ✨ Temukan Nasibmu ✨
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-center text-white">
                  Masukkan nama, tanggal lahir, dan pilih jenis kelamin:
                </p>

                <div className="px-4 sm:px-6 md:px-10">
                  <div className="bg-gradient-to-br from-[#1e1b3a] via-[#0b0c2a] to-[#14121f] p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md border border-indigo-800/40">
                    <div className="space-y-6 max-w-xl mx-auto">
                      <div>
                        <input
                          id="name"
                          type="text"
                          placeholder="Masukkan nama"
                          className="w-full bg-[#d1fcf5]/90 text-slate-900 placeholder-slate-600 border border-[#5a4dff] rounded-xl px-4 py-3 sm:px-6 sm:py-4 text-base shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                        />
                      </div>

                      <input
                        id="date"
                        type="date"
                        className="w-full bg-[#d1fcf5]/90 text-slate-900 border border-[#5a4dff] rounded-xl px-4 py-3 sm:px-6 sm:py-4 text-base shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                      />

                      <div>
                        <select
                          id="gender"
                          name="gender"
                          className="w-full bg-[#d1fcf5]/90 text-slate-900 border border-[#5a4dff] rounded-xl px-4 py-3 sm:px-6 sm:py-4 text-base shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
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
                      className="bg-gradient-to-r from-[#c084fc] to-[#38bdf8] hover:from-[#a855f7] hover:to-[#0ea5e9] text-white font-semibold px-10 py-4 rounded-2xl transition shadow-lg text-base md:text-lg"
                    >
                      Buat Hitungan
                    </button>
                  </div>
                </div>
                <div className="errorOutput text-base text-red-500 mt-4" />
              </div>

              <div className="matrix-container">

                <div className="w-full flex flex-col items-center justify-center">
                  <div
                    className="personal-calculator bg-gradient-to-br from-[#1f1a3a] via-[#0b0c2a] to-[#1c1e2f] p-4 sm:p-6 rounded-2xl shadow-2xl border border-indigo-700/30">
                    <p className="text-[#fcefb4] text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider font-[Cinzel] drop-shadow-sm text-center">
                      Hasil Perhitungan Personal
                    </p>
                  </div>
                  <div
                    className="output-personal-date text-[#fff8db] mt-4 p-6 bg-gradient-to-br from-[#0b0c2a] via-[#1e1b4b] to-[#1e293b] rounded-2xl shadow-2xl backdrop-blur-md border border-[#fff8db]/10">
                  </div>
                  <Personal />
                  <ChakraTable />
                  <Information />
                  <TextInfo />

                  <div className="flex flex-col items-center mb-14 space-y-4 mt-10">
                    <div className="flex flex-col items-center gap-6 mt-12 mb-16">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-purple-600 
                                            opacity-20 blur-xl rounded-full animate-pulse group-hover:opacity-30 transition"></div>
                        <button id="decode-matrix-btn" className="relative z-10 px-8 py-4 rounded-full text-lg font-semibold font-cosmic tracking-wide 
                                    bg-gradient-to-br from-[#3a0ca3] via-[#7209b7] to-[#4361ee] text-yellow-100 
                                    shadow-[0_0_20px_rgba(124,58,237,0.6)] hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
                                    transition-all duration-300 ease-in-out">
                          ✨ Bingung bacanya gimana?
                        </button>
                      </div>
                      <button id="download-btn"
                        className="px-8 py-4 rounded-full text-lg font-semibold font-cosmic tracking-wide text-cyan-100 
                            bg-[#1e1b4b] border border-white/20 backdrop-blur-md shadow-[0_0_12px_rgba(255,255,255,0.08)] 
                            hover:bg-[#2c2674] hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] transition-all duration-300 ease-in-out">
                        ⬇️ Download PDF
                      </button>
                    </div>
                  </div>
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
