"use client"

import * as React from "react"
import { FileText, Code2, BookOpen, FolderOpen, Lightbulb } from "lucide-react"
import {
 CommandDialog,
 CommandEmpty,
 CommandGroup,
 CommandInput,
 CommandItem,
 CommandList,
} from "@/components/ui/command"
import { useRouter } from "next/navigation"

const searchData = [
 {
  group: "Estudos",
  icon: BookOpen,
  items: [
   {
    title: "Promises e Async/Await",
    url: "/estudos/javascript/promises",
    description: "Programação assíncrona em JavaScript",
   },
   {
    title: "Closures em JavaScript",
    url: "/estudos/javascript/closures",
    description: "Entendendo closures e escopo léxico",
   },
   {
    title: "Hooks Avançados",
    url: "/estudos/react/hooks-avancados",
    description: "useCallback, useMemo, useRef e mais",
   },
   {
    title: "Context API",
    url: "/estudos/react/context-api",
    description: "Gerenciamento de estado global",
   },
   {
    title: "useCallback vs useMemo",
    url: "/estudos/react/callback-vs-memo",
    description: "Otimização de performance em React",
   },
   {
    title: "App Router",
    url: "/estudos/nextjs/app-router",
    description: "Nova arquitetura de roteamento do Next.js",
   },
  ],
 },
 {
  group: "Snippets",
  icon: Code2,
  items: [
   {
    title: "useDebounce Hook",
    url: "/snippets/hooks/use-debounce",
    description: "Hook para debounce de funções",
   },
   {
    title: "Debounce Hook Utilitário",
    url: "/snippets/utilitarios/debounce-hook",
    description: "Implementação de debounce personalizada",
   },
   {
    title: "Button Component",
    url: "/snippets/componentes/button",
    description: "Botão com múltiplas variações",
   },
   {
    title: "Card Component",
    url: "/snippets/componentes/card",
    description: "Container flexível para conteúdo",
   },
   {
    title: "Dropdown Component",
    url: "/snippets/componentes/dropdown",
    description: "Menu suspenso contextual",
   },
   {
    title: "Input Component",
    url: "/snippets/componentes/input",
    description: "Campo de entrada com validação",
   },
   {
    title: "Modal Component",
    url: "/snippets/componentes/modal",
    description: "Modal reutilizável e acessível",
   },
   {
    title: "Tabs Component",
    url: "/snippets/componentes/tabs",
    description: "Navegação por abas",
   },
  ],
 },
 {
  group: "Projetos",
  icon: FolderOpen,
  items: [
   {
    title: "Meus Projetos",
    url: "/projetos",
    description: "Portfolio de projetos desenvolvidos",
   },
   {
    title: "Task Manager Pro",
    url: "/projetos/task-manager-pro",
    description: "App de gerenciamento de tarefas concluído",
   },
   {
    title: "E-commerce Platform",
    url: "/projetos/ecommerce-platform",
    description: "Plataforma de e-commerce em desenvolvimento",
   },
   {
    title: "Analytics Dashboard",
    url: "/projetos/analytics-dashboard",
    description: "Dashboard de analytics pausado",
   },
   {
    title: "AI Code Assistant",
    url: "/projetos/ai-code-assistant",
    description: "Assistente de código com IA planejado",
   },
  ],
 },
 {
  group: "Reflexões",
  icon: Lightbulb,
  items: [
   {
    title: "Reflexões sobre Desenvolvimento",
    url: "/reflexoes",
    description: "Pensamentos e aprendizados da carreira",
   },
   {
    title: "A Jornada do Aprendizado Contínuo",
    url: "/reflexoes/aprendizado-continuo",
    description: "Estratégias para manter-se sempre aprendendo",
   },
   {
    title: "A Arte do Feedback Construtivo",
    url: "/reflexoes/feedback-construtivo",
    description: "Como dar e receber feedback efetivo",
   },
   {
    title: "Equilibrando Vida e Código",
    url: "/reflexoes/equilibrio-vida-codigo",
    description: "Mantendo saúde mental e produtividade",
   },
  ],
 },
 {
  group: "Artigos",
  icon: FileText,
  items: [
   {
    title: "Arquitetura Frontend Moderna",
    url: "/artigos/arquitetura-frontend-moderna",
    description: "Padrões e estruturas escaláveis",
   },
  ],
 },
]

interface SearchDialogProps {
 open: boolean
 onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
 const router = useRouter()

 React.useEffect(() => {
  const down = (e: KeyboardEvent) => {
   if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
    e.preventDefault()
    onOpenChange(!open)
   }
  }
  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
 }, [open, onOpenChange])

 const handleSelect = (url: string) => {
  onOpenChange(false)
  router.push(url)
 }

 return (
  <CommandDialog open={open} onOpenChange={onOpenChange}>
   <CommandInput placeholder="Buscar na documentação..." />
   <CommandList>
    <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
    {searchData.map((group) => (
     <CommandGroup key={group.group} heading={group.group}>
      {group.items.map((item) => (
       <CommandItem
        key={item.url}
        value={`${item.title} ${item.description}`}
        onSelect={() => handleSelect(item.url)}
       >
        <group.icon className="mr-2 h-4 w-4" />
        <div className="flex flex-col">
         <span>{item.title}</span>
         <span className="text-xs text-muted-foreground">{item.description}</span>
        </div>
       </CommandItem>
      ))}
     </CommandGroup>
    ))}
   </CommandList>
  </CommandDialog>
 )
}
