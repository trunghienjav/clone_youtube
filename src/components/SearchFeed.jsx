import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos } from './'

const SearchFeed = () => {

  const [videos, setVideos] = useState([])

  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <Box
      p={2}
      ml={
        { xs: '1px', md: '90px' }

      }
      sx={{
        overflowY: 'auto', //nếu nội dung hiển thị bị vượt quá màn hiện tại thì hiển thị scroll
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
        Search result for: <span style={{
          color: '#F31503'
        }}>
          {searchTerm}
        </span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed