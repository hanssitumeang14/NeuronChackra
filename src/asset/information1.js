'use client';

import { useState } from 'react';

export default function Information1() {
  const [contents, setContents] = useState({});
  const [openIndex, setOpenIndex] = useState(null);

  // const sendToServerWithMessage = async (message, idx) => {
  //   const data = window.latestDataParam;

  //   if (!data || !data.points) {
  //     alert("Silakan klik tombol Generate dulu.");
  //     return;
  //   }

  //   // Toggle accordion
  //   if (openIndex === idx) {
  //     setOpenIndex(null);
  //     return;
  //   }

  //   try {
  //     // Dummy response
  //     const dummyAnswer = `🧠 Jawaban dummy untuk:\n\n"${message}"\n\n(Sementara karena backend belum aktif)`;

  //     setContents(prev => ({
  //       ...prev,
  //       [idx]: dummyAnswer,
  //     }));

  //     setOpenIndex(idx);
  //   } catch (err) {
  //     console.error(err);
  //     alert("Gagal mengambil jawaban dari server.");
  //   }
  // };

  const sendToServerWithMessage = async (message, idx) => {
  const data = window.latestDataParam;

  if (!data || !data.points) {
    alert("Silakan klik tombol Generate dulu.");
    return;
  }

  // Toggle accordion
  if (openIndex === idx) {
    setOpenIndex(null);
    return;
  }

  try {
    const response = await fetch('https://mu67a3hmpg.ap-southeast-1.awsapprunner.com/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        message,
        thread_id: 'personal-matrix',
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const result = await response.json();

    setContents(prev => ({
      ...prev,
      [idx]: result?.answer || 'Tidak ada jawaban dari server',
    }));

    setOpenIndex(idx);
  } catch (err) {
    console.error(err);
    alert("Gagal mengambil jawaban dari server.");
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

          return (
            <div
              key={idx}
              className="mb-5 rounded-xl shadow-md backdrop-blur-sm border border-gray-700 bg-gray-800/90"
            >
              <button
                type="button"
                onClick={() => sendToServerWithMessage(title, idx)}
                className="flex items-center w-full px-5 py-4 text-left font-semibold rounded-t-xl focus:outline-none transition duration-300 ease-in-out"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg text-blue-300 flex-grow">{title}</span>
                <div className="ml-4 flex-shrink-0 w-6 h-6">
                  <svg
                    className={`w-6 h-6 transform transition-transform text-blue-400 ${isOpen ? 'rotate-180' : ''
                      }`}
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
                </div>
              </button>


              {isOpen && (
                <div
                  className="p-5 rounded-b-xl border-t border-gray-700 bg-gray-900"
                >
                  <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-line">
                    {contents[idx] || 'Silakan klik untuk mendapatkan jawaban...'}
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
