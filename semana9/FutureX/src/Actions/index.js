import axios from 'axios'

export const storeTrips = trips => ({
    type: "STORE_TRIPS",
    payload:{
        trips
    }
})
export const createApply = trip => ({
    type: "APPLY_TO_TRIP",
    payload:{
        trip
    }
})
export const createTrip = (trip,auth) => ({
    type: "CREATE_TRIP",
    payload:{
        trip
    }
})
export const storeDetails = (trip, auth) => ({
    type: "STORE_DETAILS",
    payload:{
        trip,
    }
})
export const candidateApproval = (id,trip,auth) => ({
    type: "CANDIDATE_APPROVE",
    payload:{
        trip,
    }
})


const dataBaseName = "dennis"

export const fetchTrips = () => async (dispatch,getState) =>{
    
       const result = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/${dataBaseName}/trips`)
   
    dispatch(storeTrips(result.data.trips))
}
 
export const newTrip =(trip,auth) => async(dispatch,getState) =>{
    try{
        const result = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/${dataBaseName}/trips`,
        {
            "name": trip.name,
            "planet": trip.planet,
            "date": trip.date,
            "description": trip.description,
            "durationInDays": trip.durationInDays,
        },
        {
            headers:{
                "auth": auth,
            }
        }
    )
    dispatch(window.location.reload())
    }catch(error){
       
    }
}

export const apply = trip => async(dispatch,getState) =>{

    const result = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/${dataBaseName}/trips/${trip.trip}/apply`,
    {
        "name": trip.name,
        "age" : trip.age,
        "applicationText": trip.applicationText,
        "profession": trip.profession,
        "country": trip.country,
    } 
    )
    dispatch(fetchTrips())
}

export const fetchDetails = (trip,auth) => async (dispatch,getState)=>{
    try{
        var result = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/${dataBaseName}/trip/${trip}`,
        {
            headers:{
                "auth": auth,
            }
        }
    )
    dispatch(storeDetails(result.data.trip))
    }catch(error){
       console.log(error)
    }
    
} 
export const candidateApprove = (id,trip,auth) => async (dispatch,getState)=>{
    let approve = true
    try{
        var result = await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/futureX/${dataBaseName}/trips/${trip}/candidates/${id}/decide`,
        {
            approve 
          }, {
            headers: {
              'Content-Type': 'application/json',
              'auth': `${auth}`
            }
          }   
         )
    dispatch( window.location.reload())
    }catch(error){
        console.log(error)
    }
}
