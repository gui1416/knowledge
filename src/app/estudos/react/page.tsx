import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight, Atom, Target, Layers, Users, Zap, Component } from "lucide-react"
import Link from "next/link"

const coreFeatures = [
 {
  title: "Component-Based",
  description: "Construa interfaces encapsulando lógica e estado em componentes reutilizáveis",
  icon: Component,
 },
 {
  title: "Virtual DOM",
  description: "Otimização automática de performance através de um DOM virtual eficiente",
  icon: Zap,
 },
 {
  title: "Unidirectional Data Flow",
  description: "Fluxo de dados previsível que facilita debugging e manutenção",
  icon: Target,
 },
 {
  title: "Learn Once, Write Anywhere",
  description: "Use React para web, mobile (React Native) e até realidade virtual",
  icon: Layers,
 },
]

const ecosystem = [
 { name: "React Router", description: "Roteamento para SPAs", category: "Routing" },
 { name: "Redux/Zustand", description: "Gerenciamento de estado", category: "State" },
 { name: "Next.js", description: "Framework full-stack", category: "Framework" },
 { name: "React Native", description: "Desenvolvimento mobile", category: "Mobile" },
 { name: "Styled Components", description: "CSS-in-JS", category: "Styling" },
 { name: "React Testing Library", description: "Testes de componentes", category: "Testing" },
]

const companies = [
 "Facebook",
 "Netflix",
 "Airbnb",
 "Uber",
 "WhatsApp",
 "Instagram",
 "Dropbox",
 "Atlassian",
 "PayPal",
 "Tesla",
 "Discord",
 "Shopify",
]

export default function ReactPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-6xl">

   <div className="mb-8">
    <div className="flex items-center gap-3 mb-4">
     <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
      <Atom className="h-6 w-6 text-blue-600 dark:text-blue-400" />
     </div>
     <h1 className="text-3xl font-bold">React</h1>
     <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Biblioteca JavaScript</Badge>
    </div>
    <p className="text-lg text-muted-foreground max-w-3xl">
     Uma biblioteca JavaScript para construir interfaces de usuário, criada pelo Facebook. React revolucionou o
     desenvolvimento frontend com sua abordagem declarativa e baseada em componentes.
    </p>
   </div>

   <div className="grid md:grid-cols-3 gap-6 mb-8">
    <Card>
     <CardHeader className="pb-3">
      <div className="flex items-center gap-2">
       <Users className="h-5 w-5 text-blue-600" />
       <CardTitle className="text-lg">Adoção</CardTitle>
      </div>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold text-blue-600 mb-1">220k+</div>
      <p className="text-sm text-muted-foreground">Stars no GitHub</p>
     </CardContent>
    </Card>

    <Card>
     <CardHeader className="pb-3">
      <div className="flex items-center gap-2">
       <Target className="h-5 w-5 text-green-600" />
       <CardTitle className="text-lg">Mercado</CardTitle>
      </div>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold text-green-600 mb-1">40%+</div>
      <p className="text-sm text-muted-foreground">Share no desenvolvimento web</p>
     </CardContent>
    </Card>

    <Card>
     <CardHeader className="pb-3">
      <div className="flex items-center gap-2">
       <Clock className="h-5 w-5 text-purple-600" />
       <CardTitle className="text-lg">Lançamento</CardTitle>
      </div>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold text-purple-600 mb-1">2013</div>
      <p className="text-sm text-muted-foreground">Open source pelo Facebook</p>
     </CardContent>
    </Card>
   </div>

   <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-6">Características Principais</h2>
    <div className="grid md:grid-cols-2 gap-6">
     {coreFeatures.map((feature) => (
      <Card key={feature.title} className="hover:shadow-md transition-shadow">
       <CardContent className="p-6">
        <div className="flex items-start gap-4">
         <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
          <feature.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
         </div>
         <div>
          <h3 className="font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground text-sm">{feature.description}</p>
         </div>
        </div>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>

   <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-6">Ecossistema React</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
     {ecosystem.map((tool) => (
      <Card key={tool.name} className="hover:shadow-md transition-shadow">
       <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
         <h3 className="font-semibold">{tool.name}</h3>
         <Badge variant="outline" className="text-xs">
          {tool.category}
         </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{tool.description}</p>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>

   <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-6">Empresas que Usam React</h2>
    <Card>
     <CardContent className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       {companies.map((company) => (
        <div
         key={company}
         className="flex items-center justify-center p-3 rounded-lg border bg-gray-50 dark:bg-gray-900 hover:shadow-md transition-shadow"
        >
         <span className="font-medium text-sm">{company}</span>
        </div>
       ))}
      </div>
     </CardContent>
    </Card>
   </section>

   <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-6">Por que React?</h2>
    <div className="grid md:grid-cols-2 gap-6">
     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Vantagens</CardTitle>
      </CardHeader>
      <CardContent>
       <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-green-500 rounded-full"></div>
         Curva de aprendizado suave
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-green-500 rounded-full"></div>
         Comunidade ativa e grande
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-green-500 rounded-full"></div>
         Ecossistema rico de ferramentas
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-green-500 rounded-full"></div>
         Performance otimizada
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-green-500 rounded-full"></div>
         Flexibilidade e reutilização
        </li>
       </ul>
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Casos de Uso Ideais</CardTitle>
      </CardHeader>
      <CardContent>
       <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
         Single Page Applications (SPAs)
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
         Dashboards e painéis admin
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
         E-commerce e marketplaces
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
         Aplicações com estado complexo
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
         Interfaces interativas e dinâmicas
        </li>
       </ul>
      </CardContent>
     </Card>
    </div>
   </section>

   <section>
    <div className="flex items-center justify-between mb-6">
     <h2 className="text-2xl font-semibold">Explore os Estudos</h2>
     <Button variant="outline" asChild>
      <Link href="/estudos">
       Ver Todos os Estudos
       <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
     </Button>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
     <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg">Hooks Avançados</CardTitle>
       <CardDescription>useCallback, useMemo, useRef e hooks customizados</CardDescription>
      </CardHeader>
      <CardContent>
       <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
         <Badge variant="outline">Avançado</Badge>
         <span className="text-sm text-muted-foreground">15 min</span>
        </div>
        <Button size="sm" asChild>
         <Link href="/estudos/react/hooks-avancados">
          Estudar
          <ArrowRight className="ml-2 h-4 w-4" />
         </Link>
        </Button>
       </div>
      </CardContent>
     </Card>

     <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg">Context API</CardTitle>
       <CardDescription>Gerenciamento de estado global com Context</CardDescription>
      </CardHeader>
      <CardContent>
       <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
         <Badge variant="outline">Intermediário</Badge>
         <span className="text-sm text-muted-foreground">10 min</span>
        </div>
        <Button size="sm" asChild>
         <Link href="/estudos/react/context-api">
          Estudar
          <ArrowRight className="ml-2 h-4 w-4" />
         </Link>
        </Button>
       </div>
      </CardContent>
     </Card>
    </div>
   </section>
  </div>
 )
}
