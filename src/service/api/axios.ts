import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

/**
 * A generic get request using axios instance.
 * This method uses the api kay placed in the .env file.
 * @param url - the same url string used in axios.get()
 * @param params - the same params object used in axios.get()
 */
export const get = async <T>(url: string, params?: any) => {
  try {
    const response = await instance.get<T>(url, {
      params: {
        api_key: apiKey,
        ...params
      }
    });

    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);

    return null;
  }
};

export default instance;
