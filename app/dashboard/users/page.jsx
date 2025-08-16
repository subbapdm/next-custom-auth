"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Table from "../_components/tables/Table";

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
          This is users page. Where you can manage your users.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 my-5">
        <div className="p-4 bg-white rounded-md">
          <Table users={users} />
        </div>
      </div>
    </main>
  );
};

export default page;
