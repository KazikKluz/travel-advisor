//this module exports two functions for fetching data from rapid Api endpoints

import axios from 'axios';

/**
 *
 * @param {string} type
 * @param {number} sw
 * @param {number} ne
 * @returns array of objects containing details about the hotels,
 * retaurants or attractions depending on type argument
 */
export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param {number} lat
 * @param {number} lng
 * @returns an object
 */
export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      'https://community-open-weather-map.p.rapidapi.com/find',
      {
        params: {
          lat: lat,
          lon: lng,
        },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
