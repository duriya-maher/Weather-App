import { useState, useEffect } from 'react'
import { Container, Box, Typography } from '@mui/material'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import CurrentWeather from './components/CurrentWeather.jsx'
import WeatherMetrics from './components/WeatherMetrics.jsx'
import DailyForecast from './components/DailyForecast.jsx'
import HourlyForecast from './components/HourlyForecast.jsx'
import LoadingState from './components/LoadingState.jsx'
import ErrorState from './components/ErrorState.jsx'
import NoResultsState from './components/NoResultsState.jsx'
import { fetchWeatherData } from './services/weatherService.js'
import { searchLocations } from './services/geocodingService.js'
import './styles/App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showSearchDropdown, setShowSearchDropdown] = useState(false)
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedDay, setSelectedDay] = useState('Tuesday')
  const [isSearching, setIsSearching] = useState(false)
  const [units, setUnits] = useState({
    temperature: 'celsius',
    windSpeed: 'kmh',
    precipitation: 'mm'
  })

  // Load default location (Berlin) on mount
  useEffect(() => {
    fetchWeather(52.52, 13.41, 'Berlin, Germany')
  }, [])

  // Search for locations as user types (debounced)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery) {
        handleSearchLocations(searchQuery)
      } else {
        setSearchResults([])
        setShowSearchDropdown(false)
      }
    }, 300)

    return () => clearTimeout(delayDebounce)
  }, [searchQuery])

  const handleSearchLocations = async (query) => {
    if (query.length < 2) {
      setSearchResults([])
      setShowSearchDropdown(false)
      return
    }

    setIsSearching(true)
    try {
      const results = await searchLocations(query)
      setSearchResults(results)
      setShowSearchDropdown(results.length > 0)
    } catch (err) {
      console.error('Search error:', err)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const fetchWeather = async (lat, lon, locationName) => {
    setLoading(true)
    setError(null)
    setShowSearchDropdown(false)

    try {
      const data = await fetchWeatherData(lat, lon, units)
      setWeatherData({ ...data, locationName })
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const handleSearch = () => {
    if (searchResults.length > 0) {
      const location = searchResults[0]
      fetchWeather(
        location.latitude,
        location.longitude,
        `${location.name}, ${location.country}`
      )
      setSearchQuery('')
    }
  }

  const handleLocationSelect = (location) => {
    fetchWeather(
      location.latitude,
      location.longitude,
      `${location.name}, ${location.country}`
    )
    setSearchQuery('')
  }

  const handleRetry = () => {
    window.location.reload()
  }

  const updateUnit = (category, value) => {
    setUnits(prev => ({ ...prev, [category]: value }))
    // Refetch weather data with new units
    if (weatherData) {
      fetchWeather(
        weatherData.latitude,
        weatherData.longitude,
        weatherData.locationName
      )
    }
  }

  if (loading) {
    return <LoadingState />
  }

  if (error) {
    return <ErrorState onRetry={handleRetry} />
  }

  if (!weatherData) {
    return <NoResultsState />
  }

  return (
    <Box className="app-container">
      <Container 
        maxWidth="xl"
        className="app-content"
        sx={{
          px: { xs: 2, sm: 2.5, md: 3 },
        }}
      >
        <Header units={units} onUpdateUnit={updateUnit} />
        
        <Typography 
          variant="h1" 
          className="main-heading"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            textAlign: 'center',
            mb: { xs: 3, md: 4 },
          }}
        >
          How's the sky looking today?
        </Typography>

        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchResults={searchResults}
          showSearchDropdown={showSearchDropdown}
          setShowSearchDropdown={setShowSearchDropdown}
          isSearching={isSearching}
          onSearch={handleSearch}
          onLocationSelect={handleLocationSelect}
        />

        <Box 
          className="content-grid"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 380px' },
            gap: { xs: 2, md: 3 },
          }}
        >
          <Box className="main-content" sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 2.5 } }}>
            <CurrentWeather 
              weatherData={weatherData}
              units={units}
            />
            
            <WeatherMetrics 
              weatherData={weatherData}
              units={units}
            />
            
            <DailyForecast 
              weatherData={weatherData}
              units={units}
            />
          </Box>

          <Box className="sidebar">
            <HourlyForecast
              weatherData={weatherData}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              units={units}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default App
