import { Bell, Search, Settings, User } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white py-4 px-4 border-b border-gray-100">
        <div>
          <div className="relative">
            <input type="text" name="search" placeholder="Search..." className="w-lg py-2 px-5 bg-gray-100 rounded-full" />
            <button type="submit" className="absolute right-4 top-2"><Search size={20} className="text-gray-400" /></button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-1">
            <button>
                <Bell size={16} />
            </button>
            <button>
                <Settings size={16} />
            </button>
            <button>
                <User size={16} />
            </button>
        </div>
    </div>
  )
}

export default Navbar