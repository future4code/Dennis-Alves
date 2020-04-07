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

export const BigLogo = styled.img`
    height: 200px;
    width: 500px;
`

export const BodyTitle = styled.h1`
`

export const BodyDisclaimer = styled.h4`
`

export const DevList = styled.ul`
    margin: auto;
    width: 55%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    padding: 10px;
    margin-bottom: 20px;
    list-style-type: none;
`

export const DevName = styled.li`
    font-weight: bold;
`

export const Disclaimer = styled.div`
    border-radius: 10px;
    border: solid black 1px;
    margin: auto;
    width: 40%;
    margin-bottom: 20px;
`

export const ExitWrapper = styled.div`
    padding-bottom: 20px;
`