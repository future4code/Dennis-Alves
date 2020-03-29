import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import ListTripsForm from '../../Components/ListTripsForm/ListTripsForm'




class TripDetailsList extends Component {
  


  render() {
   

    return (
      <div>
          <ListTripsForm type="details"></ListTripsForm>
      </div>
    )
  }
}

export default TripDetailsList;