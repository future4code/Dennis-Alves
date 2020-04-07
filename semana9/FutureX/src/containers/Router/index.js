import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from '../HomePage'
import CreateTripPage from '../CreateTripPage'
import CreateApplyPage from '../CreateApplyPage'
import ListTripPage from '../ListTripPage'
import TripDeteailsList from '../TripDetailsPage'



export const routes = {
  root: "/",
  // Outras rotas aqui
  createApply: "/application-form", 
  autentication: "/login ",                  
  createTrip: "/trips/create",        
  listTrip: "/trips/list",               
  manageApply: "/trips/details",         
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.createApply} component={CreateApplyPage} />
        <Route exact path={routes.autentication} component={LoginPage} />
        <Route exact path={routes.createTrip} component={CreateTripPage} />
        <Route exact path={routes.listTrip} component={ListTripPage} />
        <Route exact path={routes.manageApply} component={TripDeteailsList} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
