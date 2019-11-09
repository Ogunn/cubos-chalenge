import { config } from "dotenv";
import { loadAPIKey } from "./authentication";

config();

describe("Load API Key", () => {
  test("The type is not undefined", () => {
    expect(typeof loadAPIKey()).toBe("string");
  });
});
