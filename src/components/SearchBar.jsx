import { Box, Button, TextField, Paper, InputAdornment, ClickAwayListener } from '@mui/material'
import searchIcon from '../assets/icons/icon-search.svg'
import loadingIcon from '../assets/icons/icon-loading.svg'
import '../styles/SearchBar.css'

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  searchResults,
  showSearchDropdown,
  setShowSearchDropdown,
  isSearching,
  onSearch,
  onLocationSelect
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch()
    }
  }

  const handleClickAway = () => {
    setShowSearchDropdown(false)
  }

  return (
    <Box className="search-container">
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box className="search-input-wrapper">
          <TextField
            fullWidth
            className="search-input"
            placeholder="Search for a place..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ ml: 3 }}  >
                  <img src={searchIcon} alt="" className="search-icon" />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'var(--bg-card)',
                '& fieldset': {
                  borderColor: 'var(--border-color)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'var(--primary-blue)',
                },
              },
            }}
          />
          
          {isSearching && (
            <Paper className="search-progress" elevation={2}  >
              <img src={loadingIcon} alt="" className="loading-icon spinning" />
              <span>Search in progress</span>
            </Paper>
          )}
          
          {showSearchDropdown && !isSearching && searchResults.length > 0 && (
            <Paper className="search-dropdown" elevation={8} >
              {searchResults.map((result, index) => (
                <Button
                  key={index}
                  className="search-result-item"
                  onClick={() => onLocationSelect(result)}
                  fullWidth
                    sx={{ justifyContent: 'flex-start' }} 
                >
                  {result.name}, {result.country}
                </Button>
              ))}
            </Paper>
          )}
        </Box>
      </ClickAwayListener>

      <Button 
        variant="contained"
        className="search-button"
        onClick={onSearch}
        sx={{
          backgroundColor: 'var(--primary-blue)',
          '&:hover': {
            backgroundColor: 'var(--primary-blue-hover)',
          }
        }}
      >
        Search
      </Button>
    </Box>
  )
}

export default SearchBar
