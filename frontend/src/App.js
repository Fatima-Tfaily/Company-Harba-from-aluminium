import "./App.css";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Work from "./components/Work.jsx";
import Dashboard from "./components/Dashboard.jsx";
import "./styles/responsive.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {" "}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/db" component={Dashboard} />
          <Route path="/work" component={Work} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
