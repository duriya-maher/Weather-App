import { Box, Paper, Typography } from '@mui/material'
import { getWeatherIcon } from '../utils/weatherIcons.js'
import { formatDate } from '../utils/dateFormatter.js'
import bgToday from '../assets/icons/bg-today-large.svg';

const CurrentWeather = ({ weatherData, units }) => {
  const weatherIcon = getWeatherIcon(weatherData.current.weather_code)
  
  return (
    <Paper 
      elevation={0}
      sx={{
        position: 'relative',
        backgroundImage: `url(${bgToday})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '20px',
        padding: { xs: '32px 24px', md: '40px', lg: '48px' },
        overflow: 'hidden',
        animation: 'fadeIn 0.6s ease-out'
      }}
    >
    
      <Box sx={{ position: 'relative', zIndex: 1  , display: 'flex' , justifyContent:'space-between' , alignItems:'center'}}>
        <Box >
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 700,
              mb: 1,
              lineHeight: 1.2
            }}
          >
            {weatherData.locationName}
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.9375rem', md: '1.0625rem' }, opacity: 0.95 ,   color: '#dbd1d1ff' }}>
            {formatDate(weatherData.daily.time[0])}
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: { xs: 0, md: 3 },
          flexDirection: { xs: 'column', sm: 'row' }
        }}>
          <Box
            component="img"
            src={weatherIcon}
            alt="Weather"
            sx={{
              width: { xs: '100px', sm: '110px', md: '120px', lg: '140px' },
              height: { xs: '100px', sm: '110px', md: '120px', lg: '140px' },
              filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.2))'
            }}
          />
          <Typography sx={{
           fontSize: { xs: '6rem', sm: '7rem', md: '9rem', lg: '10rem' },
           fontSize: { xs: '3rem', sm: '3.5rem', md: '4rem', lg: '5rem' },
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: '-0.04em'
          }}>
            {Math.round(weatherData.current.temperature_2m)}°
          </Typography>
        </Box>
      </Box>
    </Paper>
  )
}

export default CurrentWeather
