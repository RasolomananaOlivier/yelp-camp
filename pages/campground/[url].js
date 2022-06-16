import { Box, Card, CardContent, CardMedia, Grid, styled, Typography, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../components/footer';
import NavBarComponent from '../../components/navbar';
import { fadeIn, Padding } from '../search';
import { AppData, AppDataContext } from '../_app';

const NextBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 400,

}))

const goToLeft = {
  initial: {
    x: '-100vw',
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween'
    }
  },
  exit: {
    x: '-100vw',
    opacity: 0,
    transition: {
      duration: 0.1,
      type: 'tween'
    }
  }
}

const goToRight = {
  initial: {
    x: '100vw',
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween'
    }
  },
  exit: {
    x: '100vw',
    opacity: 0,
    transition: {
      duration: 0.1,
      type: 'tween'
    }
  }
}

export default function CampsGround({ camp }) {
  return (
    <motion.div variants={fadeIn} exit='exit' initial='initial' animate='animate'>
      <Head>
        <title>{camp.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarComponent />
      <Padding>

        <Grid container direction={{ xs: 'column-reverse', md: 'row' }} >
          <Grid item xs={12} sm={12} md={5} sx={{ p: { sx: 2, md: 6 }, backgroundColor: 'white' }} >
            <motion.div variants={goToLeft}>
              <NextBox >
                <Image src='/img/Map.png' alt='map' layout='fill' objectFit='cover' />
              </NextBox>
            </motion.div>

          </Grid>

          <Grid item xs={12} sm={12} md={7} sx={{ pl: { xs: 0, md: 6 } }} >
            <motion.div variants={goToRight}>
              <Card elevation={1} sx={{ p: { xs: 2, md: 6 } }} >
                <CardMedia
                  component="img"
                  height="300"
                  image={camp.highQualitySrc}
                  alt="green iguana"
                />
                <CardContent sx={{ px: 0 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {camp.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {camp.fullDescription}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ py: 2 }}>
                    <i>Submitted by Andrew Mike</i>
                  </Typography>
                </CardContent>

              </Card>
            </motion.div>

            <Paper sx={{ p: { xs: 2, md: 6 }, my: 3 }}>
              {
                camp.reviews?.map(review => (
                  <>
                    <Box key={review.name}>
                      <Box display='flex' justifyContent='space-between'>
                        <Typography variant='h5' fontSize={18} >
                          {review.name}
                        </Typography>
                        <Typography variant='body2' color='text.secondary' >
                          {review.date}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color='text.secondary' sx={{ py: 2 }}>
                        {review.content}
                      </Typography>
                    </Box>
                    {!(camp.reviews.indexOf(review) === camp.reviews.length - 1) ? <Divider sx={{ mb: 2 }} /> : null}

                  </>

                ))
              }

            </Paper>
          </Grid>
        </Grid>

        <Footer />
      </Padding>


    </motion.div>
  )
}

export async function getStaticPaths() {
  const paths = AppData.camps.map(camp => ({
    params: { url: camp.url }
  }));

  return {
    paths, fallback: false
  }
};

export async function getStaticProps({ params }) {

  const res = await fetch(`${process.env.HOST}/api/camp/${params.url}`, {
    method: 'GET',
    headers: {
      "Content-Type": 'application-json'
    }

  });
  const data = await res.json();
  return {
    props: {
      camp: data
    }
  };
}