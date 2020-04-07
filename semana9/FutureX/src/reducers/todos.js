



const initialState = {
    todoTrips: [],
    todoDetails:[],
}

export const todos = (state = initialState, action) => {
    console.log("actions", action)
    console.log("state", state)

    switch (action.type) {

        case "STORE_TRIPS":
            return {
                ...state,
                todoTrips: action.payload.trips
            }

         case "CREATE_TRIP":
            return {
                ...state,
                todoTrips: action.payload.trips
            }

        case "APPLY_TO_TRIP":
            return {
                ...state,
                todoTrips: action.payload.trips
            }

        case "STORE_DETAILS":
            return {
                ...state,
                todoDetails: action.payload.trip
            }  
            
         case "CANDIDATE_APPROVE":
            return {
                ...state,
                todoTrips: action.payload.trips
            }   
        default:
            return state;
    }


}