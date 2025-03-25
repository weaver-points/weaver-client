import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

const satoshi = localFont({
    src: "./fonts/Satoshi-Variable.woff2",
    variable: "--font-satoshi",
    weight: "300 900",
});

export const metadata: Metadata = {
    title: "Weaver",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${satoshi.variable} antialiased bg-background`}>
                <ThemeProvider>
                    <ThemeToggle />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
