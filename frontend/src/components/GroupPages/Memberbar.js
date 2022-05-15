import React from 'react'
import { Grid, Typography, Container } from '@mui/material'
import MemberBox from './MemberBox'

const MemberBar = ({ group, role }) => {
  return (
    <Container style={{ background: "#813db9" }}>
      <Typography
        variant='h5'
        align='center'
        padding={2}
        borderBottom='2px solid black'
      >
        Admins
      </Typography>
      <Grid container>
        {group?.name &&
          group.admins.map((mem, idx) => {
            return (
              <MemberBox
                key={idx}
                member={mem}
                role={role}
                type={'Admin'}
                groupId={group.id}
              />
            )
          })}
      </Grid>
      <Typography
        variant='h5'
        align='center'
        padding={2}
        borderBottom='2px solid black'
      >
        Moderators
      </Typography>
      <Grid container>
        {group?.name &&
          group.moderators.map((mem, idx) => {
            return (
              <MemberBox
                key={idx}
                member={mem}
                role={role}
                type={'Moderator'}
                groupId={group.id}
              />
            )
          })}
      </Grid>
      <Typography
        variant='h5'
        align='center'
        padding={2}
        borderBottom='2px solid black'
      >
        Members
      </Typography>
      <Grid container>
        {group?.name &&
          group.members.map((mem, idx) => {
            return (
              <MemberBox
                key={idx}
                member={mem}
                role={role}
                type={'Member'}
                groupId={group.id}
              />
            )
          })}
      </Grid>
    </Container>
  )
}
export default MemberBar
