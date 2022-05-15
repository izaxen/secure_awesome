import gql from 'graphql-tag'

export const GET_GROUP_ACCESS = gql`
  query getGroupsAccess($groupId: String) {
    getGroupsAccess(groupId: $groupId) {
      isPrivate
    }
  }
`
