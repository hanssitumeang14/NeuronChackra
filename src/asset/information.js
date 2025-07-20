'use client';

import { useState } from 'react';

export default function Information() {
  const [contents, setContents] = useState({});
  const [openIndex, setOpenIndex] = useState(null);
  const [loadingIndex, setLoadingIndex] = useState(null); // <- tambahkan loading state

const sendToServerWithMessage = async (message, idx) => {
  const data = window.dataParam;

    if (!data || !data.person1 || !data.person2) {
    alert("Silakan klik tombol Generate dulu.");
    return;
  }

  // Jika konten sudah pernah di-fetch → langsung toggle accordion
  if (contents[idx]) {
    setOpenIndex(openIndex === idx ? null : idx);
    return;
  }

  try {
    setLoadingIndex(idx); // Mulai loading

    const response = await fetch('https://mu67a3hmpg.ap-southeast-1.awsapprunner.com/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, message }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const result = await response.json();

    // Simpan konten ke state dan tampilkan
    setContents(prev => ({
      ...prev,
      [idx]: result?.response || 'Tidak ada jawaban dari server',
    }));

    setOpenIndex(idx);
  } catch (err) {
    console.error(err);
    alert("Gagal mengambil jawaban dari server.");
  } finally {
    setLoadingIndex(null);
  }
};


  const questions = [
    'Melihat destiny matrix saya, Apa kelebihan dari diri saya?',
    'Melihat destiny matrix saya, Apa kelemahan dari diri saya?',
    'Melihat destiny matrix saya, apa hal yang ada di masa lalu saya yang perlu saya perbaiki untuk masa depan?',
    'Dengan mencocokkan destiny matrix, apa karir yang cocok untuk saya?',
    'Bagaimana kriteria yang cocok untuk saya dalam memilih pasangan hidup dengan melihat destiny matrix saya?',
  ];

  return (
    <div
      className="flex items-center justify-center rounded-2xl py-10 px-5"
      style={{ background: 'linear-gradient(to bottom, #111827, #1f2937, #111827)' }}
    >
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-cinzel text-center mb-10 text-blue-400">Penjelasan</h1>

        {questions.map((title, idx) => {
          const isOpen = openIndex === idx;
          const isLoading = loadingIndex === idx;

          return (
            <div
              key={idx}
              className="mb-5 rounded-xl shadow-md backdrop-blur-sm border border-gray-700 bg-gray-800/90"
            >
              <button
                type="button"
                onClick={() => sendToServerWithMessage(title, idx)}
                className={`flex items-center w-full px-5 py-4 text-left font-semibold rounded-t-xl focus:outline-none transition duration-300 ease-in-out ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
                aria-expanded={isOpen}
                disabled={isLoading}
              >
                <span className="text-base sm:text-lg text-blue-300 flex-grow">
                  {title}
                </span>
                <div className="ml-4 w-6 h-6 flex items-center justify-center">
                  {isLoading ? (
                    <svg
                      className="w-5 h-5 text-blue-400 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12" cy="12" r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className={`w-6 h-6 transform transition-transform text-blue-400 ${isOpen ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1 5 5 9 1"
                      />
                    </svg>
                  )}
                </div>

              </button>

              {isOpen && (
                <div className="p-5 rounded-b-xl border-t border-gray-700 bg-gray-900">
                  <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-line">
                    {contents[idx] || 'Silakan refresh untuk mendapatkan jawaban...'}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
