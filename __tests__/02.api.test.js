const frisby = require("frisby");

describe("Day02 post", () => {
  it.skip("Check status and data", function () {
    return frisby
      .post('https://postman-echo.com/post', {
        payload: "Raw text",
      })
      .expect("status", 200)
      .expect("json", {
        data: {
          payload: "Raw text",
        }
      });
  });
});

describe("Day02 get", () => {
  it("Check status and data", function () {
    return frisby
      .get("https://postman-echo.com/get?foo=bar&name=ferret")
      .expect("status", 200)
      .expect("json", {
        args: {
          foo: "bar",
          name: "ferret"
        }
      });
  });
});






