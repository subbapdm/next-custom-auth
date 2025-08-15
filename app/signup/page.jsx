'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";


const page = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API call
      const res = await fetch('/api/auth/signup', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password })
      });

      const data = await res.json();

      if(!res.ok){
        toast.error(data.error || "User registration failed!");
        return;
      }

      toast.success(data.message);
      router.push('/login');
      
    } catch (error) {
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className="w-sm bg-white shadow-md rounded-md p-5 mt-8">
      <div className="my-2 mb-5 pb-2 text-center">
        <h1 className="font-bold text-2xl mb-1">Sign Up</h1>
        <p className="text-gray-400 text-[12px]">
          Create a new account to get started.
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="flex flex-col my-5">
          <label className="text-gray-700 font-medium text-sm mb-2">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="bg-slate-50 text-sm border-1 border-gray-300 py-[10px] px-4 rounded-md placeholder:text-gray-400 focus:placeholder:text-transparent focus:outline-none focus:ring-1 focus:ring-gray-300"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="flex flex-col my-5">
          <label className="text-gray-700 font-medium text-sm mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-slate-50 text-sm border-1 border-gray-300 py-[10px] px-4 rounded-md placeholder:text-gray-400 focus:placeholder:text-transparent focus:outline-none focus:ring-1 focus:ring-gray-300"
            placeholder="johndoe@example.com"
            required
          />
        </div>
        <div className="flex flex-col my-5">
          <label className="text-gray-700 font-medium text-sm mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-slate-50 text-sm border-1 border-gray-300 py-[10px] px-4 rounded-md placeholder:text-gray-400 focus:placeholder:text-transparent focus:outline-none focus:ring-1 focus:ring-gray-300"
            placeholder="Password"
            required
          />
        </div>

        <div className="mt-8">
          <button type="submit" className="bg-black w-full py-[10px] px-4 text-white rounded-md cursor-pointer text-sm hover:bg-black/90">Sign Up</button>
        </div>

      </form>
      <div className="my-5">
        <p className="text-gray-500 text-[12px]">
          Already have an account? <Link href="/login" className="text-black">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default page;
