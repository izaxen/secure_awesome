import React from 'react'
import { Grid, Paper, Typography, ButtonGroup, Button } from '@mui/material'
import { useMutation } from '@apollo/client'
import { CHANGE_MEMBER_STATUS } from '../../api/mutation/changeMemberStatus'
import { REMOVE_MEMBER } from '../../api/mutation/removeMember'
import { useAuth } from '../../store/AuthContext'

const MemberBox = ({ member, role, type, groupId }) => {
  const [changeStatus, { errorMember }] = useMutation(CHANGE_MEMBER_STATUS)
  const [removeMember, { error }] = useMutation(REMOVE_MEMBER)
  const auth = useAuth()

  const changeMemberStatus = (role) => {
    changeStatus({
      variables: {
        groupId: groupId,
        username: member.username,
        newRole: role,
      },
    })
    window.location.reload()
  }

  const removeMemberHandler = () => {
    removeMember({
      variables: {
        groupId: groupId,
        username: member.username,
      },
    })
    window.location.reload()
  }

  const showEditButtons = () => {
    if (checkIfSuperAdmin()) return true
    return role !== 'Member' && type !== 'Admin' ? true : false
  }

  const changeMemberStatusButtons = () => {
    return checkIfAdmin() || checkIfSuperAdmin()
  }

  const checkIfSuperAdmin = () => {
    if (!auth.user) return
    var roles = auth.user?.roles
    if (roles.length < 1) return false
    return roles[0].name === 'ROLE_ADMIN' ? true : false
  }

  const checkIfAdminOrMod = () => {
    return role === 'Admin' || role === 'Moderator' || checkIfSuperAdmin()
      ? true
      : false
  }

  const checkIfAdmin = () => {
    return role === 'Admin' ? true : false
  }

  return (
    <Paper sx={{ width: '100%', margin: 2 }}>
      <Grid container height={70}>
        <Grid item md={12} alignContent='center'>
          <Typography align='center'>{member.username}</Typography>
        </Grid>

        <Grid item sx={{ margin: 'auto' }}>
          {showEditButtons() && (
            <ButtonGroup
              variant='contained'
              aria-label='outlined primary button group'
              size='small'
            >
              {changeMemberStatusButtons() && (
                <>
                  <Button onClick={() => changeMemberStatus('Moderator')}>
                    Mod
                  </Button>
                  <Button onClick={() => changeMemberStatus('Member')}>
                    Member
                  </Button>
                </>
              )}
              {checkIfAdminOrMod() && (
                <Button onClick={() => removeMemberHandler()}>Kick</Button>
              )}
            </ButtonGroup>
          )}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default MemberBox
