import Navbar from "./Header/Header";
import Footer from "./Footer/Footer";
import WithCursorPoint from "./WithCursorPoint";
function Layout({ children }) {
  return (
    <div id="layout_wrapper">
      <Navbar />
        {children}
      <Footer />
    </div>
  );
}

export default WithCursorPoint(Layout);
