import Image from "next/image"
import { Button } from "@/components/ui/button"
import FoodGallery from "@/components/food-gallery"
import NutritionCharts from "@/components/nutrition-charts"
import FeaturedRecipes from "@/components/feature-recipes"
import SubscriptionPlans from "@/components/subscription-plan"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/assets/home.png"
            alt="Healthy food background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">AI Powered Nutrition</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
            Personalized meal plans and nutrition insights powered by artificial intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6">Get Started</Button>
            <Button variant="outline" className="text-black border-white hover:bg-white/10 px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
              >
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                <path d="M12 7c1-.56 2.78-2 5-2 .97 0 1.94.27 2.76.79"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Healthy Recipes</h3>
            <p className="text-gray-600">Over 1000+ nutritionist-approved recipes</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
              >
                <path d="M19 10c0 3.976-7 11-7 11s-7-7.024-7-11c0-3.865 3.135-7 7-7s7 3.135 7 7z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
            <p className="text-gray-600">Custom meal plans based on your preferences</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
              >
                <path d="M12 2v20"></path>
                <path d="M2 5h20"></path>
                <path d="M3 3v2"></path>
                <path d="M7 3v2"></path>
                <path d="M11 3v2"></path>
                <path d="M15 3v2"></path>
                <path d="M19 3v2"></path>
                <path d="m2 10 20-5"></path>
                <path d="m2 14 20-5"></path>
                <path d="m2 18 20-5"></path>
                <path d="M2 22h20"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Nutrition Tracking</h3>
            <p className="text-gray-600">Track your daily nutrition and progress</p>
          </div>
        </div>
      </section>

      {/* Featured Food Gallery */}
      <FoodGallery />

      {/* Nutrition Charts */}
      <NutritionCharts />

      {/* Featured Recipes */}
      <FeaturedRecipes />

      {/* Subscription Plans */}
      <SubscriptionPlans />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your nutrition?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have improved their health with our AI-powered nutrition platform.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg">Get Started Today</Button>
        </div>
      </section>
    </main>
  )
}

