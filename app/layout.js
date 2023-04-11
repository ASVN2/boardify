import '../styles/globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Boardify',
  description: 'It a website for selling board',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
