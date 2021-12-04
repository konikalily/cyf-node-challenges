const express = require("express");
const app = express();
const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");
const stratford = require("./data/Stratford.json");
const allCities = { harrow: harrow, heathrow: heathrow, stratford: stratford };

const { cityOfharrow, cityOfheathrow, cityOfstratford } = allCities;

app.get("/:city/:category/search", (req, res) => {
  const selectedCity = req.params.city;
  const cityCategory = req.params.category;
  const searchTerm = req.query.term;
  let cityData = allCities[selectedCity][cityCategory].filter((category) =>
    category["name"].toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.status(200).json(data);
});

app.get("/:city", (req, res) => {
  const selectedCity = req.params.city;
  res.status(200).json(allCities[selectedCity]);
});

app.get("/:city/:category", (req, res) => {
  const selectedCity = req.params.city;
  const cityCategory = req.params.category;

  res.status(200).json(cities[selectedCity][cityCategory]);
});

//******* */

app.get("/pharmacies", (request, response) => {
  response.send(stratford.pharmacies);
});

app.get("/colleges", (request, response) => {
  response.send(stratford.colleges);
});

app.get("/doctors", (request, response) => {
  response.send(stratford.doctors);
});

app.get("/hospitals", (request, response) => {
  response.send(stratford.hospitals);
});

const listener = app.listen(3001, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
