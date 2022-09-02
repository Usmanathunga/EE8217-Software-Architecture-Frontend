import React from "react";
import ReactDOM from "react-dom";
import Chart from "./components/Chart";
import Front from "./components/Front.js";
// import ContactUs from "./components/EmailService";

class App extends React.Component {
  state = {
    chartData: {},
  };

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: {
        labels: [
          "10.00PM",
          "10.05PM",
          "10.10PM",
          "10.15PM",
          "10.20PM",
          "10.25PM",
        ],
        datasets: [
          {
            data: [40, 35, 30, 33, 44, 38],

            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div>
        <div>
          <Front />
        </div>

        <Chart chartData={this.state.chartData} displayLegend={false} />
        {/* <div>
          <ContactUs />
        </div> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
