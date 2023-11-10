import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: 'DevsKonnekt',
  description: 'Generated by create next app',
}


const poppins = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-background max-w-7xl w-full mx-auto`}
      >
        <NavBar />
        {children}
      </body> 
    </html>
  );
}