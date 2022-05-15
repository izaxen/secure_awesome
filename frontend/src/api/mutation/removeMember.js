import gql from 'graphql-tag'
export const REMOVE_MEMBER = gql`
  mutation removeMember($groupId: String, $username: String) {
    removeMember(groupId: $groupId, username: $username) {
      id
    }
  }
`
