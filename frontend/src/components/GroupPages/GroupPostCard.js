import React, { useState } from 'react'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
} from '@mui/material/'
import { useMutation } from '@apollo/client'
import { REMOVE_POST_FROM_GROUP } from '../../api/mutation/removePostFromGroup'
import { useAuth } from '../../store/AuthContext'
import { EDIT_POST } from '../../api/mutation/editPost'

const GroupPostCard = ({ post, groupId, admins, mods }) => {
  const [removePost] = useMutation(REMOVE_POST_FROM_GROUP)
  const [editPostInGroup] = useMutation(EDIT_POST)
  const auth = useAuth()
  const username = auth.user?.username
  const [message, setmessage] = useState(post.text)
  const [editPost, setEditPost] = useState('')

  const correctUser = () => {
    if (post.username === username) return true
    const admin = admins.filter((user) => user.username === username)
    const moderators = mods.filter((user) => user.username === username)
    return moderators.length > 0 || admin.length > 0 ? true : false
  }

  const handleMessage = () => {
    editPostInGroup({
      variables: {
        text: message,
        postId: post.id,
        groupId: groupId,
      },
    })
    setEditPost(false)
    window.location.reload()
  }

  const deletePost = () => {
    removePost({
      variables: {
        groupId: groupId,
        postId: post.id,
      },
    })
    window.location.reload()
  }

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 10 }}
          color='text.secondary'
          gutterBottom
          variant='body2'
        >
          Posted: {post.updatedAt}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color='text.secondary' variant='body2'>
          Author: {post.username}
        </Typography>
        {!editPost && <Typography variant='body2'>{post.text}</Typography>}
        {editPost && (
          <Box sx={{ marginTop: '1rem' }}>
            <TextField
              id='outlined-multiline-static'
              label='Edit post'
              multiline
              sx={{ width: '400px' }}
              rows={4}
              onChange={(e) => setmessage(e.target.value)}
              value={message}
            />
            <Button onClick={handleMessage} sx={{ top: 90, left: 10 }}>
              Submit
            </Button>
          </Box>
        )}
      </CardContent>

      {correctUser() && (
        <>
          <CardActions>
            <Button
              size='small'
              onClick={() => {
                setEditPost(true)
              }}
            >
              edit post
            </Button>
          </CardActions>
          <CardActions>
            <Button
              size='small'
              onClick={() => {
                deletePost()
              }}
            >
              delete post
            </Button>
          </CardActions>
        </>
      )}
    </React.Fragment>
  )

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>{card}</Card>
    </Box>
  )
}

export default GroupPostCard
