import { config } from "dotenv";
import { loadAPI_KEY } from "./authentication";

config();

test("Load API Key", () => {
  expect(typeof loadAPI_KEY()).toBe("string");
});
