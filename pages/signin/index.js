import { ArrowBack } from '@mui/icons-material'
import { Link as LinkMui, Avatar, Box, Button, Grid, Stack, Typography, FormControl, FormLabel, FormHelperText, Input, FormGroup, OutlinedInput } from '@mui/material'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import Logo from '../../components/logo'

const NextLink = ({ href, child }) => {
  return (
    <Link href={href}>
      <a>{child}</a>
    </Link>
  )
}

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

export default function SignUp() {
  return (
    <motion.div initial='initial' animate='animate' exit='exit'>
      <Grid container >
        <Grid item md={7} sx={{ backgroundColor: 'customBackground.main' }}>
          <motion.div variants={goToLeft}>
            <Box sx={{
              px: { xs: 3, md: 14, lg: 20 },
              py: 3,
            }}>
              <Box display='flex' justifyContent='space-between' >
                <Box sx={{ width: 100, display: 'flex', alignItems: 'center' }}>
                  <Logo />
                </Box>

                <NextLink href='/search' child={<Button startIcon={<ArrowBack />} sx={{ fontSize: { xs: 12 } }}>
                  Back to campgrounds
                </Button>} />



              </Box>
              <Box component='form'
                sx={{
                  display: 'flex', flexDirection: 'column',
                  py: { xs: 2, lg: 10 }
                }}>
                <Typography variant='h3' fontSize={30} sx={{ mb: 2.5 }}>
                  Start exploring camps from all around the worlds.
                </Typography>
                <FormControl sx={{ mb: 2.5 }}>
                  <FormLabel htmlFor='username'>Username</FormLabel>
                  <Input id='username' placeholder='johndoe_01' />
                </FormControl>
                <FormControl sx={{ mb: 3 }}>
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <Input id='password' placeholder='choose a password' />
                </FormControl>
                <motion.div whileTap={{ scale: 0.98, origin: 0 }} style={{ alignSelf: 'stretch' }}>
                  <Button type='submit' variant='contained' sx={{ py: 1.4, mb: 3, width: '100%' }}>
                    Login
                  </Button>
                </motion.div>

                <Typography>
                  Already a user? <Link href='/signup'><a style={{ textDecoration: 'underline' }}>Create an account</a></Link>
                </Typography>
              </Box>


            </Box>
          </motion.div>


        </Grid>
        <Grid item md={5}>
          <motion.div variants={goToRight}>
            <Box sx={{
              px: { xs: 2, md: 8 }, py: 4, height: { xs: '100%', md: '100vh' },
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              flexDirection: 'column', backgroundColor: '#e7f0f1'
            }} >
              <Typography variant='h4' fontSize={{ xs: 25, md: 32 }}>
                &quot;YelpCamp has honestly saved me hours of research time,
                and the camps on here are definitily well picked and added.&quot;
              </Typography>
              <Stack direction='row' sx={{ py: 2 }}>
                <Avatar src='/User Testimonial.svg' alt='sdf' sx={{ mr: 2 }} />
                <Box>
                  <Typography >
                    May Andrews
                  </Typography>
                  <Typography color='text.secondary'>
                    Professional Hiker
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </motion.div>

        </Grid>
      </Grid >
    </motion.div>

  )
}
