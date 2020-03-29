import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import{fetchTrips} from '../../Actions/index.js'
import ListDetails from '../ListDetails/ListDetails'




export class ListTripsForm extends Component {

  componentDidMount(){
    this.props.fetchTrips()
  }
  render() {
      if(this.props.type === "details"){
        return (
          <div>
             com detalhes
            <div>
            {this.props.tripList.map(trip =>(
               <Card variant="outlined">
              <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {trip.planet}
              </Typography>
              <Typography variant="h5" component="h2">
                {trip.name}
              </Typography>
              <Typography variant="h5" component="h2">
                {trip.date}
              </Typography>
              <Typography color="textSecondary">
                Duração:{trip.durationInDays}
              </Typography>
              <Typography variant="body2" component="p">
                {trip.description}
              </Typography>
            </CardContent>
            </Card>
            ))}
              <ListDetails trip={"MSLImmp0v6MIK0lnm38f"}></ListDetails>
            </div>
          </div>
        );
      }
      else{
        return (
          <div>
            {this.props.tripList.map(trip =>(
               <Card variant="outlined">
              <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {trip.planet}
              </Typography>
              <Typography variant="h5" component="h2">
                {trip.name}
              </Typography>
              <Typography variant="h5" component="h2">
                {trip.date}
              </Typography>
              <Typography color="textSecondary">
                Duração:{trip.durationInDays}
              </Typography>
              <Typography variant="body2" component="p">
                {trip.description}
              </Typography>
            </CardContent>
            </Card>
            ))}
  
          </div>
        );
      }
     
    }
    
  }
  const mapStateToProps = (state) =>{
    return{
      tripList: state.todos.todoTrips,
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return{
      fetchTrips:()=> dispatch(fetchTrips()),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps) (ListTripsForm)
