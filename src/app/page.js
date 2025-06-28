"use client";
import Link from "next/link";

export default function Home() {
 return (
    <div className="flex items-center justify-center min-h-screen py-2 gap-5 bg-gradient-to-b from-[#1a0a3a] via-[#0b071d] to-[#000000]">
      <Link
        href="/personal-matrix"
        className="relative border-2 border-[#ffd700] text-[#ffd700] px-6 py-3 rounded-lg font-semibold
                   hover:bg-[#ffd700] hover:text-black transition
                   before:absolute before:-inset-1 before:rounded-lg before:bg-[#ffd700] before:opacity-30 before:blur-xl before:animate-glow
                   after:absolute after:-inset-1 after:rounded-lg after:bg-[#ffd700] after:opacity-20 after:blur-2xl after:animate-glow-slower
                   z-10"
      >
        Personal Matrix
      </Link>

      <Link
        href="/compatibility-matrix"
        className="relative border-2 border-[#00ffff] text-[#00ffff] px-6 py-3 rounded-lg font-semibold
                   hover:bg-[#00ffff] hover:text-black transition
                   before:absolute before:-inset-1 before:rounded-lg before:bg-[#00ffff] before:opacity-30 before:blur-xl before:animate-glow
                   after:absolute after:-inset-1 after:rounded-lg after:bg-[#00ffff] after:opacity-20 after:blur-2xl after:animate-glow-slower
                   z-10"
      >
        Compatibility Matrix
      </Link>

      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes glow-slower {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-glow-slower {
          animation: glow-slower 3.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
