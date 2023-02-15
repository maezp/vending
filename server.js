const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3001;
require("dotenv").config();

//config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect to mongoDB
mongoose.connect(
  "mongodb+srv://joe:kX93eHkTijwgMPUF@cluster0.efm0dz0.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.set("strictQuery", true);

//data schema
const deviceSchema = {
  deviceAddress: String,
  deviceLocation: String,
  item1: Number,
  item2: Number,
  item3: Number,
  item4: Number,
};

//data model
const Device = mongoose.model("Device", deviceSchema);

//read route
app.get("/device", (req, res) => {
  Device.find()
    .then((Device) => res.json(Device))
    .catch((err) => res.status(400).json("Error" + err));
});

//create route
app.post("/newDevice", (req, res) => {
  const newDevice = new Device({
    deviceAddress: req.body.deviceAddress,
    deviceLocation: req.body.deviceLocation,
    item1: req.body.item1,
    item2: req.body.item2,
    item3: req.body.item3,
    item4: req.body.item4,
  });
  newDevice
    .save()
    .then((device) => console.log(device))
    .catch((err) => res.status(400).json("Error" + err));
});

//delete route

//update route

app.listen(port, function () {
  console.log("Express is running");
});
