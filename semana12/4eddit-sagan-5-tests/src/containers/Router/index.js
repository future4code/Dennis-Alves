import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import FeedPage from "../FeedPage/FeedPage";
import HomePage from "../HomePage/HomePage";
import UserPage from "../UserPage/UserPage";
import DisclaimerPage from "../DisclaimerPage/DisclaimerPage";
import PostPage from "../PostPage/PostPage";



export const routes = {
  LoginPage: "/login",
  FeedPage: "/feed",
  HomePage: "/home",
  UserPage: "/user",
  DisclaimerPage: "/disclaimer",
  PostPage: "/feed/post"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.LoginPage} component={LoginPage} />
        <Route exact path={routes.FeedPage} component={FeedPage} />
        <Route exact path={routes.HomePage} component={HomePage} />
        <Route exact path={routes.UserPage} component={UserPage} />
        <Route exact path={routes.DisclaimerPage} component={DisclaimerPage} />
        <Route exact path={routes.PostPage} component={PostPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;