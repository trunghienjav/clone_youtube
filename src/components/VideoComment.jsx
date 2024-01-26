import React, { useState, useEffect } from 'react'
import { Card, Typography, Box, Stack, CardMedia, CardContent } from '@mui/material'

const VideoComment = ({ videoComments }) => {
    // console.log(videoComments?.snippet?.topLevelComment?.snippet?.authorDisplayName);
    // console.log(videoComments?.snippet?.topLevelComment?.snippet?.textDisplay);
    console.log(videoComments);
    const authorDisplayName = videoComments?.snippet?.topLevelComment?.snippet?.authorDisplayName
    const textDisplay = videoComments?.snippet?.topLevelComment?.snippet?.textDisplay
    const authorProfileImage = videoComments?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
    return (
        <Card
            sx={{
                backgroundColor: '#000',
                m: '20px',
                pl: '10px',
                border: '1px solid gray',
                borderRadius: '10px',
                color: 'white'

            }}
        >
            <Stack
                direction="row"
            >
                <Box>
                    <CardMedia
                        image={authorProfileImage}
                        sx={{
                            borderRadius: '50%',
                            height: '40px',
                            width: '40px',
                            m: 2,
                            border: '1px solid #e3e3e3'
                        }}
                    />
                </Box>
                <Stack 
                direction="column"
                sx={{
                    width: '100%',
                }}
                >
                    <CardContent>
                        <div>
                            <Typography
                                variant="subtitle2"
                            >
                                {authorDisplayName}
                            </Typography>
                        </div>
                    </CardContent>
                    <CardContent
                        sx={{
                            gap: 0.5,
                            mt: 1,
                        }}
                    >
                        <Typography
                            variant='subtitle1'
                            sx={{
                                
                            }}
                        >
                            {textDisplay}
                        </Typography>
                    </CardContent>
                </Stack>
            </Stack>

        </Card>
    )
}

export default VideoComment

