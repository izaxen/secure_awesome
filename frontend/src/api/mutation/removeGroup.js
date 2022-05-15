import gql from 'graphql-tag'
export const REMOVE_GROUP = gql`
  mutation removeGroup($groupId: String) {
    removeGroup(groupId: $groupId) {
      message
    }
  }
`
