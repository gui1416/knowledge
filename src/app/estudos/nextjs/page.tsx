import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight, Target, Server, Globe, Zap, Layers, Users } from "lucide-react"
import Link from "next/link"

const keyFeatures = [
 {
  title: "Full-Stack Framework",
  description: "Frontend e backend em uma única aplicação com API routes integradas",
  icon: Layers,
 },
 {
  title: "Server-Side Rendering",
  description: "Renderização no servidor para melhor SEO e performance inicial",
  icon: Server,
 },
 {
  title: "Static Site Generation",
  description: "Gere sites estáticos ultra-rápidos com conteúdo dinâmico",
  icon: Zap,
 },
 {
  title: "Otimizações Automáticas",
  description: "Code splitting, otimização de imagens e fonts automáticas",
  icon: Target,
 },
]

const renderingMethods = [
 {
  name: "Static Site Generation (SSG)",
  description: "Páginas geradas em build time",
  useCase: "Blogs, documentação, landing pages",
  performance: "Excelente",
 },
 {
  name: "Server-Side Rendering (SSR)",
  description: "Páginas renderizadas a cada request",
  useCase: "E-commerce, dashboards, conteúdo personalizado",
  performance: "Boa",
 },
 {
  name: "Incremental Static Regeneration (ISR)",
  description: "Combina SSG com atualizações dinâmicas",
  useCase: "Sites com conteúdo que muda frequentemente",
  performance: "Excelente",
 },
 {
  name: "Client-Side Rendering (CSR)",
  description: "Renderização tradicional no cliente",
  useCase: "SPAs, dashboards privados",
  performance: "Variável",
 },
]

const companies = [
 "Vercel",
 "Netflix",
 "TikTok",
 "Twitch",
 "Hulu",
 "Nike",
 "McDonald's",
 "Binance",
 "Notion",
 "Loom",
 "Hashnode",
 "Auth0",
]

export default function NextJSPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-6xl">

   <div className="mb-8">
    <div className="flex items-center gap-3 mb-4">
     <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900">
      <Globe className="h-6 w-6 text-gray-600 dark:text-gray-400" />
     </div>
     <h1 className="text-3xl font-bold">Next.js</h1>
     <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">React Framework</Badge>
    </div>
    <p className="text-lg text-muted-foreground max-w-3xl">
     O framework React para produção. Next.js oferece a melhor experiência de desenvolvimento com todas as
     funcionalidades necessárias para aplicações modernas: renderização híbrida, TypeScript, bundling inteligente e
     muito mais.
    </p>
   </div>

   <div className="grid md:grid-cols-3 gap-6 mb-8">
    <Card>
     <CardHeader className="pb-3">
      <div className="flex items-center gap-2">
       <Users className="h-5 w-5 text-gray-600" />
       <CardTitle className="text-lg">Popularidade</CardTitle>
      </div>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold text-gray-600 mb-1">120k+</div>
      <p className="text-sm text-muted-foreground">Stars no GitHub</p>
     </CardContent>
    </Card>

    <Card>
     <CardHeader className="pb-3">
      <div className="flex items-center gap-2">
       <Globe className="h-5 w-5 text-blue-600" />
       <CardTitle className="text-lg">Adoção</CardTitle>
      </div>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold text-blue-600 mb-1">5M+</div>
      <p className="text-sm text-muted-foreground">Downloads semanais no NPM</p>
     </CardContent>
    </Card>

    <Card>
     <CardHeader className="pb-3">
      <div className="flex items-center gap-2">
       <Clock className="h-5 w-5 text-green-600" />
       <CardTitle className="text-lg">Lançamento</CardTitle>
      </div>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold text-green-600 mb-1">2016</div>
      <p className="text-sm text-muted-foreground">Criado pela Vercel</p>
     </CardContent>
    </Card>
   </div>

   <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-6">Características Principais</h2>
    <div className="grid md:grid-cols-2 gap-6">
     {keyFeatures.map((feature) => (
      <Card key={feature.title} className="hover:shadow-md transition-shadow">
       <CardContent className="p-6">
        <div className="flex items-start gap-4">
         <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900">
          <feature.icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
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
    <h2 className="text-2xl font-semibold mb-6">Métodos de Renderização</h2>
    <div className="grid gap-4">
     {renderingMethods.map((method) => (
      <Card key={method.name} className="hover:shadow-md transition-shadow">
       <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
         <h3 className="font-semibold">{method.name}</h3>
         <Badge variant="outline">{method.performance}</Badge>
        </div>
        <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
        <div className="flex items-center gap-2">
         <span className="text-xs font-medium text-muted-foreground">Ideal para:</span>
         <span className="text-xs">{method.useCase}</span>
        </div>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>

   <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-6">Empresas que Usam Next.js</h2>
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
    <h2 className="text-2xl font-semibold mb-6">Por que Next.js?</h2>
    <div className="grid md:grid-cols-2 gap-6">
     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Vantagens</CardTitle>
      </CardHeader>
      <CardContent>
       <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-green-500 rounded-full"></div>
         Zero configuração inicial
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-green-500 rounded-full"></div>
         Otimizações automáticas
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-green-500 rounded-full"></div>
         Múltiplas estratégias de renderização
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-green-500 rounded-full"></div>
         TypeScript nativo
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-green-500 rounded-full"></div>
         Deploy simples na Vercel
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
         <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
         E-commerce e marketplaces
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
         Blogs e sites de conteúdo
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
         Dashboards corporativos
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
         Landing pages de alta conversão
        </li>
        <li className="flex items-center gap-2">
         <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
         Aplicações full-stack
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
       <CardTitle className="text-lg">App Router</CardTitle>
       <CardDescription>Sistema de roteamento moderno do Next.js 13+</CardDescription>
      </CardHeader>
      <CardContent>
       <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
         <Badge variant="outline">Intermediário</Badge>
         <span className="text-sm text-muted-foreground">12 min</span>
        </div>
        <Button size="sm" asChild>
         <Link href="/estudos/nextjs/app-router">
          Estudar
          <ArrowRight className="ml-2 h-4 w-4" />
         </Link>
        </Button>
       </div>
      </CardContent>
     </Card>

     <Card className="hover:shadow-md transition-shadow opacity-60">
      <CardHeader>
       <CardTitle className="text-lg">Server Components</CardTitle>
       <CardDescription>Componentes que executam no servidor</CardDescription>
      </CardHeader>
      <CardContent>
       <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
         <Badge variant="outline">Avançado</Badge>
         <span className="text-sm text-muted-foreground">15 min</span>
        </div>
        <Button size="sm" variant="outline" disabled>
         Em Breve
        </Button>
       </div>
      </CardContent>
     </Card>
    </div>
   </section>
  </div>
 )
}
