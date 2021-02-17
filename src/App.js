import { Header } from "./component/header/header";
import { Footer } from "./component/footer/footer";
import { Search } from "./component/book/search";
import { RouterComponent } from "./component/router";
function App() {
  return (
    <div className="pageWrapper">
      <Search />
      <Header />
      <div id="page-content">
        <RouterComponent></RouterComponent>
      </div>
      <Footer />
    </div>
  );
}

export default App;
