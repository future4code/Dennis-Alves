import {
    setPosts, getPosts,
} from '../Actions/WebsiteActions'

describe("Todo Action-creators",()=>{
    test("setPosts function",()=>{

        const mockeAction = setPosts()

        expect(mockeAction.type).toEqual("SET_POSTS")

    })
    
})