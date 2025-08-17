import { Pen, Trash } from "lucide-react";

const Table = ({ users, currentUser }) => {
  return (
    <table className="w-full divide-y divide-gray-100">
      <thead className="bg-gray-50 text-md text-gray-700 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="py-4 px-3 text-[13px] font-semibold tracking-wide text-left">
            Full Name
          </th>
          <th className="py-4 px-3 text-[13px] font-semibold tracking-wide text-left">
            Email
          </th>
          <th className="py-4 px-3 text-[13px] font-semibold tracking-wide text-left">
            Role
          </th>
          <th className="py-4 px-3 text-[13px] font-semibold tracking-wide text-left">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id} className="bg-white hover:bg-gray-50">
            <td className="py-4 px-3 text-[13px] text-gray-500">{user.fullName}</td>
            <td className="py-4 px-3 text-[13px] text-gray-500">{user.email}</td>
            <td className="py-4 px-3 text-[13px] text-gray-500">{user.role}</td>

            {currentUser.role === "admin" && (
              <td className="py-4 px-3 text-[13px] text-gray-500">
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
  );
};

export default Table;
