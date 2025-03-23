"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-green-500 font-bold text-xl">AI Nutrition</span>
            </Link>
            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
               home
              </Link>
              <Link href="/Dashboard" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Dashboard 
              </Link>
              <Link href="/planner" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Planner
              </Link>
              
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-gray-600 border-gray-300">
              Log In
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white">Sign Up</Button>
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/recipes"
                    className="text-gray-600 hover:text-gray-900 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                   Home
                  </Link>
                  <Link
                    href="/meal-plans"
                    className="text-gray-600 hover:text-gray-900 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/nutrition"
                    className="text-gray-600 hover:text-gray-900 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Planner
                  </Link>
                  <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full mb-3">
                      Log In
                    </Button>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Sign Up</Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

