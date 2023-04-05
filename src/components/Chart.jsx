import React from 'react'
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const Chart = ({chartArray = [], currency, days}) => {
    const prices = [];
    const date = []

    for (let i = 0; i < chartArray.length; i++) {
        if(days === "24h")  date.push(new Date(chartArray[i][0]).toLocaleTimeString());
        else date.push(new Date(chartArray[i][0]).toLocaleDateString()); // hume date milisecond me mil rhi  isiliye. .toLocalDateString() karne se hum actual date milegi
        prices.push(chartArray[i][1]);
        
    }
    // console.log(date);
    // console.log(arr)
    const data = {
        labels:date,
        datasets:[{
            label: `Price in ${currency}`,
            data:prices,
            borderColor:"rgb(255, 99, 132)",
            backgroundColor:"rgba(255, 99, 132, 0.5)",
        }]
      };
  return (
    <Line
      options={{
        responsive: true,
      }}
      data={data}
    />
  )
}

export default Chart