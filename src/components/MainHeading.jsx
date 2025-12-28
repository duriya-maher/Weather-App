import { Typography } from '@mui/material'

const MainHeading = () => {
  return (
    <Typography 
      variant="h1"
      sx={{
        fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
        fontWeight: 700,
        textAlign: 'center',
        my: { xs: 3, md: 5 },
        animation: 'fadeIn 0.6s ease-out'
      }}
    >
      How's the sky looking today?
    </Typography>
  )
}

export default MainHeading
