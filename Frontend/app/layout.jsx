import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import ReduxProvider from "@/redux/Provider";

export const metadata = {
  title: "DevsKonnekt",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-background text-primary`}
      >
        <div className="max-w-7xl w-full mx-auto flex flex-col min-h-screen justify-between">
          <ReduxProvider>
           <NavBar />
           {children}
           <Footer />
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
