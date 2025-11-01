import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/shared/CustomCursor";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Md. Hasibul Hasan",
    description: "Personal portfolio showcasing my work and skills",
    icons: {
    icon: "/Logo.png", // Add your favicon here
  },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased text-foreground`}
            >
                <CustomCursor />
                <div className="">
                    <Navbar />
                    <main className="flex-1 pt-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {children}
                    </main>
                    <Toaster position="top-right" />
                    <Footer />
                </div>
            </body>
        </html>
    );
}
