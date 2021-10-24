import "./App.css";
import { HomePage } from "./containers/HomePage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import { findWork } from "./containers/findWork";
import { Profiles } from "./containers/profiles";
import { SearchFreelancers } from "./containers/searchFreelancers";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          fr
          <Route path="/" exact component={HomePage} />
          <Route
            path="/customer/access/:action"
            exact
            component={CustomerAccessPage}
          />
          <Route path="/findWork" exact component={findWork} />
          <Route
            path="/searchfreelancers"
            exact
            component={SearchFreelancers}
          />
          <Route path="/profiles/:id" exact component={Profiles} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
