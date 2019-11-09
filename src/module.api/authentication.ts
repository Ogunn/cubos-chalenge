import dotenv from "dotenv";

dotenv.config();

export const loadAPIKey = () => {
  if (process.env.REACT_APP_API_KEY) return process.env.REACT_APP_API_KEY;
  else {
    console.log("error: API_KEY variable environment is not set");
    return "";
  }
};
