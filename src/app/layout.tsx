import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://peak-functional.vercel.app"),
  title: {
    default: "Peak Functional & Sports Medicine",
    template: "%s | Peak Functional & Sports Medicine",
  },
  description:
    "Evidence-aware functional and sports medicine resources, episodes, and order-of-operations frameworks for athletes and clinicians.",
  openGraph: {
    title: "Peak Functional & Sports Medicine",
    description:
      "Podcast hub and educational resource for order-of-operations functional & sports medicine.",
    url: "https://peak-functional.vercel.app",
    siteName: "Peak Functional & Sports Medicine",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-site text-[color:var(--color-foreground)] transition-colors duration-300`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-site transition-colors duration-300">
            <SiteHeader />
            <main className="flex-1 px-4 py-10">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">{children}</div>
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
