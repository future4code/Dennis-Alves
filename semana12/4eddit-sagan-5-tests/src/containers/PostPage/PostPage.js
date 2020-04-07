import React, { Component } from "react";
import * as PPS from "./PostPageStyles";
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MidLogo from "../Images/transparentreddit3.png"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import Paper from '@material-ui/core/Paper';
import { getPostDetails, addScore, subScore, addScoreComment, subScoreComment, addComment } from "../Actions/WebsiteActions";
import Divider from '@material-ui/core/Divider';
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentBody: "",
    };
  }

  componentDidMount() {
    const { getPostDetails, goToLoginPage, goToFeedPage, selectedPostID, } = this.props
    const token = window.localStorage.getItem("token");

    if (token === null || token === undefined) {
      goToLoginPage();
      return
    }

    if (selectedPostID === null || selectedPostID === undefined || selectedPostID === "") {
      goToFeedPage();
      return
    }

    getPostDetails(selectedPostID)
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

  handleNewComment = (event) =>{
    event.preventDefault();

    this.props.addComment(this.props.selectedPostID, this.state.commentBody)
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <>
      <PPS.MainDiv>
       <Paper elevation={3}>
        <PPS.CustomHeader>
          <PPS.SmallLogo onClick={this.props.goToHomePage} src="https://image.flaticon.com/icons/png/512/52/52053.png"/>
          <PPS.HeaderLinks>
            <PPS.HeaderLink><AccountCircleIcon onClick={this.props.goToUserPage}/></PPS.HeaderLink>
            <PPS.HeaderLink><InfoIcon onClick={this.props.goToDisclaimerPage}/></PPS.HeaderLink>
            <PPS.HeaderLink><ListAltRoundedIcon onClick={this.props.goToFeedPage}/></PPS.HeaderLink>
            <PPS.HeaderLink><ExitToAppRoundedIcon onClick={this.loginLogout}/></PPS.HeaderLink>
          </PPS.HeaderLinks>
          <PPS.MidLogo src={MidLogo}/>
        </PPS.CustomHeader>
        </Paper>

        <div>

          <h3>{this.props.postDetails && this.props.postDetails.title}</h3>

          <PPS.FeedContainer>

            <PPS.PostBody>{this.props.postDetails && this.props.postDetails.text} </PPS.PostBody>
            
            <PPS.PostAuthor>{this.props.postDetails && this.props.postDetails.username}</PPS.PostAuthor>

            <PPS.PostScore>
              <IconButton aria-label="delete" size="small" onClick={() => this.props.addScore(this.props.postDetails.id, this.props.postDetails.userVoteDirection)}>
                <ThumbUpIcon fontSize="inherit" color={this.props.postDetails && this.props.postDetails.userVoteDirection === 1 ? "primary" : ""} />
              </IconButton>

              {this.props.postDetails && this.props.postDetails.votesCount}

              <IconButton aria-label="delete" size="small" onClick={() => this.props.subScore(this.props.postDetails.id, this.props.postDetails.userVoteDirection)}>
                <ThumbDownIcon fontSize="inherit" color={this.props.postDetails && this.props.postDetails.userVoteDirection === -1 ? "secondary" : ""} />
              </IconButton>

            </PPS.PostScore>


          </PPS.FeedContainer>

          <PPS.NewCommentDisclaimer>
            Adicione um comentario! :D
        </PPS.NewCommentDisclaimer>

          <PPS.NewCommentContainer onSubmit={this.handleNewComment}>

            <TextField
              onChange={this.handleFieldChange}
              required
              name="commentBody"
              label="Comentario"
              fullWidth
              multiline="true"
              rows="4"
              margin="normal"
              variant="outlined"
            />

            <Button type="submit" variant="contained" color="primary" size="small">Postar</Button>

          </PPS.NewCommentContainer>

          <Divider />


        </div>
        <h3>Comentarios</h3>
        {this.props.postDetails.comments && (this.props.postDetails.comments.length > 1) ? 
        <PPS.CommentSection>
          {this.props.postDetails.comments && this.props.postDetails.comments.map((comment, index) => (
            <PPS.CommentWrapper>
              <PPS.CommentContainer>
                <PPS.CommentAuthor>{comment.username}</PPS.CommentAuthor>

                <PPS.CommentBody>{comment.text}</PPS.CommentBody>

                <PPS.CommentScore>
                  <IconButton onClick={() => this.props.addScoreComment(this.props.selectedPostID, comment.userVoteDirection, comment.id)} aria-label="delete" size="small">
                    <ThumbUpIcon fontSize="inherit" color={comment.userVoteDirection === 1 ? "primary" : ""} />
                  </IconButton>

                  {comment.votesCount ? comment.votesCount : "0"}

                  <IconButton onClick={() => this.props.subScoreComment(this.props.selectedPostID, comment.userVoteDirection, comment.id)} aria-label="delete" size="small">
                    <ThumbDownIcon fontSize="inherit" color={comment.userVoteDirection === -1 ? "secondary" : ""} />
                  </IconButton>

                </PPS.CommentScore>
              </PPS.CommentContainer>
            {this.props.postDetails.comments && (this.props.postDetails.comments.length -1) > index ? <Divider /> : ""}
          </PPS.CommentWrapper>
        ))}
        </PPS.CommentSection>
        : <p>Não existe nenhum comentario ainda seja o primeiro!</p>}
      </PPS.MainDiv>
      <Paper elevation={3}>
        <PPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <PPS.FooterLink href="https://www.facebook.com/" target="_blank">  <PPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" /></PPS.FooterLink>
          <PPS.FooterLink href="https://www.twitter.com/" target="_blank">   <PPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" /> </PPS.FooterLink>
          <PPS.FooterLink href="https://www.instagram.com/" target="_blank"> <PPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" /> </PPS.FooterLink>
          <PPS.FooterLink href="https://www.discord.com/" target="_blank">   <PPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" /> </PPS.FooterLink>
          <PPS.FooterLink href="https://www.linkedin.com/" target="_blank">  <PPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" /> </PPS.FooterLink>
        </PPS.Footer>
        </Paper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedPostID: state.posts.selectedPostID,
  postDetails: state.posts.postDetails,
})


function mapDispatchToProps(dispatch) {
  return {
    goToHomePage: () => dispatch(push(routes.HomePage)),
    goToLoginPage: () => dispatch(push(routes.LoginPage)),
    goToDisclaimerPage: () => dispatch(push(routes.DisclaimerPage)),
    goToFeedPage: () => dispatch(push(routes.FeedPage)),
    getPostDetails: (postID) => dispatch(getPostDetails(postID)),
    addScore: (postID, userVoteDirection) => dispatch(addScore(postID, userVoteDirection)),
    subScore: (postID, userVoteDirection) => dispatch(subScore(postID, userVoteDirection)),
    addScoreComment: (postID, userVoteDirection, commentID) => dispatch(addScoreComment(postID, userVoteDirection, commentID)),
    subScoreComment: (postID, userVoteDirection, commentID) => dispatch(subScoreComment(postID, userVoteDirection, commentID)),
    addComment: (postID, commentData) => dispatch(addComment (postID, commentData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)