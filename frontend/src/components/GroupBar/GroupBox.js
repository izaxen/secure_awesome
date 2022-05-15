import React from 'react'
import { Grid, Paper, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useUrlId } from '../../store/UrlContext'
import { useAuth } from '../../store/AuthContext'
import { REMOVE_GROUP } from '../../api/mutation/removeGroup'
import { useMutation } from '@apollo/client'

const GroupBox = ({ group }) => {
  const auth = useAuth()
  const urlCtx = useUrlId()
  let navigate = useNavigate()
  const [removeGroup] = useMutation(REMOVE_GROUP)

  const checkIfCanDeleteGroup = () => {
    if (!auth.user) return false
    if (auth.user?.roles[0].name === 'ROLE_ADMIN') return true
    if (auth.user?.username === group.admins[0].username) return true

    return false
  }

  const deleteGroup = () => {
    removeGroup({
      variables: {
        groupId: group.id,
      },
    })
    navigate('/')
    navigate(0)
  }

  return (
    <Paper
      sx={{ width: '100%', margin: '2px' }}
      onClick={() => {
        urlCtx.setGroupId(group.id)
        navigate(`/group/${group.id}`)
      }}
    >
      <Grid container height={100} padding={1}>
        <Grid item md={6}>
          <Typography>{group.name}</Typography>
        </Grid>
        <Grid item md={6}>
          {group.isPrivate ? 'Private' : 'Public'}
        </Grid>
        <Grid item md={12}>
          Members: {group.totalMembers}
        </Grid>
        <Grid item md={12}>
          {checkIfCanDeleteGroup() && (
            <Button onClick={() => deleteGroup()}>Delete</Button>
          )}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default GroupBox
