import React from "react";
import "./chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
   {
    name:"Jan",
    Total: 4000,
    Target: 2400,
   },
    {
    name:"Feb",
    Total: 3000,
    Target: 1398,
    },
    {
    name:"Mar",
    Total: 2000,
    Target: 9800,
    },
    {
    name:"Apr",
    Total: 2780,
    Target: 3908,
    },
    {
    name:"May",
    Total: 1890,
    Target: 4800,
    },
    {
    name:"Jun",
    Total: 2390,
    Target: 3800,
    },
    {
    name:"Jul",
    Total: 3490,
    Target: 4300,
    },
    {
    name:"Aug",
    Total: 1490,
    Target: 2300,
    },
    {
    name:"Sep",
    Total: 2450,
    Target: 3300,
    },
    {
    name:"Oct",
    Total: 3450,
    Target: 4300,
    },
    {
    name:"Nov",
    Total: 4450,
    Target: 5300,
    },
    {
    name:"Dec",
    Total: 5450,
    Target: 6300,
    },
];

const Chart = ({aspect, title}) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect} >
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          fontSize={10}
        >
          <defs>
            <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0554F2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0554F2" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="Target" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F70000" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F70000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
            <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid"           />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#0554F2"
            fillOpacity={1}
            fill="url(#Total)"
    

          />
            <Area
            type="monotone"
            dataKey="Target"
            stroke="#F70000"
            fillOpacity={1}
            fill="url(#Target)"
            />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
