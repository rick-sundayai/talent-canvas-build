
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", applications: 65, interviews: 28, hires: 5 },
  { name: "Feb", applications: 59, interviews: 24, hires: 4 },
  { name: "Mar", applications: 80, interviews: 36, hires: 7 },
  { name: "Apr", applications: 81, interviews: 40, hires: 8 },
  { name: "May", applications: 56, interviews: 26, hires: 5 },
  { name: "Jun", applications: 55, interviews: 27, hires: 4 },
  { name: "Jul", applications: 72, interviews: 32, hires: 6 }
];

const DashboardLineChart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return <div className="h-[300px] flex items-center justify-center">Loading chart...</div>;
  
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              border: "none",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="applications"
            stroke="#9b87f5"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line 
            type="monotone" 
            dataKey="interviews" 
            stroke="#7e69ab"
            strokeWidth={2} 
          />
          <Line 
            type="monotone" 
            dataKey="hires" 
            stroke="#d6bcfa" 
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardLineChart;
