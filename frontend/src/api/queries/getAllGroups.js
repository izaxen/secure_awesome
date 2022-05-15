import gql from 'graphql-tag'

export const GET_ALL_GROUPS = gql`
  query getGroups {
    getGroups {
      id
      name
      isPrivate
      admins {
        username
      }
      moderators {
        username
      }
      members {
        username
      }
      totalMembers
    }
  }
`
