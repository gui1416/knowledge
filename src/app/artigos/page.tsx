import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Clock, ArrowRight, Star, TrendingUp, Eye, MessageCircle } from 'lucide-react'
import Link from "next/link"

const categories = [
 {
  title: "Arquitetura",
  description: "Padrões e estruturas de código",
  count: 8,
  color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  url: "/artigos/arquitetura"
 },
 {
  title: "Performance",
  description: "Otimização e boas práticas",
  count: 6,
  color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  url: "/artigos/performance"
 },
 {
  title: "Clean Code",
  description: "Código limpo e manutenível",
  count: 5,
  color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  url: "/artigos/clean-code"
 },
 {
  title: "Testing",
  description: "Testes e qualidade de software",
  count: 4,
  color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  url: "/artigos/testing"
 }
]

const featuredArticles = [
 {
  title: "Arquitetura Frontend Moderna",
  description: "Como estruturar aplicações React escaláveis com padrões modernos",
  category: "Arquitetura",
  readTime: "15 min",
  publishDate: "2024-01-15",
  views: 1250,
  comments: 23,
  url: "/artigos/arquitetura-frontend-moderna",
  featured: true,
  tags: ["React", "Architecture", "Scalability"]
 },
 {
  title: "Performance em React: Guia Completo",
  description: "Técnicas avançadas para otimizar aplicações React em produção",
  category: "Performance",
  readTime: "12 min",
  publishDate: "2024-01-10",
  views: 890,
  comments: 15,
  url: "/artigos/performance-react-guia",
  featured: true,
  tags: ["React", "Performance", "Optimization"]
 },
 {
  title: "Clean Code em JavaScript",
  description: "Princípios e práticas para escrever código JavaScript limpo e legível",
  category: "Clean Code",
  readTime: "10 min",
  publishDate: "2024-01-05",
  views: 670,
  comments: 12,
  url: "/artigos/clean-code-javascript",
  featured: false,
  tags: ["JavaScript", "Clean Code", "Best Practices"]
 },
 {
  title: "Testing Strategy para Frontend",
  description: "Como implementar uma estratégia de testes eficaz em aplicações frontend",
  category: "Testing",
  readTime: "18 min",
  publishDate: "2024-01-01",
  views: 540,
  comments: 8,
  url: "/artigos/testing-strategy-frontend",
  featured: false,
  tags: ["Testing", "Jest", "React Testing Library"]
 }
]

const recentArticles = [
 {
  title: "Micro Frontends: Prós e Contras",
  description: "Análise detalhada da arquitetura de micro frontends",
  category: "Arquitetura",
  readTime: "8 min",
  publishDate: "2024-01-20",
  url: "/artigos/micro-frontends-pros-contras"
 },
 {
  title: "Web Vitals e SEO",
  description: "Como Core Web Vitals impactam o SEO do seu site",
  category: "Performance",
  readTime: "6 min",
  publishDate: "2024-01-18",
  url: "/artigos/web-vitals-seo"
 },
 {
  title: "Refactoring Legacy Code",
  description: "Estratégias para refatorar código legado com segurança",
  category: "Clean Code",
  readTime: "14 min",
  publishDate: "2024-01-16",
  url: "/artigos/refactoring-legacy-code"
 }
]

export default function ArtigosPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-6xl">

   <div className="mb-8">
    <div className="flex items-center gap-3 mb-4">
     <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
      <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
     </div>
     <h1 className="text-3xl font-bold">Artigos</h1>
    </div>
    <p className="text-lg text-muted-foreground max-w-2xl">
     Artigos técnicos aprofundados sobre desenvolvimento web, arquitetura de software e boas práticas.
    </p>
   </div>

   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-purple-600">23</div>
      <div className="text-sm text-muted-foreground">Artigos</div>
     </CardContent>
    </Card>
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-blue-600">4</div>
      <div className="text-sm text-muted-foreground">Categorias</div>
     </CardContent>
    </Card>
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-green-600">5.2k</div>
      <div className="text-sm text-muted-foreground">Visualizações</div>
     </CardContent>
    </Card>
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-orange-600">127</div>
      <div className="text-sm text-muted-foreground">Comentários</div>
     </CardContent>
    </Card>
   </div>

   <section className="mb-12">
    <div className="flex items-center gap-2 mb-6">
     <Star className="h-5 w-5 text-yellow-500" />
     <h2 className="text-2xl font-semibold">Artigos em Destaque</h2>
    </div>
    <div className="grid gap-6">
     {featuredArticles.map((article) => (
      <Card key={article.url} className="hover:shadow-md transition-shadow">
       <CardContent className="p-6">
        <div className="flex items-start gap-4">
         <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
           <Badge variant="secondary">{article.category}</Badge>
           {article.featured && (
            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
             <Star className="mr-1 h-3 w-3" />
             Destaque
            </Badge>
           )}
           <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            {article.readTime}
           </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">
           <Link href={article.url} className="hover:underline">
            {article.title}
           </Link>
          </h3>
          <p className="text-muted-foreground mb-3">{article.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
           <span>{new Date(article.publishDate).toLocaleDateString('pt-BR')}</span>
           <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {article.views}
           </div>
           <div className="flex items-center gap-1">
            <MessageCircle className="h-3 w-3" />
            {article.comments}
           </div>
          </div>
          <div className="flex flex-wrap gap-1">
           {article.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
             {tag}
            </Badge>
           ))}
          </div>
         </div>
         <Button variant="ghost" size="sm" asChild>
          <Link href={article.url}>
           <ArrowRight className="h-4 w-4" />
          </Link>
         </Button>
        </div>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>

   <section className="mb-12">
    <div className="flex items-center gap-2 mb-6">
     <TrendingUp className="h-5 w-5 text-green-600" />
     <h2 className="text-2xl font-semibold">Artigos Recentes</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
     {recentArticles.map((article) => (
      <Card key={article.url} className="hover:shadow-md transition-shadow">
       <CardHeader>
        <div className="flex items-center gap-2 mb-2">
         <Badge variant="secondary">{article.category}</Badge>
         <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-1 h-3 w-3" />
          {article.readTime}
         </div>
        </div>
        <CardTitle className="text-lg">
         <Link href={article.url} className="hover:underline">
          {article.title}
         </Link>
        </CardTitle>
        <CardDescription>{article.description}</CardDescription>
       </CardHeader>
       <CardContent>
        <div className="flex items-center justify-between">
         <span className="text-sm text-muted-foreground">
          {new Date(article.publishDate).toLocaleDateString('pt-BR')}
         </span>
         <Button variant="outline" size="sm" asChild>
          <Link href={article.url}>
           Ler <ArrowRight className="ml-2 h-3 w-3" />
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
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
     {categories.map((category) => (
      <Card key={category.url} className="hover:shadow-md transition-shadow">
       <CardHeader>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${category.color} w-fit mb-2`}>
         {category.count} artigos
        </div>
        <CardTitle className="text-lg">{category.title}</CardTitle>
        <CardDescription>{category.description}</CardDescription>
       </CardHeader>
       <CardContent>
        <Button className="w-full" asChild>
         <Link href={category.url}>
          Explorar <ArrowRight className="ml-2 h-4 w-4" />
         </Link>
        </Button>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>
  </div>
 )
}
