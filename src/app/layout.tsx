import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Globe Elite Detty December Packages',
  description: 'Premium travel and concierge services for Detty December',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

