import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata = {
  title: "Custom Nextjs auth",
  description: "Custom Nextjs authentication flow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="h-screen flex items-center justify-center bg-slate-50">
          {children}
        </div>
        <Toaster/>
      </body>
    </html>
  );
}
