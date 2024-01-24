import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Sidebar, Videos } from './'

const Feed = () => {

const [selectedCategory, setSelectedCategory] = useState('New')

const [videos, setVideos] = useState([])

useEffect(() => { 
  fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  .then((data) => {
    setVideos(data.items)
  })
}, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}
    //set thành row ở medium devices (ở máy tính), sx là set thành 1 cột ở table, đt...
    >

    
    {/* box gồm phần side bar và chữ copyright */}
      <Box sx={{
        height: { sx: 'auto', md: '92vh' },
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2 }
      }}
      //vertical height: chiều cao theo chiều dọc (từ trên xuống)
      //px là padding horizontal
      >
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright By hien
        </Typography>
      </Box>


      {/* box bao phần New videos và video */}
      <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2
        }}
      >
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{
            color: 'white'
          }}
        >
          {selectedCategory} <span style={{
            color: '#F31503'
          }}>
            Videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed