import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, ChefHat, Bookmark, Share2, Printer, Star } from "lucide-react"

export default function MealDetailPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="max-w-7xl mx-auto px-4 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image and Details */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/recipes" className="text-green-500 hover:text-green-600 mb-2 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
                Back to Recipes
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mt-2">Mediterranean Quinoa Bowl</h1>

              <div className="flex flex-wrap items-center gap-4 mt-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-1" />
                  <span className="text-gray-600">25 mins</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-1" />
                  <span className="text-gray-600">4 servings</span>
                </div>
                <div className="flex items-center">
                  <ChefHat className="h-5 w-5 text-gray-500 mr-1" />
                  <span className="text-gray-600">Medium</span>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600 ml-1">(128)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                  Vegetarian
                </Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                  High Protein
                </Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
                  Mediterranean
                </Badge>
              </div>
            </div>

            <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Mediterranean Quinoa Bowl"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button variant="outline" className="flex items-center gap-2">
                <Bookmark className="h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Printer className="h-4 w-4" />
                Print
              </Button>
            </div>

            <Tabs defaultValue="ingredients" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="instructions">Instructions</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              </TabsList>
              <TabsContent value="ingredients" className="pt-4">
                <h3 className="font-semibold text-lg mb-4">Ingredients for 4 servings</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-3 h-5 w-5 rounded border-gray-300" />
                    <span>1 cup quinoa, rinsed</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-3 h-5 w-5 rounded border-gray-300" />
                    <span>2 cups vegetable broth</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-3 h-5 w-5 rounded border-gray-300" />
                    <span>1 cucumber, diced</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-3 h-5 w-5 rounded border-gray-300" />
                    <span>1 cup cherry tomatoes, halved</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-3 h-5 w-5 rounded border-gray-300" />
                    <span>1/2 red onion, finely diced</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-3 h-5 w-5 rounded border-gray-300" />
                    <span>1/2 cup kalamata olives, pitted and sliced</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-3 h-5 w-5 rounded border-gray-300" />
                    <span>1/2 cup feta cheese, crumbled</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-3 h-5 w-5 rounded border-gray-300" />
                    <span>2 tablespoons extra virgin olive oil</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-3 h-5 w-5 rounded border-gray-300" />
                    <span>1 lemon, juiced</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-3 h-5 w-5 rounded border-gray-300" />
                    <span>2 tablespoons fresh herbs (mint, parsley, or dill), chopped</span>
                  </li>
                  <li className="flex items-center">
                    <input type="checkbox" className="mr-3 h-5 w-5 rounded border-gray-300" />
                    <span>Salt and pepper to taste</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="instructions" className="pt-4">
                <h3 className="font-semibold text-lg mb-4">Instructions</h3>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="pl-2">
                    <span className="font-medium">Cook the quinoa:</span> In a medium saucepan, combine quinoa and
                    vegetable broth. Bring to a boil, then reduce heat to low, cover, and simmer for 15 minutes until
                    liquid is absorbed. Remove from heat and let stand for 5 minutes, then fluff with a fork.
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Prepare the dressing:</span> In a small bowl, whisk together olive
                    oil, lemon juice, salt, and pepper.
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Combine ingredients:</span> In a large bowl, combine the cooked
                    quinoa, cucumber, cherry tomatoes, red onion, and olives.
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Add dressing:</span> Pour the dressing over the quinoa mixture and
                    toss to combine.
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Finish and serve:</span> Gently fold in the feta cheese and fresh
                    herbs. Taste and adjust seasoning if needed. Serve at room temperature or chilled.
                  </li>
                </ol>
              </TabsContent>
              <TabsContent value="nutrition" className="pt-4">
                <h3 className="font-semibold text-lg mb-4">Nutrition Information (per serving)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="text-gray-500 text-sm">Calories</p>
                      <p className="text-2xl font-bold">320</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="text-gray-500 text-sm">Protein</p>
                      <p className="text-2xl font-bold">12g</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="text-gray-500 text-sm">Carbs</p>
                      <p className="text-2xl font-bold">42g</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <p className="text-gray-500 text-sm">Fat</p>
                      <p className="text-2xl font-bold">14g</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium mb-2">Additional Information</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Fiber</span>
                      <span>6g</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Sugar</span>
                      <span>4g</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Sodium</span>
                      <span>580mg</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Saturated Fat</span>
                      <span>4g</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Related Recipes */}
          <div>
            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-lg mb-4">AI Meal Recommendation</h3>
              <p className="text-gray-700 mb-4">
                Based on your preferences and nutrition goals, we recommend adding this recipe to your meal plan.
              </p>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Add to Meal Plan</Button>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Similar Recipes</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=80&width=80`}
                        alt={`Recipe ${item}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">Greek Salad with Chickpeas</h4>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">(86)</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">15 mins • 380 cal</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

