const frisby = require('frisby');
frisby.globalSetup({
  timeout: 10000});

describe("Day00", () => {
it ('should return a status of 200', function () {
  return frisby
    .post('https://postman-echo.com/post?set_start_day=June 23, 2023')
    .expect('status', 200);
});
});