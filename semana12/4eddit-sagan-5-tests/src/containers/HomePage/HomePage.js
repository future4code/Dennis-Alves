import React, { Component } from "react";
import * as HPS from "./HomePageStyles";
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import Button from "@material-ui/core/Button";
import MidLogo from "../Images/transparentreddit3.png"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import Paper from '@material-ui/core/Paper';

export class HomePage extends Component {
  loginLogout = () => {
    const token = window.localStorage.getItem("token");

    if (token === null || token === undefined) {
      if (window.confirm("Deseja fazer o login?")) {
        this.props.goToLoginPage();
      }
    }
    else {
      if (window.confirm("Deseja sair de sua conta?")) {
        localStorage.clear();
        this.props.goToHomePage();
      }
    }
  }

  render() {
    return (
      <>
      <HPS.MainDiv>
        <Paper elevation={3}>
          <HPS.CustomHeader>
            <HPS.SmallLogo onClick={this.props.goToHomePage} src="https://image.flaticon.com/icons/png/512/52/52053.png" />
            <HPS.HeaderLinks>
              <HPS.HeaderLink><AccountCircleIcon onClick={this.props.goToUserPage} /></HPS.HeaderLink>
              <HPS.HeaderLink><InfoIcon onClick={this.props.goToDisclaimerPage} /></HPS.HeaderLink>
              <HPS.HeaderLink><ListAltRoundedIcon onClick={this.props.goToFeedPage} /></HPS.HeaderLink>
              <HPS.HeaderLink><ExitToAppRoundedIcon onClick={this.loginLogout} /></HPS.HeaderLink>
            </HPS.HeaderLinks>
            <HPS.MidLogo src={MidLogo} />
          </HPS.CustomHeader>
        </Paper>

        <HPS.BodyTitle>
          Olá e seja bem vindo ao 4Reddit!
        </HPS.BodyTitle>

        <HPS.BigLogo src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c531.png" />

        <HPS.BodyDisclaimer>
          Ainda estamos em construção, mas fique a vontade para acessar outras partes de nosso site :)
        </HPS.BodyDisclaimer>

        <HPS.LinksContainer>
          <Button id="disclaimerButton" onClick={this.props.goToDisclaimerPage} size="small" variant="contained">Ler disclaimer do site</Button>
          <Button id="loginPageButton" onClick={this.props.goToLoginPage} size="small" variant="contained" color="primary">Pagina de Login</Button>
          <Button id="feedPageButton" onClick={this.props.goToFeedPage} size="small" variant="contained">Dar uma olhada no feed</Button>
        </HPS.LinksContainer>
      </HPS.MainDiv>
      <Paper elevation={3}>
        <HPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <HPS.FooterLink href="https://www.facebook.com/" target="_blank">  <HPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" /></HPS.FooterLink>
          <HPS.FooterLink href="https://www.twitter.com/" target="_blank">   <HPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" /> </HPS.FooterLink>
          <HPS.FooterLink href="https://www.instagram.com/" target="_blank"> <HPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" /> </HPS.FooterLink>
          <HPS.FooterLink href="https://www.discord.com/" target="_blank">   <HPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" /> </HPS.FooterLink>
          <HPS.FooterLink href="https://www.linkedin.com/" target="_blank">  <HPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" /> </HPS.FooterLink>
        </HPS.Footer>
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
  }
}

export default connect(null, mapDispatchToProps)(HomePage)