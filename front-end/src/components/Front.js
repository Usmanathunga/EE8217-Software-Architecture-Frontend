import React, { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import axios from "axios";
import "./style.css";
import emailjs from "emailjs-com";

function Front() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mim8l5d",
        "template_qbs000p",
        e.target,
        "WYR2yXHFo3iIL7bXN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const Threshold = "35";
  const [data, SetData] = useState({
    sensor_id: "",
    date: "",
    data_value: "",
  });

  const fetcData = () => {
    axios
      .get(`https://dear-diary-dalin-default-rtdb.firebaseio.com/todo.json`)
      .then((res) => {
        const persons = res.data;
        SetData(persons);
      });
  };
  console.log("int value for threshold", Threshold);
  console.log("int value for dataValue", data.data_value);

  if (parseInt(Threshold) < parseInt(data.data_value)) {
    // alert(" Value More than the Threshold value");
    console.log("if working");
    return (
      <div className="App">
        <h1>Threshold Value : {Threshold}</h1>
        <h1>The Last Value get from API Sensor ID : {data.sensor_id}</h1>
        <h1>The Last Value get from API Sensor ID : {data.date}</h1>
        <h1>The Last Value get from API Sensor ID : {data.data_value}</h1>

        <div className="btn">
          <form onSubmit={sendEmail}>
            <label name="email" value={"abc@gmail.com"} />
            <Button
              type="submit"
              className="btn"
              onClick={fetcData}
              themeColor={"secondary"}
            >
              Get Data
            </Button>
          </form>
        </div>
      </div>
    );
  } else {
    console.log("else working");
    return (
      <div className="App">
        <h1>Threshold Value : {Threshold}</h1>
        <h1>The Last Value get from API Sensor ID : {data.sensor_id}</h1>
        <h1>The Last Value get from API Sensor ID : {data.date}</h1>
        <h1>The Last Value get from API Sensor ID : {data.data_value}</h1>
        <Button
          type="submit"
          className="btn"
          onClick={fetcData}
          themeColor={"secondary"}
        >
          Get Data
        </Button>
      </div>
    );
  }
}

export default Front;
