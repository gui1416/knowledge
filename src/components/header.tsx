"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, ExternalLink, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const otherProjects = [
 { name: "Gerador de QRcode", url: "https://q-rcode-generator-phi.vercel.app/" },
 { name: "README Generator", url: "https://readme-generator-rust-one.vercel.app/" },
 { name: "LinkTree", url: "https://linktree-gui-pi.vercel.app/" },
 { name: "Licita AI", url: "https://cap-licita.vercel.app/" },
]

const recommendedTools = [
 { name: "Visual Studio Code" },
 { name: "Chrome DevTools" },
 { name: "Figma" },
 { name: "GitHub" },
 { name: "Netlify" },
 { name: "Vercel" },
]

const technologies = [
 { name: "HTML", href: "/html" },
 { name: "CSS", href: "/css" },
 { name: "JavaScript", href: "/javascript" },
 { name: "React", href: "/react" },
 { name: "Node.js", href: "/nodejs" },
]

export default function Header() {
 const [isOpen, setIsOpen] = useState(false)
 const { theme, setTheme } = useTheme()

 return (
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
   {/* Main Navigation */}
   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex h-14 items-center justify-between">
     {/* Logo */}
     <Link href="/" className="text-xl font-semibold">
      Knowledge
     </Link>

     {/* Desktop Navigation */}
     <nav className="hidden md:flex items-center space-x-6">
      <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
       Blog
      </Link>

      <Link href="/sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
       About/Contact
      </Link>

      {/* Other Projects Dropdown */}
      <DropdownMenu>
       <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-sm text-muted-foreground hover:text-foreground">
         Other Projects
         <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
       </DropdownMenuTrigger>
       <DropdownMenuContent align="start" className="w-48">
        {otherProjects.map((project) => (
         <DropdownMenuItem key={project.name} asChild>
          <a
           href={project.url}
           target="_blank"
           rel="noopener noreferrer"
           className="flex items-center justify-between cursor-pointer"
          >
           {project.name}
           <ExternalLink className="h-3 w-3" />
          </a>
         </DropdownMenuItem>
        ))}
       </DropdownMenuContent>
      </DropdownMenu>

      {/* Tools Dropdown */}
      <DropdownMenu>
       <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-sm text-muted-foreground hover:text-foreground">
         Tools I recommend
         <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
       </DropdownMenuTrigger>
       <DropdownMenuContent align="start" className="w-48">
        {recommendedTools.map((tool) => (
         <DropdownMenuItem key={tool.name}>
          <span className="text-sm">{tool.name}</span>
         </DropdownMenuItem>
        ))}
       </DropdownMenuContent>
      </DropdownMenu>

      {/* Theme Toggle */}
      <Button
       variant="ghost"
       size="sm"
       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
       className="w-8 h-8 p-0"
      >
       <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
       <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
       <span className="sr-only">Toggle theme</span>
      </Button>
     </nav>

     {/* Mobile Navigation */}
     <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
       <Button variant="ghost" size="sm">
        <Menu className="h-5 w-5" />
       </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
       <div className="flex flex-col space-y-4 mt-8">
        <Link href="/blog" className="text-sm" onClick={() => setIsOpen(false)}>
         Blog
        </Link>
        <Link href="/sobre" className="text-sm" onClick={() => setIsOpen(false)}>
         About/Contact
        </Link>
       </div>
      </SheetContent>
     </Sheet>
    </div>
   </div>

   {/* Technology Navigation */}
   <div className="border-t">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex h-12 items-center space-x-8 overflow-x-auto">
      {technologies.map((tech) => (
       <Link
        key={tech.name}
        href={tech.href}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
       >
        {tech.name}
       </Link>
      ))}
     </div>
    </div>
   </div>
  </header>
 )
}
