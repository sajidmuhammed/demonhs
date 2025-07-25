import './globals.css';
import NavBar from '../components/HomePage/NavBar';
import Footer from '../components/HomePage/Footer';
import CookieSettingsMessage from '../components/HomePage/CookieSettingsMessage';
import ScrollToMiddle from '../components/common/ScrollToMiddle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../components/common/AuthContext';
export const metadata = {
  title: "NHS UK",
  description: "Generated by chisquare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <AuthProvider>
        <CookieSettingsMessage/>
        <NavBar/>
        <ScrollToMiddle/>
        {children}
        <Footer/>
        <ToastContainer position='top-right' autoClose={3000}/>
        </AuthProvider>
      </body>
    </html>
  );
}
