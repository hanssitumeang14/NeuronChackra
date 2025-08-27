'use client';

import { useState, useEffect, useRef } from 'react';

export default function Information() {
  const [contents, setContents] = useState({});
  const [openIndex, setOpenIndex] = useState(null);
  const [loadingIndex, setLoadingIndex] = useState(null);

  // === Share-to-unlock states (matched to Information1) ===
  const [sharedUnlocked, setSharedUnlocked] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [pendingIndex, setPendingIndex] = useState(null);

  const [shareBusy, setShareBusy] = useState(false);
  const [shareStatus, setShareStatus] = useState(null); // 'cancel' | 'unsupported' | 'error' | null

  const modalRef = useRef(null);
  useEffect(() => {
    if (!showShareModal) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const el = modalRef.current;
    if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const t = setTimeout(() => el && el.focus && el.focus({ preventScroll: true }), 300);
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowShareModal(false);
        setPendingIndex(null);
        setShareStatus(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [showShareModal]);

  const shareTextOnly = async () => {
    setShareBusy(true);
    setShareStatus(null);
    try {
      if (!navigator || !navigator.share) {
        setShareStatus('unsupported');
        return;
      }
      const url = typeof window !== 'undefined' ? window.location.href : '';
      const text = `Ini hasil Destiny Matrix aku. Cobain juga tools self-discovery yang akurat dan terpercaya:
${url}`;
      await navigator.share({ title: 'Destiny Matrix', text });
      setSharedUnlocked(true);
      setShowShareModal(false);
      if (pendingIndex !== null) setOpenIndex(pendingIndex);
      setPendingIndex(null);
    } catch (e) {
      if (e && (e.name === 'AbortError' || e.name === 'NotAllowedError')) setShareStatus('cancel');
      else {
        console.error('[shareTextOnly] ERROR:', e);
        setShareStatus('error');
      }
    } finally {
      setShareBusy(false);
    }
  };

  const sendToServerWithMessage = async (message, idx) => {
    const data = window.dataParam;

    if (!data || !data.person1 || !data.person2) {
    alert("Silakan klik tombol Generate dulu.");
      return;
    }

  // Jika konten sudah pernah di-fetch → langsung toggle accordion
    if (contents[idx]) {
      if (sharedUnlocked) setOpenIndex(openIndex === idx ? null : idx);
      else {
        setPendingIndex(idx);
        setShowShareModal(true);
      }
      return;
    }

    try {
      setLoadingIndex(idx); // Mulai loading

      const response = await fetch('https://mu67a3hmpg.ap-southeast-1.awsapprunner.com/askcouple', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const result = await response.json();

      setContents((prev) => ({
        ...prev,
        [idx]: result && result.response ? result.response : 'Tidak ada jawaban dari server',
      }));

      // Buka kalau sudah share; kalau belum, munculkan modal
      if (sharedUnlocked) setOpenIndex(idx);
      else {
        setPendingIndex(idx);
        setShowShareModal(true);
      }
    } catch (err) {
      console.error(err);
      alert('Gagal mengambil jawaban dari server.');
    } finally {
      setLoadingIndex(null);
    }
  };

  const questions = [
    'Melihat destiny matrix saya dan pasangan saya, apa kelebihan dari diri saya dan pasangan saya?',
    'Melihat destiny matrix saya dan pasangan saya, apa kelemahan dari diri saya dan pasangan saya?',
    'Melihat destiny matrix saya dan pasangan saya, apa hal yang ada di masa lalu saya dan pasangan saya yang perlu diperbaiki untuk masa depan?',
    'Dengan mencocokkan destiny matrix, apa karir yang cocok untuk saya dan pasangan saya?',
    'Bagaimana kriteria yang cocok untuk saya dan pasangan saya dalam memilih pasangan hidup dengan melihat destiny matrix kami?',
  ];

  return (
    <div className="flex items-center justify-center rounded-2xl py-10 px-5 bg-[#111827]">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-cinzel text-center mb-10 text-[#60a5fa]">Penjelasan</h1>

        {questions.map((title, idx) => {
          const isOpen = openIndex === idx;
          const isLoading = loadingIndex === idx;

          return (
            <div
              key={idx}
              className="mb-5 rounded-xl shadow-md backdrop-blur-sm border border-[#374151] bg-[#1f2937]"
            >
              <button
                type="button"
                onClick={() => sendToServerWithMessage(title, idx)}
                className={`flex items-center w-full px-5 py-4 text-left font-semibold rounded-t-xl focus:outline-none transition duration-300 ease-in-out ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
                aria-expanded={isOpen}
                disabled={isLoading}
              >
                <span className="text-base sm:text-lg text-[#93c5fd] flex-grow">
                  {title}
                </span>
                <div className="ml-4 w-6 h-6 flex items-center justify-center">
                  {isLoading ? (
                    <svg
                      className="w-5 h-5 text-[#60a5fa] animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
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
                      className={`w-6 h-6 transform transition-transform text-[#60a5fa] ${isOpen ? 'rotate-180' : ''}`}
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
                <div className="p-5 rounded-b-xl border-t border-[#374151] bg-[#0f172a]">
                  <p className="text-sm leading-relaxed text-[#d1d5db] whitespace-pre-line">
                    {contents[idx] || 'Silakan refresh untuk mendapatkan jawaban...'}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {showShareModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="share-modal-title" aria-describedby="share-modal-desc">
            <div
              className="absolute inset-0 backdrop-blur-sm"
              style={{ background: 'rgba(0,0,0,0.6)' }}
              onClick={() => {
                setShowShareModal(false);
                setPendingIndex(null);
                setShareStatus(null);
              }}
            />
            <div
              ref={modalRef}
              id="share-modal"
              tabIndex={-1}
              className="relative w-11/12 max-w-md rounded-2xl shadow-xl p-6 outline-none"
              style={{
                background: '#0b1220',
                border: '1px solid #374151',
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
              }}
            >
              <button
                type="button"
                onClick={() => {
                  setShowShareModal(false);
                  setPendingIndex(null);
                  setShareStatus(null);
                }}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1 sm:p-2 rounded-full text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 transition"
                aria-label="Tutup modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: '#1f2937' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{ color: '#60a5fa' }}>
                    <path d="M18 8a3 3 0 10-2.83-4H15a3 3 0 103 4zM6 14a3 3 0 10-2.83 4H3a3 3 0 103-4zm9-6.2l-6.27 3.13a3.99 3.99 0 010 1.94L15 16.8a3 3 0 11-.9 1.79l-6.27-3.13a4 4 0 110-6.92L14.1 5.4A3 3 0 1115 7.2z" />
                  </svg>
                </div>
                <h2 id="share-modal-title" className="text-xl font-semibold" style={{ color: '#e5e7eb' }}>
                  Ingin tahu hasilnya?
                </h2>
              </div>

              <div id="share-modal-desc" className="text-sm text-center space-y-1" style={{ color: '#9ca3af' }}>
                <p>Langkah-langkah untuk melihat <em>free reading</em>:</p>
                <p>1. Share link Destiny Matrix ini ke temanmu.</p>
                <p>2. Kasih tahu mereka ada tools <em>self-discovery</em> yang akurat dari tanggal lahir.</p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={shareTextOnly}
                  disabled={shareBusy}
                  className="inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold transition w-full"
                  style={{
                    background: '#60a5fa',
                    color: '#0b1220',
                    opacity: shareBusy ? 0.7 : 1,
                    cursor: shareBusy ? 'not-allowed' : 'pointer',
                  }}
                >
                  {shareBusy ? (
                    <svg className="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                  ) : (
                    <>Gaskan!!!</>
                  )}
                </button>

                {shareStatus === 'cancel' && (
                  <p className="mt-3 text-sm text-center" style={{ color: '#fca5a5' }}>
                    Kamu membatalkan share. Coba lagi untuk membuka jawabannya.
                  </p>
                )}
                {shareStatus === 'unsupported' && (
                  <p className="mt-3 text-sm text-center" style={{ color: '#fca5a5' }}>
                    Perangkat/browser ini belum mendukung fitur berbagi. Coba dari HP (Chrome/Safari).
                  </p>
                )}
                {shareStatus === 'error' && (
                  <p className="mt-3 text-sm text-center" style={{ color: '#fca5a5' }}>
                    Terjadi error saat membuka share. Coba lagi.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
