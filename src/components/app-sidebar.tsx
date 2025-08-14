"use client"

import * as React from "react"
import { BookOpen, Code2, FileText, Lightbulb, FolderOpen, Search, Home, ChevronRight, ChevronDown } from 'lucide-react'

import {
 Sidebar,
 SidebarContent,
 SidebarFooter,
 SidebarGroup,
 SidebarGroupContent,
 SidebarGroupLabel,
 SidebarHeader,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
 SidebarMenuSub,
 SidebarMenuSubButton,
 SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"
import { SearchDialog } from "@/components/search-dialog"
import { Button } from "@/components/ui/button"

const navigationData = [
 {
  title: "Início",
  url: "/",
  icon: Home,
 },
 {
  title: "Estudos",
  icon: BookOpen,
  items: [
   {
    title: "JavaScript",
    url: "/estudos/javascript",
    items: [
     { title: "Promises e Async/Await", url: "/estudos/javascript/promises" },
     { title: "Closures", url: "/estudos/javascript/closures" },
     { title: "Event Loop", url: "/estudos/javascript/event-loop" },
    ]
   },
   {
    title: "React",
    url: "/estudos/react",
    items: [
     { title: "Hooks Avançados", url: "/estudos/react/hooks-avancados" },
     { title: "Context API", url: "/estudos/react/context-api" },
     { title: "Performance", url: "/estudos/react/performance" },
    ]
   },
   {
    title: "Next.js",
    url: "/estudos/nextjs",
    items: [
     { title: "App Router", url: "/estudos/nextjs/app-router" },
     { title: "Server Components", url: "/estudos/nextjs/server-components" },
     { title: "Middleware", url: "/estudos/nextjs/middleware" },
    ]
   },
  ],
 },
 {
  title: "Snippets",
  icon: Code2,
  items: [
   {
    title: "Utilitários",
    url: "/snippets/utilitarios",
    items: [
     { title: "Debounce Hook", url: "/snippets/utilitarios/debounce-hook" },
     { title: "Local Storage Hook", url: "/snippets/utilitarios/local-storage-hook" },
     { title: "API Client", url: "/snippets/utilitarios/api-client" },
    ]
   },
   {
    title: "Componentes",
    url: "/snippets/componentes",
    items: [
     { title: "Modal Reutilizável", url: "/snippets/componentes/modal" },
     { title: "Form Builder", url: "/snippets/componentes/form-builder" },
     { title: "Data Table", url: "/snippets/componentes/data-table" },
    ]
   },
  ],
 },
 {
  title: "Artigos",
  icon: FileText,
  items: [
   { title: "Arquitetura Frontend", url: "/artigos/arquitetura-frontend" },
   { title: "Clean Code em React", url: "/artigos/clean-code-react" },
   { title: "Performance Web", url: "/artigos/performance-web" },
  ],
 },
 {
  title: "Reflexões",
  icon: Lightbulb,
  items: [
   { title: "Sobre Aprendizado", url: "/reflexoes/aprendizado" },
   { title: "Carreira em Tech", url: "/reflexoes/carreira-tech" },
   { title: "Produtividade", url: "/reflexoes/produtividade" },
  ],
 },
 {
  title: "Projetos",
  icon: FolderOpen,
  items: [
   { title: "E-commerce Platform", url: "/projetos/ecommerce-platform" },
   { title: "Task Manager", url: "/projetos/task-manager" },
   { title: "Blog Engine", url: "/projetos/blog-engine" },
  ],
 },
]

export function AppSidebar() {
 const [searchOpen, setSearchOpen] = React.useState(false)

 return (
  <Sidebar variant="inset">
   <SidebarHeader>
    <div className="flex items-center gap-2 px-2 py-2">
     <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
      <BookOpen className="size-4" />
     </div>
     <div className="grid flex-1 text-left text-sm leading-tight">
      <span className="truncate font-semibold">Docs Pessoais</span>
      <span className="truncate text-xs text-muted-foreground">Meus estudos</span>
     </div>
    </div>
    <Button
     variant="outline"
     className="w-full justify-start text-sm text-muted-foreground"
     onClick={() => setSearchOpen(true)}
    >
     <Search className="mr-2 h-4 w-4" />
     Buscar documentação...
     <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
      <span className="text-xs">⌘</span>K
     </kbd>
    </Button>
   </SidebarHeader>
   <SidebarContent>
    <SidebarGroup>
     <SidebarMenu>
      {navigationData.map((item) => (
       <SidebarMenuItem key={item.title}>
        {item.items ? (
         <Collapsible defaultOpen className="group/collapsible">
          <CollapsibleTrigger asChild>
           <SidebarMenuButton className="w-full">
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
            <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
           </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
           <SidebarMenuSub>
            {item.items.map((subItem) => (
             <SidebarMenuSubItem key={subItem.title}>
              {subItem.items ? (
               <Collapsible className="group/subcollapsible">
                <CollapsibleTrigger asChild>
                 <SidebarMenuSubButton className="w-full">
                  <span>{subItem.title}</span>
                  <ChevronDown className="ml-auto h-3 w-3 transition-transform group-data-[state=open]/subcollapsible:rotate-180" />
                 </SidebarMenuSubButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                 <div className="ml-4 space-y-1">
                  {subItem.items.map((nestedItem) => (
                   <SidebarMenuSubButton key={nestedItem.title} asChild size="sm">
                    <Link href={nestedItem.url}>
                     <span>{nestedItem.title}</span>
                    </Link>
                   </SidebarMenuSubButton>
                  ))}
                 </div>
                </CollapsibleContent>
               </Collapsible>
              ) : (
               <SidebarMenuSubButton asChild>
                <Link href={subItem.url}>
                 <span>{subItem.title}</span>
                </Link>
               </SidebarMenuSubButton>
              )}
             </SidebarMenuSubItem>
            ))}
           </SidebarMenuSub>
          </CollapsibleContent>
         </Collapsible>
        ) : (
         <SidebarMenuButton asChild>
          <Link href={item.url}>
           <item.icon className="h-4 w-4" />
           <span>{item.title}</span>
          </Link>
         </SidebarMenuButton>
        )}
       </SidebarMenuItem>
      ))}
     </SidebarMenu>
    </SidebarGroup>
   </SidebarContent>
   <SidebarFooter>
    <div className="p-2 text-xs text-muted-foreground">
     Última atualização: {new Date().toLocaleDateString('pt-BR')}
    </div>
   </SidebarFooter>
   <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
  </Sidebar>
 )
}
