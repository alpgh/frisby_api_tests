const frisby = require("frisby");
const URL = 'https://postman.com';
jest.setTimeout(200000);

describe("Day28", () => {
it.skip("Response time is less than 1000ms", async function () {
  const res = await frisby.get(URL);
  expect(res._responseTimeMs).toBeLessThan(1000);
});

it.skip("PageSpeed score  within 90 and 100", async function () {    
    const res = await frisby.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL}`);
    expect(res.status).toBe(200);    
    const json = res.jsonBody;
    let score = res.json.lighthouseResult["categories"].performance.score * 100;
            console.log(score);
            expect(score).toBeGreaterThan(90);
  });
});