import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Divider, Header } from 'semantic-ui-react'

const NoMatchRoute = () => {
  return (
    <Container textAlign='center'>
      <Divider hidden className='large' />
      <Header as='h1'>404_PAGE</Header>
      <Link to={process.env.REACT_APP_HOME_URL}>Tillbaka</Link>
    </Container>
  )
}

export default NoMatchRoute
