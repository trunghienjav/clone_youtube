import React, { useState, useEffect } from "react";
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {
  // console.log(videos)
  if(!videos?.length) return "Loading videos..." //để nó ko hiện cảnh báo

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
        {/* console.log(item); */}

        return (
          <Box key={index}>
            {item.id.videoId && <VideoCard videos={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        )
      })}
    </Stack>
  )
}

export default Videos