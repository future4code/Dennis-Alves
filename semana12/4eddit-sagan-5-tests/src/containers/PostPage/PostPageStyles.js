import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
`

export const CustomHeader = styled.div`
    padding: 5px 15px 5px 10px;
    background-color: rgb(230,230,230);
    text-align: left;
`

export const HeaderLink = styled.span`
    cursor: pointer;
    margin-left: 3px;
    margin-right: 3px;
`

export const HeaderLinks = styled.div`
    display: inline;
    margin-left: 3px;
    margin-right: 76%;
`

export const SmallLogo = styled.img`
    margin-left: 5px;
    height: 40px;
    width: 40px;
    cursor: pointer;
    margin-right: 5px;
`

export const MidLogo = styled.img`
    height: 40px;
    width: 120px;
`

export const MainDiv = styled.div`
    background-color: rgb(240,240,240);
    text-align: center;
    padding-bottom: 30px;
    min-height: 80vh;
`

export const Footer = styled.div`
    padding: 20px;
    background-color: rgb(230,230,230);
    text-align: center;
`

export const FooterLink = styled.a`
    color: transparent;
    text-decoration: none;
`

export const FooterLogo = styled.img`
    height: 35px;
    width: 40px;
    margin: 5px;
`

export const FeedContainer = styled.div`
    display: grid;
    grid-template-columns: 5fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 30px;
    padding: 20px;
`

export const PostBody = styled.div`
    background-color: rgb(200,200,200);
    padding: 10px;
    border-radius: 10px;
`

export const PostScore = styled.div`
    background-color: rgb(200,200,200);
    padding: 10px;
    border-radius: 10px;
`

export const PostAuthor = styled.div`
    background-color: rgb(200,200,200);
    padding: 10px;
    border-radius: 10px;
`

export const CommentSection = styled.div`
    background-color: white;
    padding: 10px;
    width: 50%;
    margin: auto;
    border-radius: 10px;
    margin-top: 5px;
`

export const CommentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 30px;
    padding: 20px;
`

export const CommentWrapper = styled.div`
`

export const CommentBody = styled.div`
    text-align: left;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
`

export const CommentScore = styled.div`
    background-color: rgb(230,230,230);
    padding: 10px;
    border-radius: 10px;
    margin: auto;
`

export const CommentAuthor = styled.div`
    background-color: rgb(230,230,230);
    padding: 10px;
    border-radius: 10px;
    margin: auto;
    width: 140px;
`

export const NewCommentDisclaimer = styled.h3`
    padding: 0;
    margin-top: 15px;
    margin-bottom: -10px;
    text-decoration: underline;
`

export const NewCommentContainer = styled.form`
    padding: 0 40px 0 40px;
    margin-bottom: 20px;
`