import "./globals.css";
import localFont from "next/font/local";

const oldNewspaper = localFont({
  src: "./fonts/Oldnewspapertypes-449D.ttf",
  display: "swap",
});

export const metadata = {
  title: "Tilly and Roo Norfolk",
  description: "Hand poured wax melts in Norfolk.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oldNewspaper.className} bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
