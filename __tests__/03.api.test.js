const frisby = require("frisby");

describe("Day03", () => {
  it("Check status and data", function () {
    return frisby
      .post('https://postman-echo.com/post', {
        payload: "doodles",
      })
      .expect("status", 200)
      .expect("json", {
        data: {
          payload: "doodles",
        }
      });
  });
});