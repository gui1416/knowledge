import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink, Calendar, CheckCircle, Code2 } from "lucide-react"
import Link from "next/link"
import { ComponentPreview } from "@/components/mdx-components"

export default function TaskManagerProPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-4xl">
   {/* Header */}
   <div className="mb-8">
    <Button variant="ghost" size="sm" asChild className="mb-4">
     <Link href="/projetos">
      <ArrowLeft className="mr-2 h-4 w-4" />
      Voltar aos Projetos
     </Link>
    </Button>

    <div className="flex items-center gap-3 mb-4">
     <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
      <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
     </div>
     <div>
      <h1 className="text-3xl font-bold">Task Manager Pro</h1>
      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mt-2">Concluído</Badge>
     </div>
    </div>

    <p className="text-lg text-muted-foreground max-w-2xl">
     Aplicativo completo de gerenciamento de tarefas com colaboração em tempo real, notificações push e dashboard
     analítico para equipes.
    </p>
   </div>

   {/* Project Info */}
   <div className="grid md:grid-cols-2 gap-6 mb-8">
    <Card>
     <CardHeader>
      <CardTitle className="flex items-center gap-2">
       <Calendar className="h-5 w-5" />
       Timeline
      </CardTitle>
     </CardHeader>
     <CardContent>
      <div className="space-y-2">
       <div className="flex justify-between">
        <span className="text-muted-foreground">Início:</span>
        <span>15 Out 2023</span>
       </div>
       <div className="flex justify-between">
        <span className="text-muted-foreground">Conclusão:</span>
        <span>22 Dez 2023</span>
       </div>
       <div className="flex justify-between">
        <span className="text-muted-foreground">Duração:</span>
        <span>2 meses e 1 semana</span>
       </div>
      </div>
     </CardContent>
    </Card>

    <Card>
     <CardHeader>
      <CardTitle className="flex items-center gap-2">
       <Code2 className="h-5 w-5" />
       Tecnologias
      </CardTitle>
     </CardHeader>
     <CardContent>
      <div className="flex flex-wrap gap-2">
       {["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT", "Tailwind CSS"].map((tech) => (
        <Badge key={tech} variant="outline">
         {tech}
        </Badge>
       ))}
      </div>
     </CardContent>
    </Card>
   </div>

   {/* Features */}
   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Principais Funcionalidades</h2>
    <div className="grid md:grid-cols-2 gap-4">
     {[
      "Criação e organização de tarefas por projetos",
      "Colaboração em tempo real com Socket.io",
      "Sistema de notificações push",
      "Dashboard com métricas e analytics",
      "Filtros avançados e busca",
      "Integração com calendário",
      "Comentários e anexos em tarefas",
      "Relatórios de produtividade",
     ].map((feature, index) => (
      <div key={index} className="flex items-center gap-2">
       <CheckCircle className="h-4 w-4 text-green-600" />
       <span>{feature}</span>
      </div>
     ))}
    </div>
   </section>

   {/* Demo Component */}
   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Demonstração</h2>
    <ComponentPreview>
     <TaskManagerDemo />
    </ComponentPreview>
   </section>

   {/* Challenges & Solutions */}
   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Desafios e Soluções</h2>
    <div className="space-y-4">
     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Sincronização em Tempo Real</CardTitle>
      </CardHeader>
      <CardContent>
       <p className="text-muted-foreground">
        Implementei Socket.io para garantir que todas as mudanças fossem refletidas instantaneamente para todos
        os usuários conectados, com fallback para polling em caso de falha na conexão WebSocket.
       </p>
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Performance com Grandes Datasets</CardTitle>
      </CardHeader>
      <CardContent>
       <p className="text-muted-foreground">
        Utilizei paginação virtual e lazy loading para lidar com projetos com milhares de tarefas, além de
        implementar cache inteligente no frontend.
       </p>
      </CardContent>
     </Card>
    </div>
   </section>

   {/* Links */}
   <div className="flex gap-4">
    <Button asChild>
     <Link href="https://github.com/user/task-manager" target="_blank">
      <Github className="mr-2 h-4 w-4" />
      Ver Código
     </Link>
    </Button>
    <Button variant="outline" asChild>
     <Link href="https://taskmanager-pro.vercel.app" target="_blank">
      <ExternalLink className="mr-2 h-4 w-4" />
      Ver Demo
     </Link>
    </Button>
   </div>
  </div>
 )
}

// Demo Component
function TaskManagerDemo() {
 return (
  <div className="bg-white dark:bg-gray-900 rounded-lg border p-4 max-w-md mx-auto">
   <div className="flex items-center justify-between mb-4">
    <h3 className="font-semibold">Projeto: Website Redesign</h3>
    <Badge className="bg-blue-100 text-blue-800">Em Progresso</Badge>
   </div>

   <div className="space-y-3">
    <div className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
     <CheckCircle className="h-4 w-4 text-green-600" />
     <span className="text-sm line-through text-muted-foreground">Criar wireframes</span>
    </div>

    <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded border-l-2 border-blue-500">
     <div className="h-4 w-4 rounded-full border-2 border-blue-500"></div>
     <span className="text-sm font-medium">Desenvolver componentes</span>
    </div>

    <div className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
     <div className="h-4 w-4 rounded-full border-2 border-gray-300"></div>
     <span className="text-sm text-muted-foreground">Testes de usabilidade</span>
    </div>
   </div>

   <div className="mt-4 pt-3 border-t">
    <div className="flex items-center justify-between text-sm">
     <span className="text-muted-foreground">Progresso</span>
     <span className="font-medium">2/3 tarefas</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
     <div className="bg-blue-600 h-2 rounded-full" style={{ width: "66%" }}></div>
    </div>
   </div>
  </div>
 )
}
