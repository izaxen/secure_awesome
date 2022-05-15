import gql from 'graphql-tag'

export const GET_SINGLE_GROUP_BY_ID = gql`
  query findSingleGroupById($groupId: String) {
    findSingleGroupById(groupId: $groupId) {
      id
      name
      isPrivate
      groupPosts {
        username
        text
        id
        updatedAt
      }
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
