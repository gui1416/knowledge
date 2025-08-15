import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, ArrowRight, Star, TrendingUp } from 'lucide-react'
import Link from "next/link"

const categories = [
 {
  title: "JavaScript",
  description: "Conceitos fundamentais e avançados da linguagem",
  count: 8,
  color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  url: "/estudos/javascript",
  topics: ["Promises", "Closures", "Event Loop", "Prototypes"]
 },
 {
  title: "React",
  description: "Hooks, patterns e boas práticas",
  count: 12,
  color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  url: "/estudos/react",
  topics: ["Hooks Avançados", "Context API", "Performance", "Testing"]
 },
 {
  title: "Next.js",
  description: "Framework full-stack para React",
  count: 6,
  color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  url: "/estudos/nextjs",
  topics: ["App Router", "Server Components", "Middleware", "API Routes"]
 },
 {
  title: "TypeScript",
  description: "Tipagem estática para JavaScript",
  count: 5,
  color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  url: "/estudos/typescript",
  topics: ["Types Avançados", "Generics", "Decorators", "Utility Types"]
 },
 {
  title: "Node.js",
  description: "JavaScript no servidor",
  count: 4,
  color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  url: "/estudos/nodejs",
  topics: ["Express", "APIs", "Streams", "Performance"]
 },
 {
  title: "CSS & Design",
  description: "Estilização e design systems",
  count: 7,
  color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  url: "/estudos/css",
  topics: ["Flexbox", "Grid", "Animations", "Responsive Design"]
 }
]

const recentStudies = [
 {
  title: "Promises e Async/Await",
  category: "JavaScript",
  description: "Programação assíncrona em JavaScript",
  date: "2024-01-15",
  readTime: "8 min",
  url: "/estudos/javascript/promises",
  featured: true
 },
 {
  title: "useCallback vs useMemo",
  category: "React",
  description: "Otimização de performance em React",
  date: "2024-01-12",
  readTime: "6 min",
  url: "/estudos/react/callback-vs-memo",
  featured: false
 },
 {
  title: "Server Components Deep Dive",
  category: "Next.js",
  description: "Entendendo Server Components no Next.js 13+",
  date: "2024-01-10",
  readTime: "12 min",
  url: "/estudos/nextjs/server-components-deep-dive",
  featured: true
 },
 {
  title: "Advanced TypeScript Patterns",
  category: "TypeScript",
  description: "Padrões avançados de tipagem",
  date: "2024-01-08",
  readTime: "10 min",
  url: "/estudos/typescript/advanced-patterns",
  featured: false
 }
]

export default function EstudosPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-6xl">

   <div className="mb-8">
    <div className="flex items-center gap-3 mb-4">
     <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
      <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
     </div>
     <h1 className="text-3xl font-bold">Estudos</h1>
    </div>
    <p className="text-lg text-muted-foreground max-w-2xl">
     Documentação dos meus aprendizados em desenvolvimento web, desde conceitos básicos até tópicos avançados.
    </p>
   </div>

   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-blue-600">42</div>
      <div className="text-sm text-muted-foreground">Total de Estudos</div>
     </CardContent>
    </Card>
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-green-600">6</div>
      <div className="text-sm text-muted-foreground">Categorias</div>
     </CardContent>
    </Card>
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-purple-600">120+</div>
      <div className="text-sm text-muted-foreground">Horas de Estudo</div>
     </CardContent>
    </Card>
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-orange-600">15</div>
      <div className="text-sm text-muted-foreground">Este Mês</div>
     </CardContent>
    </Card>
   </div>

   <section className="mb-12">
    <div className="flex items-center gap-2 mb-6">
     <TrendingUp className="h-5 w-5 text-green-600" />
     <h2 className="text-2xl font-semibold">Estudos Recentes</h2>
    </div>
    <div className="grid gap-4">
     {recentStudies.map((study) => (
      <Card key={study.url} className="hover:shadow-md transition-shadow">
       <CardContent className="p-6">
        <div className="flex items-start gap-4">
         <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
           <Badge variant="secondary">{study.category}</Badge>
           {study.featured && (
            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
             <Star className="mr-1 h-3 w-3" />
             Destaque
            </Badge>
           )}
           <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            {study.readTime}
           </div>
          </div>
          <h3 className="font-semibold mb-1">
           <Link href={study.url} className="hover:underline">
            {study.title}
           </Link>
          </h3>
          <p className="text-muted-foreground text-sm mb-2">{study.description}</p>
          <p className="text-xs text-muted-foreground">
           {new Date(study.date).toLocaleDateString('pt-BR')}
          </p>
         </div>
         <Button variant="ghost" size="sm" asChild>
          <Link href={study.url}>
           <ArrowRight className="h-4 w-4" />
          </Link>
         </Button>
        </div>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>

   <section>
    <h2 className="text-2xl font-semibold mb-6">Categorias</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
     {categories.map((category) => (
      <Card key={category.url} className="hover:shadow-md transition-shadow">
       <CardHeader>
        <div className="flex items-center justify-between mb-2">
         <div className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
          {category.count} estudos
         </div>
        </div>
        <CardTitle className="text-lg">{category.title}</CardTitle>
        <CardDescription>{category.description}</CardDescription>
       </CardHeader>
       <CardContent>
        <div className="space-y-3">
         <div className="flex flex-wrap gap-1">
          {category.topics.map((topic) => (
           <Badge key={topic} variant="outline" className="text-xs">
            {topic}
           </Badge>
          ))}
         </div>
         <Button className="w-full" asChild>
          <Link href={category.url}>
           Explorar {category.title} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
         </Button>
        </div>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>
  </div>
 )
}
