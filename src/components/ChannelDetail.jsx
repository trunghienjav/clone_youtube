import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard, VideoCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`) //lấy ra thông tin 1 channel
      .then((data) => {
        // console.log(data);
        setChannelDetail(data?.items[0])
      });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`) //lấy ra videos của channel đó
      .then((data) => {
        // console.log(data);
        setVideos(data?.items)
      });
  }, [id])

  return (
    <Box
      minHeight="95vh"
    >
      <div style={{
        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
        height: '300px'
      }}
      />
      <ChannelCard
        channelDetail={channelDetail}
        marginTop="-110px"
      />

      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
      
    </Box>
  )
}

export default ChannelDetail