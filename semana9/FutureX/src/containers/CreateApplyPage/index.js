import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import CreateApplyForm from "../../Components/CreateApplyForm/CreateApplyForm";








class CreatApplyPage extends Component {
  


  render() {
   

    return (
      <div>
          <CreateApplyForm></CreateApplyForm>
      </div>
    )
  }
}

export default CreatApplyPage;