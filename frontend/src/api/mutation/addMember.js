import gql from 'graphql-tag'
export const ADD_MEMBER = gql`
  mutation addMember($groupId: String, $username: String) {
    addMember(groupId: $groupId, username: $username) {
      groupId
      username
    }
  }
`
