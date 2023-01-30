import { Chart } from "react-google-charts";

const Charts = ({ data }) => {
  return (
    <Chart
      chartType="Bar"
      data={data}
      width="100%"
      height="400px"
      legendToggle
    />
  );
};

export default Charts;
