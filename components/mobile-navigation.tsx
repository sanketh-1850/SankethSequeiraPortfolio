"use client"

import * as React from "react"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DialogTitle } from "@radix-ui/react-dialog"

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
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 300)
  }

  const handleHomeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsOpen(false)
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 300)
  }

  return (
    <div className="flex items-center justify-between w-full">
      {/* Profile Image as Home Button (left) */}
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

      {/* Hamburger Menu (right) */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80">
          <DialogTitle className="text-lg font-semibold mb-4">
            Sanketh Sequeira
          </DialogTitle>
          <div className="flex flex-col space-y-4 mt-4">
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
    </div>
  )
}
