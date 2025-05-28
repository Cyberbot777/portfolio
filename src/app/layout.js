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
    <html
      lang="en"
      style={{
        backgroundImage: 'url(/crowBackground1.jpg?v=1)', 
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        minHeight: '100vh',
        margin: 0,
      }}
    >
      <head><meta charSet="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="icon" href="/favicon.ico" /><link rel="preload" href="/crowBackground1.jpg?v=1" as="image" fetchpriority="high" /><link rel="preload" href="/components/Projects.css" as="style" /></head>
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          color: '#ffffff',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}