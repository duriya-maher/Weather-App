import { Box, Container, Typography, Button } from '@mui/material'
import logoIcon from '../assets/icons/logo.svg'
import unitsIcon from '../assets/icons/icon-units.svg'
import dropdownIcon from '../assets/icons/icon-dropdown.svg'
import '../styles/States.css'

const NoResultsState = () => {
  return (
    <Container className="state-container">
      {/* Header */}
      <Box component="header" className="header">
        <Box className="logo">
          <img src={logoIcon} alt="Weather Now" className="logo-icon" />
          <Typography component="span" className="logo-text">
            Weather Now
          </Typography>
        </Box>
        <Button className="units-button">
          <img src={unitsIcon} alt="" className="units-icon" />
          <span>Units</span>
          <img src={dropdownIcon} alt="" className="dropdown-icon" />
        </Button>
      </Box>

      <Box className="state-content no-results-state">
        <Typography variant="h2" className="state-heading">
          No search result found!
        </Typography>
      </Box>
    </Container>
  )
}

export default NoResultsState
