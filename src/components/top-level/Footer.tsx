import React from 'react'
import AppBar from '@mui/material/AppBar'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LogoButton from '../mid-level/LogoButton'
import SocialWidgets from '../mid-level/SocialWidgets';
import useTheme from '@mui/material/styles/useTheme';

const widgets = {
  github: {
    url: 'https://github.com/pulchroxloom',
    icon: GitHubIcon,
    blank: true
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/dantebarbieri',
    icon: LinkedInIcon,
    blank: true
  },
  email: {
    url: 'mailto:contact@dantebarbieri.dev',
    icon: EmailIcon
  }
}

type Props = {}

const Footer = (props: Props) => {
  const theme = useTheme()

  return (
    <AppBar component='footer' position='static' sx={{
      padding: theme.spacing(2),
      paddingRight: theme.spacing(5),
      boxShadow: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      top: 'auto',
      bottom: 0
    }}>
      <LogoButton height={32} label='Dante Barbieri' />
      <SocialWidgets widgets={widgets} />
    </AppBar>
  )
}

export default Footer