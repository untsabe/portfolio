'use client'

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, MobileNavigationMenu } from './ui/navigation-menu'

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full">
      <div className="container flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Replace with your logo/image */}
           <img src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/profile.png`} alt="Profile" 
            className="h-8 w-8 md:h-10 md:w-10" // Responsive image sizing
          />
          <span className="font-bold text-lg">Your Site</span>
        </div>

        {/* Desktop Navigation - hidden on mobile, visible on desktop */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="cursor-pointer">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="cursor-pointer">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/services" className="cursor-pointer">
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className="cursor-pointer">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation - visible on mobile, hidden on desktop */}
        <MobileNavigationMenu>
          <NavigationMenuList className="w-full">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="cursor-pointer w-full block">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="cursor-pointer w-full block">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/services" className="cursor-pointer w-full block">
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className="cursor-pointer w-full block">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </MobileNavigationMenu>
      </div>
    </header>
  )
}