'use client'

import { ComponentPreview, CodeBlock, Callout, Dica } from '@/components/mdx-components'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Search, Eye, EyeOff, Mail, User, Phone } from 'lucide-react'
import { useState } from 'react'

export default function InputPage() {
 const [showPassword, setShowPassword] = useState(false)
 const [email, setEmail] = useState('')
 const [phone, setPhone] = useState('')

 const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, '')
  if (numbers.length <= 11) {
   return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  }
  return phone
 }

 const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const formatted = formatPhone(e.target.value)
  setPhone(formatted)
 }

 return (
  <div className="container mx-auto px-4 py-8 max-w-4xl">
   <div className="mb-8">
    <h1 className="text-3xl font-bold mb-4">Input Component</h1>
    <p className="text-muted-foreground text-lg">
     Componente de entrada de texto versátil com suporte a validação,
     máscaras, ícones e diferentes estados visuais.
    </p>
   </div>

   <Callout type="info" title="Acessibilidade">
    Todos os inputs incluem suporte completo a screen readers, navegação por teclado
    e associação adequada com labels para máxima acessibilidade.
   </Callout>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Variações Básicas</h2>

   <ComponentPreview
    title="Input Básico"
    description="Input simples com label e placeholder"
    code={`function BasicInput() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="Digite seu email"
      />
    </div>
  )
}`}
   >
    <div className="space-y-2 w-full max-w-sm">
     <Label htmlFor="email">Email</Label>
     <Input
      id="email"
      type="email"
      placeholder="Digite seu email"
     />
    </div>
   </ComponentPreview>

   <ComponentPreview
    title="Input com Ícones"
    description="Inputs com ícones para melhor UX"
    code={`function InputWithIcons() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="search">Buscar</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            id="search"
            placeholder="Buscar produtos..."
            className="pl-10"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="user">Usuário</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            id="user"
            placeholder="Nome de usuário"
            className="pl-10"
          />
        </div>
      </div>
    </div>
  )
}`}
   >
    <div className="space-y-4 w-full max-w-sm">
     <div className="space-y-2">
      <Label htmlFor="search">Buscar</Label>
      <div className="relative">
       <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
       <Input
        id="search"
        placeholder="Buscar produtos..."
        className="pl-10"
       />
      </div>
     </div>

     <div className="space-y-2">
      <Label htmlFor="user">Usuário</Label>
      <div className="relative">
       <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
       <Input
        id="user"
        placeholder="Nome de usuário"
        className="pl-10"
       />
      </div>
     </div>
    </div>
   </ComponentPreview>

   <ComponentPreview
    title="Password Input"
    description="Input de senha com toggle de visibilidade"
    code={`function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-2">
      <Label htmlFor="password">Senha</Label>
      <div className="relative">
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Digite sua senha"
          className="pr-10"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Eye className="h-4 w-4 text-muted-foreground" />
          )}
        </Button>
      </div>
    </div>
  )
}`}
   >
    <div className="space-y-2 w-full max-w-sm">
     <Label htmlFor="password">Senha</Label>
     <div className="relative">
      <Input
       id="password"
       type={showPassword ? "text" : "password"}
       placeholder="Digite sua senha"
       className="pr-10"
      />
      <Button
       type="button"
       variant="ghost"
       size="icon"
       className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
       onClick={() => setShowPassword(!showPassword)}
      >
       {showPassword ? (
        <EyeOff className="h-4 w-4 text-muted-foreground" />
       ) : (
        <Eye className="h-4 w-4 text-muted-foreground" />
       )}
      </Button>
     </div>
    </div>
   </ComponentPreview>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Validação e Estados</h2>

   <ComponentPreview
    title="Estados de Validação"
    description="Inputs com diferentes estados visuais"
    code={`function ValidationStates() {
  const [email, setEmail] = useState('')
  
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email-valid">Email (Válido)</Label>
        <Input
          id="email-valid"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite um email válido"
          className={email && !isValidEmail(email) ? "border-red-500 focus:border-red-500" : email && isValidEmail(email) ? "border-green-500 focus:border-green-500" : ""}
        />
        {email && !isValidEmail(email) && (
          <p className="text-sm text-red-500">Email inválido</p>
        )}
        {email && isValidEmail(email) && (
          <p className="text-sm text-green-500">Email válido</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="disabled">Campo Desabilitado</Label>
        <Input
          id="disabled"
          placeholder="Campo desabilitado"
          disabled
        />
      </div>
    </div>
  )
}`}
   >
    <div className="space-y-4 w-full max-w-sm">
     <div className="space-y-2">
      <Label htmlFor="email-valid">Email (Validação)</Label>
      <Input
       id="email-valid"
       type="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       placeholder="Digite um email válido"
       className={email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "border-red-500 focus:border-red-500" : email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "border-green-500 focus:border-green-500" : ""}
      />
      {email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
       <p className="text-sm text-red-500">Email inválido</p>
      )}
      {email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
       <p className="text-sm text-green-500">Email válido</p>
      )}
     </div>

     <div className="space-y-2">
      <Label htmlFor="disabled">Campo Desabilitado</Label>
      <Input
       id="disabled"
       placeholder="Campo desabilitado"
       disabled
      />
     </div>
    </div>
   </ComponentPreview>

   <ComponentPreview
    title="Máscara de Telefone"
    description="Input com formatação automática"
    code={`function PhoneInput() {
  const [phone, setPhone] = useState('')

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    }
    return phone
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setPhone(formatted)
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="phone">Telefone</Label>
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="(11) 99999-9999"
          className="pl-10"
          maxLength={15}
        />
      </div>
    </div>
  )
}`}
   >
    <div className="space-y-2 w-full max-w-sm">
     <Label htmlFor="phone">Telefone</Label>
     <div className="relative">
      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
       id="phone"
       value={phone}
       onChange={handlePhoneChange}
       placeholder="(11) 99999-9999"
       className="pl-10"
       maxLength={15}
      />
     </div>
    </div>
   </ComponentPreview>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Implementação</h2>

   <CodeBlock language="tsx" filename="components/ui/input.tsx">
    {`import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }`}
   </CodeBlock>

   <Dica>
    Para inputs com ícones, use padding personalizado: <code>pl-10</code> para ícone à esquerda
    e <code>pr-10</code> para ícone à direita. Posicione o ícone com <code>absolute</code> e centralize
    com <code>top-1/2 transform -translate-y-1/2</code>.
   </Dica>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Boas Práticas</h2>

   <div className="space-y-4">
    <div className="p-4 border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950 rounded-lg">
     <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Faça</h3>
     <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
      <li>• Sempre associe inputs com labels usando htmlFor/id</li>
      <li>• Use placeholders descritivos mas não como substituto de labels</li>
      <li>• Implemente validação em tempo real para melhor UX</li>
      <li>• Use tipos apropriados (email, tel, password, etc.)</li>
      <li>• Forneça feedback visual claro para estados de erro</li>
     </ul>
    </div>

    <div className="p-4 border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950 rounded-lg">
     <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Evite</h3>
     <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
      <li>• Usar apenas placeholders sem labels</li>
      <li>• Validação apenas no submit do formulário</li>
      <li>• Mensagens de erro genéricas ou pouco úteis</li>
      <li>• Inputs muito pequenos em dispositivos móveis</li>
      <li>• Máscaras muito restritivas que impedem a entrada</li>
     </ul>
    </div>
   </div>
  </div>
 )
}
