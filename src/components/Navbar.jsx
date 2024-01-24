import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => (
  <Stack
    direction="row" //chiều ngang
    alignContent="center"
    p={2}
    sx={{
      position: 'sticky',//cuộn xuống ko bị biến mất
      background: '#000',
      top: 0,
      justifyContent: 'space-between' //đẩy biểu tượng và thanh search ra 2 bên góc
    }}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={logo}
        alt="logo"
        height={45}
      />
    </Link>
    <SearchBar />

  </Stack>
)

export default Navbar