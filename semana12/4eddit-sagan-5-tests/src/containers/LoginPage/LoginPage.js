import React, { Component } from "react";
import * as LPS from "./LoginPageStyles";
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MidLogo from "../Images/transparentreddit3.png"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import Paper from '@material-ui/core/Paper';
import { signup, login } from '../Actions/Auth';
import Divider from '@material-ui/core/Divider';

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      signupEmail: "",
      signupPassword: "",
      signupUsername: "",
      selectedButton: "",
    };
  }

  loginLogout = () => {
    const token = window.localStorage.getItem("token");

    if (token === null || token === undefined) {
      alert("Faca o login para utilizar essa funcao (LOGOUT)")
    }
    else{
      if(window.confirm("Deseja sair de sua conta?")){
        localStorage.clear();
        this.props.goToHomePage();
      }
    }
  }

  handleSignupLoginButtonClick = (param) => {
    this.setState({
      selectedButton: param
    })
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = (event) => {
    event.preventDefault();

    const { email, password } = this.state

    this.props.login(email, password)
  }

  handleSignup = (event) => {
    event.preventDefault();

    const { signupEmail, signupPassword, signupUsername } = this.state

    this.props.signup(signupEmail, signupPassword, signupUsername)

    this.setState({
      signupEmail: "",
      signupPassword: "",
      signupUsername: "",
    })
  }

  render() {
    const { email, password, signupEmail, signupPassword, signupUsername } = this.state;

    return (
      <>
      <LPS.MainDiv>
       <Paper elevation={3}>
        <LPS.CustomHeader>
          <LPS.SmallLogo onClick={this.props.goToHomePage} src="https://image.flaticon.com/icons/png/512/52/52053.png"/>
          <LPS.HeaderLinks>
            <LPS.HeaderLink><AccountCircleIcon onClick={this.props.goToUserPage}/></LPS.HeaderLink>
            <LPS.HeaderLink><InfoIcon onClick={this.props.goToDisclaimerPage}/></LPS.HeaderLink>
            <LPS.HeaderLink><ListAltRoundedIcon onClick={this.props.goToFeedPage}/></LPS.HeaderLink>
            <LPS.HeaderLink><ExitToAppRoundedIcon onClick={this.loginLogout}/></LPS.HeaderLink>
          </LPS.HeaderLinks>
          <LPS.MidLogo src={MidLogo}/>
        </LPS.CustomHeader>
        </Paper>

        <LPS.LoginDivider>

          <LPS.SingupWrapper onSubmit={this.handleSignup}>
            <h4>Não tem conta ainda? crie uma agora, é rápido e fácil!</h4>

            <TextField
              inputProps={{ pattern: "[a-zA-Z.]{6,16}", title:"O Username precisa ter entre 6 e 16 caracteres alfanumericos." }}
              onChange={this.handleFieldChange}
              name="signupUsername"
              type="username"
              label="Username"
              value={signupUsername}
              required
            />

            <TextField
              inputProps={{ pattern: "[a-zA-Z.]{6,16}", title:"A senha precisa ter entre 6 e 16 caracteres alfanumericos." }}
              onChange={this.handleFieldChange}
              name="signupPassword"
              type="password"
              label="Password"
              required
              value={signupPassword}
            />

            <TextField
              onChange={this.handleFieldChange}
              name="signupEmail"
              type="email"
              label="E-mail"
              required
              value={signupEmail}
            />

            <Button variant="contained" type="submit">Cadastrar</Button>
          </LPS.SingupWrapper>

          <Divider orientation="vertical" flexItem/>

          <LPS.LoginWrapper onSubmit={this.handleLogin}>
            <h4>Já criou uma conta? Entre aqui!</h4>

            <TextField
              onChange={this.handleFieldChange}
              name="email"
              type="email"
              label="E-mail"
              required
              value={email}
            />

            <TextField
              onChange={this.handleFieldChange}
              name="password"
              type="password"
              label="Password"
              required
              value={password}
            />

            <Button variant="contained" type="submit">Login</Button>
          </LPS.LoginWrapper>

        </LPS.LoginDivider>
      </LPS.MainDiv>
      <Paper elevation={3}>
        <LPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <LPS.FooterLink href="https://www.facebook.com/" target="_blank">  <LPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" /></LPS.FooterLink>
          <LPS.FooterLink href="https://www.twitter.com/" target="_blank">   <LPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" /> </LPS.FooterLink>
          <LPS.FooterLink href="https://www.instagram.com/" target="_blank"> <LPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" /> </LPS.FooterLink>
          <LPS.FooterLink href="https://www.discord.com/" target="_blank">   <LPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" /> </LPS.FooterLink>
          <LPS.FooterLink href="https://www.linkedin.com/" target="_blank">  <LPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" /> </LPS.FooterLink>
        </LPS.Footer>
        </Paper>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToHomePage: () => dispatch(push(routes.HomePage)),
    goToUserPage: () => dispatch(push(routes.UserPage)),
    goToFeedPage: () => dispatch(push(routes.FeedPage)),
    goToDisclaimerPage: () => dispatch(push(routes.DisclaimerPage)),
    goToLoginPage: () => dispatch(push(routes.LoginPage)),
    signup: (email, password, username) => dispatch(signup(email, password, username)),
    login: (email, password) => dispatch(login(email, password)),
  }
}
export default connect(null, mapDispatchToProps)(LoginPage)
