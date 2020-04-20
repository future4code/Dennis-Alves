import React, { Component } from "react";
import * as DPS from "./DisclaimerPageStyles";
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

class DisclaimerPage extends Component {
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
      <DPS.MainDiv>
        <Paper elevation={3}>
        <DPS.CustomHeader>
          <DPS.SmallLogo onClick={this.props.goToHomePage} src="https://image.flaticon.com/icons/png/512/52/52053.png"/>
          <DPS.HeaderLinks>
            <DPS.HeaderLink><AccountCircleIcon onClick={this.props.goToUserPage}/></DPS.HeaderLink>
            <DPS.HeaderLink><InfoIcon onClick={this.props.goToDisclaimerPage}/></DPS.HeaderLink>
            <DPS.HeaderLink><ListAltRoundedIcon onClick={this.props.goToFeedPage}/></DPS.HeaderLink>
            <DPS.HeaderLink><ExitToAppRoundedIcon onClick={this.loginLogout}/></DPS.HeaderLink>
          </DPS.HeaderLinks>
          <DPS.MidLogo src={MidLogo}/>
        </DPS.CustomHeader>
        </Paper>

        <DPS.BodyTitle>
          Esperamos que goste do site!
        </DPS.BodyTitle>

        <DPS.BigLogo src="https://images.typeform.com/images/ZWN6aXKQjYyh/image/default"/>

        <DPS.BodyDisclaimer>
          Esse foi um projeto semanal da Future4 feito pelos seguintes membros:
        </DPS.BodyDisclaimer>

        <DPS.DevList>
          <DPS.DevName>Leonardo Crispim</DPS.DevName>
          <DPS.DevName>Dennis Alves</DPS.DevName>
          <DPS.DevName>Henrique Mendes</DPS.DevName>
        </DPS.DevList>

        <DPS.Disclaimer>
         <p> Esse projeto foi criado meramente com intuitos educativos, todas e quaisquer semelhancas com outros sites, projetos e/ou dominios já existentes é mera coincidencia. </p>
         <p> Nenhuma organização, empresa ou afiliação tem responsabilidade ou conexões por esse projeto.</p>
         <p> Esse projeto foi feito apenas com suor e sangue de 3 alunos de desenvolvimento web cujo qual apanharam demais para API's e ternários, nenhum outro animal foi ferido durante a criação do mesmo.</p>
        </DPS.Disclaimer>

        <DPS.ExitWrapper>
          <Button onClick={this.props.goToHomePage} variant="contained" size="small" color="primary">Voltar para Home</Button>
        </DPS.ExitWrapper>
      </DPS.MainDiv>
      <Paper elevation={3}>
        <DPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <DPS.FooterLink href="https://www.facebook.com/" target="_blank">  <DPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" /></DPS.FooterLink>
          <DPS.FooterLink href="https://www.twitter.com/" target="_blank">   <DPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" /> </DPS.FooterLink>
          <DPS.FooterLink href="https://www.instagram.com/" target="_blank"> <DPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" /> </DPS.FooterLink>
          <DPS.FooterLink href="https://www.discord.com/" target="_blank">   <DPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" /> </DPS.FooterLink>
          <DPS.FooterLink href="https://www.linkedin.com/" target="_blank">  <DPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" /> </DPS.FooterLink>
        </DPS.Footer>
        </Paper>
      </>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return{
    goToHomePage: () => dispatch(push(routes.HomePage)),
    goToUserPage: () => dispatch(push(routes.UserPage)),
    goToFeedPage: () => dispatch(push(routes.FeedPage)),
    goToDisclaimerPage: () => dispatch(push(routes.DisclaimerPage)),
    goToLoginPage: () => dispatch(push(routes.LoginPage)),
  }
}

export default connect(null, mapDispatchToProps) (DisclaimerPage)