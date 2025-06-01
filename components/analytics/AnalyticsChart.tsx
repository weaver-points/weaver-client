"use client"

import { useState } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const weeklyData = [
  { day: "Sun", users: 150, date: "May 19" },
  { day: "Mon", users: 780, date: "May 20" },
  { day: "Tue", users: 420, date: "May 21" },
  { day: "Wed", users: 950, date: "May 22" },
  { day: "Thu", users: 600, date: "May 23" },
  { day: "Fri", users: 725, date: "May 24" },
  { day: "Sat", users: 580, date: "May 25" },
]

const monthlyData = [
  { day: "Week 1", users: 450, date: "May 1-7" },
  { day: "Week 2", users: 680, date: "May 8-14" },
  { day: "Week 3", users: 820, date: "May 15-21" },
  { day: "Week 4", users: 720, date: "May 22-28" },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-lg">
        <div className="text-gray-300 text-sm font-medium mb-1">{data.date}</div>
        <div className="text-white text-lg font-semibold">{payload[0].value} users</div>
      </div>
    )
  }
  return null
}

export default function AnalyticsChart() {
  const [timeframe, setTimeframe] = useState("weekly")
  const data = timeframe === "weekly" ? weeklyData : monthlyData

  return (
    <div className="w-full h-fit  p-6">
      <div className="flex justify-end mb-6">
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="bg-transparent border border-gray-600 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="weekly" className="bg-gray-800 text-white">
            Weekly
          </option>
          <option value="monthly" className="bg-gray-800 text-white">
            Monthly
          </option>
        </select>
      </div>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <defs>
              <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" strokeOpacity={0.3} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              domain={[0, 1000]}
              ticks={[200, 400, 600, 800, 1000]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#22c55e"
              strokeWidth={3}
              fill="url(#userGradient)"
              dot={{ fill: "#22c55e", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: "#22c55e", strokeWidth: 2, stroke: "#000" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
