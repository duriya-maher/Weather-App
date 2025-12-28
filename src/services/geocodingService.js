/**
 * Geocoding Service - Searches for locations using Open-Meteo Geocoding API
 * API Documentation: https://open-meteo.com/en/docs/geocoding-api
 */

export const searchLocations = async (query) => {
  // Build API URL
  const url = `https://geocoding-api.open-meteo.com/v1/search?` +
    `name=${encodeURIComponent(query)}&` +
    `count=5&` +
    `language=en&` +
    `format=json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Return results array, or empty array if no results
    if (data.results) {
      return data.results;
    }
    
    return [];
  } catch (error) {
    console.error('Error searching locations:', error);
    return [];
  }
};
