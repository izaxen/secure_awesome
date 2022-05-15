import { Navigate } from 'react-router-dom'
import { useAuth } from '../../../store/AuthContext'
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router'
import { GET_GROUP_ACCESS } from '../../../api/queries/getGroupsAccess'
const ProtectedRoute = ({ children }) => {
  const { id } = useParams()
  const auth = useAuth()
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  const { data, loader } = useQuery(GET_GROUP_ACCESS, {
    variables: {
      groupId: id,
    },
  })

  useEffect(() => {
    setLoading(true)
    if (!data) return

    if (data.getGroupsAccess.isPrivate) {
      const authenticate = async () => {
        const { authenticated, error } = await auth.authenticate(id)
        setAuthenticated(authenticated)
        setLoading(false)
      }
      authenticate()
      return
    }

    setAuthenticated(true)
    setLoading(false)
  }, [data])

  if (loading) {
    return <h5>Loadin</h5>
  }

  if (!authenticated) {
    return <Navigate to='/' replace />
  }
  return children
}

export default ProtectedRoute
