"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@/components/ThemeContext";

const weeklyData = [
  { day: "Sun", users: 150, date: "May 19" },
  { day: "Mon", users: 780, date: "May 20" },
  { day: "Tue", users: 420, date: "May 21" },
  { day: "Wed", users: 950, date: "May 22" },
  { day: "Thu", users: 600, date: "May 23" },
  { day: "Fri", users: 725, date: "May 24" },
  { day: "Sat", users: 580, date: "May 25" },
];

const monthlyData = [
  { day: "Week 1", users: 450, date: "May 1-7" },
  { day: "Week 2", users: 680, date: "May 8-14" },
  { day: "Week 3", users: 820, date: "May 15-21" },
  { day: "Week 4", users: 720, date: "May 22-28" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <div className="text-muted-foreground text-sm font-medium mb-1">
          {data.date}
        </div>
        <div className="text-foreground text-lg font-semibold">
          {payload[0].value} users
        </div>
      </div>
    );
  }
  return null;
};

export default function AnalyticsChart() {
  const [timeframe, setTimeframe] = useState("weekly");
  const { theme } = useTheme();
  const data = timeframe === "weekly" ? weeklyData : monthlyData;

  // Theme-aware colors
  const isDark = theme === "dark";
  const gridColor = isDark ? "#374151" : "#e5e7eb";
  const textColor = isDark ? "#9CA3AF" : "#6b7280";
  const primaryColor = isDark ? "#22c55e" : "#16a34a";
  const gradientStart = isDark ? "#22c55e" : "#16a34a";
  const gradientEnd = isDark ? "#22c55e" : "#16a34a";

  return (
    <div className="w-full h-fit p-3 md:p-6">
      <div className="flex justify-end mb-6">
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="bg-background border border-border text-foreground rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
          <option value="weekly" className="bg-background text-foreground">
            Weekly
          </option>
          <option value="monthly" className="bg-background text-foreground">
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
              bottom: 20,
            }}>
            <defs>
              <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={gradientStart} stopOpacity={0.8} />
                <stop offset="100%" stopColor={gradientEnd} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={gridColor}
              strokeOpacity={0.3}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: textColor, fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: textColor, fontSize: 12 }}
              domain={[0, 1000]}
              ticks={[200, 400, 600, 800, 1000]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="users"
              stroke={primaryColor}
              strokeWidth={3}
              fill="url(#userGradient)"
              dot={{ fill: primaryColor, strokeWidth: 2, r: 4 }}
              activeDot={{
                r: 6,
                fill: primaryColor,
                strokeWidth: 2,
                stroke: isDark ? "#000" : "#fff",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
