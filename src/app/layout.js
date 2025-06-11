import "./globals.css";
import "../components/Projects.css";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Richard Hall, Full Stack Developer",
};
export const viewport = {
  themeColor: "#72767a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: "#72767a", margin: 0 }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/crowBackground1.jpg?v=1"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          position: "relative",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          overflowX: "hidden",
        }}
      >
        {/* Background Image in DOM */}
        <img
          src="/crowBackground1.jpg?v=1"
          alt=""
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
          fetchPriority="high"
        />
        {children}
      </body>
    </html>
  );
}
