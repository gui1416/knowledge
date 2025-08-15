import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lightbulb, Clock, ArrowRight, Heart, TrendingUp, Calendar } from 'lucide-react'
import Link from "next/link"

const categories = [
 {
  title: "Carreira",
  description: "Reflexões sobre desenvolvimento profissional",
  count: 12,
  color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  url: "/reflexoes/carreira"
 },
 {
  title: "Aprendizado",
  description: "Sobre o processo de aprender programação",
  count: 8,
  color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  url: "/reflexoes/aprendizado"
 },
 {
  title: "Produtividade",
  description: "Dicas e métodos para ser mais produtivo",
  count: 6,
  color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  url: "/reflexoes/produtividade"
 },
 {
  title: "Tecnologia",
  description: "Pensamentos sobre o futuro da tech",
  count: 5,
  color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  url: "/reflexoes/tecnologia"
 }
]

const featuredReflections = [
 {
  title: "O que aprendi em 5 anos como desenvolvedor",
  description: "Reflexões sobre a jornada de crescimento profissional e pessoal na área de tecnologia",
  category: "Carreira",
  readTime: "8 min",
  publishDate: "2024-01-15",
  mood: "Reflexivo",
  url: "/reflexoes/cinco-anos-desenvolvedor",
  featured: true,
  tags: ["Carreira", "Crescimento", "Experiência"]
 },
 {
  title: "A síndrome do impostor no desenvolvimento",
  description: "Como lidar com a sensação de não ser bom o suficiente e transformá-la em motivação",
  category: "Carreira",
  readTime: "6 min",
  publishDate: "2024-01-12",
  mood: "Motivacional",
  url: "/reflexoes/sindrome-impostor",
  featured: true,
  tags: ["Psicologia", "Autoconfiança", "Desenvolvimento Pessoal"]
 },
 {
  title: "Por que documentar é um ato de amor",
  description: "A importância da documentação não apenas para outros, mas para o seu eu do futuro",
  category: "Produtividade",
  readTime: "5 min",
  publishDate: "2024-01-10",
  mood: "Inspirador",
  url: "/reflexoes/documentar-ato-amor",
  featured: false,
  tags: ["Documentação", "Colaboração", "Futuro"]
 },
 {
  title: "Aprendendo a aprender programação",
  description: "Métodos e estratégias que descobri para acelerar o aprendizado de novas tecnologias",
  category: "Aprendizado",
  readTime: "10 min",
  publishDate: "2024-01-08",
  mood: "Educativo",
  url: "/reflexoes/aprendendo-aprender",
  featured: false,
  tags: ["Aprendizado", "Métodos", "Eficiência"]
 }
]

const recentReflections = [
 {
  title: "O burnout silencioso do desenvolvedor",
  description: "Sinais que ignoramos e como prevenir o esgotamento",
  category: "Carreira",
  readTime: "7 min",
  publishDate: "2024-01-20",
  url: "/reflexoes/burnout-silencioso"
 },
 {
  title: "Menos é mais: o minimalismo no código",
  description: "Como a simplicidade pode tornar seu código mais poderoso",
  category: "Produtividade",
  readTime: "5 min",
  publishDate: "2024-01-18",
  url: "/reflexoes/minimalismo-codigo"
 },
 {
  title: "A arte de fazer perguntas certas",
  description: "Como perguntar de forma eficaz pode acelerar seu aprendizado",
  category: "Aprendizado",
  readTime: "6 min",
  publishDate: "2024-01-16",
  url: "/reflexoes/arte-perguntas-certas"
 }
]

const moodColors = {
 "Reflexivo": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
 "Motivacional": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
 "Inspirador": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
 "Educativo": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
}

export default function ReflexoesPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-6xl">
   <div className="mb-8">
    <div className="flex items-center gap-3 mb-4">
     <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
      <Lightbulb className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
     </div>
     <h1 className="text-3xl font-bold">Reflexões</h1>
    </div>
    <p className="text-lg text-muted-foreground max-w-2xl">
     Pensamentos, aprendizados e insights sobre desenvolvimento, carreira e vida como programador.
    </p>
   </div>

   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-yellow-600">31</div>
      <div className="text-sm text-muted-foreground">Reflexões</div>
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
      <div className="text-2xl font-bold text-green-600">2.8k</div>
      <div className="text-sm text-muted-foreground">Leituras</div>
     </CardContent>
    </Card>
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-purple-600">89</div>
      <div className="text-sm text-muted-foreground">Curtidas</div>
     </CardContent>
    </Card>
   </div>

   <section className="mb-12">
    <div className="flex items-center gap-2 mb-6">
     <Heart className="h-5 w-5 text-red-500" />
     <h2 className="text-2xl font-semibold">Reflexões em Destaque</h2>
    </div>
    <div className="grid gap-6">
     {featuredReflections.map((reflection) => (
      <Card key={reflection.url} className="hover:shadow-md transition-shadow">
       <CardContent className="p-6">
        <div className="flex items-start gap-4">
         <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
           <Badge variant="secondary">{reflection.category}</Badge>
           <Badge className={moodColors[reflection.mood as keyof typeof moodColors]}>
            {reflection.mood}
           </Badge>
           <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            {reflection.readTime}
           </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">
           <Link href={reflection.url} className="hover:underline">
            {reflection.title}
           </Link>
          </h3>
          <p className="text-muted-foreground mb-3">{reflection.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
           <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(reflection.publishDate).toLocaleDateString('pt-BR')}
           </div>
          </div>
          <div className="flex flex-wrap gap-1">
           {reflection.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
             {tag}
            </Badge>
           ))}
          </div>
         </div>
         <Button variant="ghost" size="sm" asChild>
          <Link href={reflection.url}>
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
     <h2 className="text-2xl font-semibold">Reflexões Recentes</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
     {recentReflections.map((reflection) => (
      <Card key={reflection.url} className="hover:shadow-md transition-shadow">
       <CardHeader>
        <div className="flex items-center gap-2 mb-2">
         <Badge variant="secondary">{reflection.category}</Badge>
         <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-1 h-3 w-3" />
          {reflection.readTime}
         </div>
        </div>
        <CardTitle className="text-lg">
         <Link href={reflection.url} className="hover:underline">
          {reflection.title}
         </Link>
        </CardTitle>
        <CardDescription>{reflection.description}</CardDescription>
       </CardHeader>
       <CardContent>
        <div className="flex items-center justify-between">
         <span className="text-sm text-muted-foreground">
          {new Date(reflection.publishDate).toLocaleDateString('pt-BR')}
         </span>
         <Button variant="outline" size="sm" asChild>
          <Link href={reflection.url}>
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
         {category.count} reflexões
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
