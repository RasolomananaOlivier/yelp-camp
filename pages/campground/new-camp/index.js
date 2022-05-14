import React from 'react';
import Head from 'next/head';
import NavBarComponent from '../../../components/navbar';
import Footer from '../../../components/footer';
import { Box, Button, FormControl, FormLabel, Input, Typography } from '@mui/material';

export default function NewCampgrounds() {
  return (
    <div>
      <Head>
        <title>New campgrounds </title>
      </Head>
      <NavBarComponent />
      <main>
        <Box sx={{
          display: 'flex', justifyContent: 'center', flexDirection: 'column',
          px: { xs: 2, md: 30, lg: 50 }, py: { xs: 1, md: 3 }
        }} component='form'>
          <Typography variant='h3' fontSize={30} sx={{ mb: 2.5 }}>
            Add new campgrounds.
          </Typography>
          <FormControl sx={{ mb: 2.5 }}>
            <FormLabel htmlFor='username'>Campground Name</FormLabel>
            <Input id='username' placeholder='Seven Sisters Waterfall' />
          </FormControl>
          <FormControl sx={{ mb: 3 }}>
            <FormLabel htmlFor='password'>Price</FormLabel>
            <Input id='password' placeholder='$149' />
          </FormControl>
          <FormControl sx={{ mb: 3 }}>
            <FormLabel htmlFor='password'>Image</FormLabel>
            <Input id='password' placeholder='www.thepinoytraveler.com/1564864sdf465.jpg' />
          </FormControl>
          <FormControl sx={{ mb: 3 }}>
            <FormLabel htmlFor='password'>Description</FormLabel>
            <Input id='password'
              placeholder='Some intersting thing about the campground \n
            Some intersting thing about the campground
            Some intersting thing about the campground Some intersting thing about the campground'
              multiline rows={5} />
          </FormControl>
          <Button type='submit' variant='contained' sx={{ py: 1.4, mb: 3, width: '100%' }}>
            Add campground
          </Button>
        </Box>
      </main>
      <Footer />
    </div>
  )
}
