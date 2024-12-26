import './globals.css';
import localFont from 'next/font/local';

const brandon = localFont({
  src: [
    {
      path: '../../public/fonts/BrandonGrotesque-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BrandonGrotesque-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BrandonGrotesque-Bold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-brandon'
});

export const metadata = {
  title: 'Code with HQ',
  description: 'Learn to code with HQ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${brandon.variable}`}>
      <body className="font-sans antialiased bg-black">{children}</body>
    </html>
  );
}