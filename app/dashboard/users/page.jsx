"use client";

import { Pen, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
    const [users, setUsers] = useState([]);

    const router = useRouter();

    useEffect(() => {
        
        const fetchUsers = async () => {
        try {
            const res = await fetch("/api/users");
            const data = await res.json();

            if (res.ok) {
            setUsers(data.users);
            } else {
            toast.error(data.error || "Failed to fetch users");
            }
        } catch (err) {
            toast.error("Something went wrong!");
        }
        };

        fetchUsers();
  }, [router]);

  return (
    <main className="h-full mt-5">
      <div className="p-5 bg-white rounded-md">
        <h1 className="text-xl font-bold">Users</h1>
        <p className="text-sm text-gray-500 my-2">
          Hello, { 'name' } this is dashboard page. Where you can manage your data.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 my-5">
        <div className="p-4 bg-white rounded-md">
          <table className="w-full divide-y divide-gray-100">
            <thead className="bg-gray-50 text-md text-gray-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="py-4 px-3 text-sm font-semibold tracking-wide text-left">
                  Full Name
                </th>
                <th className="py-4 px-3 text-sm font-semibold tracking-wide text-left">
                  Email
                </th>
                <th className="py-4 px-3 text-sm font-semibold tracking-wide text-left">
                  Role
                </th>
                <th className="py-4 px-3 text-sm font-semibold tracking-wide text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="bg-white hover:bg-gray-50">
                  <td className="py-4 px-3 text-sm text-gray-500">
                    {user.fullName}
                  </td>
                  <td className="py-4 px-3 text-sm text-gray-500">
                    {user.email}
                  </td>
                  <td className="py-4 px-3 text-sm text-gray-500">
                    {user.role}
                  </td>
                  {user.role === "admin" && (
                    <td className="py-4 px-3 text-sm text-gray-500">
                      <div className="flex items-center gap-3">
                        <button className="hover:text-gray-700 cursor-pointer">
                          <Pen size={15} />
                        </button>
                        <button className="hover:text-gray-700 cursor-pointer">
                          <Trash size={15} />
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default page;
