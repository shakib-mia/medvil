import { DM_Sans, El_Messiri } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Medvil',
  description: 'Maintain That Wonderful, Clean Smile',
};

export const ElMessiri = El_Messiri({ subsets: ['latin'] });
export const DMSans = DM_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
