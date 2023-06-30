const frisby = require("frisby");
const Joi = frisby.Joi;

describe("Day13", () => {
    it("Check status and Tatooine", () => {
        return frisby
    .get("https://swapi.dev/api/planets/")
    .expect("status", 200)
    .expect("jsonTypes", "count", Joi.number())
    .expect("bodyContains", "Tatooine")
    .then((result) => {
        console.log(result.json);
});
});

    it("Checking Ewokese and average talls", () => {
        return frisby
    .get("https://swapi.dev/api/species/")
    .expect("status", 200)
    .expect("bodyContains", "Ewokese")
    .then((response) => {
    const jsonResponse = response.json;
        const tallSpecies = jsonResponse.results.filter(
(       species) => parseInt(species.average_height) > 100
);
        console.log(
        "Species with average height > 100: " +
            tallSpecies.length
);
});
});
});