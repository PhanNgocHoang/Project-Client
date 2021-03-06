import { Header } from "./component/header/header";
import { Footer } from "./component/footer/footer";
import { Search } from "./component/book/search";
import { RouterComponent } from "./component/router";
const App = () => {
  return (
    <div className="template-index home-default">
      <div className="pageWrapper">
        <Search />
        <Header />
        <div id="page-content">
          <RouterComponent></RouterComponent>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
