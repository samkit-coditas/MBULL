import { useContext, useReducer, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { MainContainer } from "./chart.style";
import { LanguageContext } from "../../hoc/languageProvider";
import { dashboardInitialState, dashboardReducer } from "../../app/dashboard/dashboard.reducer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  data: {
    lastTradedPrice: {
      createdAt: string;
      lastTradedPrice: number;
    }[];
    companyName: string;
  },
  companyName: string,
  setFilterCallback: (filter: string) => void
}

const Chart = ({ data, companyName, setFilterCallback }: ChartProps) => {
  console.log(data)
  const [selectedFilter, setSelectedFilter] = useState<null | string>(null)
  const { localString } = useContext(LanguageContext);

  const yAxis: number[] = [];
  const labels: string[] = [];

  if (data?.lastTradedPrice?.length > 0) {
    data?.lastTradedPrice?.forEach((el: any) => {
      yAxis.push(el?.lastTradedPrice);
      let date = new Date(el?.createdAt)
      labels.push(date.toLocaleTimeString().slice(0, 8));

    });
  }

  const datasets: any[] = [
    {
      label: companyName,
      data: yAxis,
      backgroundColor: "#2196F3",
      borderColor: "#1d8fb1",
    },
  ];

  const chartData = {
    labels,
    datasets: [...datasets],
  };

  const toggleFilter = (filter: string) => {
    selectedFilter === filter ? filter = "" :
      filter = filter;
    setSelectedFilter(filter)
    setFilterCallback(filter)
  }

  const stockChartFilterOptions = ['1day', '5day', '1month', '3month', "6month", "1year", "Max"]

  return (
    <MainContainer>
      <Box className="stockChartContainer">
        <Box className="stockChart">
          <Line
            data={chartData}
            options={{
              scales: {
                xAxes: {
                  ticks: {
                    display: false,
                  },
                },
              },
            }}
            data-testid="chart"
          />
        </Box>
        <Box className="stockChartFilterActionsContainer">
          {stockChartFilterOptions.map((x, i) => {
            let y: string = localString[`${x}`];
            return (<Button
              key={`chartFilterButton:${i}`}
              variant={selectedFilter === x ? "outlined" : "text"}
              size="small"
              onClick={() => toggleFilter(x)}
              className="stockChartFilterActionButton"
              data-testid={`chartFilterButton:${x}`}>{y}</Button>)
          })}
        </Box>
      </Box>
    </MainContainer>
  );
};

export default Chart;
