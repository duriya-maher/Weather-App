/**
 * Weather Service - Fetches weather data from Open-Meteo API
 * API Documentation: https://open-meteo.com/en/docs
 */

export const fetchWeatherData = async (lat, lon, units) => {
  // Convert units to API format
  const tempUnit = units.temperature === 'celsius' ? 'celsius' : 'fahrenheit';
  const windUnit = units.windSpeed === 'kmh' ? 'kmh' : 'mph';
  const precipUnit = units.precipitation === 'mm' ? 'mm' : 'inch';

  // Build API URL with all required parameters
  const url = `https://api.open-meteo.com/v1/forecast?` +
    `latitude=${lat}&` +
    `longitude=${lon}&` +
    `current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&` +
    `hourly=temperature_2m,weather_code&` +
    `daily=weather_code,temperature_2m_max,temperature_2m_min&` +
    `temperature_unit=${tempUnit}&` +
    `wind_speed_unit=${windUnit}&` +
    `precipitation_unit=${precipUnit}&` +
    `timezone=auto`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Failed to fetch weather data');
  }
};
