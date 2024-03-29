import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import VideoComment from './VideoComment'
import { formatDate } from '../Helper/dateHelper'

const VideoDetail = () => {

  const [videoDetail, setvideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const [videoComments, setVideoComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        // console.log(data);
        setvideoDetail(data.items[0])
      })
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        setVideos(data.items)
      })
    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}&maxResults=10`)
      .then((data) => {

        if(data.items){
          console.log(data.items);
          if(data.items.length > 10){
            // console.log("Trên 10 comment nên cắt");
            setVideoComments(data.items.slice(0, 10))
          }else{
            // console.log("Dưới 10 cmnt");
            setVideoComments(data.items)
          }

        }else{
          console.log("No comments");
          // setVideoComments("No comments")
        }

      })
      .catch((err) => {
        setVideoComments(err.message)
      })
  }, [id])


  if (!videoDetail?.snippet) return 'Loading...'
  const { snippet: { title, channelId, channelTitle, publishedAt },
    statistics: { viewCount, likeCount }
  } = videoDetail

  const formattedDate = formatDate(publishedAt);// sử dụng helpers

  return (
    <Box minHeight="95vh">
      <Stack direction={{
        xs: 'column',
        md: 'row'
      }}>
        <Box flex={1}>
          <Box sx={{
            width: '100%',
            position: '',
            top: '86px'
          }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />

            {/* Tên video */}
            <Typography
              color="#fff"
              variant="h5"
              fontWeight="bold"
              p={2}
            >
              {title}
            </Typography>

            {/* Tên channel và view, like */}
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: '#fff',
              }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant='subtitle2'
                  fontWeight='bold'
                  color="gray"
                >
                  {channelTitle}
                  <CheckCircle sx={{
                    fontSize: 12,
                    color: 'gray',
                    ml: '4px'
                  }} />
                </Typography>
              </Link>
              <Stack
                direction="row"
                gap="20px"
                alignItems="center"
              >
                <Typography
                  variant='body1'
                  sx={{
                    opacity: 0.7
                  }}
                >
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    opacity: 0.7
                  }}
                >
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    opacity: 0.7
                  }}
                >
                  {formattedDate}
                </Typography>
              </Stack>
            </Stack>
            {
              videoComments.map((comment, index) => {
                return (
                  <Box key={index}>
                    <VideoComment videoComments={comment} />
                  </Box>
                )
              })
            }
          </Box>
        </Box>
        <Box
          px={2}
          py={{
            md: 1,
            xs: 5
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos
            videos={videos}
            direction="column"
          />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail