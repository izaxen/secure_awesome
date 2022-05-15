import gql from 'graphql-tag'
export const EDIT_POST = gql`
  mutation editPostInGroup(
    $groupId: String
    $text: String
    $postId:String
  ) {
   editPostInGroup(groupId: $groupId, text: $text, postId:$postId) {
      text
      id
      updatedAt
      postId
    }
  }
`
