'use client'

import { ComponentPreview, CodeBlock, Callout, Dica } from '@/components/mdx-components'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { User, Settings, Bell, Shield, CreditCard, FileText, BarChart3, Users, Calendar } from 'lucide-react'

export default function TabsPage() {
 return (
  <div className="container mx-auto px-4 py-8 max-w-4xl">
   <div className="mb-8">
    <h1 className="text-3xl font-bold mb-4">Tabs Component</h1>
    <p className="text-muted-foreground text-lg">
     Componente de navegação por abas para organizar conteúdo relacionado
     em seções distintas. Construído com Radix UI para acessibilidade completa.
    </p>
   </div>

   <Callout type="info" title="Navegação Acessível">
    As Tabs incluem navegação por seta, foco automático, e suporte completo
    a screen readers seguindo as diretrizes ARIA para componentes de abas.
   </Callout>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Tabs Básicas</h2>

   <ComponentPreview
    title="Tabs Simples"
    description="Estrutura básica de tabs com conteúdo"
    code={`function SimpleTabs() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Conta</TabsTrigger>
        <TabsTrigger value="password">Senha</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" defaultValue="João Silva" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Usuário</Label>
          <Input id="username" defaultValue="@joaosilva" />
        </div>
      </TabsContent>
      <TabsContent value="password" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="current">Senha Atual</Label>
          <Input id="current" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new">Nova Senha</Label>
          <Input id="new" type="password" />
        </div>
      </TabsContent>
    </Tabs>
  )
}`}
   >
    <Tabs defaultValue="account" className="w-full max-w-md">
     <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="account">Conta</TabsTrigger>
      <TabsTrigger value="password">Senha</TabsTrigger>
     </TabsList>
     <TabsContent value="account" className="space-y-4">
      <div className="space-y-2">
       <Label htmlFor="name">Nome</Label>
       <Input id="name" defaultValue="João Silva" />
      </div>
      <div className="space-y-2">
       <Label htmlFor="username">Usuário</Label>
       <Input id="username" defaultValue="@joaosilva" />
      </div>
     </TabsContent>
     <TabsContent value="password" className="space-y-4">
      <div className="space-y-2">
       <Label htmlFor="current">Senha Atual</Label>
       <Input id="current" type="password" />
      </div>
      <div className="space-y-2">
       <Label htmlFor="new">Nova Senha</Label>
       <Input id="new" type="password" />
      </div>
     </TabsContent>
    </Tabs>
   </ComponentPreview>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Tabs com Ícones</h2>

   <ComponentPreview
    title="Tabs com Ícones"
    description="Tabs com ícones para melhor identificação visual"
    code={`function IconTabs() {
  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="profile" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">Perfil</span>
        </TabsTrigger>
        <TabsTrigger value="settings" className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          <span className="hidden sm:inline">Config</span>
        </TabsTrigger>
        <TabsTrigger value="notifications" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          <span className="hidden sm:inline">Notif</span>
        </TabsTrigger>
        <TabsTrigger value="security" className="flex items-center gap-2">
          <Shield className="h-4 w-4" />
          <span className="hidden sm:inline">Segur</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="profile" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Informações do Perfil</CardTitle>
            <CardDescription>
              Gerencie suas informações pessoais
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Nome</Label>
                <Input defaultValue="João Silva" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input defaultValue="joao@exemplo.com" />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="settings" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Configurações</CardTitle>
            <CardDescription>
              Personalize sua experiência
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Configurações da aplicação apareceriam aqui.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="notifications" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Notificações</CardTitle>
            <CardDescription>
              Configure como você quer ser notificado
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Preferências de notificação apareceriam aqui.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="security" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Segurança</CardTitle>
            <CardDescription>
              Mantenha sua conta segura
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Configurações de segurança apareceriam aqui.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}`}
   >
    <Tabs defaultValue="profile" className="w-full">
     <TabsList className="grid w-full grid-cols-4">
      <TabsTrigger value="profile" className="flex items-center gap-2">
       <User className="h-4 w-4" />
       <span className="hidden sm:inline">Perfil</span>
      </TabsTrigger>
      <TabsTrigger value="settings" className="flex items-center gap-2">
       <Settings className="h-4 w-4" />
       <span className="hidden sm:inline">Config</span>
      </TabsTrigger>
      <TabsTrigger value="notifications" className="flex items-center gap-2">
       <Bell className="h-4 w-4" />
       <span className="hidden sm:inline">Notif</span>
      </TabsTrigger>
      <TabsTrigger value="security" className="flex items-center gap-2">
       <Shield className="h-4 w-4" />
       <span className="hidden sm:inline">Segur</span>
      </TabsTrigger>
     </TabsList>

     <TabsContent value="profile" className="mt-4">
      <Card>
       <CardHeader>
        <CardTitle>Informações do Perfil</CardTitle>
        <CardDescription>
         Gerencie suas informações pessoais
        </CardDescription>
       </CardHeader>
       <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
         <div className="space-y-2">
          <Label>Nome</Label>
          <Input defaultValue="João Silva" />
         </div>
         <div className="space-y-2">
          <Label>Email</Label>
          <Input defaultValue="joao@exemplo.com" />
         </div>
        </div>
       </CardContent>
      </Card>
     </TabsContent>

     <TabsContent value="settings" className="mt-4">
      <Card>
       <CardHeader>
        <CardTitle>Configurações</CardTitle>
        <CardDescription>
         Personalize sua experiência
        </CardDescription>
       </CardHeader>
       <CardContent>
        <p className="text-sm text-muted-foreground">
         Configurações da aplicação apareceriam aqui.
        </p>
       </CardContent>
      </Card>
     </TabsContent>

     <TabsContent value="notifications" className="mt-4">
      <Card>
       <CardHeader>
        <CardTitle>Notificações</CardTitle>
        <CardDescription>
         Configure como você quer ser notificado
        </CardDescription>
       </CardHeader>
       <CardContent>
        <p className="text-sm text-muted-foreground">
         Preferências de notificação apareceriam aqui.
        </p>
       </CardContent>
      </Card>
     </TabsContent>

     <TabsContent value="security" className="mt-4">
      <Card>
       <CardHeader>
        <CardTitle>Segurança</CardTitle>
        <CardDescription>
         Mantenha sua conta segura
        </CardDescription>
       </CardHeader>
       <CardContent>
        <p className="text-sm text-muted-foreground">
         Configurações de segurança apareceriam aqui.
        </p>
       </CardContent>
      </Card>
     </TabsContent>
    </Tabs>
   </ComponentPreview>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Dashboard Tabs</h2>

   <ComponentPreview
    title="Dashboard com Métricas"
    description="Tabs para dashboard com diferentes visualizações"
    code={`function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview" className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4" />
          Visão Geral
        </TabsTrigger>
        <TabsTrigger value="users" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Usuários
        </TabsTrigger>
        <TabsTrigger value="events" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Eventos
        </TabsTrigger>
        <TabsTrigger value="billing" className="flex items-center gap-2">
          <CreditCard className="h-4 w-4" />
          Faturamento
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total de Usuários
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">
                +12% em relação ao mês passado
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Receita
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 45.231</div>
              <p className="text-xs text-muted-foreground">
                +8% em relação ao mês passado
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Eventos
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">
                +3 novos esta semana
              </p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      <TabsContent value="users" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Usuários Recentes</CardTitle>
            <CardDescription>
              Lista dos usuários mais recentes da plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Usuário {i}</p>
                      <p className="text-xs text-muted-foreground">
                        usuario{i}@exemplo.com
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary">Ativo</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="events" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Próximos Eventos</CardTitle>
            <CardDescription>
              Eventos programados para os próximos dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Lista de eventos apareceria aqui.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="billing" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações de Faturamento</CardTitle>
            <CardDescription>
              Gerencie seu plano e métodos de pagamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Informações de faturamento apareceriam aqui.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}`}
   >
    <Tabs defaultValue="overview" className="w-full">
     <TabsList>
      <TabsTrigger value="overview" className="flex items-center gap-2">
       <BarChart3 className="h-4 w-4" />
       Visão Geral
      </TabsTrigger>
      <TabsTrigger value="users" className="flex items-center gap-2">
       <Users className="h-4 w-4" />
       Usuários
      </TabsTrigger>
      <TabsTrigger value="events" className="flex items-center gap-2">
       <Calendar className="h-4 w-4" />
       Eventos
      </TabsTrigger>
      <TabsTrigger value="billing" className="flex items-center gap-2">
       <CreditCard className="h-4 w-4" />
       Faturamento
      </TabsTrigger>
     </TabsList>

     <TabsContent value="overview" className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
         <CardTitle className="text-sm font-medium">
          Total de Usuários
         </CardTitle>
         <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
         <div className="text-2xl font-bold">2,847</div>
         <p className="text-xs text-muted-foreground">
          +12% em relação ao mês passado
         </p>
        </CardContent>
       </Card>

       <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
         <CardTitle className="text-sm font-medium">
          Receita
         </CardTitle>
         <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
         <div className="text-2xl font-bold">R$ 45.231</div>
         <p className="text-xs text-muted-foreground">
          +8% em relação ao mês passado
         </p>
        </CardContent>
       </Card>

       <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
         <CardTitle className="text-sm font-medium">
          Eventos
         </CardTitle>
         <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
         <div className="text-2xl font-bold">127</div>
         <p className="text-xs text-muted-foreground">
          +3 novos esta semana
         </p>
        </CardContent>
       </Card>
      </div>
     </TabsContent>

     <TabsContent value="users" className="mt-6">
      <Card>
       <CardHeader>
        <CardTitle>Usuários Recentes</CardTitle>
        <CardDescription>
         Lista dos usuários mais recentes da plataforma
        </CardDescription>
       </CardHeader>
       <CardContent>
        <div className="space-y-4">
         {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between">
           <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
             <User className="h-4 w-4" />
            </div>
            <div>
             <p className="text-sm font-medium">Usuário {i}</p>
             <p className="text-xs text-muted-foreground">
              usuario{i}@exemplo.com
             </p>
            </div>
           </div>
           <Badge variant="secondary">Ativo</Badge>
          </div>
         ))}
        </div>
       </CardContent>
      </Card>
     </TabsContent>

     <TabsContent value="events" className="mt-6">
      <Card>
       <CardHeader>
        <CardTitle>Próximos Eventos</CardTitle>
        <CardDescription>
         Eventos programados para os próximos dias
        </CardDescription>
       </CardHeader>
       <CardContent>
        <p className="text-sm text-muted-foreground">
         Lista de eventos apareceria aqui.
        </p>
       </CardContent>
      </Card>
     </TabsContent>

     <TabsContent value="billing" className="mt-6">
      <Card>
       <CardHeader>
        <CardTitle>Informações de Faturamento</CardTitle>
        <CardDescription>
         Gerencie seu plano e métodos de pagamento
        </CardDescription>
       </CardHeader>
       <CardContent>
        <p className="text-sm text-muted-foreground">
         Informações de faturamento apareceriam aqui.
        </p>
       </CardContent>
      </Card>
     </TabsContent>
    </Tabs>
   </ComponentPreview>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Implementação</h2>

   <CodeBlock language="tsx" filename="components/ui/tabs.tsx">
    {`"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }`}
   </CodeBlock>

   <Dica>
    Use <code>grid w-full grid-cols-{n}</code> no TabsList para tabs de largura igual.
    Para tabs responsivas, esconda texto em telas pequenas com <code>hidden sm:inline</code>.
   </Dica>

   <h2 className="text-2xl font-semibold mb-6 mt-8">Boas Práticas</h2>

   <div className="space-y-4">
    <div className="p-4 border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950 rounded-lg">
     <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Faça</h3>
     <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
      <li>• Use ícones para melhor identificação das tabs</li>
      <li>• Mantenha labels de tabs concisos e descritivos</li>
      <li>• Agrupe conteúdo relacionado logicamente</li>
      <li>• Use defaultValue para definir tab inicial</li>
      <li>• Implemente lazy loading para conteúdo pesado</li>
     </ul>
    </div>

    <div className="p-4 border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950 rounded-lg">
     <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Evite</h3>
     <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
      <li>• Muitas tabs (máximo 5-7 para boa UX)</li>
      <li>• Tabs aninhadas (use navegação hierárquica)</li>
      <li>• Conteúdo não relacionado na mesma tab</li>
      <li>• Labels muito longos que quebram o layout</li>
      <li>• Esquecer de indicar a tab ativa visualmente</li>
     </ul>
    </div>
   </div>
  </div>
 )
}
