import gql from 'graphql-tag'
export const ADD_POST = gql`
  mutation addNewPostToGroup(
    $groupId: String
    $text: String
  ) {
    addNewPostToGroup(groupId: $groupId, text: $text) {
      text
      id
      updatedAt
    }
  }
`
