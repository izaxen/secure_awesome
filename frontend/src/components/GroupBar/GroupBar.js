import React from 'react'
import { useQuery } from '@apollo/client'
import { Grid, Typography, Container } from '@mui/material'
import { GET_ALL_GROUPS } from '../../api/queries/getAllGroups'
import GroupBox from '../GroupBar/GroupBox'

const GroupBar = () => {
  const { data, loading } = useQuery(GET_ALL_GROUPS, { variables: {} })

  return (
    <Container style={{ background: "#813db9" }}>
      <Typography
        variant='h5'
        align='center'
        padding={2}
        borderBottom='2px solid black'
      >
        Groups
      </Typography>
      <Grid container>
        {loading && <h1>loading</h1>}
        {!loading &&
          data?.getGroups &&
          data.getGroups.map((grp, idx) => {
            return <GroupBox key={idx} group={grp} />
          })}
      </Grid>
    </Container>
  )
}

export default GroupBar
