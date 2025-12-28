import { useState } from 'react'
import { Box, Paper, Typography, Button, ClickAwayListener } from '@mui/material'
import { getWeatherIcon } from '../utils/weatherIcons.js'
import dropdownIcon from '../assets/icons/icon-dropdown.svg'
import '../styles/HourlyForecast.css'

const HourlyForecast = ({ weatherData, selectedDay, setSelectedDay, units }) => {
  const [showDayDropdown, setShowDayDropdown] = useState(false)
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  
  const getHourlyDataForDay = (dayIndex) => {
    if (!weatherData) return []
    const startIndex = dayIndex * 24
    const endIndex = startIndex + 24
    return weatherData.hourly.temperature_2m.slice(startIndex, endIndex).map((temp, i) => ({
      time: `${i % 12 || 12} ${i < 12 ? 'AM' : 'PM'}`,
      temperature: Math.round(temp),
      icon: getWeatherIcon(weatherData.hourly.weather_code[startIndex + i])
    }))
  }

  const dayIndex = days.indexOf(selectedDay)
  const hourlyData = getHourlyDataForDay(dayIndex)

  const handleClickAway = () => {
    setShowDayDropdown(false)
  }

  return (
    <Paper className="hourly-forecast-card" elevation={0} >
      <Box className="hourly-header">
        <Typography variant="p" className="hourly-title">
          Hourly forecast
        </Typography>
        
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box className="day-selector-container">
            <Button  
              className="day-selector"
              onClick={() => setShowDayDropdown(!showDayDropdown)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: 'white' ,
                height:'45px',
                fontSize: '14px' ,
                fontWeight:'400' ,
                width: 'auto'
              }}
            >
              <span>{selectedDay}</span>
              <img 
                src={dropdownIcon} 
                alt="" 
                className={`dropdown-icon ${showDayDropdown ? 'open' : ''}`}
              />
            </Button>

            {showDayDropdown && (
              <Paper className="day-dropdown" elevation={8}>
                {days.map((day) => (
                  <Button
                    key={day}
                    className={`day-option ${day === selectedDay ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedDay(day)
                      setShowDayDropdown(false)
                    }}
                    fullWidth
                  >
                    {day}
                  </Button>
                ))}
              </Paper>
            )}
          </Box>
        </ClickAwayListener>
      </Box>

      <Box className="hourly-list" sx={{height:'497px'}}>
        {hourlyData.map((hour, index) => (
          <Box key={index} className="hourly-item">
            <Box className="hourly-time-icon">
              <img 
                src={hour.icon} 
                alt="Weather icon"
                className="hourly-icon"
              />
               <Typography component="span" className="hourly-time">
                {hour.time}
              </Typography>
            </Box>
            <Typography component="span" className="hourly-temp">
              {hour.temperature}°
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  )
}

export default HourlyForecast
