const frisby = require("frisby");
const BASE_URL = "http://xkcd.com";
jest.setTimeout(1000000);

describe("Day16", () => {
  it("Fetching comic pages", async () => {
    let page = 0;
    let status = 200;

    while (status === 200) {
      page++;
      const response = await frisby.get(`${BASE_URL}/${page}/info.0.json`);
      status = response.status;
    }

    console.log(page);
    expect(page).toEqual(404);
  });
});