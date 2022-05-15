import AllRoutes from './AllRoutes/AllRoutes'
import GroupBar from '../GroupBar/GroupBar'
import {
  Grid,
  TextField,
  Typography,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
} from '@mui/material'
import Navbar from '../Navbar/Navbar'
import { useEffect, useState } from 'react'
import { useAuth } from '../../store/AuthContext'
import { CREATE_GROUP } from '../../api/mutation/createGroup'
import { useMutation } from '@apollo/client'

function App() {
  const [groupName, setGroupName] = useState('')
  const [checked, setChecked] = useState(false)
  const [addGroup, { error }] = useMutation(CREATE_GROUP)
  const auth = useAuth()
  useEffect(() => {
    if (auth.user) return
    auth.whoAmI()
  }, [auth.user])

  const createGroup = () => {
    addGroup({
      variables: {
        groupName: groupName,
        isPrivate: checked,
      },
    })
    window.location.reload()
  }

  return (
    <Grid container height='100%'>
      <Grid item minWidth={'100%'} maxHeight={'62px'}>
        <Navbar />
      </Grid>
      <Grid item md={2} bgcolor='#813db9' minHeight='100%'>
        {auth.user && (
          <Box sx={{ padding: 2 }}>
            <Typography
              variant='h5'
              align='center'
              padding={2}
              borderBottom='2px solid black'
            >
              Create Group
            </Typography>
            <TextField
              id='outlined-multiline-static'
              label='Enter text'
              multiline
              sx={{ backgroundColor: 'white' }}
              onChange={(e) => setGroupName(e.target.value)}
              value={groupName}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color='default' />}
              label='Private'
              onChange={(e) => setChecked(e.target.checked)}
              sx={{ marginLeft: 2 }}
            />
            <Button color='secondary' onClick={createGroup}>
              Create
            </Button>
          </Box>
        )}
        <GroupBar />
      </Grid>
      <Grid item md={10}>
        <AllRoutes />
      </Grid>
    </Grid>
  )
}

export default App
