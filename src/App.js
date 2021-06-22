import "./App.css";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import HomePage from "./components/Homepage/Homepage";

function App() {
  const history = createHistory();

  return (
    <div className="App">
      <Router history={history}>
        {/*         <TopBar />
         */}{" "}
        <Route path="/" exact component={HomePage} />
        {/*         <Route path="/imagesearch" exact component={ImageSearchPage} />
         */}{" "}
      </Router>
    </div>
  );
}

export default App;
