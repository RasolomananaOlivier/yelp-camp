import { AppBar, Box, IconButton, MenuItem, styled, Toolbar, Typography, Menu, Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { Menu as IconMenu } from '@mui/icons-material';
import Link from 'next/link';
import { AppDataContext } from '../pages/_app';
import Logo from './logo';



const NavBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    padding: '0 3rem',
  }
}))


export default function NavBarComponent() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  const appData = useContext(AppDataContext);
  return (
    <NavBar position='static' color='transparent' elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display='flex' alignItems='center' >
          <Box sx={{ pr: 2 }}>
            <Logo />
          </Box>
          <Link href='/'>
            <a>
              <Button sx={{ display: { xs: 'none', md: 'block' } }} >Home</Button>
            </a>
          </Link>
        </Box>
        <Box alignItems='center' sx={{ display: { xs: 'none', md: 'flex' }, }}>
          {appData.data.loggedIn ? <Typography sx={{ pr: 2, mr: 2 }}>John Doe</Typography> :
            <Link href='/signin' >
              <a>
                <Button sx={{ mr: 2 }} >
                  Sign in
                </Button>
              </a>
            </Link>
          }
          <Link href={appData.data.loggedIn ? '/signin' : '/signup'}>
            <a>
              <Button sx={{ display: { xs: 'none', md: 'block' } }} variant={appData.data.loggedIn ? 'text' : 'contained'} >
                {appData.data.loggedIn ? 'Logout' : 'Create an account'}
              </Button>
            </a>
          </Link>
        </Box>
        <IconButton
          id='basic-button'
          sx={{ display: { xs: 'block', md: 'none' } }}
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <IconMenu />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>John Doe</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </NavBar>

  )
}
