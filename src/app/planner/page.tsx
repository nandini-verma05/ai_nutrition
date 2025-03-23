import Image from "next/image"

import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function PlannerPage() {
  return (
    <div className="min-h-screen bg-white">
   

      <main className="container py-8 px-4">
        {/* Interactive Meal Builder */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-6">Interactive Meal Builder</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="relative w-64 h-64">
              <Image
                src=""
                alt="Meal plate with vegetables, grains, and proteins"
                width={256}
                height={256}
                className="rounded-full object-cover"
              />
            </div>
            <div className="max-w-md">
              <p className="text-sm text-muted-foreground mb-4">
                Drag and drop ingredients to create your custom meal:
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Vegetables</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Protein</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Grains</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Perfect Mix</span>
                <Button className="bg-green-600 hover:bg-green-700">
                  <span>Build Meal</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Food Suggestions & Dietary Needs */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-6">Food Suggestions & Dietary Needs</h2>
          <Tabs defaultValue="popular" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="new">New</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="popular" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Quinoa Salad */}
                <Card>
                  <CardContent className="p-0">
                    <div className="flex gap-4 p-4">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Quinoa Salad</h3>
                        <p className="text-xs text-muted-foreground mb-2">Fresh vegetables with protein-rich quinoa</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">Vegan</span>
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">
                            High Protein
                          </span>
                        </div>
                      </div>
                      <div className="w-20 h-20 relative">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Quinoa Salad"
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-2 flex justify-end">
                    <Button variant="outline" size="sm">
                      Add to Plan
                    </Button>
                  </CardFooter>
                </Card>

                {/* Berry Smoothie */}
                <Card>
                  <CardContent className="p-0">
                    <div className="flex gap-4 p-4">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Berry Smoothie</h3>
                        <p className="text-xs text-muted-foreground mb-2">Antioxidant-rich berries with yogurt</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded-full">
                            Breakfast
                          </span>
                          <span className="px-2 py-0.5 bg-pink-100 text-pink-800 text-xs rounded-full">
                            Antioxidants
                          </span>
                        </div>
                      </div>
                      <div className="w-20 h-20 relative">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Berry Smoothie"
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-2 flex justify-end">
                    <Button variant="outline" size="sm">
                      Add to Plan
                    </Button>
                  </CardFooter>
                </Card>

                {/* Zucchini Noodles */}
                <Card>
                  <CardContent className="p-0">
                    <div className="flex gap-4 p-4">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Zucchini Noodles</h3>
                        <p className="text-xs text-muted-foreground mb-2">Low-carb alternative to pasta</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">Low Carb</span>
                          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                            Gluten Free
                          </span>
                        </div>
                      </div>
                      <div className="w-20 h-20 relative">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Zucchini Noodles"
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-2 flex justify-end">
                    <Button variant="outline" size="sm">
                      Add to Plan
                    </Button>
                  </CardFooter>
                </Card>

                {/* Grilled Salmon */}
                <Card>
                  <CardContent className="p-0">
                    <div className="flex gap-4 p-4">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Grilled Salmon</h3>
                        <p className="text-xs text-muted-foreground mb-2">Omega-3 rich seafood option</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">Omega-3</span>
                          <span className="px-2 py-0.5 bg-orange-100 text-orange-800 text-xs rounded-full">
                            High Protein
                          </span>
                        </div>
                      </div>
                      <div className="w-20 h-20 relative">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Grilled Salmon"
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-2 flex justify-end">
                    <Button variant="outline" size="sm">
                      Add to Plan
                    </Button>
                  </CardFooter>
                </Card>

                {/* Chickpea Salad */}
                <Card>
                  <CardContent className="p-0">
                    <div className="flex gap-4 p-4">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Chickpea Salad</h3>
                        <p className="text-xs text-muted-foreground mb-2">Plant-based protein with fresh herbs</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">Vegan</span>
                          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                            Fiber Rich
                          </span>
                        </div>
                      </div>
                      <div className="w-20 h-20 relative">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Chickpea Salad"
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-2 flex justify-end">
                    <Button variant="outline" size="sm">
                      Add to Plan
                    </Button>
                  </CardFooter>
                </Card>

                {/* Lentil Soup */}
                <Card>
                  <CardContent className="p-0">
                    <div className="flex gap-4 p-4">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Lentil Soup</h3>
                        <p className="text-xs text-muted-foreground mb-2">Hearty and nutritious comfort food</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          <span className="px-2 py-0.5 bg-orange-100 text-orange-800 text-xs rounded-full">
                            Iron Rich
                          </span>
                          <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                            Plant Protein
                          </span>
                        </div>
                      </div>
                      <div className="w-20 h-20 relative">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Lentil Soup"
                          width={80}
                          height={80}
                          className="rounded-md object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-2 flex justify-end">
                    <Button variant="outline" size="sm">
                      Add to Plan
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="recommended">
              <div className="flex justify-center items-center h-40">
                <p className="text-muted-foreground">Personalized recommendations will appear here</p>
              </div>
            </TabsContent>
            <TabsContent value="new">
              <div className="flex justify-center items-center h-40">
                <p className="text-muted-foreground">New meal options will appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Nutrient Tracking Chart */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-6">Nutrient Tracking Chart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Macronutrients Chart */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Macronutrients Breakdown</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    7 Days
                  </Button>
                  <Button variant="outline" size="sm">
                    30 Days
                  </Button>
                </div>
              </div>
              <div className="h-64 flex items-end gap-2 mb-4">
                {/* Simplified bar chart */}
                <div className="flex-1 flex items-end gap-1">
                  <div className="w-1/4 bg-green-500 h-[30%] rounded-t"></div>
                  <div className="w-1/4 bg-blue-500 h-[60%] rounded-t"></div>
                  <div className="w-1/4 bg-yellow-500 h-[45%] rounded-t"></div>
                  <div className="w-1/4 bg-green-500 h-[80%] rounded-t"></div>
                </div>
                <div className="flex-1 flex items-end gap-1">
                  <div className="w-1/4 bg-green-500 h-[50%] rounded-t"></div>
                  <div className="w-1/4 bg-blue-500 h-[70%] rounded-t"></div>
                  <div className="w-1/4 bg-yellow-500 h-[40%] rounded-t"></div>
                  <div className="w-1/4 bg-green-500 h-[60%] rounded-t"></div>
                </div>
                <div className="flex-1 flex items-end gap-1">
                  <div className="w-1/4 bg-green-500 h-[70%] rounded-t"></div>
                  <div className="w-1/4 bg-blue-500 h-[90%] rounded-t"></div>
                  <div className="w-1/4 bg-yellow-500 h-[60%] rounded-t"></div>
                  <div className="w-1/4 bg-green-500 h-[40%] rounded-t"></div>
                </div>
                <div className="flex-1 flex items-end gap-1">
                  <div className="w-1/4 bg-green-500 h-[40%] rounded-t"></div>
                  <div className="w-1/4 bg-blue-500 h-[50%] rounded-t"></div>
                  <div className="w-1/4 bg-yellow-500 h-[80%] rounded-t"></div>
                  <div className="w-1/4 bg-green-500 h-[60%] rounded-t"></div>
                </div>
                <div className="flex-1 flex items-end gap-1">
                  <div className="w-1/4 bg-green-500 h-[60%] rounded-t"></div>
                  <div className="w-1/4 bg-blue-500 h-[40%] rounded-t"></div>
                  <div className="w-1/4 bg-yellow-500 h-[70%] rounded-t"></div>
                  <div className="w-1/4 bg-green-500 h-[90%] rounded-t"></div>
                </div>
              </div>
              <div className="flex justify-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs">Carbs</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-xs">Protein</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-xs">Fats</span>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <Button variant="outline" size="sm">
                  Export
                </Button>
                <Button variant="ghost" size="sm">
                  Full Data
                </Button>
              </div>
            </div>

            {/* Micronutrients Chart */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Micronutrients Breakdown</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    7 Days
                  </Button>
                  <Button variant="outline" size="sm">
                    30 Days
                  </Button>
                </div>
              </div>
              <div className="h-64 relative mb-4">
                {/* Simplified line chart */}
                <svg viewBox="0 0 300 150" className="w-full h-full">
                  <path
                    d="M0,75 C50,30 100,110 150,60 C200,10 250,90 300,40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,100 C50,70 100,120 150,80 C200,40 250,90 300,60"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,50 C50,80 100,30 150,70 C200,90 250,40 300,80"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="flex justify-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs">Vitamin C</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-xs">Potassium</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-xs">Trace Elements</span>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <Button variant="outline" size="sm">
                  Export
                </Button>
                <Button variant="ghost" size="sm">
                  Full Data
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Chat Input */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Ask NutriAI..."
            className="w-full rounded-full border border-input bg-background px-4 py-2 pr-10 text-sm shadow-sm"
          />
          <Button size="sm" className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full p-0">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

