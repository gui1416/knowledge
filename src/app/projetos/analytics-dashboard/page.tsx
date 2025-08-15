import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, PauseCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { ComponentPreview } from "@/components/mdx-components"

export default function AnalyticsDashboardPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-4xl">

   <div className="mb-8">
    <Button variant="ghost" size="sm" asChild className="mb-4">
     <Link href="/projetos">
      <ArrowLeft className="mr-2 h-4 w-4" />
      Voltar aos Projetos
     </Link>
    </Button>

    <div className="flex items-center gap-3 mb-4">
     <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
      <PauseCircle className="h-6 w-6 text-gray-600 dark:text-gray-400" />
     </div>
     <div>
      <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
      <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 mt-2">Pausado</Badge>
     </div>
    </div>

    <p className="text-lg text-muted-foreground max-w-2xl">
     Dashboard avançado de analytics com visualizações interativas, relatórios customizáveis e integração com
     múltiplas fontes de dados.
    </p>
   </div>

   <Card className="mb-8 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
    <CardContent className="p-4">
     <div className="flex items-center gap-2">
      <AlertTriangle className="h-5 w-5 text-orange-600" />
      <div>
       <h3 className="font-semibold text-orange-800 dark:text-orange-200">Projeto Pausado</h3>
       <p className="text-sm text-orange-700 dark:text-orange-300">
        Desenvolvimento pausado em Janeiro 2024 para focar em outros projetos prioritários. Retomada prevista
        para Q2 2024.
       </p>
      </div>
     </div>
    </CardContent>
   </Card>

   <Card className="mb-8">
    <CardHeader>
     <CardTitle>Progresso Atual</CardTitle>
     <CardDescription>45% concluído antes da pausa</CardDescription>
    </CardHeader>
    <CardContent>
     <div className="space-y-4">
      <div className="w-full bg-muted rounded-full h-3">
       <div className="bg-gray-600 h-3 rounded-full" style={{ width: "45%" }}></div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
       <div>
        <h4 className="font-medium mb-2 text-green-600">Implementado ✅</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
         <li>• Estrutura base do dashboard</li>
         <li>• Integração com PostgreSQL</li>
         <li>• Gráficos básicos com Chart.js</li>
         <li>• Sistema de autenticação</li>
         <li>• API REST para dados</li>
        </ul>
       </div>
       <div>
        <h4 className="font-medium mb-2 text-orange-600">Pendente ⏳</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
         <li>• Visualizações avançadas com D3.js</li>
         <li>• Relatórios customizáveis</li>
         <li>• Filtros dinâmicos</li>
         <li>• Export para PDF/Excel</li>
         <li>• Dashboard em tempo real</li>
        </ul>
       </div>
      </div>
     </div>
    </CardContent>
   </Card>

   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Tecnologias Utilizadas</h2>
    <div className="flex flex-wrap gap-2">
     {["React", "D3.js", "Node.js", "PostgreSQL", "Chart.js", "Express", "JWT", "Material-UI"].map((tech) => (
      <Badge key={tech} variant="outline">
       {tech}
      </Badge>
     ))}
    </div>
   </section>

   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Estado Atual do Dashboard</h2>
    <ComponentPreview>
     <AnalyticsDemo />
    </ComponentPreview>
   </section>

   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Desafios Encontrados</h2>
    <div className="space-y-4">
     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Performance com Grandes Datasets</CardTitle>
      </CardHeader>
      <CardContent>
       <p className="text-muted-foreground">
        Renderização de gráficos com milhões de pontos de dados estava causando travamentos. Implementação de
        virtualização e agregação de dados em progresso.
       </p>
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Complexidade das Visualizações D3.js</CardTitle>
      </CardHeader>
      <CardContent>
       <p className="text-muted-foreground">
        Integração entre React e D3.js para visualizações customizadas mostrou-se mais complexa que o esperado,
        necessitando refatoração da arquitetura.
       </p>
      </CardContent>
     </Card>
    </div>
   </section>

   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Planos para Retomada</h2>
    <div className="space-y-3">
     {[
      { phase: "Fase 1", task: "Refatorar arquitetura D3.js + React", duration: "2 semanas" },
      { phase: "Fase 2", task: "Implementar visualizações avançadas", duration: "3 semanas" },
      { phase: "Fase 3", task: "Sistema de relatórios customizáveis", duration: "2 semanas" },
      { phase: "Fase 4", task: "Otimização de performance", duration: "1 semana" },
     ].map((item, index) => (
      <Card key={index}>
       <CardContent className="p-4">
        <div className="flex items-center justify-between">
         <div>
          <span className="font-medium">{item.phase}: </span>
          <span>{item.task}</span>
         </div>
         <Badge variant="outline">{item.duration}</Badge>
        </div>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>

   <div className="flex gap-4">
    <Button asChild>
     <Link href="https://github.com/user/analytics-dashboard" target="_blank">
      <Github className="mr-2 h-4 w-4" />
      Ver Código
     </Link>
    </Button>
    <Button variant="outline" disabled>
     Demo Indisponível
    </Button>
   </div>
  </div>
 )
}

function AnalyticsDemo() {
 return (
  <div className="bg-white dark:bg-gray-900 rounded-lg border p-4 max-w-lg mx-auto">
   <div className="flex items-center justify-between mb-4">
    <h3 className="font-semibold">Visão Geral</h3>
    <Badge variant="outline">Últimos 30 dias</Badge>
   </div>

   <div className="grid grid-cols-2 gap-4 mb-4">
    <div className="text-center p-3 bg-blue-50 dark:bg-blue-950 rounded">
     <div className="text-2xl font-bold text-blue-600">1.2K</div>
     <div className="text-sm text-muted-foreground">Usuários</div>
    </div>
    <div className="text-center p-3 bg-green-50 dark:bg-green-950 rounded">
     <div className="text-2xl font-bold text-green-600">89%</div>
     <div className="text-sm text-muted-foreground">Conversão</div>
    </div>
   </div>

   <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center mb-4">
    <span className="text-gray-400">Gráfico de Linha (Chart.js)</span>
   </div>

   <div className="text-center">
    <Badge className="bg-orange-100 text-orange-800">Visualizações D3.js em desenvolvimento</Badge>
   </div>
  </div>
 )
}
