
import Navbar from "./_components/Navbar"
import Sidebar from "./_components/Sidebar"

const DashboardLayout =  async ({ children }) => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row h-full">
        <div className="flex-1 md:max-w-[250px] mr-5">
          <Sidebar />
        </div>
        <div className="flex-4">
          <Navbar />

          {children}

        </div>
      </div>
    </div>
  )
}

export default DashboardLayout;