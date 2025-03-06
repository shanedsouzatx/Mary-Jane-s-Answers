'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ShoppingCart, Home, Info, User, BookOpen, Utensils, Leaf, Contact, Phone } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home'  },
  { href: '/community', label: 'Community' },
//   { href: '/profile', label: 'Profile' /> },
  { href: '/articles', label: 'Articles'},
  { href: '/recipes', label: 'Recipes' },
  { href: '/strain-dictionary', label: 'Strain Dictionary' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 py-10 left-0 w-full bg-white/60 shadow-md dark:bg-[#0D2818] z-50">
      <nav className="flex items-center justify-between px-6 lg:px-12 h-16">
      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
          <Image src="/logo2.png" alt="Logo" width={130} height={130} />
        </div>
        {/* Left: Nav Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={`flex items-center gap-2 text-lg font-medium transition-colors hover:text-green-500 ${pathname === href ? 'text-black font-semibold' : 'text-gray-800 dark:text-gray-300'}`}>
               {label}
            </Link>
          ))}
        </div>
        
        {/* Center: Logo/Icon */}
      
        {/* Right: Search & Cart */}
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 cursor-pointer hover:text-green-500 transition-colors" />
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-green-500 transition-colors" />
          
          {/* Mobile Menu Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">
              <Menu className="w-6 h-6 cursor-pointer hover:text-green-500 transition-colors" />
            </SheetTrigger>
            <SheetContent className="bg-white dark:bg-[#0D2818]">
              <nav className="flex flex-col space-y-6 mt-6">
                {navLinks.map(({ href, label }) => (
                  <Link key={href} href={href} onClick={() => setOpen(false)} className={`flex items-center gap-3 text-xl font-medium transition-colors hover:text-green-500 ${pathname === href ? 'text-green-600 font-semibold' : 'text-gray-700 dark:text-gray-300'}`}>
                     {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
