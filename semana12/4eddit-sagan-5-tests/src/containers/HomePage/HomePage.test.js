import React from 'react'
import {shallow} from 'enzyme'
import {HomePage} from '../HomePage/HomePage'
import Button from "@material-ui/core/Button";
import renderer from 'react-test-renderer'
import * as HPS from "./HomePageStyles";

describe("HomePage itens",()=>{
    test("disclaimer button ",()=>{
        const mockCallFunction = jest.fn();

        const component = shallow(
            <HomePage goToDisclaimerPage={mockCallFunction}></HomePage>
        )
        const disclaimerButton = component.find('#disclaimerButton')
        expect(disclaimerButton).toHaveLength(1)

        disclaimerButton.simulate('click')
        expect(mockCallFunction).toHaveBeenCalled(); 
     
    })

    test("login button ",()=>{
        const mockCallFunction = jest.fn();

        const component = shallow(
            <HomePage goToLoginPage={mockCallFunction}></HomePage>
        )


        const loginButton = component.find('#loginPageButton')
        expect(loginButton).toHaveLength(1)

        loginButton.simulate('click')
        expect(mockCallFunction).toHaveBeenCalled();
  
     
    })

    test("feed button ",()=>{
        const mockCallFunction = jest.fn();

        const component = shallow(
            <HomePage goToFeedPage={mockCallFunction}></HomePage>
        )

        const feedButton = component.find('#feedPageButton')
        expect(feedButton).toHaveLength(1)

        feedButton.simulate('click')
        expect(mockCallFunction).toHaveBeenCalled();   

        
        
    })
})