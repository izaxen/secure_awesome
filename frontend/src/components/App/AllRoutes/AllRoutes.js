import { Route, Routes } from 'react-router-dom'
import Login from '../../../pages/LoginPage/login'
import Signup from '../../../pages/SignupPage/Signup'
import HomePage from '../../../pages/HomePage/HomePage'
import NoMatchRoute from '../../../pages/noMatchRoute'
import ProtectedRoute from './ProtectedRoute'
import GroupPage from '../../../pages/GroupPage/GroupPage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path={process.env.REACT_APP_LOGIN_URL} element={<Login />} />
      <Route
        exact
        path={process.env.REACT_APP_SIGNUP_URL}
        element={<Signup />}
      />
      <Route
        exact
        path={process.env.REACT_APP_HOME_URL}
        element={<HomePage />}
      />
      <Route
        exact
        path={process.env.REACT_APP_GROUP_URL}
        element={
          <ProtectedRoute>
            <GroupPage />
          </ProtectedRoute>
        }
      />
      <Route path='*' element={<NoMatchRoute />} />
    </Routes>
  )
}

export default AllRoutes
