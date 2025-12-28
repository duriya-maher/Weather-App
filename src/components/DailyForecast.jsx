import { Box, Paper, Typography, Grid } from '@mui/material'
import { getWeatherIcon } from '../utils/weatherIcons.js'
import { getDayName } from '../utils/dateFormatter.js'
import '../styles/DailyForecast.css'

const DailyForecast = ({ weatherData, units }) => {
  return (
    <Box className="forecast-section">
    <Typography variant="h6" className="section-title" sx={{ paddingBottom:'10px' } }> 
        Daily forecast
      </Typography>

      <Grid container spacing={1.5} className="daily-forecast">
        {weatherData.daily.time.map((date, index) => {
          const weatherIcon = getWeatherIcon(weatherData.daily.weather_code[index])
          
          return (
            <Grid item xs={6} sm={4} md={3} lg key={index}>
              <Paper className="day-card" elevation={0}>
                <Typography className="day-name">
                  {getDayName(date)}
                </Typography>
                
                <img 
                  src={weatherIcon} 
                  alt="Weather icon"
                  className="day-icon"
                />
                
                <Box className="day-temps">
                  <Typography component="span" className="temp-high">
                    {Math.round(weatherData.daily.temperature_2m_max[index])}°
                  </Typography>
                  <Typography component="span" className="temp-low">
                    {Math.round(weatherData.daily.temperature_2m_min[index])}°
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default DailyForecast
