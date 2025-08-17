
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigationItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
]

export function MobileNavigation() {
  const [isOpen, setIsOpen] = React.useState(false)

    const handleLinkClick = (href: string) => {
        setIsOpen(false)
        // Add a small delay to allow the sheet to close before scrolling
        setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
            })
        }
        }, 300) // Match the sheet animation duration
    }

  const handleHomeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsOpen(false)
    // Smooth scroll to top
    setTimeout(() => {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      })
    }, 300)
  }

  return (
    <div className="flex items-center justify-between w-full">
      {/* Hamburger Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <div className="flex flex-col space-y-4 mt-8">
            <h2 className="text-lg font-semibold mb-4">Sanketh Sequeira</h2>
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleLinkClick(item.href)}
                className="block w-full text-left px-4 py-2 text-lg font-medium text-foreground hover:text-foreground/80 hover:bg-accent rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Profile Image as Home Button */}
      <button onClick={handleHomeClick} className="block">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative">
              <Image
                src="../profile_picture.jpeg"
                alt="Sanketh Sequeira"
                width={40}
                height={40}
                priority
                className="rounded-full border-2 border-background shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </button>
    </div>
  )
}