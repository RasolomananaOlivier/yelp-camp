import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react';

import NavBarComponent from '../../components/navbar';
import SearchComponent from '../../components/search';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '../../components/footer';

export const Padding = styled(Box)(({ theme }) => ({
  padding: '0.5rem 1.5rem',
  [theme.breakpoints.up('md')]: {
    padding: '0.5rem 4.5rem',
  },
  backgroundColor: theme.palette.customBackground.main,
}));
/*  */

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,

  }
};

export default function SearchPage({ camps }) {
  return (
    <motion.div variants={fadeIn} exit='exit' initial='initial' animate='animate'>
      <NavBarComponent />
      <Padding>
        <SearchComponent />

        <Grid container sx={{ py: 2 }} spacing={{ xs: 3, md: 8 }} >
          {
            camps.map((camp) => (
              <Grid key={camp.name} item xs={12} sm={6} md={4}

              >
                <Card elevation={1} >
                  <CardMedia
                    component="img"
                    height="150"
                    image={camp.src}
                    alt="green iguana"
                  />
                  <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                      {camp.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {camp.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 3 }} >
                    <Link href={`/campground/${camp.url}`}>
                      <a>
                        <Button size="medium" variant='outlined' sx={{ width: '100%' }}>
                          View Campground
                        </Button>
                      </a>
                    </Link>

                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>


      </Padding>
      <Footer />
    </motion.div>

  )
}


export async function getStaticProps() {
  return {
    props: {
      camps: [
        {
          name: 'Mount Ulap',
          url: 'mout-ulap',
          description: 'One of the most famous hikes in Benguet is MT Ulap in Itogon.',
          fullDescription: "Mount Ulap is a7.7 kilometer moderately trafficked point-to-point trail located near Tuba, benguet, Philippines that offers the chance to see wildlife nad is rated as moderate. The trail is primarily used for hiking.",
          src: '/img/Mount Ulap.jpg',
          highQualitySrc: '/highImg/Mount Ulap.png',
          reviews: [
            {
              name: 'Adam Jones',
              date: '13h hours ago',
              content: 'Honesty one of the best experiences ever, took us \
              a while to figure out how to get there but it was amazing!',
            }, {
              name: 'Isaac Dylan',
              date: '1 day ago',
              content: 'Traveling changes you as person, you gain more \
              perspective, this is the perfect spot to do that.'
            },
            {
              name: 'Hudson Luca',
              date: '3 days ago',
              content: 'Definitely recommend going there, not too far \
              and not a lot of people to the experience.'
            }
          ]
        },
        {
          name: 'Calaguas Island',
          url: 'calaguas-island',
          description: 'One of the most famous hikes in Benguet is MT Ulap in Itogon.',
          fullDescription: "Mount Ulap is a7.7 kilometer moderately trafficked point-to-point trail located near Tuba, benguet, Philippines that offers the chance to see wildlife nad is rated as moderate. The trail is primarily used for hiking.",
          src: '/img/Calaguas Island.jpg',
          highQualitySrc: '/highImg/Calagus Islands.jpg',
          reviews: [
            {
              name: 'Adam Jones',
              date: '13h hours ago',
              content: 'Honesty one of the best experiences ever, took us \
              a while to figure out how to get there but it was amazing!',
            }, {
              name: 'Isaac Dylan',
              date: '1 day ago',
              content: 'Traveling changes you as person, you gain more \
              perspective, this is the perfect spot to do that.'
            },
            {
              name: 'Hudson Luca',
              date: '3 days ago',
              content: 'Definitely recommend going there, not too far \
              and not a lot of people to the experience.'
            }
          ]
        }
        , {
          name: 'Onay Beach',
          url: 'onay-beach',
          description: 'One of the most famous hikes in Benguet is MT Ulap in Itogon.',
          fullDescription: "Mount Ulap is a7.7 kilometer moderately trafficked point-to-point trail located near Tuba, benguet, Philippines that offers the chance to see wildlife nad is rated as moderate. The trail is primarily used for hiking.",
          src: '/img/Onay Beach.jpg',
          highQualitySrc: '/highImg/Onay Beach.jpg',
          reviews: [
            {
              name: 'Adam Jones',
              date: '13h hours ago',
              content: 'Honesty one of the best experiences ever, took us \
              a while to figure out how to get there but it was amazing!',
            }, {
              name: 'Isaac Dylan',
              date: '1 day ago',
              content: 'Traveling changes you as person, you gain more \
              perspective, this is the perfect spot to do that.'
            },
            {
              name: 'Hudson Luca',
              date: '3 days ago',
              content: 'Definitely recommend going there, not too far \
              and not a lot of people to the experience.'
            }
          ]
        }, {
          name: 'Seven Sisters Waterfall',
          url: 'seven-sisters-waterfall',
          description: 'One of the most famous hikes in Benguet is MT Ulap in Itogon.',
          fullDescription: "Mount Ulap is a7.7 kilometer moderately trafficked point-to-point trail located near Tuba, benguet, Philippines that offers the chance to see wildlife nad is rated as moderate. The trail is primarily used for hiking.",
          src: '/img/Seven Sisters Waterfall.jpg',
          highQualitySrc: '/highImg/Seven Sisters Waterfall.jpg',
          reviews: [
            {
              name: 'Adam Jones',
              date: '13h hours ago',
              content: 'Honesty one of the best experiences ever, took us \
              a while to figure out how to get there but it was amazing!',
            }, {
              name: 'Isaac Dylan',
              date: '1 day ago',
              content: 'Traveling changes you as person, you gain more \
              perspective, this is the perfect spot to do that.'
            },
            {
              name: 'Hudson Luca',
              date: '3 days ago',
              content: 'Definitely recommend going there, not too far \
              and not a lot of people to the experience.'
            }
          ]
        }, {
          name: 'Latik Riverside',
          url: 'latik-riverside',
          description: 'One of the most famous hikes in Benguet is MT Ulap in Itogon.',
          fullDescription: "Mount Ulap is a7.7 kilometer moderately trafficked point-to-point trail located near Tuba, benguet, Philippines that offers the chance to see wildlife nad is rated as moderate. The trail is primarily used for hiking.",
          src: '/img/Latik Riverside.jpg',
          highQualitySrc: '/highImg/Latik Riverside.jpg',
          reviews: [
            {
              name: 'Adam Jones',
              date: '13h hours ago',
              content: 'Honesty one of the best experiences ever, took us \
              a while to figure out how to get there but it was amazing!',
            }, {
              name: 'Isaac Dylan',
              date: '1 day ago',
              content: 'Traveling changes you as person, you gain more \
              perspective, this is the perfect spot to do that.'
            },
            {
              name: 'Hudson Luca',
              date: '3 days ago',
              content: 'Definitely recommend going there, not too far \
              and not a lot of people to the experience.'
            }
          ]
        },
        {
          name: 'Buloy Springs',
          url: 'buloy-springs',
          description: 'One of the most famous hikes in Benguet is MT Ulap in Itogon.',
          fullDescription: "Mount Ulap is a7.7 kilometer moderately trafficked point-to-point trail located near Tuba, benguet, Philippines that offers the chance to see wildlife nad is rated as moderate. The trail is primarily used for hiking.",
          src: '/img/Buloy Springs.jpg',
          highQualitySrc: '/highImg/Buloy Springs.jpg',
          reviews: [
            {
              name: 'Adam Jones',
              date: '13h hours ago',
              content: 'Honesty one of the best experiences ever, took us \
              a while to figure out how to get there but it was amazing!',
            }, {
              name: 'Isaac Dylan',
              date: '1 day ago',
              content: 'Traveling changes you as person, you gain more \
              perspective, this is the perfect spot to do that.'
            },
            {
              name: 'Hudson Luca',
              date: '3 days ago',
              content: 'Definitely recommend going there, not too far \
              and not a lot of people to the experience.'
            }
          ]
        }
      ]
    }
  }
}