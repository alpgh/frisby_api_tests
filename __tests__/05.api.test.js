const frisby = require("frisby");
const baseurl = "https://api.coindesk.com";
const currency = "usd";

describe("Day05", () => {
  it("Check status", function () {
    return frisby
      .get(`${baseurl}/v1/bpi/currentprice/${currency}.json`)
      .expect("status", 200);
  });
});