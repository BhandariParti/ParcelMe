import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import ReduxProvider from "../redux/reduxProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
      <Providers>
      <ToastContainer
       hideProgressBar
        theme="dark"/>
          {children}
        </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
