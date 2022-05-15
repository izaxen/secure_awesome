import gql from 'graphql-tag'
export const REMOVE_POST_FROM_GROUP = gql`
mutation removePostFromGroup($groupId:String $postId:String){
    removePostFromGroup(groupId:$groupId postId:$postId){
        groupId
        postId
    }
}
`