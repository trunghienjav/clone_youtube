import React, { useState, Suspense, lazy } from "react";
import { Stack, Box } from '@mui/material'

// Sử dụng React.lazy() để tải chậm components
const VideoCard = lazy(() => import('./VideoCard'));
const ChannelCard = lazy(() => import('./ChannelCard'));

const Videos = ({ videos, direction }) => {
  // console.log(videos)
  if (!videos?.length) return "Loading videos..." //để nó ko hiện cảnh báo


  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    //gap props là khoảng cách giữa các hàng và các cột
    >
      {videos.map((item, index) => {
        {/* console.log(item); */ }

        return (
          <Box key={index}>
            {item.id.videoId && ( //đang làm lazy load
              <React.Suspense fallback={<div style={{color: 'white'}}>Loading...</div>}>
                <VideoCard videos={item} />
              </React.Suspense>
            )}

            {item.id.channelId && (
              <React.Suspense fallback={<div>Loading...</div>}>
                <ChannelCard channelDetail={item} />
              </React.Suspense>
            )}
          </Box>
        )
      })}
    </Stack>
  )
}

export default Videos