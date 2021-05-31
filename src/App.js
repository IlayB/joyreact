import "./App.scss";
import Top from "./Top/Top";
import Header from "./Header/Header";
import TopMenu from "./TopMenu/TopMenu";
import SubMenu from "./SubMenu/SubMenu";
import Content from "./Content/Content";
import Login from "./Login/Login";
import Register from "./Register/Register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Top />
        <Header />
        <TopMenu />
        <Route path="//" component={SubMenu} />
        <Route path="//" component={Content} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
