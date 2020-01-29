import axios, { AxiosResponse } from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  error => {
    if (error.response.status === 401) {
      console.log('API Key invalid:');
      console.error(error);
    }

    return error;
  }
);

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
    if (error.response) {
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    } else if (error.request) {
      console.error(error.request);
    } else {
      console.error('Error', error.message);
    }
    console.error(error.config);

    return null;
  }
};

export default instance;
