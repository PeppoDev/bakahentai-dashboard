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
import Login from "./components/Login";

function App() {
  const [isLogin, setIsLogin] = React.useState(false);

  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Bar />
          <div className="main-container">
            {!isLogin ? (
              <Login setClick={setIsLogin} value={isLogin} />
            ) : (
              <>
                <MenuAside />
                <main className="main-page">
                  <Switch>
                    <Route path="/" exact component={pages.Home} />
                    <Route
                      path="/Configuracoes"
                      exact
                      component={pages.Settings}
                    />
                    <Route
                      path="/Configuracoes/:id"
                      exact
                      component={pages.Settings}
                    />
                    <Route
                      path="/Comentarios"
                      exact
                      component={pages.Comments}
                    />
                    <Route path="/ListaDeFap" exact component={pages.FapList} />
                    <Route
                      path="/EpisodiosRegistrados"
                      exact
                      component={pages.RegisterEpisodes}
                    />
                    <Route
                      path="/EpisodiosRegistrados/:id"
                      exact
                      component={pages.RegisterEpisodes}
                    />
                    <Route
                      path="/TodosEpisodios"
                      exact
                      component={pages.AllEpisodes}
                    />
                    <Route
                      path="/TodosHentais"
                      exact
                      component={pages.AllHentais}
                    />
                    <Route
                      path="/HentaisRegistrados"
                      exact
                      component={pages.RegisterHentais}
                    />
                    <Route
                      path="/HentaisRegistrados/:id"
                      exact
                      component={pages.RegisterHentais}
                    />
                    <Route
                      path="/Notificacoes"
                      exact
                      component={pages.Notifications}
                    />
                    <Route path="/Status" exact component={pages.Status} />
                    <Route
                      path="/Taxonomias"
                      exact
                      component={pages.Taxonomies}
                    />
                    <Route path="/Usuario" exact component={pages.Users} />}
                  </Switch>
                </main>
              </>
            )}
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
