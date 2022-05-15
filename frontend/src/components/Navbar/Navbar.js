import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Link,
  Button,
} from '@material-ui/core'
import { useAuth } from '../../store/AuthContext'
import styles from '../../css/homepage.module.css'

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#2f4f4f',
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const auth = useAuth()

  return (
    <AppBar position='relative'>
      <Toolbar className={[styles.flowingColor, classes.toolbar]}>
        <Typography variant='h6' className={classes.logoLg}>
          <Link href='/' variant='inherit' underline='none'>
            PlaceAwesome
          </Link>
        </Typography>
        {!auth.user && (
          <>
            <Typography variant='body2'>
              <Link href='/login' variant='inherit' underline='none'>
                Login
              </Link>
            </Typography>
            <Typography variant='body2'>
              <Link href='/signup' variant='inherit' underline='none'>
                Sign up
              </Link>
            </Typography>
          </>
        )}

        {auth.user && (
          <Button
            variant='text'
            onClick={() => {
              auth.logoutUser()
            }}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
