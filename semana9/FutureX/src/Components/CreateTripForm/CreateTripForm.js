import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl, Button } from '@material-ui/core';
import styled from 'styled-components';
import{newTrip} from '../../Actions/index.js'
import { connect } from "react-redux";


const DateWraper = styled.div`
  display:flex;
`
const InputWraper = styled.div`
  display:flex;
  flex-direction:column;
`

export class CreateTripForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createTripForm: {},
      auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZvOWhtdVM5U0xFVkF0TWs3UnVzIiwiZW1haWwiOiJkZW5uaXNAZ21haWwuY29tLmJyIiwiaWF0IjoxNTg1MzY5MjQ1fQ.jPWo0hg9m7IT-w_EUUhZPCJYJtt-aGj6USbF4xiPxZI",
    }
  }

  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({ createTripForm: { ...this.state.createTripForm, [name]: value } })

  }
  handleOnSubmit = event => {
    event.preventDefault();
    console.log(this.state.createTripForm)
    this.props.newTrip(this.state.createTripForm,this.state.auth)
  }

  render() {
    const newDate = new Date()
    let day = newDate.getDate() + 1
    let month = newDate.getMonth() + 1
    let year = newDate.getFullYear()
    if (day < 10) {
      day = "0" + day.toString()
    }
    if (month < 10) {
      month = "0" + month.toString()
    }
    const date = `${year}-${month}-${day}`

    return (
      <FormControl>
        <form onSubmit={this.handleOnSubmit} autoComplete="on">
          <InputLabel id="Planeta">Escolha um Planeta</InputLabel>
          <Select native id="Planeta" name="planet" value={this.state.createTripForm.planet} onChange={this.handleInputChange} required style={{ minWidth: 180 }}>
            <option value={""}></option>
            <option value={"Mercúrio"}>Mercúrio</option>
            <option value={"Vênus"}>Vênus</option>
            <option value={"Terra"}>Terra</option>
            <option value={"Marte"}>Marte</option>
            <option value={"Júpiter"}>Júpiter</option>
            <option value={"Saturno"}>Saturno</option>
            <option value={"Urano"}>Urano</option>
            <option value={"Netuno"}>Vênus</option>
          </Select>
          <DateWraper>
            <TextField
              id="date"
              type="date"
              label="Data"
              name="date"
              onChange={this.handleInputChange}
              style={{ minWidth: 180 }}
              InputLabelProps={{
                shrink: true,
              }}
              required
              inputProps={{ min: date }}
            />
          </DateWraper>
          <InputWraper>
            <TextField
              id="name"
              name="name"
              type="text"
              label="Nome do Evento"
              inputProps={{ pattern: "?![ .]+$)[a-zA-Z .]{5,}" }}
              helperText="O nome do evento deve conter no mínimo 5 letras."
              required
              onChange={this.handleInputChange}
            />
            <TextField
              id="description"
              name="description"
              type="text"
              label="Descrição do Evento"
              inputProps={{ pattern: "?![ .]+$)[a-zA-Z .]{30,}" }}
              helperText="A descrição deve conter no mínimo 30 letras."
              required
              onChange={this.handleInputChange}
            />
            <TextField
              id="durationInDays"
              name="durationInDays"
              type="number"
              label="Duração da Viagem em Dias"
              inputProps={{ min: 50 }}
              helperText="A duração deve ser de no mínimo 50."
              required
              onChange={this.handleInputChange}
            />
          </InputWraper>


          <Button color="primary" type="submit">Enviar</Button>
        </form>
      </FormControl>
    );
  }

} const mapStateToProps = (state) =>{}

const mapDispatchToProps = (dispatch) =>{
  return{
    newTrip:(trip,auth)=> dispatch(newTrip(trip,auth)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (CreateTripForm);

