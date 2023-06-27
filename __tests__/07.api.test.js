const frisby = require("frisby");
const params = new URLSearchParams({ count: 10, api_key: "DEMO_KEY" });
frisby.globalSetup({
    timeout: 10000});

describe("Day07", () => {
  it("Check status 200", function () {
    return frisby
      .get(`https://api.nasa.gov/planetary/apod?${params}`)
      .expect("status", 200)
      .then((response) => {
        const filteredResponse = response.json.map((item) => ({
          title: item.title,
          url: item.url,
        }));
        console.log(filteredResponse); 
      });
  });
  });
