const frisby = require("frisby");

describe("Day06", () => {
  it("Check status and data", function () {
    return frisby
      .get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      })
      .expect("status", 200)
      .then((response) => {
        const jokeData = response.json;
        const { id, joke } = jokeData;
        console.log("ID:", id);
        console.log("Joke:", joke);
      });
  });
});







