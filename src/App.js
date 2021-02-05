import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/library" exact component={Library} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
