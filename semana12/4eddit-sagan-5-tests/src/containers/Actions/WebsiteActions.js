import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from '../Router';

const baseURL = 'https://us-central1-future-apis.cloudfunctions.net/fourEddit'
const baseAuth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5VVGpvcks3bDM4SjNmSjFZa3FlIiwidXNlcm5hbWUiOiJsZW9lbWFpbHRlc3RleDEiLCJlbWFpbCI6Imxlb2VtYWlsdGVzdGV4MUBnbWFpbC5jb20iLCJpYXQiOjE1ODU4Mzc4NTh9.qCZlmCJuJvDfvmGhlFNmr28ndhgrtVYsAxrnx1cwUNg'

export const setPosts = (posts) => ({
	type: 'SET_POSTS',
	payload: {
		posts
	}
})

export const getPosts = () => async (dispatch) => {
	const token = localStorage.getItem("token")

	try {
		const response = await axios.get(`${baseURL}/posts`, 

		{ headers: { auth: token ? token : baseAuth } })

		dispatch(setPosts(response.data.posts))
	} catch (error) {
		console.log(error)
		alert('Erro ao tentar adquirir lista de posts')
	}
}

export const createPost = (postData) => async (dispatch) => {
	try {
		await axios.post(`${baseURL}/posts`, postData, 

		{ headers: { auth: localStorage.getItem("token") }, })

		alert('Post criado com sucesso!')
		dispatch(getPosts())
	}
	catch (error) {
		console.error(error)
		alert('Erro ao tentar criar post')
	}
}

export const setSelectedPostIDAndPush = (postID) => async (dispatch) => {
	dispatch(setSelectedPost(postID))
	dispatch(push(routes.PostPage))
}

const setSelectedPost = (postID) => ({
	type: 'SET_SELECTED_POST',
	payload: {
		postID
	}
})

const setPostDetails = (postDetails) => ({
	type: 'SET_POST_DETAILS',
	payload: {
		postDetails
	}
})

export const getPostDetails = (postID) => async (dispatch) => {
	try {
		const response = await axios.get(`${baseURL}/posts/${postID}`, 

		{ headers: { auth: localStorage.getItem("token") } })

		dispatch(setPostDetails(response.data.post))
	} catch (error) {
		console.log(error)
		alert('Erro ao tentar adquirir detalhes sobre o post')
	}
}

export const setSelectedPostID = (postID) => async (dispatch) => {
	dispatch(setSelectedPost(postID))
}

export const addScore = (postID, userVoteDirection) => async (dispatch) => {
	let direction = 1;	
	if (userVoteDirection === 1) {
		direction = 0;
	}

	try {
		await axios.put(`${baseURL}/posts/${postID}/vote`,
			{ direction }, 

			{ headers: { auth: localStorage.getItem("token") } })

		dispatch(getPosts())
		dispatch(getPostDetails(postID))
	} catch (error) {
		console.log(error);
		alert('Erro ao tentar dar like')
	}
}

export const subScore = (postID, userVoteDirection) => async (dispatch) => {
	let direction = -1
	if (userVoteDirection === -1) {
		direction = 0;
	}

	try {
		await axios.put(`${baseURL}/posts/${postID}/vote`,
			{ direction }, 

			{ headers: { auth: localStorage.getItem("token") } })

		dispatch(getPosts())
		dispatch(getPostDetails(postID))
	} catch (error) {

		console.log(error);
		alert('Erro ao tentar dar like')
	}
}


export const addScoreComment = (postID, userVoteDirection,commentID) => async (dispatch) => {
	let direction = 1;	
	if (userVoteDirection === 1) {
		direction = 0;
	}

	try {
		await axios.put(`${baseURL}/posts/${postID}/comment/${commentID}/vote`,
			{ direction }, 

			{ headers: { auth: localStorage.getItem("token") } })

		dispatch(getPostDetails(postID))
	} catch (error) {
		console.log(error);
		alert('Erro ao tentar dar like')
	}
}
export const subScoreComment = (postID, userVoteDirection,commentID) => async (dispatch) => {
	let direction = -1;
	if (userVoteDirection === -1) {
		direction = 0;
	}

	try {
		await axios.put(`${baseURL}/posts/${postID}/comment/${commentID}/vote`,
			{ direction }, 

			{ headers: { auth: localStorage.getItem("token") } })

		dispatch(getPostDetails(postID))
	} catch (error) {

		console.log(error);
		alert('Erro ao tentar dar like')
	}
}

export const addComment = (postID, text) => async (dispatch) => {
	try {
		await axios.post(`${baseURL}/posts/${postID}/comment`, 
		{ text },

		{headers: { auth: localStorage.getItem("token") },

		})
		alert('Comentario criado com sucesso!')
		dispatch(getPostDetails(postID))
	}
	catch (error) {
		console.log(error)
		alert('Erro ao tentar criar o comentario')
	}
}