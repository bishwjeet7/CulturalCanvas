import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./Navbar";
import Footer from "./components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  );
}
