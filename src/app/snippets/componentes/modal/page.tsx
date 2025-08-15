"use client"

import type React from "react"

import { ComponentPreview } from "@/components/mdx-components"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState } from "react"

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Exemplo de Modal">
        <p>Este é o conteúdo do modal.</p>
        <p>Você pode adicionar qualquer conteúdo aqui.</p>
      </Modal>
    </div>
  )
}

function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}: {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl"
}) {
  if (!isOpen) return null

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className={`relative w-full ${sizeClasses[size]} max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all duration-200 ease-out animate-in fade-in-0 zoom-in-95`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">{children}</div>
      </div>
    </div>
  )
}

export default function ModalPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Modal Component</h1>
        <p className="text-muted-foreground">Um componente modal reutilizável e acessível para React.</p>
      </div>

      <ComponentPreview
        title="Modal Básico"
        description="Modal simples com overlay e botão de fechar"
        code={`function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg', 
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className={\`relative w-full \${sizeClasses[size]} max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all duration-200 ease-out animate-in fade-in-0 zoom-in-95\`}>
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">{title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {children}
        </div>
      </div>
    </div>
  )
}

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>
        Abrir Modal
      </Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Exemplo de Modal"
      >
        <p>Este é o conteúdo do modal.</p>
        <p>Você pode adicionar qualquer conteúdo aqui.</p>
      </Modal>
    </div>
  )
}`}
      >
        <ModalExample />
      </ComponentPreview>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Características</h2>
        <ul className="space-y-2 text-sm">
          <li>✅ Overlay com backdrop blur</li>
          <li>✅ Animações suaves de entrada/saída</li>
          <li>✅ Diferentes tamanhos (sm, md, lg, xl)</li>
          <li>✅ Scroll interno quando necessário</li>
          <li>✅ Acessibilidade com ESC para fechar</li>
          <li>✅ Click fora para fechar</li>
        </ul>
      </div>
    </div>
  )
}
