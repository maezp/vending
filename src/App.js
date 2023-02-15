import "./App.css";
import DataTable from "./Tabela";
import { useState, useEffect } from "react";
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

  const [devices, setDevices] = useState([
    {
      deviceAddress: "",
      deviceLocation: "",
      item1: "",
      item2: "",
      item3: "",
      item4: "",
    },
  ]);

  useEffect(() => {
    fetch("/device")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setDevices(jsonRes))
      .catch((err) => console.log(err));
  }, [devices]);

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
    axios.post("/newdevice", newDevice); //ovo je kontrolni dio koda, cisto da vidimo da je unos prosao, zabiljezi se u konzoli
    console.log(newDevice);
    alert("device added ");

    setDevice({
      //kada se klike DODAJ UREĐAJ ovaj dio koda vrati polja unosa na pocetno, pobrise unos
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
      {devices.map((device) => {
        return (
          <div key={device._id}>
            <h1>{device.deviceAddress}</h1>
            <h1>{device.deviceLocation}</h1>
            <h1>{device.item1}</h1>
            <h1>{device.item2}</h1>
            <h1>{device.item3}</h1>
            <h1>{device.item4}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
