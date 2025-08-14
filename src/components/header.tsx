"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"

export function Header() {
 const pathname = usePathname()

 const generateBreadcrumbs = () => {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs = [{ name: 'Início', href: '/' }]

  let currentPath = ''
  segments.forEach((segment, index) => {
   currentPath += `/${segment}`
   const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ')
   breadcrumbs.push({
    name,
    href: currentPath,
    isLast: index === segments.length - 1
   })
  })

  return breadcrumbs
 }

 const breadcrumbs = generateBreadcrumbs()

 return (
  <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
   <SidebarTrigger className="-ml-1" />
   <Separator orientation="vertical" className="mr-2 h-4" />
   <Breadcrumb>
    <BreadcrumbList>
     {breadcrumbs.map((crumb, index) => (
      <div key={crumb.href} className="flex items-center">
       <BreadcrumbItem>
        {crumb.isLast ? (
         <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
        ) : (
         <BreadcrumbLink href={crumb.href}>{crumb.name}</BreadcrumbLink>
        )}
       </BreadcrumbItem>
       {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
      </div>
     ))}
    </BreadcrumbList>
   </Breadcrumb>
   <div className="ml-auto">
    <ThemeToggle />
   </div>
  </header>
 )
}
