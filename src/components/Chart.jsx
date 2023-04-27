import { Chart } from "react-google-charts";

const Charts = ({ data }) => {
  const options = {
    animation: {
      startup: true,
      easing: "bounce",
      duration: "1000",
    },
  };
  return (
    <Chart
      chartType="Bar"
      options={options}
      data={data}
      width="100%"
      height="400px"
      legendToggle
    />
  );
};

export default Charts;
