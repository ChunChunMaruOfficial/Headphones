
import { Jockey_One, Inclusive_Sans, Roboto } from "next/font/google";
import "./globals.css";

const jockeyOne = Jockey_One({
  variable: '--font-jockey-one',
  subsets: ['latin'],
  weight: "400",
});

const Robot = Roboto({
  variable: '--roboto',
  subsets: ['latin'],
  weight: ["400", "700", "900"]
});

const InclusiveSans = Inclusive_Sans({
  variable: '--font-inclusive-sans',
  subsets: ['latin'],
  weight: ["400", "700"]
});


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${jockeyOne.variable} ${InclusiveSans.variable} ${Robot.variable}`}>
        {children}
      </body>
    </html>
  );
}
