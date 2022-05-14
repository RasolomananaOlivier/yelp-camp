import { Box, Button, Stack, TextField, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function SearchComponent() {
  return (
    <Box sx={{ p: { xs: 3 }, mb: 4, bgcolor: '#fff3f3' }}>
      <Typography variant='h4'>
        Welcome to YelpCamp!
      </Typography>
      <Typography color='text.secondary' variant='subtitle2' sx={{ py: 1.5, width: { sm: '22rem' } }}>
        View our hand-picked campgrounds from all over
        the world, or add your own.
      </Typography>
      <Stack spacing={1.5} direction={{ xs: 'column', sm: 'row' }} >

        <TextField
          label="Search for camps"
          id="outlined-start-adornment"


        />

        <Button variant='contained' sx={{ height: { xs: 52, }, alignSelf: 'stretch' }}>Search</Button>

      </Stack>
      <Box sx={{ py: 2.5 }}>
        <Link href='/campground/new-camp' >
          <a style={{ textDecoration: 'underline' }}>
            Or add your own campground
          </a>


        </Link>
      </Box>

    </Box >
  )
}
