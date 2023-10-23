import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "../components/NavBar";
import SequentialLoad from "@/components/SequentialLoad";

const poppins = Poppins({ weight: ["300", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nate Sawant - swnt.io",
  description: "Personal website of Nate Sawant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background`}>
        <NavBar />
        <div className="flex flex-col items-center justify-center">
          <div className=" w-64 sm:w-96">
            <SequentialLoad>{children}</SequentialLoad>
          </div>
        </div>
      </body>
    </html>
  );
}
