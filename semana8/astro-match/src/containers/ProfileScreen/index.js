import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'


const ProfilePicture = styled.img`
  width: 100%;
`

class ProfileScreen extends React.Component {
  render() {
    return (
      <div>
         <ProfilePicture src={this.props.currentSelectedProfile.photo}/>
      </div>
    )
  }
}

ProfileScreen.propTypes = {

}

const mapStateToProps = (state) => ({
  currentSelectedProfile: state.profiles.currentSelectedProfile
})

const mapDispatchToProps = (dispatch) => ({
})// tenho duvidas se precisa deixar esse dispachtToProps

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
