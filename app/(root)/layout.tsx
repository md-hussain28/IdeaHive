import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "../components/Navbar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-work-sans">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
