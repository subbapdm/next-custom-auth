'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="max-w-7xl  gap-5 py-5 px-10">
        <div className="my-5">
          <h1 className="font-bold text-2xl text-gray-700 mb-3">
            Simple NextJS authentication workflow.
          </h1>
          <p className="text-gray-500 text-sm">
            A practical example of a complete authentication flow in Next.js.
            Shows how login and registration work under the hood — from secure
            password hashing and verification to session/token management and
            middleware-based route protection with automatic redirection.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/login')} className="bg-black text-white py-2 px-5 rounded-md text-sm hover:bg-black/90 cursor-pointer">
            Login
          </button>
          <button onClick={() => router.push('/signup')} className="bg-gray-200 text-black py-2 px-5 rounded-md text-sm hover:bg-gray-300/90 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      <footer className="mt-20">
        <p className="text-[12px] text-gray-500">
          © 2025 Padam Subba. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
