import gql from 'graphql-tag'
export const CREATE_GROUP = gql`
  mutation createGroup($groupName: String, $isPrivate: Boolean) {
    createGroup(groupName: $groupName, isPrivate: $isPrivate) {
      id
    }
  }
`
