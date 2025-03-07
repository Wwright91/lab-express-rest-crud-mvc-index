const express = require("express");
const locationsController = require("./controllers/locations.controller");
const peopleController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const machinesController = require("./controllers/machines.controller");
const specialEventsController = require("./controllers/special-events.controller");

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello, world!");
});
  
app.use("/locations", locationsController);

app.use("/persons", peopleController);

app.use("/plans", plansController);

app.use("/machines", machinesController);

app.use("/special-events", specialEventsController);

app.get("*", (req, res) => {
    res.status(404).json({ error: "Sorry, no page found!" });
  });

module.exports = app