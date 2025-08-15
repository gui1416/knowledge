'use client'

import { ComponentPreview, CodeBlock, Callout, Dica } from '@/components/mdx-components'
import { Button } from '@/components/ui/button'
import { Download, Mail, Plus, Trash2, Heart, Share, Settings } from 'lucide-react'
import { useState } from 'react'

export default function ButtonPage() {
  const [loading, setLoading] = useState(false)
  const [liked, setLiked] = useState(false)

  const handleAsyncAction = async () => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Button Component</h1>
        <p className="text-muted-foreground text-lg">
          Componente de botão versátil com múltiplas variações, estados e tamanhos.
          Construído com acessibilidade e responsividade em mente.
        </p>
      </div>

      <Callout type="info" title="Baseado no shadcn/ui">
        Este componente utiliza a base do Button do shadcn/ui com extensões customizadas
        para casos de uso específicos e melhor experiência do usuário.
      </Callout>

      <h2 className="text-2xl font-semibold mb-6 mt-8">Variações Básicas</h2>

      <ComponentPreview
        title="Variantes do Button"
        description="Diferentes estilos visuais para diferentes contextos"
        code={`function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`}
      >
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Tamanhos"
        description="Diferentes tamanhos para diferentes contextos de uso"
        code={`function ButtonSizes() {
  return (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}`}
      >
        <div className="flex items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </ComponentPreview>

      <h2 className="text-2xl font-semibold mb-6 mt-8">Com Ícones</h2>

      <ComponentPreview
        title="Botões com Ícones"
        description="Combinando ícones com texto para melhor UX"
        code={`function ButtonsWithIcons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>
        <Mail className="mr-2 h-4 w-4" />
        Enviar Email
      </Button>
      <Button variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
      <Button variant="secondary">
        <Share className="mr-2 h-4 w-4" />
        Compartilhar
      </Button>
      <Button variant="destructive">
        <Trash2 className="mr-2 h-4 w-4" />
        Deletar
      </Button>
    </div>
  )
}`}
      >
        <div className="flex flex-wrap gap-3">
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Enviar Email
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="secondary">
            <Share className="mr-2 h-4 w-4" />
            Compartilhar
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Deletar
          </Button>
        </div>
      </ComponentPreview>

      <h2 className="text-2xl font-semibold mb-6 mt-8">Estados Interativos</h2>

      <ComponentPreview
        title="Estados e Loading"
        description="Botões com estados de loading e interações"
        code={`function InteractiveButtons() {
  const [loading, setLoading] = useState(false)
  const [liked, setLiked] = useState(false)

  const handleAsyncAction = async () => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Button 
        onClick={handleAsyncAction}
        disabled={loading}
      >
        {loading ? (
          <>
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Carregando...
          </>
        ) : (
          'Ação Assíncrona'
        )}
      </Button>
      
      <Button
        variant={liked ? "default" : "outline"}
        onClick={() => setLiked(!liked)}
      >
        <Heart className={\`mr-2 h-4 w-4 \${liked ? 'fill-current' : ''}\`} />
        {liked ? 'Curtido' : 'Curtir'}
      </Button>
      
      <Button disabled>
        <Settings className="mr-2 h-4 w-4" />
        Desabilitado
      </Button>
    </div>
  )
}`}
      >
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={handleAsyncAction}
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Carregando...
              </>
            ) : (
              'Ação Assíncrona'
            )}
          </Button>

          <Button
            variant={liked ? "default" : "outline"}
            onClick={() => setLiked(!liked)}
          >
            <Heart className={`mr-2 h-4 w-4 ${liked ? 'fill-current' : ''}`} />
            {liked ? 'Curtido' : 'Curtir'}
          </Button>

          <Button disabled>
            <Settings className="mr-2 h-4 w-4" />
            Desabilitado
          </Button>
        </div>
      </ComponentPreview>

      <h2 className="text-2xl font-semibold mb-6 mt-8">Implementação</h2>

      <CodeBlock language="tsx" filename="components/ui/button.tsx">
        {`import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }`}
      </CodeBlock>

      <h2 className="text-2xl font-semibold mb-6 mt-8">Props API</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-border">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="border border-border p-3 text-left font-semibold">Prop</th>
              <th className="border border-border p-3 text-left font-semibold">Tipo</th>
              <th className="border border-border p-3 text-left font-semibold">Default</th>
              <th className="border border-border p-3 text-left font-semibold">Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3 font-mono text-sm">variant</td>
              <td className="border border-border p-3 text-sm">string</td>
              <td className="border border-border p-3 text-sm">&quot;default&quot;</td>
              <td className="border border-border p-3 text-sm">Estilo visual do botão</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-mono text-sm">size</td>
              <td className="border border-border p-3 text-sm">string</td>
              <td className="border border-border p-3 text-sm">&quot;default&quot;</td>
              <td className="border border-border p-3 text-sm">Tamanho do botão</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-mono text-sm">asChild</td>
              <td className="border border-border p-3 text-sm">boolean</td>
              <td className="border border-border p-3 text-sm">false</td>
              <td className="border border-border p-3 text-sm">Renderiza como elemento filho</td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-mono text-sm">disabled</td>
              <td className="border border-border p-3 text-sm">boolean</td>
              <td className="border border-border p-3 text-sm">false</td>
              <td className="border border-border p-3 text-sm">Desabilita o botão</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Dica>
        Use a prop <code>asChild</code> quando quiser aplicar os estilos do Button
        a outro componente, como um Link do Next.js: <code>{'<Button asChild><Link href="/page">Link</Link></Button>'}</code>
      </Dica>

      <h2 className="text-2xl font-semibold mb-6 mt-8">Boas Práticas</h2>

      <div className="space-y-4">
        <div className="p-4 border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950 rounded-lg">
          <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Faça</h3>
          <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
            <li>• Use ícones para melhorar a compreensão da ação</li>
            <li>• Implemente estados de loading para ações assíncronas</li>
            <li>• Use variantes apropriadas para o contexto (destructive para deletar)</li>
            <li>• Mantenha textos concisos e descritivos</li>
          </ul>
        </div>

        <div className="p-4 border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950 rounded-lg">
          <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Evite</h3>
          <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
            <li>• Usar muitas variantes diferentes na mesma interface</li>
            <li>• Botões muito pequenos em dispositivos touch</li>
            <li>• Textos genéricos como "Clique aqui" ou "Botão"</li>
            <li>• Esquecer de implementar estados de loading</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
