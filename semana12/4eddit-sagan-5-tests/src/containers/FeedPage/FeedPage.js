import React, { Component } from "react";
import * as FPS from "./FeedPageStyles";
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MidLogo from "../Images/transparentreddit3.png"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { getPosts, createPost, setSelectedPostIDAndPush,addScore,getPostDetails,subScore } from '../Actions/WebsiteActions';


class FeedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: "",
      postBody: "",
    };
  }

  componentDidMount() {
    this.props.getPosts();
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

  handleNewPost = (event) =>{
    event.preventDefault();

    const postData = {
      title: this.state.postTitle,
      text: this.state.postBody
    }

    this.props.createPost(postData)
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  checkLoginAndLike = (postID, voteDirection) => {
    const token = window.localStorage.getItem("token");

    if (token === null || token === undefined){
      if(window.confirm('Você precisa estar logado para utilizar essa função. (Like/Dislike) \n Deseja logar agora?')){
        this.props.goToLoginPage();
      }
    }
    else{
      this.props.addScore(postID, voteDirection)
    }
  }

  checkLoginAndDislike = (postID, voteDirection) => {
    const token = window.localStorage.getItem("token");

    if (token === null || token === undefined){
      if(window.confirm('Você precisa estar logado para utilizar essa função. (Like/Dislike) \n Deseja logar agora?')){
        this.props.goToLoginPage();
      }
    }
    else{
      this.props.subScore(postID, voteDirection)
    }
  }

  render() {
    return (
      <>
      <FPS.MainDiv>
        <Paper elevation={3}>
        <FPS.CustomHeader>
          <FPS.SmallLogo onClick={this.props.goToHomePage} src="https://image.flaticon.com/icons/png/512/52/52053.png"/>
          <FPS.HeaderLinks>
            <FPS.HeaderLink><AccountCircleIcon onClick={this.props.goToUserPage}/></FPS.HeaderLink>
            <FPS.HeaderLink><InfoIcon onClick={this.props.goToDisclaimerPage}/></FPS.HeaderLink>
            <FPS.HeaderLink><ListAltRoundedIcon onClick={this.props.goToFeedPage}/></FPS.HeaderLink>
            <FPS.HeaderLink><ExitToAppRoundedIcon onClick={this.loginLogout}/></FPS.HeaderLink>
          </FPS.HeaderLinks>
          <FPS.MidLogo src={MidLogo}/>
        </FPS.CustomHeader>
        </Paper>

        <FPS.NewPostDisclaimer>
          CRIE SEU PROPRIO POST! :D
        </FPS.NewPostDisclaimer>

        <FPS.NewPostContainer onSubmit={this.handleNewPost}>

          <TextField 
            onChange={this.handleFieldChange}
            required
            name="postTitle"
            label="Titulo do Post"
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            onChange={this.handleFieldChange}
            required
            name="postBody"
            label="Conteudo do Post"
            fullWidth
            multiline="true"
            rows="4"
            margin="normal"
            variant="outlined"
          />

          <Button type="submit" variant="contained" color="primary" size="small">Postar</Button>

        </FPS.NewPostContainer>

        <Divider />

        <FPS.FeedContainerDisclaimer>
          Ultimos Posts:
        </FPS.FeedContainerDisclaimer>

          {this.props.posts && this.props.posts.map(post => (
            <FPS.FeedContainer>
              <FPS.PostTitle onClick={() => this.props.goToPostPage(post.id)}>{post.title}</FPS.PostTitle>

              <FPS.PostScore>
              <IconButton aria-label="delete" size="small">
                <ThumbUpIcon onClick={() => this.checkLoginAndLike(post.id, post.userVoteDirection)} fontSize="inherit" color={post.userVoteDirection === 1 ? "primary": ""} /> 
              </IconButton>

                {post.votesCount}

              <IconButton aria-label="delete" size="small">
                <ThumbDownIcon onClick={() => this.checkLoginAndDislike(post.id, post.userVoteDirection)} fontSize="inherit" color={post.userVoteDirection === -1 ? "secondary": ""} />
              </IconButton>

              </FPS.PostScore>

              <FPS.PostAuthor>{post.username}</FPS.PostAuthor>
            </FPS.FeedContainer>
          ))}
      </FPS.MainDiv>
      <Paper elevation={3}>
        <FPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <FPS.FooterLink href="https://www.facebook.com/" target="_blank">  <FPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" /></FPS.FooterLink>
          <FPS.FooterLink href="https://www.twitter.com/" target="_blank">   <FPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" /> </FPS.FooterLink>
          <FPS.FooterLink href="https://www.instagram.com/" target="_blank"> <FPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" /> </FPS.FooterLink>
          <FPS.FooterLink href="https://www.discord.com/" target="_blank">   <FPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" /> </FPS.FooterLink>
          <FPS.FooterLink href="https://www.linkedin.com/" target="_blank">  <FPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" /> </FPS.FooterLink>
        </FPS.Footer>
        </Paper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.postList,
  selectedPostID: state.posts.selectedPostID,
})

function mapDispatchToProps(dispatch){
    return{
        goToHomePage: () => dispatch(push(routes.HomePage)),
        goToUserPage: () => dispatch(push(routes.UserPage)),
        goToFeedPage: () => dispatch(push(routes.FeedPage)),
        goToDisclaimerPage: () => dispatch(push(routes.DisclaimerPage)),
        goToLoginPage: () => dispatch(push(routes.LoginPage)),
        goToPostPage: (postID) => dispatch(setSelectedPostIDAndPush(postID)),
        getPosts: () => dispatch(getPosts()),
        createPost: (postData) => dispatch(createPost(postData)),
        addScore: (postID,userVoteDirection) => dispatch(addScore(postID,userVoteDirection)),
        subScore: (postID,userVoteDirection) => dispatch(subScore(postID,userVoteDirection)),
        getPostDetails: (postID,userVoteDirection) => dispatch(getPostDetails(postID,userVoteDirection))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (FeedPage)