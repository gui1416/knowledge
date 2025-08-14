'use client'

import { ComponentPreview, CodeBlock, Callout, Dica } from '@/components/mdx-components'
import { Button } from '@/components/ui/button'
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
 DropdownMenuCheckboxItem,
 DropdownMenuRadioGroup,
 DropdownMenuRadioItem,
 DropdownMenuSub,
 DropdownMenuSubContent,
 DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MoreHorizontal, User, Settings, LogOut, Plus, Edit, Trash2, Copy, ChevronDown, Check, Filter, SortAsc, SortDesc, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function DropdownPage() {
 const [showBookmarks, setShowBookmarks] = useState(true)
 const [showReading, setShowReading] = useState(false)
 const [position, setPosition] = useState('bottom')

 return (
  <div className="container mx-auto px-4 py-8 max-w-4xl">
   <div className="mb-8">
    <h1 className="text-3xl font-bold mb-4">Dropdown Menu</h1>
    <p className="text-muted-foreground text-lg">
     Menu suspenso versátil para ações contextuais, navegação e seleções.
     Construído com Radix UI para máxima acessibilidade.
    </p>
   </div>

   <Callout type="info" title="Acessibilidade Completa">
    O DropdownMenu inclui navegação por teclado, foco automático, escape para fechar
    e suporte completo a screen readers seguindo as diretrizes ARIA.
   </Callout>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Menu Básico</h2>

   <ComponentPreview
    title="Dropdown Simples"
    description="Menu básico com itens de ação"
    code={`function SimpleDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Opções
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Ações</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Edit className="mr-2 h-4 w-4" />
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          Duplicar
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600">
          <Trash2 className="mr-2 h-4 w-4" />
          Deletar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
   >
    <DropdownMenu>
     <DropdownMenuTrigger asChild>
      <Button variant="outline">
       Opções
       <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent>
      <DropdownMenuLabel>Ações</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
       <Edit className="mr-2 h-4 w-4" />
       Editar
      </DropdownMenuItem>
      <DropdownMenuItem>
       <Copy className="mr-2 h-4 w-4" />
       Duplicar
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="text-red-600">
       <Trash2 className="mr-2 h-4 w-4" />
       Deletar
      </DropdownMenuItem>
     </DropdownMenuContent>
    </DropdownMenu>
   </ComponentPreview>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Menu de Usuário</h2>

   <ComponentPreview
    title="User Menu"
    description="Menu de usuário com avatar e perfil"
    code={`function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32&text=U" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">João Silva</p>
            <p className="text-xs leading-none text-muted-foreground">
              joao@exemplo.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Configurações
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
   >
    <DropdownMenu>
     <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
       <Avatar className="h-8 w-8">
        <AvatarImage src="/placeholder.svg?height=32&width=32&text=U" />
        <AvatarFallback>JD</AvatarFallback>
       </Avatar>
      </Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent className="w-56" align="end" forceMount>
      <DropdownMenuLabel className="font-normal">
       <div className="flex flex-col space-y-1">
        <p className="text-sm font-medium leading-none">João Silva</p>
        <p className="text-xs leading-none text-muted-foreground">
         joao@exemplo.com
        </p>
       </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
       <User className="mr-2 h-4 w-4" />
       Perfil
      </DropdownMenuItem>
      <DropdownMenuItem>
       <Settings className="mr-2 h-4 w-4" />
       Configurações
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
       <LogOut className="mr-2 h-4 w-4" />
       Sair
      </DropdownMenuItem>
     </DropdownMenuContent>
    </DropdownMenu>
   </ComponentPreview>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Menu com Checkboxes</h2>

   <ComponentPreview
    title="Checkbox Items"
    description="Menu com itens selecionáveis usando checkboxes"
    code={`function CheckboxDropdown() {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showReading, setShowReading] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filtros
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Mostrar</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          Favoritos
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showReading}
          onCheckedChange={setShowReading}
        >
          Lista de Leitura
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
   >
    <DropdownMenu>
     <DropdownMenuTrigger asChild>
      <Button variant="outline">
       <Filter className="mr-2 h-4 w-4" />
       Filtros
      </Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Mostrar</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem
       checked={showBookmarks}
       onCheckedChange={setShowBookmarks}
      >
       Favoritos
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
       checked={showReading}
       onCheckedChange={setShowReading}
      >
       Lista de Leitura
      </DropdownMenuCheckboxItem>
     </DropdownMenuContent>
    </DropdownMenu>
   </ComponentPreview>

   <ComponentPreview
    title="Radio Group"
    description="Menu com seleção única usando radio buttons"
    code={`function RadioDropdown() {
  const [position, setPosition] = useState('bottom')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Posição: {position}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Posição do Painel</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Topo</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Inferior</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Direita</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
   >
    <DropdownMenu>
     <DropdownMenuTrigger asChild>
      <Button variant="outline">
       Posição: {position}
       <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Posição do Painel</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
       <DropdownMenuRadioItem value="top">Topo</DropdownMenuRadioItem>
       <DropdownMenuRadioItem value="bottom">Inferior</DropdownMenuRadioItem>
       <DropdownMenuRadioItem value="right">Direita</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
     </DropdownMenuContent>
    </DropdownMenu>
   </ComponentPreview>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Submenu</h2>

   <ComponentPreview
    title="Menu com Submenu"
    description="Menu aninhado com submenus"
    code={`function SubmenuDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          Criar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Criar Novo</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          Usuário
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Settings className="mr-2 h-4 w-4" />
            Configurações
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              Visibilidade
            </DropdownMenuItem>
            <DropdownMenuItem>
              <EyeOff className="mr-2 h-4 w-4" />
              Privacidade
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Trash2 className="mr-2 h-4 w-4" />
          Lixeira
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
   >
    <DropdownMenu>
     <DropdownMenuTrigger asChild>
      <Button variant="outline">
       <Plus className="mr-2 h-4 w-4" />
       Criar
      </Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Criar Novo</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
       <User className="mr-2 h-4 w-4" />
       Usuário
      </DropdownMenuItem>
      <DropdownMenuSub>
       <DropdownMenuSubTrigger>
        <Settings className="mr-2 h-4 w-4" />
        Configurações
       </DropdownMenuSubTrigger>
       <DropdownMenuSubContent>
        <DropdownMenuItem>
         <Eye className="mr-2 h-4 w-4" />
         Visibilidade
        </DropdownMenuItem>
        <DropdownMenuItem>
         <EyeOff className="mr-2 h-4 w-4" />
         Privacidade
        </DropdownMenuItem>
       </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
       <Trash2 className="mr-2 h-4 w-4" />
       Lixeira
      </DropdownMenuItem>
     </DropdownMenuContent>
    </DropdownMenu>
   </ComponentPreview>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Implementação</h2>

   <CodeBlock language="tsx" filename="components/ui/dropdown-menu.tsx">
    {`"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from 'lucide-react'
import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}`}
   </CodeBlock>

   <Dica>
    Use <code>align="end"</code> no DropdownMenuContent para alinhar o menu à direita
    do trigger. Para menus largos, defina uma largura fixa com <code>className="w-56"</code>.
   </Dica>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Boas Práticas</h2>

   <div className="space-y-4">
    <div className="p-4 border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950 rounded-lg">
     <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Faça</h3>
     <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
      <li>• Use ícones consistentes para melhor reconhecimento</li>
      <li>• Agrupe itens relacionados com separadores</li>
      <li>• Use cores diferentes para ações destrutivas (vermelho)</li>
      <li>• Implemente atalhos de teclado quando apropriado</li>
      <li>• Mantenha labels claros e concisos</li>
     </ul>
    </div>

    <div className="p-4 border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950 rounded-lg">
     <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Evite</h3>
     <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
      <li>• Menus muito longos sem agrupamento</li>
      <li>• Submenus muito profundos (máximo 2 níveis)</li>
      <li>• Ações destrutivas sem confirmação</li>
      <li>• Misturar diferentes tipos de interação no mesmo menu</li>
      <li>• Esquecer de indicar estado atual em radio/checkbox items</li>
     </ul>
    </div>
   </div>
  </div>
 )
}
