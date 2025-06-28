import Information from "@/asset/information";
import Compatibility from "@/asset/svg-compatibility";
import InfoTxtCompatibility from "@/asset/info-txt-compatibility";
import Script from "next/script";

export const metadata = {
    title: "Compatibility Matrix",
};

export default function CompatibilityMatrix() {
    return (
        <>
            <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen font-body overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(200,200,200,0.05),transparent_70%)]" />
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(150,150,150,0.05),transparent_70%)]" />
                    <div className="w-full h-full grid grid-cols-12 gap-px opacity-3">
                        {Array.from({ length: 144 }).map((_, i) => (
                            <div key={i} className="bg-gray-700/20 aspect-square rounded-sm" />
                        ))}
                    </div>
                </div>

                <div className="container max-w-[1920px] mx-auto relative z-10 px-4">
                    <div className="relative flex justify-center items-center uppercase py-12 text-gray-300 text-center">
                        <div className="absolute inset-0 flex justify-center items-center -z-10">
                            <div className="w-[50em] h-[1.875em] bg-gray-400/20 blur-[4.6875em]" />
                        </div>
                        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 border border-slate-700 backdrop-blur-md ring-1 ring-slate-600">
                            <div className="p-4 sm:p-6 md:px-20 lg:px-10">
                                <p className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold font-[Cinzel] tracking-wide text-gray-300 drop-shadow-sm">
                                    💫 Kalkulator Matriks Kompatibilitas 💫
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="birthday-container max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-gray-700">
                        <p className="text-lg text-center font-medium text-gray-200 mb-6">
                            Masukkan Nama, Tanggal Lahir Anda dan Pasangan Anda
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-900">
                            <div>
                                <label htmlFor="name-partner1" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Nama Partner 1
                                </label>
                                <input
                                    type="text"
                                    id="name-partner1"
                                    name="partner1"
                                    placeholder="Masukkan nama partner 1"
                                    className="w-full bg-gray-100 text-gray-900 placeholder-gray-400 border border-gray-600 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="name-partner2" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Nama Partner 2
                                </label>
                                <input
                                    type="text"
                                    id="name-partner2"
                                    name="partner2"
                                    placeholder="Masukkan nama partner 2"
                                    className="w-full bg-gray-100 text-gray-900 placeholder-gray-400 border border-gray-600 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="date_person1" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Tanggal Lahir Partner 1
                                </label>
                                <input
                                    type="date"
                                    id="date_person1"
                                    name="partner1"
                                    className="w-full bg-gray-100 text-gray-900 border border-gray-600 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="date_person2" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Tanggal Lahir Partner 2
                                </label>
                                <input
                                    type="date"
                                    id="date_person2"
                                    name="partner2"
                                    className="w-full bg-gray-100 text-gray-900 border border-gray-600 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>

                            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
                                <button
                                    id="createChart"
                                    className="w-full max-w-xs py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition"
                                    style={{ display: "none" }}
                                >
                                    Buat Hitungan
                                </button>
                            </div>
                        </div>

                        <div className="errorOutput1 text-red-400 mt-4 text-sm text-center" />
                    </div>

                    <div className="flex flex-col text-white my-16 compatibility-container items-center scroll-mt-28">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#00ffff] drop-shadow-lg mb-6">
                            ✨ Kecocokan Kalian ✨
                        </h1>
                        <div
                            className="output2 bg-gray-900/90 mt-4 p-6 rounded-lg shadow-inner border border-gray-700 backdrop-blur-sm text-gray-200"
                        ></div>

                        <Compatibility />
                        <InfoTxtCompatibility />

                        <div className="flex flex-col items-center mb-14 space-y-4 mt-10">
                            <div className="flex flex-col items-center gap-6 mt-12 mb-16">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700
                                                    opacity-10 rounded-full animate-pulse group-hover:opacity-20 transition"></div>
                                    <button
                                        id="showPDF"
                                        className="relative z-10 px-8 py-4 rounded-full text-lg font-semibold tracking-wide
                                                   bg-indigo-700 text-gray-100 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
                                    >
                                        Bingung bacanya gimana?
                                    </button>
                                </div>
                                <button
                                    id="downloadPDF"
                                    className="px-8 py-4 rounded-full text-lg font-semibold tracking-wide text-indigo-100
                                               bg-gray-900 border border-indigo-500 backdrop-blur-md shadow-md hover:bg-indigo-800 hover:shadow-xl transition-all duration-300 ease-in-out"
                                >
                                    ⬇️ Download PDF
                                </button>
                            </div>
                        </div>
                        <Information />
                    </div>
                </div>
            </div>
            <Script src="/inputs_compatibility.js" strategy="lazyOnload" />
        </>
    );
}
