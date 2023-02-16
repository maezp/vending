import { useState, useEffect } from "react";

function ShowDevices() {
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

  return (
    <div>
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

export default ShowDevices;
