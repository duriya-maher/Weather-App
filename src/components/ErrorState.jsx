import { Box, Container, Typography, Button } from '@mui/material'
import errorIcon from '../assets/icons/icon-error.svg'
import retryIcon from '../assets/icons/icon-retry.svg'
import logoIcon from '../assets/icons/logo.svg'
import unitsIcon from '../assets/icons/icon-units.svg'
import dropdownIcon from '../assets/icons/icon-dropdown.svg'
import '../styles/States.css'

const ErrorState = ({ onRetry }) => {
  return (
    <Container className="state-container">
      {/* Header */}
      <Box component="header" className="header">
        <Box className="logo">
          <img src={logoIcon} alt="Weather Now" className="logo-icon" />
        </Box>
        <Button className="units-button">
          <img src={unitsIcon} alt="" className="units-icon" />
          <span>Units</span>
          <img src={dropdownIcon} alt="" className="dropdown-icon" />
        </Button>
      </Box>

      <Box className="state-content error-state">
        <img src={errorIcon} alt="" className="state-icon" />
        <Typography variant="h3" className="state-heading">
          Something went wrong
        </Typography>
        <Typography className="state-text">
          We couldn't connect to the server (API error). Please try again in a few moments.
        </Typography>
        <Button 
          variant="contained"
          className="retry-button" 
          onClick={onRetry}
          startIcon={<img src={retryIcon} alt="" className="retry-icon" />}
          sx={{
            backgroundColor: 'var(--bg-card)',
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'var(--bg-card-hover)',
            }
          }}
        >
          Retry
        </Button>
      </Box>
    </Container>
  )
}

export default ErrorState
