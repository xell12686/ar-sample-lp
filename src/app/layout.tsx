import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Brand New Company",
  description: "We are in the middle of updating our website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartSans.className} font-normal text-primary`}>
        {children}
      </body>
    </html>
  );
}
