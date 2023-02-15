import "./App.css";
import DataTable from "./Tabela";
import { useState } from "react";
import axios from "axios";

function App() {
  const [device, setDevice] = useState({
    deviceAddress: "",
    deviceLocation: "",
    item1: "",
    item2: "",
    item3: "",
    item4: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDevice((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(device);
  }
  function addDevice(event) {
    event.preventDefault();
    const newDevice = {
      deviceAddress: device.deviceAddress,
      deviceLocation: device.deviceLocation,
      item1: device.item1,
      item2: device.item2,
      item3: device.item3,
      item4: device.item4,
    };
    axios.post("/newdevice", newDevice);
    console.log(newDevice);
    alert("device added ");

    setDevice({
      deviceAddress: "",
      deviceLocation: "",
      item1: "",
      item2: "",
      item3: "",
      item4: "",
    });
  }
  return (
    <div className="App" align="center">
      <DataTable></DataTable>

      <input
        onChange={handleChange}
        name="deviceAddress"
        value={device.deviceAddress}
        placeholder="Device Address"
      ></input>
      <input
        onChange={handleChange}
        name="deviceLocation"
        value={device.deviceLocation}
        placeholder="Device Location"
      ></input>
      <input
        onChange={handleChange}
        name="item1"
        value={device.item1}
        placeholder="Insert Item 1 qty"
      ></input>
      <input
        onChange={handleChange}
        name="item2"
        value={device.item2}
        placeholder="Insert Item 2 qty"
      ></input>
      <input
        onChange={handleChange}
        name="item3"
        value={device.item3}
        placeholder="Insert Item 3 qty"
      ></input>
      <input
        onChange={handleChange}
        name="item4"
        value={device.item4}
        placeholder="Insert Item 4 qty"
      ></input>
      <button onClick={addDevice}>DODAJ UREĐAJ</button>
    </div>
  );
}

export default App;
