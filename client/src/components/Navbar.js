import React from 'react'
import {Box, Link, Typography, useTheme} from '@mui/material'
import { purple } from '@mui/material/colors'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const theme = useTheme();
  return (
      <Box width={'100%'} p={'1rem 6%'} backgroundColor={theme.palette.background.alt} textAlign={'center'} sx={{boxShadow:3, mb:2}}>
      <Typography variant='h1' color={'primary'} fontWeight={'bold'}>
          AI GPT 3 CLone
      </Typography>
      <NavLink to='/register' p={1}> SignUp</NavLink>
      <NavLink to='/login' p={1}>SignIn</NavLink>
      </Box>
  )
}

export default Navbar
