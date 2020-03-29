import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { fetchDetails,candidateApprove } from '../../Actions/index.js'
import styled from 'styled-components';

const CandidatePendingWraper = styled.div`

`
const StatusWrapper = styled.div`
    text-align:center;
`
const Status = styled.p`
    color: orange;
`
const StatusApproved = styled.p`
    color: green;
`

export class ListDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZvOWhtdVM5U0xFVkF0TWs3UnVzIiwiZW1haWwiOiJkZW5uaXNAZ21haWwuY29tLmJyIiwiaWF0IjoxNTg1MzY5MjQ1fQ.jPWo0hg9m7IT-w_EUUhZPCJYJtt-aGj6USbF4xiPxZI",
        }
    }
    componentDidMount() {
        this.props.fetchDetails(this.props.trip, this.state.auth)
    }

    approve=(id)=>{
        this.props.candidateApprove(id,this.props.trip,this.state.auth)
    }

    render() {
            
            return (
                <div>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                {this.props.tripDetails.planet}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {this.props.tripDetails.name}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {this.props.tripDetails.date}
                            </Typography>
                            <Typography color="textSecondary">
                                Duração:{this.props.tripDetails.durationInDays}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {this.props.tripDetails.description}
                            </Typography>
                            <div>
                                Lista de Candidatos
                                <CandidatePendingWraper>
                                    {this.props.tripDetails.candidates && this.props.tripDetails.candidates.map(candidate => (
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography color="textSecondary" gutterBottom>
                                                    Nome: {candidate.name}
                                                </Typography>
                                                <Typography color="textSecondary" gutterBottom>
                                                    Porque devo ser escolhido: {candidate.applicationText}
                                                </Typography>
                                                <Typography color="textSecondary" gutterBottom>
                                                    Idade: {candidate.age}
                                                </Typography>
                                                <Typography color="textSecondary" gutterBottom>
                                                    Pais de Origem: {candidate.country}
                                                </Typography>
                                                <Typography color="textSecondary" gutterBottom>
                                                    Ocupação: {candidate.profession}
                                                </Typography>
                                                <StatusWrapper>
                                                    <Status>Aguardando Aprovação</Status>
                                                </StatusWrapper>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small"onClick={()=>this.approve(candidate.id,)}>Aprovar?</Button>
                                            </CardActions>
                                        </Card>
                                    ))}
                                </CandidatePendingWraper>
                                
                                
                                {this.props.tripDetails.approved && this.props.tripDetails.approved.map(approved => (
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Typography color="textSecondary" gutterBottom>
                                                {approved.name}
                                            </Typography>
                                            <Typography color="textSecondary" gutterBottom>
                                                {approved.applicationText}
                                            </Typography>
                                            <Typography color="textSecondary" gutterBottom>
                                                {approved.age}
                                            </Typography>
                                            <Typography color="textSecondary" gutterBottom>
                                                {approved.country}
                                            </Typography>
                                            <Typography color="textSecondary" gutterBottom>
                                                {approved.profession}
                                            </Typography>
                                            <StatusWrapper>
                                                    <StatusApproved>Aprovado!</StatusApproved>
                                                </StatusWrapper>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            
                        </CardContent>
                    </Card>
                </div>
            
            );
    }

}
const mapStateToProps = (state) => {
    return {
        tripDetails: state.todos.todoDetails,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetails: (trip, auth) => dispatch(fetchDetails(trip, auth)),
        candidateApprove:(id,trip,auth) => dispatch(candidateApprove(id,trip,auth)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListDetails)
