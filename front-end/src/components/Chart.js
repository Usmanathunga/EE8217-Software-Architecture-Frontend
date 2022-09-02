import React from "react";
import { Line } from "react-chartjs-2";

function Chart(props) {
  return (
    <div className="chart">
      <Line
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "Sample Data Graph : Time(min) Vs Value(C)",
            fontSize: 25,
          },
          legend: {
            display: props.displayLegend,
            position: props.legendPosition,
            labels: {
              fontColor: "#000",
            },
          },
        }}
      />
    </div>
  );
}

Chart.defaultProps = {
  displayTitle: true,
  displayLegend: true,
  legendPosition: "bottom",
};

export default Chart;
