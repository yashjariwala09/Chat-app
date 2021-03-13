import "./App.css";
import ChatScreen from "./Container/ChatScreen";
import Login from "./Container/LoginPage";
import { Route, Switch, withRouter } from "react-router-dom";

function App() {
  return (
    <div className={"App"} style={{ display: "flex" }}>
      <Switch>
        <Route component={Login} />
        <Route path={"/chat"} component={ChatScreen} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
