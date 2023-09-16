import { Html, Head, Main, NextScript } from "next/document"
import Footer from "@/components/Footer/Footer"
import NewNav from "@/components/Navbar/Navbar"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NewNav />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
