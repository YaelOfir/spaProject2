import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Board from "./compnents/Board/Board";
import CreateTest from "./compnents/CreateTest/CreateTest";
import Fun from "./compnents/fun/fun";
import Button from "@material-ui/core";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={CreateTest} />
          <Route path="/board" component={Board} />
          <Route path="/fun" component={Fun}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
