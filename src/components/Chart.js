import React from 'react'
import './Chart.css'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart({data, title, dataKey, grid}) {

    return (
      <div className="chart">
        <h3 className="chart__title">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#5550bd"
              activeDot={{ r: 8 }}
            />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
}

export default Chart
