import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight, Code, Zap, Target, Globe, Users, Lightbulb } from "lucide-react"
import Link from "next/link"

const keyFeatures = [
 {
  title: "Linguagem Interpretada",
  description: "Executa diretamente no navegador sem necessidade de compilação",
  icon: Zap,
 },
 {
  title: "Tipagem Dinâmica",
  description: "Tipos são determinados em tempo de execução, oferecendo flexibilidade",
  icon: Code,
 },
 {
  title: "Orientação a Objetos",
  description: "Suporte a programação orientada a objetos baseada em protótipos",
  icon: Target,
 },
 {
  title: "Funcional",
  description: "Funções são cidadãos de primeira classe, suportando programação funcional",
  icon: Lightbulb,
 },
]

const useCases = [
 { name: "Desenvolvimento Web Frontend", popularity: 95 },
 { name: "Desenvolvimento Backend (Node.js)", popularity: 85 },
 { name: "Aplicações Mobile (React Native)", popularity: 75 },
 { name: "Aplicações Desktop (Electron)", popularity: 65 },
 { name: "Machine Learning (TensorFlow.js)", popularity: 45 },
 { name: "IoT e Embarcados", popularity: 35 },
]

const timeline = [
 { year: "1995", event: "Criado por Brendan Eich na Netscape em apenas 10 dias" },
 { year: "1997", event: "Padronizado como ECMAScript pela ECMA International" },
 { year: "2009", event: "Node.js permite JavaScript no servidor" },
 { year: "2015", event: "ES6/ES2015 introduz classes, arrow functions, modules" },
 { year: "2020+", event: "JavaScript domina o desenvolvimento web moderno" },
]

export default function JavaScriptPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-6xl">

   <div className="mb-8">
    <div className="flex items-center gap-3 mb-4">
     <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
      <Code className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
     </div>
     <h1 className="text-3xl font-bold">JavaScript</h1>
     <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
      Linguagem de Programação
     </Badge>
    </div>
    <p className="text-lg text-muted-foreground max-w-3xl">
     A linguagem de programação mais popular do mundo, que transformou a web de páginas estáticas em aplicações
     interativas e dinâmicas. Hoje, JavaScript é usado em frontend, backend, mobile e muito mais.
    </p>
   </div>

   <div className="grid md:grid-cols-3 gap-6 mb-8">
    <Card>
     <CardHeader className="pb-3">
      <div className="flex items-center gap-2">
       <Globe className="h-5 w-5 text-yellow-600" />
       <CardTitle className="text-lg">Popularidade</CardTitle>
      </div>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold text-yellow-600 mb-1">#1</div>
      <p className="text-sm text-muted-foreground">Linguagem mais usada no GitHub</p>
     </CardContent>
    </Card>

    <Card>
     <CardHeader className="pb-3">
      <div className="flex items-center gap-2">
       <Users className="h-5 w-5 text-blue-600" />
       <CardTitle className="text-lg">Comunidade</CardTitle>
      </div>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold text-blue-600 mb-1">17M+</div>
      <p className="text-sm text-muted-foreground">Desenvolvedores no mundo</p>
     </CardContent>
    </Card>

    <Card>
     <CardHeader className="pb-3">
      <div className="flex items-center gap-2">
       <Clock className="h-5 w-5 text-green-600" />
       <CardTitle className="text-lg">Idade</CardTitle>
      </div>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold text-green-600 mb-1">29 anos</div>
      <p className="text-sm text-muted-foreground">Criado em 1995</p>
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
         <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
          <feature.icon className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
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
    <h2 className="text-2xl font-semibold mb-6">Onde JavaScript é Usado</h2>
    <Card>
     <CardContent className="p-6">
      <div className="space-y-4">
       {useCases.map((useCase) => (
        <div key={useCase.name} className="flex items-center gap-4">
         <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
           <span className="font-medium">{useCase.name}</span>
           <span className="text-sm text-muted-foreground">{useCase.popularity}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
           <div
            className="bg-yellow-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${useCase.popularity}%` }}
           ></div>
          </div>
         </div>
        </div>
       ))}
      </div>
     </CardContent>
    </Card>
   </section>

   <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-6">História do JavaScript</h2>
    <Card>
     <CardContent className="p-6">
      <div className="space-y-6">
       {timeline.map((item, index) => (
        <div key={item.year} className="flex gap-4">
         <div className="flex flex-col items-center">
          <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
          {index < timeline.length - 1 && <div className="w-px h-12 bg-gray-300 mt-2"></div>}
         </div>
         <div className="flex-1 pb-4">
          <div className="flex items-center gap-2 mb-1">
           <Badge variant="outline">{item.year}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">{item.event}</p>
         </div>
        </div>
       ))}
      </div>
     </CardContent>
    </Card>
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
       <CardTitle className="text-lg">Promises e Async/Await</CardTitle>
       <CardDescription>Programação assíncrona em JavaScript moderno</CardDescription>
      </CardHeader>
      <CardContent>
       <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
         <Badge variant="outline">Intermediário</Badge>
         <span className="text-sm text-muted-foreground">8 min</span>
        </div>
        <Button size="sm" asChild>
         <Link href="/estudos/javascript/promises">
          Estudar
          <ArrowRight className="ml-2 h-4 w-4" />
         </Link>
        </Button>
       </div>
      </CardContent>
     </Card>

     <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
       <CardTitle className="text-lg">Closures</CardTitle>
       <CardDescription>Entendendo escopo e closures em JavaScript</CardDescription>
      </CardHeader>
      <CardContent>
       <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
         <Badge variant="outline">Intermediário</Badge>
         <span className="text-sm text-muted-foreground">6 min</span>
        </div>
        <Button size="sm" asChild>
         <Link href="/estudos/javascript/closures">
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
