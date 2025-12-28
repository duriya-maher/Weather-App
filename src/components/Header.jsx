import { useState } from 'react'
import { Box, Button, ClickAwayListener, Paper, Typography } from '@mui/material'
import logoIcon from '../assets/icons/logo.svg'
import unitsIcon from '../assets/icons/icon-units.svg'
import checkmarkIcon from '../assets/icons/icon-checkmark.svg'
import dropdownIcon from '../assets/icons/icon-dropdown.svg'
import '../styles/Header.css'

const Header = ({ units, onUpdateUnit }) => {
  const [showUnitsDropdown, setShowUnitsDropdown] = useState(false)

  const toggleUnitsDropdown = () => {
    setShowUnitsDropdown(!showUnitsDropdown)
  }

  const handleClickAway = () => {
    setShowUnitsDropdown(false)
  }

  const handleUnitChange = (category, value) => {
    onUpdateUnit(category, value)
  }

  const getCurrentUnitLabel = () => {
    if (units.temperature === 'fahrenheit') {
      return 'Switch to Metric'
    } else {
      return 'Switch to Imperial'
    }
  }

  return (
    <Box component="header" className="header">
      <Box className="logo">
        <img src={logoIcon} alt="Weather Now" className="logo-icon" />
        
      </Box>

      <ClickAwayListener onClickAway={handleClickAway}>
        <Box className="units-button-container">
          <Button 
            className="units-button"
            onClick={toggleUnitsDropdown}
            aria-label="Units settings"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              px: 2,
              py: 1,
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'text.primary',
              '&:hover': {
                backgroundColor: 'var(--bg-card-hover)',
              }
            }}
          >
            <img src={unitsIcon} alt="" className="units-icon" />
            <span>Units</span>
            <img 
              src={dropdownIcon} 
              alt="" 
              className={`dropdown-icon ${showUnitsDropdown ? 'open' : ''}`} 
            />
          </Button>

          {showUnitsDropdown && (
            <Paper className="units-dropdown" elevation={8}>
              <Typography className="dropdown-header" variant="subtitle1">
                {getCurrentUnitLabel()}
              </Typography>

              {/* Temperature Section */}
              <Box className="units-section">
                <Typography className="section-label" variant="caption">
                  Temperature
                </Typography>
                <Button
                  className={`unit-option ${units.temperature === 'celsius' ? 'active' : ''}`}
                  onClick={() => handleUnitChange('temperature', 'celsius')}
                  fullWidth
                >
                  <span>Celsius (°C)</span>
                  {units.temperature === 'celsius' && (
                    <img src={checkmarkIcon} alt="Selected" className="checkmark" />
                  )}
                </Button>
                <Button
                  className={`unit-option ${units.temperature === 'fahrenheit' ? 'active' : ''}`}
                  onClick={() => handleUnitChange('temperature', 'fahrenheit')}
                  fullWidth
                >
                  <span>Fahrenheit (°F)</span>
                  {units.temperature === 'fahrenheit' && (
                    <img src={checkmarkIcon} alt="Selected" className="checkmark" />
                  )}
                </Button>
              </Box>

              {/* Wind Speed Section */}
              <Box className="units-section">
                <Typography className="section-label" variant="caption">
                  Wind Speed
                </Typography>
                <Button
                  className={`unit-option ${units.windSpeed === 'kmh' ? 'active' : ''}`}
                  onClick={() => handleUnitChange('windSpeed', 'kmh')}
                  fullWidth
                >
                  <span>km/h</span>
                  {units.windSpeed === 'kmh' && (
                    <img src={checkmarkIcon} alt="Selected" className="checkmark" />
                  )}
                </Button>
                <Button
                  className={`unit-option ${units.windSpeed === 'mph' ? 'active' : ''}`}
                  onClick={() => handleUnitChange('windSpeed', 'mph')}
                  fullWidth
                >
                  <span>mph</span>
                  {units.windSpeed === 'mph' && (
                    <img src={checkmarkIcon} alt="Selected" className="checkmark" />
                  )}
                </Button>
              </Box>

              {/* Precipitation Section */}
              <Box className="units-section">
                <Typography className="section-label" variant="caption">
                  Precipitation
                </Typography>
                <Button
                  className={`unit-option ${units.precipitation === 'mm' ? 'active' : ''}`}
                  onClick={() => handleUnitChange('precipitation', 'mm')}
                  fullWidth
                >
                  <span>Millimeters (mm)</span>
                  {units.precipitation === 'mm' && (
                    <img src={checkmarkIcon} alt="Selected" className="checkmark" />
                  )}
                </Button>
                <Button
                  className={`unit-option ${units.precipitation === 'inch' ? 'active' : ''}`}
                  onClick={() => handleUnitChange('precipitation', 'inch')}
                  fullWidth
                >
                  <span>Inches (in)</span>
                  {units.precipitation === 'inch' && (
                    <img src={checkmarkIcon} alt="Selected" className="checkmark" />
                  )}
                </Button>
              </Box>
            </Paper>
          )}
        </Box>
      </ClickAwayListener>
    </Box>
  )
}

export default Header
