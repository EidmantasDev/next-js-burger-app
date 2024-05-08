import './globals.css';

export const metadata = {
  title: 'NextJS Burger App',
  description: 'First NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
