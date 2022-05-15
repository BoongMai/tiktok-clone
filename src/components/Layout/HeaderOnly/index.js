import Header from "./Header";

function DefaultLayout({ children }) {
    return (
        <div>
          <Header />
          <div class="containter">
            <div class="content">
                {children}
            </div>
          </div>
        </div>
      );
}

export default DefaultLayout;