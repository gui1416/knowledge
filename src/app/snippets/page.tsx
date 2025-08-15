import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Copy, Star, TrendingUp, ArrowRight } from 'lucide-react'
import Link from "next/link"

const categories = [
 {
  title: "Hooks Personalizados",
  description: "Hooks React reutilizáveis para casos comuns",
  count: 12,
  color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  url: "/snippets/hooks",
  examples: ["useDebounce", "useLocalStorage", "useApi", "useToggle"]
 },
 {
  title: "Utilitários",
  description: "Funções auxiliares para desenvolvimento",
  count: 18,
  color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  url: "/snippets/utilitarios",
  examples: ["formatDate", "debounce", "throttle", "deepClone"]
 },
 {
  title: "Componentes",
  description: "Componentes React prontos para uso",
  count: 15,
  color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  url: "/snippets/componentes",
  examples: ["Modal", "DataTable", "FormBuilder", "Toast"]
 },
 {
  title: "Validações",
  description: "Schemas e validadores para formulários",
  count: 8,
  color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  url: "/snippets/validacoes",
  examples: ["emailSchema", "passwordValidator", "cpfValidator", "phoneValidator"]
 },
 {
  title: "API Helpers",
  description: "Funções para trabalhar com APIs",
  count: 10,
  color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  url: "/snippets/api",
  examples: ["apiClient", "errorHandler", "retryLogic", "cacheManager"]
 },
 {
  title: "Styling",
  description: "Utilitários para CSS e estilização",
  count: 6,
  color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  url: "/snippets/styling",
  examples: ["cn", "variants", "animations", "responsive"]
 }
]

const popularSnippets = [
 {
  title: "useDebounce Hook",
  category: "Hooks",
  description: "Hook para debounce de valores e funções",
  language: "TypeScript",
  lines: 25,
  copies: 156,
  url: "/snippets/hooks/use-debounce",
  featured: true
 },
 {
  title: "API Client",
  category: "Utilitários",
  description: "Cliente HTTP configurado com interceptors",
  language: "TypeScript",
  lines: 45,
  copies: 89,
  url: "/snippets/utilitarios/api-client",
  featured: true
 },
 {
  title: "Modal Component",
  category: "Componentes",
  description: "Modal reutilizável com portal e animações",
  language: "React",
  lines: 67,
  copies: 134,
  url: "/snippets/componentes/modal",
  featured: false
 },
 {
  title: "Form Validator",
  category: "Validações",
  description: "Validador de formulários com Zod",
  language: "TypeScript",
  lines: 32,
  copies: 78,
  url: "/snippets/validacoes/form-validator",
  featured: false
 }
]

export default function SnippetsPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-6xl">
   {/* Header */}
   <div className="mb-8">
    <div className="flex items-center gap-3 mb-4">
     <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
      <Code2 className="h-6 w-6 text-green-600 dark:text-green-400" />
     </div>
     <h1 className="text-3xl font-bold">Snippets</h1>
    </div>
    <p className="text-lg text-muted-foreground max-w-2xl">
     Coleção de códigos reutilizáveis, hooks personalizados e componentes prontos para acelerar o desenvolvimento.
    </p>
   </div>

   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-green-600">69</div>
      <div className="text-sm text-muted-foreground">Total Snippets</div>
     </CardContent>
    </Card>
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-blue-600">6</div>
      <div className="text-sm text-muted-foreground">Categorias</div>
     </CardContent>
    </Card>
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-purple-600">1.2k</div>
      <div className="text-sm text-muted-foreground">Total Copies</div>
     </CardContent>
    </Card>
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-orange-600">12</div>
      <div className="text-sm text-muted-foreground">Adicionados</div>
     </CardContent>
    </Card>
   </div>

   <section className="mb-12">
    <div className="flex items-center gap-2 mb-6">
     <TrendingUp className="h-5 w-5 text-green-600" />
     <h2 className="text-2xl font-semibold">Snippets Populares</h2>
    </div>
    <div className="grid gap-4">
     {popularSnippets.map((snippet) => (
      <Card key={snippet.url} className="hover:shadow-md transition-shadow">
       <CardContent className="p-6">
        <div className="flex items-start gap-4">
         <div className="p-2 rounded-lg bg-muted">
          <Code2 className="h-5 w-5" />
         </div>
         <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
           <Badge variant="secondary">{snippet.category}</Badge>
           <Badge variant="outline">{snippet.language}</Badge>
           {snippet.featured && (
            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
             <Star className="mr-1 h-3 w-3" />
             Popular
            </Badge>
           )}
          </div>
          <h3 className="font-semibold mb-1">
           <Link href={snippet.url} className="hover:underline">
            {snippet.title}
           </Link>
          </h3>
          <p className="text-muted-foreground text-sm mb-2">{snippet.description}</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
           <span>{snippet.lines} linhas</span>
           <div className="flex items-center gap-1">
            <Copy className="h-3 w-3" />
            {snippet.copies} copies
           </div>
          </div>
         </div>
         <Button variant="ghost" size="sm" asChild>
          <Link href={snippet.url}>
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
          {category.count} snippets
         </div>
        </div>
        <CardTitle className="text-lg">{category.title}</CardTitle>
        <CardDescription>{category.description}</CardDescription>
       </CardHeader>
       <CardContent>
        <div className="space-y-3">
         <div className="flex flex-wrap gap-1">
          {category.examples.map((example) => (
           <Badge key={example} variant="outline" className="text-xs">
            {example}
           </Badge>
          ))}
         </div>
         <Button className="w-full" asChild>
          <Link href={category.url}>
           Ver {category.title} <ArrowRight className="ml-2 h-4 w-4" />
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
