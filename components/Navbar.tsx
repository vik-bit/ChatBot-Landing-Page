'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "./ui/button"
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <>
    <Button variant={'ghost'}>
      <Link 
        href="#features" 
        className={`text-sm font-medium transition-colors hover:text-primary ${mobile ? 'block py-2' : ''}`}
        onClick={() => mobile && setIsOpen(false)}
      >
        Features
      </Link>
      </Button>
      <Button variant={'ghost'}>

      <Link 
        href="#pricing" 
        className={`text-sm font-medium transition-colors hover:text-primary ${mobile ? 'block py-2' : ''}`}
        onClick={() => mobile && setIsOpen(false)}
      >
        Pricing
      </Link>
      </Button>
      <Button variant={'ghost'}>

      <Link 
        href="#about" 
        className={`text-sm font-medium transition-colors hover:text-primary ${mobile ? 'block py-2' : ''}`}
        onClick={() => mobile && setIsOpen(false)}
      >
        About Us
      </Link>
      </Button>
      <Button variant={'ghost'}>

      <Link 
        href="#chatbox" 
        className={`text-sm font-medium transition-colors hover:text-primary ${mobile ? 'block py-2' : ''}`}
        onClick={() => mobile && setIsOpen(false)}
      >
        Chatbox
      </Link>
      </Button>

    </>
  )

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">ChatBot AI</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <NavItems />
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="default" className="bg-black text-white hover:bg-gray-800">Login</Button>
              <Button variant="default" className="bg-black text-white hover:bg-gray-800">Sign Up</Button>
            </div>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu" className="p-0 h-auto">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <nav className="py-4 space-y-2">
              <NavItems mobile />
              <div className="flex flex-row space-x-2 mt-4">
                <Button variant="default" className="flex-1 bg-black text-white hover:bg-gray-800">Login</Button>
                <Button variant="default" className="flex-1 bg-black text-white hover:bg-gray-800">Sign Up</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

