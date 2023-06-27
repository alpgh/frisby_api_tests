const frisby = require("frisby");
const Joi = frisby.Joi;

describe("Day 08", () => {
  it("Get random user", function () {
    return frisby
      .get('https://randomuser.me/api')
      .expect("status", 200)
      .expect("jsonTypes", "results.*", {
        gender: Joi.string(),
        name: Joi.object({
          title: Joi.string(),
          first: Joi.string(),
          last: Joi.string(),
        }),
      })
      .then((response) => {
        const randomPerson = response.json.results.map((item) => ({
          title: item.name.title,
          first: item.name.first,
          last: item.name.last,
        }));
        console.log(randomPerson); 
      });
  });
  it("Get female user", function () {
    return frisby
      .get('https://randomuser.me/api?gender=female')
      .expect("status", 200)
      .expect("jsonTypes", "results.*", {
        gender: "female",
              })
      .then((response) => {
        const femalePerson = response.json.results.map((item) => ({
          title: item.name.title,
          first: item.name.first,
          last: item.name.last,
        }));
        console.log(femalePerson); 
      });
  });
  it("Get french female user", function () {
    return frisby
      .get('https://randomuser.me/api?gender=female&nat=FR')
      .expect("status", 200)
      .expect("jsonTypes", "results.*", {
        gender: "female",
        nat: "FR"
              })
      .then((response) => {
        const frenchPerson = response.json.results.map((item) => ({
          title: item.name.title,
          first: item.name.first,
          last: item.name.last,
          nat: item.nat,
        }));
        console.log(frenchPerson); 
      });
  });
});
