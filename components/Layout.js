import Navbar from "./Header/Header";
import Footer from "./Footer/Footer";
import WithCursorPoint from "./WithCursorPoint";
import {Insights} from "./insights";
function Layout({ children }) {
  return (
    <div id="layout_wrapper">
        {children}
        <Insights />
      <Footer />
    </div>
  );
}

export default WithCursorPoint(Layout);
