import React from 'react'
import { connect } from 'react-redux'
import { setUserData, clearUserData } from '../actions/'
import { createUser } from '../utilities/auth'
import RaisedButton from 'material-ui/RaisedButton'

let CreateUser = ({ firstName,
                    lastName,
                    email,
                    password,
                    verified,
                    userDispatch,
                    clearUserData,
                      }) => {

  const userReady = (verified === password && password.length >= 6) ? false : true

  const output = {
    firstName,
    lastName,
    email,
    password,
    verified,
  }

  const onChange = {

    email(e) {
      e.preventDefault()
      output.email = e.target.value
      userDispatch(output)
    },
    password(e) {
      e.preventDefault()
      output.password = e.target.value
      userDispatch(output)
    },
    verify(e) {
      e.preventDefault()
      output.verified = e.target.value
      userDispatch(output)
    }
  }

  const onClick = e => {
    e.preventDefault()
    if (password.length > 6) {
      createUser(email, password)
      clearUserData()
    }
  }

  const display = password.length > 0 && password.length < 6 ? 'block' : 'none'

  const styles = {
    button: {
      height: 50,
      margin: 12,
    },
    password: {
      display: display
    }
  }

  return (
    <div className="home">
      <div className="textInput login">

        <input
          type="text"
          placeholder="E-mail Address"
          value={email}
          onChange={onChange.email}
          />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={onChange.password}
          />
        <input
          type="text"
          placeholder="Verify Password"
          value={verified}
          onChange={onChange.verify}
          />
        <p
          style={styles.password}
          >Please enter a password greater than 6 characters long</p>

        <RaisedButton
          disabled={userReady}
          label="Create User"
          style={styles.button}
          className="reportButton"
          onClick={onClick}
          />

      </div>
    </div>
  )
}


const mapStateToProps = state => {

  return {
    email: state.user.email,
    password: state.user.password,
    verified: state.user.verified,
  }
}

const mapDispatchToProps = dispatch => {

  return {
    userDispatch: output => dispatch(setUserData(output)),
    clearUserData: () => dispatch(clearUserData()),
  }
}

CreateUser = connect(
  mapStateToProps,
  mapDispatchToProps,
    )(CreateUser)

export default CreateUser