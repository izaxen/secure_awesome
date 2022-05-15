import React, { useState, useContext } from 'react'

const AuthContext = React.createContext({
  user: {},
  loginUser: async (email, password) => {},
  logoutUser: (token) => {},
  registerUser: async ({ email, username, password }) => {},
  whoAmI: () => {},
  authenticate: () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null)

  const loginHandler = async (username, password) => {
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    let loggedInUser = await response.json()
    loggedInUser = loggedInUser.message ? null : loggedInUser

    setUser(loggedInUser)
  }

  const registerHandler = async ({ email, username, password }) => {
    let success = false
    await fetch('/api/user/register', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ email, username, password }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Could not create new User.')
        return res.json()
      })
      .then((user) => {
        setUser(user)
      })
      .catch((err) => console.log(err))
    return success
  }

  const logoutHandler = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
    })
    setUser(null)
    window.location.href = '/'
  }

  const setUserHandler = (data) => {
    setUser(null)
    setUser(data)
  }

  const authenticate = async (groupId) => {
    let res = await fetch('/api/auth/authenticate', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: groupId,
    })
    return res.json()
  }

  const whoAmI = async () => {
    let res = await fetch('/api/auth/whoami')
    res = await res.json()
    if (res.message) {
      setUserHandler(null)
      return
    }
    return setUserHandler(res)
  }

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setUserHandler,
        loginUser: loginHandler,
        logoutUser: logoutHandler,
        registerUser: registerHandler,
        whoAmI: whoAmI,
        authenticate: authenticate,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
