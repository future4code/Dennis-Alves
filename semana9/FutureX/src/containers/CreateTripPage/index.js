import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import CreateTripForm from "../../Components/CreateTripForm/CreateTripForm";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';





class CreatTripPage extends Component {
  


  render() {
  
    return (
      <div>
          <CreateTripForm></CreateTripForm>
      </div>
    )
  }
}

export default CreatTripPage;