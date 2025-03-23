import Image from "next/image"
export default function DashboardPage() {
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
       
  
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Meal Plans Section */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-center mb-8">Personalized Meal Plans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <MealCard
                image="/placeholder.svg?height=200&width=200"
                title="Mediterranean"
                subtitle="Mediterranean Salad"
                description="A collection of recipes with healthy fats, whole grains, and vegetables."
                actionLabel="View Recipe"
              />
              <MealCard
                image="/placeholder.svg?height=200&width=200"
                title="Lean Protein"
                subtitle="Grilled Chicken"
                description="High protein meals with lean meats, perfect for muscle recovery."
                actionLabel="Add to List"
                isAddToList
              />
              <MealCard
                image="/placeholder.svg?height=200&width=200"
                title="Vegan Bowl"
                subtitle="Buddha Bowl"
                description="Nutrient dense plant-only meals with organic plant proteins."
                actionLabel="View Recipe"
              />
              <MealCard
                image="/placeholder.svg?height=200&width=200"
                title="Breakfast"
                subtitle="Smoothie Bowl"
                description="Start your day with nutrient-dense options."
                actionLabel="Add to List"
                isAddToList
              />
            </div>
          </section>
  
          {/* Health Tracker Section */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-center mb-8">Health Tracker</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-center mb-4">Calorie Intake</h3>
                <div className="h-64 flex items-end justify-center gap-4">
                  <BarGroup values={[65, 30, 15]} />
                  <BarGroup values={[40, 50, 20]} />
                  <BarGroup values={[55, 20, 35]} />
                  <BarGroup values={[70, 15, 25]} />
                  <BarGroup values={[45, 35, 40]} />
                  <BarGroup values={[50, 40, 60]} />
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  <LegendItem color="bg-green-500" label="Breakfast" />
                  <LegendItem color="bg-green-700" label="Lunch" />
                  <LegendItem color="bg-blue-500" label="Dinner" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-center mb-4">Exercise Duration</h3>
                <div className="h-64 flex items-end justify-center gap-4">
                  <BarGroup values={[60, 20, 40]} />
                  <BarGroup values={[45, 55, 30]} />
                  <BarGroup values={[70, 40, 25]} />
                  <BarGroup values={[50, 30, 45]} />
                  <BarGroup values={[40, 50, 60]} />
                  <BarGroup values={[55, 35, 70]} />
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  <LegendItem color="bg-green-500" label="Cardio" />
                  <LegendItem color="bg-green-700" label="Strength" />
                  <LegendItem color="bg-blue-500" label="Flexibility" />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm">View Health Data</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm">Set Weekly Goals</button>
            </div>
          </section>
  
          {/* AI-Driven Grocery List */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-center mb-8">AI-Driven Grocery List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-lg p-6 w-full max-w-xs">
                  <CategoryCheckbox label="Fruits & Vegetables" checked />
                  <CategoryCheckbox label="Oils & Fats" checked />
                  <CategoryCheckbox label="Meat & Poultry" checked />
                  <CategoryCheckbox label="Bakery & Breads" checked />
                  <CategoryCheckbox label="Beverages" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ProductCard
                  image="/placeholder.svg?height=100&width=100"
                  title="Gluten-Free Pasta"
                  description="Perfect alternative to traditional pasta"
                />
                <ProductCard
                  image="/placeholder.svg?height=100&width=100"
                  title="Almond Milk"
                  description="Great dairy-free alternative"
                />
                <ProductCard
                  image="/placeholder.svg?height=100&width=100"
                  title="Soy Yogurt"
                  description="Rich in protein and calcium"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
  
  // Components
  function MealCard({ image, title, subtitle, description, actionLabel, isAddToList = false }) {
    return (
      <div className="flex flex-col">
        <div className="relative h-40 mb-2 rounded-lg overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500 mb-1">{subtitle}</p>
        <p className="text-xs text-gray-600 mb-3">{description}</p>
        <button
          className={`text-xs py-1.5 px-3 rounded border ${isAddToList ? "border-gray-300 text-gray-700" : "border-green-500 text-green-600"}`}
        >
          {actionLabel}
        </button>
      </div>
    )
  }
  
  function BarGroup({ values }) {
    return (
      <div className="flex items-end gap-1">
        {values.map((value, index) => (
          <div
            key={index}
            className={`w-4 rounded-t ${index === 0 ? "bg-green-500" : index === 1 ? "bg-green-700" : "bg-blue-500"}`}
            style={{ height: `${value * 2}px` }}
          />
        ))}
      </div>
    )
  }
  
  function LegendItem({ color, label }) {
    return (
      <div className="flex items-center gap-1.5">
        <div className={`w-3 h-3 ${color}`}></div>
        <span className="text-xs text-gray-600">{label}</span>
      </div>
    )
  }
  
  function CategoryCheckbox({ label, checked = false }) {
    return (
      <div className="flex items-center gap-2 mb-3">
        <div
          className={`w-4 h-4 border rounded flex items-center justify-center ${checked ? "bg-green-500 border-green-500" : "border-gray-300"}`}
        >
          {checked && <div className="w-2 h-2 bg-white rounded-sm"></div>}
        </div>
        <span className="text-sm text-gray-700">{label}</span>
      </div>
    )
  }
  
  function ProductCard({ image, title, description }) {
    return (
      <div className="border rounded-lg p-3 flex flex-col">
        <div className="relative h-24 mb-2">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-contain" />
        </div>
        <h4 className="text-sm font-medium text-gray-800">{title}</h4>
        <p className="text-xs text-gray-600 mb-2">{description}</p>
        <button className="text-xs py-1 px-2 border border-gray-300 rounded mt-auto">Add to Cart</button>
      </div>
    )
  }
  
  