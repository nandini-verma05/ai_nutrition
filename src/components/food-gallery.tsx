import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const foodItems = [
  {
    id: 1,
    name: "Grilled Salmon Bowl",
    image: "/placeholder.svg?height=300&width=300",
    calories: 420,
    protein: "32g",
    carbs: "45g",
    fat: "12g",
  },
  {
    id: 2,
    name: "Vegetable Stir Fry",
    image: "/placeholder.svg?height=300&width=300",
    calories: 350,
    protein: "18g",
    carbs: "42g",
    fat: "10g",
  },
  {
    id: 3,
    name: "Chicken Avocado Salad",
    image: "/placeholder.svg?height=300&width=300",
    calories: 380,
    protein: "28g",
    carbs: "22g",
    fat: "18g",
  },
  {
    id: 4,
    name: "Mediterranean Bowl",
    image: "/placeholder.svg?height=300&width=300",
    calories: 410,
    protein: "22g",
    carbs: "48g",
    fat: "14g",
  },
]

export default function FoodGallery() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Discover Healthy Meals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of nutritionist-approved recipes tailored to your dietary needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div className="flex flex-col">
                    <span className="text-gray-500">Calories</span>
                    <span className="font-medium">{item.calories}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Protein</span>
                    <span className="font-medium">{item.protein}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Carbs</span>
                    <span className="font-medium">{item.carbs}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Fat</span>
                    <span className="font-medium">{item.fat}</span>
                  </div>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">View Recipe</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
            View All Recipes
          </Button>
        </div>
      </div>
    </section>
  )
}

