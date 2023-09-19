import Footer from "../Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-r bg-base-content">
      <Navbar className="margin-0" />
      {children}
      <Footer />
    </div>
  )
}
