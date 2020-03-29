import React, { Component } from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import {routes} from '../Router'
import Button from '@material-ui/core/Button';





const HomePage = props => {
  console.log(props)
    return (
      <div>
          Home
          <Button onClick={props.goToCreateApplyPage} > apply page</Button>
          <Button onClick={props.goToLoginPage} >login</Button>
          <Button onClick={props.goToTripList}>Trip list</Button>
          <Button onClick={props.goToCreateTripPage}>create trip</Button>
          <Button onClick={props.goToCreateApplyPage}>create apply</Button>
          <Button onClick={props.goToManagePage}>Manage</Button>
      </div>
    )
}
function mapDispatchToProps(dispatch){
  
  return{
      goToCreateApplyPage: () => dispatch(push('/application-form')),
      goToLoginPage: ()=> dispatch(push(routes.autentication)),
      goToTripList: ()=> dispatch(push(routes.listTrip)),
      goToCreateTripPage:() =>dispatch(push(routes.createTrip)),
      goToCreateApplyPage:() =>dispatch(push(routes.createApply)),
      goToManagePage:() => dispatch(push(routes.manageApply))
    }
  }
export default connect(
  null,
  mapDispatchToProps
)(HomePage);