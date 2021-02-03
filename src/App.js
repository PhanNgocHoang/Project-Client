import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { Library } from "./pages/Library";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/library" component={Library} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
