"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6">
      <div className="flex flex-row gap-6 mb-8">
        <Link
          href="/personal-matrix"
          className="relative border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-lg font-semibold
                     hover:bg-yellow-600 hover:text-black transition
                     before:absolute before:-inset-1 before:rounded-lg before:bg-yellow-600 before:opacity-25 before:blur-lg before:animate-glow
                     after:absolute after:-inset-2 after:rounded-lg after:bg-yellow-600 after:opacity-10 after:blur-2xl after:animate-glow-slower
                     z-10
                     focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
        >
          Personal Matrix
        </Link>

        <Link
          href="/compatibility-matrix"
          className="relative border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg font-semibold
                     hover:bg-cyan-600 hover:text-black transition
                     before:absolute before:-inset-1 before:rounded-lg before:bg-cyan-600 before:opacity-25 before:blur-lg before:animate-glow
                     after:absolute after:-inset-2 after:rounded-lg after:bg-cyan-600 after:opacity-10 after:blur-2xl after:animate-glow-slower
                     z-10
                     focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
        >
          Compatibility Matrix
        </Link>
      </div>

      <Link
        href="/menuAbout"
        className="relative border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-lg font-semibold
                   hover:bg-purple-500 hover:text-black transition
                   before:absolute before:-inset-1 before:rounded-lg before:bg-purple-500 before:opacity-25 before:blur-lg before:animate-glow
                   after:absolute after:-inset-2 after:rounded-lg after:bg-purple-500 after:opacity-10 after:blur-2xl after:animate-glow-slower
                   z-10
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        About
      </Link>

      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            opacity: 0.25;
            transform: scale(1);
            box-shadow: 0 0 12px 4px;
          }
          50% {
            opacity: 0.5;
            transform: scale(1.03);
            box-shadow: 0 0 20px 6px;
          }
        }

        @keyframes glow-slower {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
            box-shadow: 0 0 20px 10px;
          }
          50% {
            opacity: 0.3;
            transform: scale(1.02);
            box-shadow: 0 0 30px 15px;
          }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
          will-change: transform, opacity, box-shadow;
        }

        .animate-glow-slower {
          animation: glow-slower 5s ease-in-out infinite;
          will-change: transform, opacity, box-shadow;
        }
      `}</style>
    </div>
  );
}
