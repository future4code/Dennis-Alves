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

export const GreetingsTitle = styled.h1`
    margin: 30px;
`

export const GreetingsDescription = styled.h4`
    margin: 30px;
`

export const BigLogo = styled.img`
    height: 100px;
    width: 100px;
    margin: 10px;
`

export const GreetingsConstruction = styled.h4`
    margin: 25px;
`

export const ConstructionLinksContainer = styled.div`
    margin: auto;
    display: flex;
    width: 36%;
    justify-content: space-between;
    margin-bottom: 30px;
`