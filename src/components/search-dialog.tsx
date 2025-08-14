"use client"

import * as React from "react"
import { Search, FileText, Code2, BookOpen, Lightbulb, FolderOpen } from 'lucide-react'
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
   { title: "Promises e Async/Await", url: "/estudos/javascript/promises", description: "Programação assíncrona em JavaScript" },
   { title: "Hooks Avançados", url: "/estudos/react/hooks-avancados", description: "useCallback, useMemo, useRef e mais" },
   { title: "App Router", url: "/estudos/nextjs/app-router", description: "Nova arquitetura de roteamento do Next.js" },
  ]
 },
 {
  group: "Snippets",
  icon: Code2,
  items: [
   { title: "Debounce Hook", url: "/snippets/utilitarios/debounce-hook", description: "Hook para debounce de funções" },
   { title: "Modal Reutilizável", url: "/snippets/componentes/modal", description: "Componente de modal flexível" },
   { title: "API Client", url: "/snippets/utilitarios/api-client", description: "Cliente HTTP configurado" },
  ]
 },
 {
  group: "Artigos",
  icon: FileText,
  items: [
   { title: "Arquitetura Frontend", url: "/artigos/arquitetura-frontend", description: "Padrões e boas práticas" },
   { title: "Clean Code em React", url: "/artigos/clean-code-react", description: "Código limpo e manutenível" },
  ]
 }
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
