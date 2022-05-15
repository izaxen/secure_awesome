import gql from 'graphql-tag'
export const CHANGE_MEMBER_STATUS = gql`
  mutation changeMemberStatus(
    $groupId: String
    $username: String
    $newRole: String
  ) {
    changeMemberStatus(
      groupId: $groupId
      username: $username
      newRole: $newRole
    ) {
      groupId
    }
  }
`
