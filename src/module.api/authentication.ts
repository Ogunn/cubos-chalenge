import dotenv from "dotenv";

dotenv.config();

export const loadAPIKey = () => {
  if (process.env.API_KEY) return process.env.API_KEY;
  else {
    console.log("error: API_KEY variable environment is not set");
    return "";
  }
};
