import { Inter } from "next/font/google";
import "./globals.css";
import AppWrapper from './appWrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Evening With Pastor Faheem",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
            {children}
        </AppWrapper>
      </body>
      </html>
  );
}
