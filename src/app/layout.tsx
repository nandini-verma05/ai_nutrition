import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Powered Nutrition",
  description: "Personalized meal plans and nutrition insights powered by artificial intelligence",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div >
          <Header />
          {children}
          <footer className="bg-gray-50 border-t py-12 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">AI Nutrition</h3>
                <p className="text-gray-600">
                  Personalized nutrition powered by artificial intelligence to help you reach your health goals.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-green-500">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/ok" className="text-gray-600 hover:text-green-500">
                      Recipes
                    </a>
                  </li>
                  <li>
                    <a href="/meal-detail" className="text-gray-600 hover:text-green-500">
                      Meal Plans
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-green-500">
                      Nutrition
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-green-500">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-green-500">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-green-500">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-green-500">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-green-500">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-green-500">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-green-500">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-7xl mx-auto mt-8 pt-8 border-t text-center text-gray-500">
              <p>© {new Date().getFullYear()} AI Nutrition. All rights reserved.</p>
            </div>
          </footer>
        </ div>
      </body>
    </html>
  )
}

