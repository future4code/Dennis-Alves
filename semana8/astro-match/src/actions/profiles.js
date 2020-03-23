import axios from 'axios'

const setProfileToSwipe = (profile) => ({
	type: 'SET_PROFILE_TO_SWIPE',
	payload: {
		profile
	}
})

const setMatches = (matches) => ({
	type: 'SET_MATCHES',
	payload: {
		matches
	}
})

export const chooseProfile = (id, choice) => async (dispatch) => {
	if(!id) {
		dispatch(getProfileToSwipe())
		return
	}

	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/dennis/choose-person', {
		id,
		choice
	})

	dispatch(getProfileToSwipe())
}

export const getMatches = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/dennis/matches')

	dispatch(setMatches(response.data.matches))
}


export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/dennis/clear')
}

export const getProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/dennis/person')

	dispatch(setProfileToSwipe(response.data.profile))
}