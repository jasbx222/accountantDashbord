import { Space_Grotesk } from "next/font/google";

import ButtonShowMenu from "./components/ButtonShowMenu/ButtonShowMenu";
import "./globals.css";

const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight:'700'
});


export const metadata = {
  title: "داش بورد",
  description: "application for managing customers",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  apple: {
    touchIcon: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
     
   
      <body
        className={`${space_Grotesk.className}  antialiased`}
      >
         <ButtonShowMenu/>
        {children}
      </body>
    </html>
  );
}
