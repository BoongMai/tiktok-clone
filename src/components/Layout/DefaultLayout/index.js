import Header from "../components/Header";
import Sidebar from "./Sidebar/index";


function DefaultLayout({ children }) {
    return (
        <div>
          <Header />
          <div class="containter">
            <Sidebar />
            <div class="content">
                {children}
            </div>
          </div>
        </div>
      );
}

export default DefaultLayout;