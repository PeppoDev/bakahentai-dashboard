//another imports
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages/sections
import * as pages from "./pages";
//css
import "./assets/styles/global.scss";
import "./App.scss";
//components
import Bar from "../src/components/Bar";
import MenuAside from "./components/MenuAside";
//react-redux
import { Provider } from "react-redux";
import store from "./store/reducers/index";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Bar />
          <div className="main-container">
            <MenuAside />
            <main className="main-page">
              <Switch>
                <Route path="/" exact component={pages.Home} />
                <Route path="/Settings" exact component={pages.Settings} />
                <Route path="/Comments" exact component={pages.Comments} />
                <Route path="/Episodes" exact component={pages.Episodes} />
                <Route path="/FapList" exact component={pages.FapList} />
                <Route path="/Hentais" exact component={pages.Hentais} />
                <Route
                  path="/Notifications"
                  exact
                  component={pages.Notifications}
                />
                <Route path="/Status" exact component={pages.Status} />
                <Route path="/Taxonomies" exact component={pages.Taxonomies} />
                <Route path="/Users" exact component={pages.Users} />
              </Switch>
            </main>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
