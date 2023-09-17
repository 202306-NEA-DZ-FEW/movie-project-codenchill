import Footer from "../Footer/Footer.1"
import Navbar from "@/components/Navbar/Navbar"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
