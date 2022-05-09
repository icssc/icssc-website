import Footer from "./footer";
import NavBar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div style={{marginTop: "75px"}}>
        {children}
      </div>
      <Footer />
    </>
  )
}