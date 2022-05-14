import React from 'react';
import Image from "next/image";
import { Box, styled } from '@mui/material';
import Logo from './logo';

const Padding = styled(Box)(({ theme }) => ({
  padding: '1rem 1.5rem',
  [theme.breakpoints.up('md')]: {
    padding: '1rem 4.5rem',
  },
  backgroundColor: theme.palette.customBackground.main,
}));

export default function Footer() {
  return (
    <footer>
      <Padding>
        <Logo />
      </Padding>
    </footer>
  )
}
