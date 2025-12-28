import { Box, Paper, Typography, Grid } from '@mui/material'
import '../styles/WeatherMetrics.css'

const WeatherMetrics = ({ weatherData, units }) => {
  const getWindUnit = () => {
    return units.windSpeed === 'kmh' ? 'km/h' : 'mph'
  }

  const getPrecipUnit = () => {
    return units.precipitation === 'mm' ? 'mm' : 'in'
  }

  const metrics = [
    {
      label: 'Feels Like',
      value: `${Math.round(weatherData.current.apparent_temperature)}°`,
    },
    {
      label: 'Humidity',
      value: `${weatherData.current.relative_humidity_2m}%`,
    },
    {
      label: 'Wind',
      value: `${Math.round(weatherData.current.wind_speed_10m)} ${getWindUnit()}`,
    },
    {
      label: 'Precipitation',
      value: `${weatherData.current.precipitation} ${getPrecipUnit()}`,
    },
  ]

  return (
    <Grid container spacing={2} className="weather-metrics">
      {metrics.map((metric, index) => (
        <Grid item xs={6} md={3} key={index}>
          <Paper className="metric-card" elevation={0}>
            <Typography variant="body2" className="metric-label">
              {metric.label}
            </Typography>
            <Typography variant="h4" className="metric-value">
              {metric.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default WeatherMetrics
