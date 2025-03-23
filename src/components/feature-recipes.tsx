"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function FeaturedRecipes() {
  const router = useRouter();
  
  const handleViewRecipe = (id) => {
    router.push(`/meal-details/${id}`);
  };

  // Define recipes inside the component to have access to handleViewRecipe
  const recipes = [
    {
      id: 1,
      name: "Avocado & Egg Toast",
      image: "/placeholder.svg?height=300&width=400",
      time: "15 min",
      difficulty: "Easy",
      calories: 320,
    },
    {
      id: 2,
      name: "Quinoa Veggie Bowl",
      image: "/placeholder.svg?height=300&width=400",
      time: "25 min",
      difficulty: "Medium",
      calories: 420,
    },
    {
      id: 3,
      name: "Berry Protein Smoothie",
      image: "/placeholder.svg?height=300&width=400",
      time: "10 min",
      difficulty: "Easy",
      calories: 280,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Recipes</h2>
            <p className="text-gray-600 max-w-2xl">Try our most popular nutritionist-approved recipes</p>
          </div>
          <Button variant="link" className="text-green-500 mt-4 md:mt-0">
            View all recipes →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={recipe.image || "/placeholder.svg"} alt={recipe.name} fill className="object-cover" />
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-xl mb-3">{recipe.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
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
                      className="text-gray-500 mr-1"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="text-sm text-gray-500">{recipe.time}</span>
                  </div>
                  <div className="flex items-center">
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
                      className="text-gray-500 mr-1"
                    >
                      <path d="M20.2 6 17 9.2l-3.2-3.2-4.6 4.6-3-3L2 11.8"></path>
                    </svg>
                    <span className="text-sm text-gray-500">{recipe.difficulty}</span>
                  </div>
                  <div className="flex items-center">
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
                      className="text-gray-500 mr-1"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span className="text-sm text-gray-500">{recipe.calories} cal</span>
                  </div>
                </div>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white" 
                  onClick={() => handleViewRecipe(recipe.id)}
                >
                  View Recipe
                </Button>              
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}