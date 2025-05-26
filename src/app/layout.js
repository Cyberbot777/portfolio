import './globals.css';

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Richard Hall, Full Stack Developer',
};

export const viewport = {
  themeColor: '#E6F0FA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: '#E6F0FA' }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        style={{
          backgroundColor: '#E6F0FA',
          margin: 0,
          padding: 0,
          minHeight: '100vh',
        }}
      >
        {children}
      </body>
    </html>
  );
}