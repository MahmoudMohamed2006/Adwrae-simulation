import './globals.css';

export const metadata = {
  title: 'Adware Simulation — Overview',
  description: 'Cybersecurity training platform - Simulation Only',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
