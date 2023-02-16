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

  const [isPut, setIsPut] = useState(false);
  const [updatedDevice, setUpdatedDevice] = useState({
    id: "",
    deviceAddress: "",
    deviceLocation: "",
    item1: "",
    item2: "",
    item3: "",
    item4: "",
  });

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
    alert("Device added successfuly!");

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

  function deleteDevice(id) {
    axios.delete("/delete/" + id);
    alert("device deleted");
  }

  function openUpdate(id) {
    setIsPut(true); //this will enable us new form where we update device
    setUpdatedDevice((prevInput) => {
      return {
        ...prevInput,
        id: id,
      };
    });
  }

  function updateDevice(id) {
    axios.put("/put/" + id, updatedDevice);
    alert("Device updated");
    console.log("Device updated");
  }

  function handleUpdate(event) {
    const { name, value } = event.target;
    setUpdatedDevice((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(updatedDevice);
  }

  return (
    <div className="App" align="center">
      <p></p>
      {!isPut ? (
        <div>
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
          <button onClick={addDevice}>Add device</button>
        </div>
      ) : (
        <div>
          <input
            onChange={handleUpdate}
            name="deviceAddress"
            value={updatedDevice.deviceAddress}
            placeholder="Device Address"
          ></input>
          <input
            onChange={handleUpdate}
            name="deviceLocation"
            value={updatedDevice.deviceLocation}
            placeholder="Device Location"
          ></input>
          <input
            onChange={handleUpdate}
            name="item1"
            value={updatedDevice.item1}
            placeholder="Insert Item 1 qty"
          ></input>
          <input
            onChange={handleUpdate}
            name="item2"
            value={updatedDevice.item2}
            placeholder="Insert Item 2 qty"
          ></input>
          <input
            onChange={handleUpdate}
            name="item3"
            value={updatedDevice.item3}
            placeholder="Insert Item 3 qty"
          ></input>
          <input
            onChange={handleUpdate}
            name="item4"
            value={updatedDevice.item4}
            placeholder="Insert Item 4 qty"
          ></input>
          <button onClick={() => updateDevice(updatedDevice.id)}>
            Update device
          </button>
        </div>
      )}

      <p></p>
      <table border="2px" align="center">
        <tr>
          <th>Device address</th>
          <th>Device location</th>
          <th>Item 1</th>
          <th>Item 2</th>
          <th>Item 3</th>
          <th>Item 4</th>
          <th>Delete device</th>
          <th>Update device</th>
        </tr>
      </table>
      {devices.map((device) => {
        return (
          <div key={device._id}>
            <table border="2px" align="center">
              <tr>
                <td>
                  <h3>{device.deviceAddress}</h3>
                </td>
                <td>
                  <h3>{device.deviceLocation}</h3>
                </td>
                <td>
                  <h3>{device.item1}</h3>
                </td>
                <td>
                  <h3>{device.item2}</h3>
                </td>
                <td>
                  <h3>{device.item3}</h3>
                </td>
                <td>
                  <h3>{device.item4}</h3>
                </td>
                <td>
                  <button onClick={() => deleteDevice(device._id)}>
                    Delete device
                  </button>
                </td>
                <td>
                  <button onClick={() => openUpdate(device._id)}>
                    Update device
                  </button>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default App;
