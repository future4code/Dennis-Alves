import React, { Component } from "react";
import * as UPS from "./UserPageStyles";
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import MidLogo from "../Images/transparentreddit3.png"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import Paper from '@material-ui/core/Paper';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");

    if(token === null){
      this.props.goToLoginPage();
    }
  }

  loginLogout = () => {
    const token = window.localStorage.getItem("token");

    if (token === null || token === undefined) {
      if(window.confirm("Deseja fazer o login?")){
        this.props.goToLoginPage();
      }
    }
    else{
      if(window.confirm("Deseja sair de sua conta?")){
        localStorage.clear();
        this.props.goToHomePage();
      }
    }
  }

  render() {
    return (
      <>
      <UPS.MainDiv>
        <Paper elevation={3}>
        <UPS.CustomHeader>
          <UPS.SmallLogo onClick={this.props.goToHomePage} src="https://image.flaticon.com/icons/png/512/52/52053.png"/>
          <UPS.HeaderLinks>
            <UPS.HeaderLink><AccountCircleIcon onClick={this.props.goToUserPage}/></UPS.HeaderLink>
            <UPS.HeaderLink><InfoIcon onClick={this.props.goToDisclaimerPage}/></UPS.HeaderLink>
            <UPS.HeaderLink><ListAltRoundedIcon onClick={this.props.goToFeedPage}/></UPS.HeaderLink>
            <UPS.HeaderLink><ExitToAppRoundedIcon onClick={this.loginLogout}/></UPS.HeaderLink>
          </UPS.HeaderLinks>
          <UPS.MidLogo src={MidLogo}/>
        </UPS.CustomHeader>
        </Paper>


        <UPS.GreetingsTitle>Seja bem vindo a sua página pessoal</UPS.GreetingsTitle>

        <UPS.GreetingsDescription>Parece que não tem nada aqui, mas já já você poderá customizar esse seu cantinho do jeito que quiser!</UPS.GreetingsDescription>

        <UPS.BigLogo src="https://i.ya-webdesign.com/images/reddit-alien-png-3.png" />

        <UPS.GreetingsConstruction>No momento o site ainda está em construção mas sinta-se a vontade para navegar mais facilmente atraves dos seguintes links:</UPS.GreetingsConstruction>

        <UPS.ConstructionLinksContainer>
          <Button onClick={this.props.goToDisclaimerPage} size="small" variant="contained">Ler Disclaimer</Button>
          <Button onClick={this.props.goToHomePage} size="small" variant="contained" color="primary">Voltar para Home</Button>
          <Button onClick={this.props.goToFeedPage} size="small" variant="contained">Acessar o Feed</Button>
        </UPS.ConstructionLinksContainer>
      </UPS.MainDiv>
      <Paper elevation={3}>
        <UPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <UPS.FooterLink href="https://www.facebook.com/" target="_blank">  <UPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" /></UPS.FooterLink>
          <UPS.FooterLink href="https://www.twitter.com/" target="_blank">   <UPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" /> </UPS.FooterLink>
          <UPS.FooterLink href="https://www.instagram.com/" target="_blank"> <UPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" /> </UPS.FooterLink>
          <UPS.FooterLink href="https://www.discord.com/" target="_blank">   <UPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" /> </UPS.FooterLink>
          <UPS.FooterLink href="https://www.linkedin.com/" target="_blank">  <UPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" /> </UPS.FooterLink>
        </UPS.Footer>
        </Paper>
      </>
    );
  }
}

function mapDispatchToProps(dispatch){
    return{
        goToHomePage: () => dispatch(push(routes.HomePage)),
        goToUserPage: () => dispatch(push(routes.UserPage)),
        goToFeedPage: () => dispatch(push(routes.FeedPage)),
        goToDisclaimerPage: () => dispatch(push(routes.DisclaimerPage)),
        goToLoginPage: () => dispatch(push(routes.LoginPage)),
    }
}
export default connect(null, mapDispatchToProps) (UserPage)