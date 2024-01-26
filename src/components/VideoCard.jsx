import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, Tooltip } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'
const VideoCard = ({ videos: { id: { videoId }, snippet } }) => {

    // console.log(videoId);
    return (
        <Card
            sx={{
                width: {
                    xs: '356px', //xs: extra small devices
                    sm: '338px',
                    md: '320px', // medium devices
                },
                boxShadow: 'none',
                borderRadius: 5
            }}>

            {/* Ảnh thumbnails */}
            <Link to={videoId ? `/video/${videoId}` : demoThumbnailUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    component='img'
                    sx={{
                        width: {
                            xs: '356px', //xs: extra small devices
                            sm: '338px',
                            md: '320px',
                        },
                        height: 180
                    }}
                />
            </Link>


            <CardContent
                sx={{
                    backgroundColor: '#1e1e1e',
                    height: '90px'
                }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Tooltip title={snippet?.title && snippet?.title.length > 60 ? snippet?.title : ''}>
                        <Typography
                            variant='subtitle1'
                            fontWeight="bold"
                            color="#FFF"
                        >
                            {(snippet?.title.length > 60) ? snippet?.title.substring(0, 60) + '...' : snippet?.title}
                        </Typography>
                    </Tooltip>
                </Link>
                <Link to={snippet?.channelId ?
                    `/channel/${snippet?.channelId}` :
                    demoChannelUrl}>
                    <Typography
                        variant='subtitle2'
                        fontWeight='bold'
                        color="gray"
                    >
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{
                            fontSize: 12,
                            color: 'gray',
                            ml: '4px'
                        }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard