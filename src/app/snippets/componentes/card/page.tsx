'use client'

import { ComponentPreview, CodeBlock, Callout, Dica } from '@/components/mdx-components'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Heart, MessageCircle, Share, MoreHorizontal, Star, Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function CardPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Card Component</h1>
        <p className="text-muted-foreground text-lg">
          Container flexível para agrupar conteúdo relacionado com header,
          body e footer opcionais. Perfeito para criar layouts organizados.
        </p>
      </div>

      <Callout type="info" title="Composição Flexível">
        O Card é composto por subcomponentes (Header, Content, Footer) que podem
        ser usados independentemente para máxima flexibilidade de layout.
      </Callout>

      <h2 className="text-2xl font-semibold mb-6 mt-8">Estrutura Básica</h2>

      <ComponentPreview
        title="Card Simples"
        description="Estrutura básica com header, content e footer"
        code={`function SimpleCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Título do Card</CardTitle>
        <CardDescription>
          Descrição opcional que explica o conteúdo do card
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Este é o conteúdo principal do card. Aqui você pode 
        adicionar qualquer tipo de conteúdo.</p>
      </CardContent>
      <CardFooter>
        <Button>Ação Principal</Button>
        <Button variant="outline">Cancelar</Button>
      </CardFooter>
    </Card>
  )
}`}
      >
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Título do Card</CardTitle>
            <CardDescription>
              Descrição opcional que explica o conteúdo do card
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Este é o conteúdo principal do card. Aqui você pode
              adicionar qualquer tipo de conteúdo.</p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button>Ação Principal</Button>
            <Button variant="outline">Cancelar</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>

      <h2 className="text-2xl font-semibold mb-6 mt-8">Cards de Produto</h2>

      <ComponentPreview
        title="Card de Produto"
        description="Card para exibir produtos com imagem, preço e ações"
        code={`function ProductCard() {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="aspect-square bg-muted relative">
        <Image 
          src="/placeholder.svg?height=300&width=300&text=Produto" 
          alt="Produto"
          layout="fill"
          objectFit="cover"
        />
        <Badge className="absolute top-2 right-2">Novo</Badge>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">
          Nome do Produto Incrível
        </CardTitle>
        <CardDescription>
          Categoria • Marca
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">R$ 299,90</span>
            <span className="text-sm text-muted-foreground line-through ml-2">
              R$ 399,90
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">4.5</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Adicionar ao Carrinho</Button>
      </CardFooter>
    </Card>
  )
}`}
      >
        <Card className="w-full max-w-sm overflow-hidden">
          <div className="aspect-square bg-muted relative">
            <Image
              src="/placeholder.svg?height=300&width=300&text=Produto"
              alt="Produto"
              layout="fill"
              objectFit="cover"
            />
            <Badge className="absolute top-2 right-2">Novo</Badge>
          </div>
          <CardHeader>
            <CardTitle className="line-clamp-2">
              Nome do Produto Incrível
            </CardTitle>
            <CardDescription>
              Categoria • Marca
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold">R$ 299,90</span>
                <span className="text-sm text-muted-foreground line-through ml-2">
                  R$ 399,90
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">4.5</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Adicionar ao Carrinho</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>

      <h2 className="text-2xl font-semibold mb-6 mt-8">Cards Sociais</h2>

      <ComponentPreview
        title="Post Social"
        description="Card para posts de redes sociais com avatar e interações"
        code={`function SocialCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40&text=U" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-base">João Silva</CardTitle>
            <CardDescription>@joaosilva • 2h</CardDescription>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed">
          Acabei de lançar meu novo projeto! Muito animado para 
          compartilhar com vocês. O que acham? 🚀
        </p>
        <div className="mt-3 aspect-video bg-muted rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground">Imagem do projeto</span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-4 w-full">
          <Button variant="ghost" size="sm" className="gap-2">
            <Heart className="h-4 w-4" />
            <span>24</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>8</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Share className="h-4 w-4" />
            <span>3</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}`}
      >
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40&text=U" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-base">João Silva</CardTitle>
                <CardDescription>@joaosilva • 2h</CardDescription>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              Acabei de lançar meu novo projeto! Muito animado para
              compartilhar com vocês. O que acham? 🚀
            </p>
            <div className="mt-3 aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Imagem do projeto</span>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-4 w-full">
              <Button variant="ghost" size="sm" className="gap-2">
                <Heart className="h-4 w-4" />
                <span>24</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>8</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Share className="h-4 w-4" />
                <span>3</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </ComponentPreview>

      <ComponentPreview
        title="Card de Evento"
        description="Card para exibir informações de eventos"
        code={`function EventCard() {
  return (
    <Card className="w-full max-w-sm">
      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-4 left-4 text-white">
          <div className="text-2xl font-bold">15</div>
          <div className="text-sm">DEZ</div>
        </div>
      </div>
      <CardHeader>
        <CardTitle>Conferência de Tecnologia 2024</CardTitle>
        <CardDescription className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            15 Dez, 09:00
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            São Paulo
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          O maior evento de tecnologia do ano com palestrantes 
          renomados e networking de qualidade.
        </p>
        <div className="flex items-center gap-2 mt-3">
          <Badge variant="secondary">Tecnologia</Badge>
          <Badge variant="secondary">Networking</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Inscrever-se</Button>
      </CardFooter>
    </Card>
  )
}`}
      >
        <Card className="w-full max-w-sm">
          <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-4 left-4 text-white">
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm">DEZ</div>
            </div>
          </div>
          <CardHeader>
            <CardTitle>Conferência de Tecnologia 2024</CardTitle>
            <CardDescription className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                15 Dez, 09:00
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                São Paulo
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              O maior evento de tecnologia do ano com palestrantes
              renomados e networking de qualidade.
            </p>
            <div className="flex items-center gap-2 mt-3">
              <Badge variant="secondary">Tecnologia</Badge>
              <Badge variant="secondary">Networking</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Inscrever-se</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>

      <h2 className="text-2xl font-semibold mb-6 mt-8">Implementação</h2>

      <CodeBlock language="tsx" filename="components/ui/card.tsx">
        {`import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`}
      </CodeBlock>

      <Dica>
        Use <code>overflow-hidden</code> no Card quando tiver imagens que devem
        respeitar o border-radius. Para cards clicáveis, adicione <code>cursor-pointer</code>
        e estados de hover.
      </Dica>

      <h2 className="text-2xl font-semibold mb-6 mt-8">Boas Práticas</h2>

      <div className="space-y-4">
        <div className="p-4 border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950 rounded-lg">
          <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Faça</h3>
          <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
            <li>• Use CardHeader para títulos e metadados</li>
            <li>• Mantenha o conteúdo do card focado e relacionado</li>
            <li>• Use aspect-ratio para imagens consistentes</li>
            <li>• Implemente estados de hover para cards interativos</li>
            <li>• Use CardFooter para ações principais</li>
          </ul>
        </div>

        <div className="p-4 border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950 rounded-lg">
          <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Evite</h3>
          <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
            <li>• Sobrecarregar cards com muita informação</li>
            <li>• Usar cards para conteúdo que não se relaciona</li>
            <li>• Esquecer de otimizar imagens para diferentes densidades</li>
            <li>• Cards muito largos em telas grandes</li>
            <li>• Muitas ações no footer (máximo 2-3)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
