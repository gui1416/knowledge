"use client"

import * as React from "react"
import { BookOpen, Code2, FileText, Search, Home, ChevronRight, ChevronDown, FolderOpen, Lightbulb } from "lucide-react"

import {
 Sidebar,
 SidebarContent,
 SidebarFooter,
 SidebarGroup,
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
    ],
   },
   {
    title: "React",
    url: "/estudos/react",
    items: [
     { title: "Hooks Avançados", url: "/estudos/react/hooks-avancados" },
     { title: "Context API", url: "/estudos/react/context-api" },
     { title: "Callback vs Memo", url: "/estudos/react/callback-vs-memo" },
    ],
   },
   {
    title: "Next.js",
    url: "/estudos/nextjs",
    items: [{ title: "App Router", url: "/estudos/nextjs/app-router" }],
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
    items: [{ title: "Debounce Hook", url: "/snippets/utilitarios/debounce-hook" }],
   },
   {
    title: "Componentes",
    url: "/snippets/componentes",
    items: [
     { title: "Button", url: "/snippets/componentes/button" },
     { title: "Card", url: "/snippets/componentes/card" },
     { title: "Dropdown", url: "/snippets/componentes/dropdown" },
     { title: "Input", url: "/snippets/componentes/input" },
     { title: "Modal", url: "/snippets/componentes/modal" },
     { title: "Tabs", url: "/snippets/componentes/tabs" },
    ],
   },
   {
    title: "Hooks",
    url: "/snippets/hooks",
    items: [{ title: "useDebounce", url: "/snippets/hooks/use-debounce" }],
   },
  ],
 },
 {
  title: "Projetos",
  icon: FolderOpen,
  items: [
   {
    title: "Visão Geral",
    url: "/projetos",
   },
   {
    title: "Concluídos",
    items: [{ title: "Task Manager Pro", url: "/projetos/task-manager-pro" }],
   },
   {
    title: "Em Andamento",
    items: [{ title: "E-commerce Platform", url: "/projetos/ecommerce-platform" }],
   },
   {
    title: "Pausados",
    items: [{ title: "Analytics Dashboard", url: "/projetos/analytics-dashboard" }],
   },
   {
    title: "Planejados",
    items: [{ title: "AI Code Assistant", url: "/projetos/ai-code-assistant" }],
   },
  ],
 },
 {
  title: "Reflexões",
  icon: Lightbulb,
  items: [
   {
    title: "Todas as Reflexões",
    url: "/reflexoes",
   },
   {
    title: "Carreira",
    items: [
     { title: "Aprendizado Contínuo", url: "/reflexoes/aprendizado-continuo" },
     { title: "Feedback Construtivo", url: "/reflexoes/feedback-construtivo" },
    ],
   },
   {
    title: "Bem-estar",
    items: [{ title: "Equilibrando Vida e Código", url: "/reflexoes/equilibrio-vida-codigo" }],
   },
  ],
 },
 {
  title: "Artigos",
  icon: FileText,
  items: [{ title: "Arquitetura Frontend Moderna", url: "/artigos/arquitetura-frontend-moderna" }],
 },
]

async function getLatestCommitDate() {
 try {
  const response = await fetch("https://api.github.com/repos/gui1416/knowledge/commits?per_page=1", {
   headers: {
    Accept: "application/vnd.github.v3+json",
   },
   next: { revalidate: 86400 }, // Cache for 24 hour
  })

  if (!response.ok) {
   throw new Error("Failed to fetch commit data")
  }

  const commits = await response.json()
  if (commits && commits.length > 0) {
   const commitDate = new Date(commits[0].commit.committer.date)
   return commitDate.toLocaleDateString("pt-BR")
  }
 } catch (error) {
  console.error("Error fetching latest commit date:", error)
 }

 // Fallback to current date if API fails
 return new Date().toLocaleDateString("pt-BR")
}

export function AppSidebar() {
 const [searchOpen, setSearchOpen] = React.useState(false)
 const [lastCommitDate, setLastCommitDate] = React.useState<string>("")

 React.useEffect(() => {
  getLatestCommitDate().then(setLastCommitDate)
 }, [])

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
     className="w-full justify-start text-sm text-muted-foreground bg-transparent"
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
     Última atualização: {lastCommitDate || new Date().toLocaleDateString("pt-BR")}
    </div>
   </SidebarFooter>
   <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
  </Sidebar>
 )
}
