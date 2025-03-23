"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const weeklyData = [
  { name: "Mon", calories: 1800, protein: 90, carbs: 220, fat: 45 },
  { name: "Tue", calories: 2100, protein: 100, carbs: 250, fat: 50 },
  { name: "Wed", calories: 1950, protein: 95, carbs: 230, fat: 48 },
  { name: "Thu", calories: 2000, protein: 98, carbs: 240, fat: 49 },
  { name: "Fri", calories: 2200, protein: 105, carbs: 260, fat: 52 },
  { name: "Sat", calories: 1900, protein: 92, carbs: 225, fat: 46 },
  { name: "Sun", calories: 1750, protein: 85, carbs: 210, fat: 43 },
]

const monthlyData = [
  { name: "Week 1", calories: 13500, protein: 665, carbs: 1635, fat: 333 },
  { name: "Week 2", calories: 14200, protein: 690, carbs: 1680, fat: 345 },
  { name: "Week 3", calories: 13800, protein: 675, carbs: 1650, fat: 338 },
  { name: "Week 4", calories: 14500, protein: 705, carbs: 1700, fat: 350 },
]

const progressData = [
  { name: "Jan", weight: 180, target: 175 },
  { name: "Feb", weight: 178, target: 172 },
  { name: "Mar", weight: 175, target: 170 },
  { name: "Apr", weight: 173, target: 168 },
  { name: "May", weight: 171, target: 166 },
  { name: "Jun", weight: 169, target: 165 },
]

export default function NutritionCharts() {
  const [, setActiveTab] = useState("weekly")

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nutrition Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track your nutrition metrics and see your progress over time
          </p>
        </div>

        <Tabs defaultValue="weekly" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="weekly" className="px-8">
                Weekly
              </TabsTrigger>
              <TabsTrigger value="monthly" className="px-8">
                Monthly
              </TabsTrigger>
              <TabsTrigger value="progress" className="px-8">
                Progress
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="weekly">
            <Card>
              <CardContent className="pt-6">
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="calories" fill="#10b981" name="Calories" />
                      <Bar dataKey="protein" fill="#3b82f6" name="Protein (g)" />
                      <Bar dataKey="carbs" fill="#6366f1" name="Carbs (g)" />
                      <Bar dataKey="fat" fill="#8b5cf6" name="Fat (g)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly">
            <Card>
              <CardContent className="pt-6">
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="calories" fill="#10b981" name="Calories" />
                      <Bar dataKey="protein" fill="#3b82f6" name="Protein (g)" />
                      <Bar dataKey="carbs" fill="#6366f1" name="Carbs (g)" />
                      <Bar dataKey="fat" fill="#8b5cf6" name="Fat (g)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress">
            <Card>
              <CardContent className="pt-6">
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={progressData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="weight"
                        stroke="#10b981"
                        activeDot={{ r: 8 }}
                        name="Current Weight (lbs)"
                      />
                      <Line
                        type="monotone"
                        dataKey="target"
                        stroke="#6366f1"
                        strokeDasharray="5 5"
                        name="Target Weight (lbs)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

