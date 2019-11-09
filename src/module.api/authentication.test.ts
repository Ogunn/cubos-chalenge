import { config } from "dotenv";
import { loadAPIKey } from "./authentication";

config();

test("Load API Key", () => {
  expect(typeof loadAPIKey()).toBe("string");
});
