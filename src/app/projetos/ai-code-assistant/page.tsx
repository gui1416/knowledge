import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Lightbulb, Zap, Target } from "lucide-react"
import Link from "next/link"
import { ComponentPreview } from "@/components/mdx-components"

export default function AICodeAssistantPage() {
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
     <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
      <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
     </div>
     <div>
      <h1 className="text-3xl font-bold">AI Code Assistant</h1>
      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mt-2">Planejado</Badge>
     </div>
    </div>

    <p className="text-lg text-muted-foreground max-w-2xl">
     Assistente de código inteligente que ajuda desenvolvedores com sugestões, refatoração automática, documentação
     e detecção de bugs usando IA.
    </p>
   </div>

   {/* Timeline */}
   <Card className="mb-8">
    <CardHeader>
     <CardTitle className="flex items-center gap-2">
      <Calendar className="h-5 w-5" />
      Cronograma Planejado
     </CardTitle>
    </CardHeader>
    <CardContent>
     <div className="space-y-4">
      <div className="flex justify-between items-center">
       <span>Início Previsto:</span>
       <Badge variant="outline">01 Fev 2024</Badge>
      </div>
      <div className="flex justify-between items-center">
       <span>Duração Estimada:</span>
       <Badge variant="outline">3-4 meses</Badge>
      </div>
      <div className="flex justify-between items-center">
       <span>Lançamento Beta:</span>
       <Badge variant="outline">Mai 2024</Badge>
      </div>
     </div>
    </CardContent>
   </Card>

   {/* Objectives */}
   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
     <Target className="h-6 w-6" />
     Objetivos do Projeto
    </h2>
    <div className="grid md:grid-cols-2 gap-4">
     {[
      {
       title: "Produtividade",
       description: "Aumentar a velocidade de desenvolvimento em 40%",
      },
      {
       title: "Qualidade",
       description: "Reduzir bugs em produção através de análise estática",
      },
      {
       title: "Aprendizado",
       description: "Ajudar desenvolvedores a aprender melhores práticas",
      },
      {
       title: "Automação",
       description: "Automatizar tarefas repetitivas de refatoração",
      },
     ].map((objective, index) => (
      <Card key={index}>
       <CardHeader>
        <CardTitle className="text-lg">{objective.title}</CardTitle>
       </CardHeader>
       <CardContent>
        <p className="text-muted-foreground">{objective.description}</p>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>

   {/* Planned Features */}
   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Funcionalidades Planejadas</h2>
    <div className="space-y-4">
     {[
      {
       category: "Core Features",
       features: [
        "Autocompletar inteligente com contexto",
        "Sugestões de refatoração em tempo real",
        "Detecção automática de code smells",
        "Geração de documentação automática",
       ],
      },
      {
       category: "AI Features",
       features: [
        "Explicação de código complexo",
        "Sugestões de otimização de performance",
        "Conversão entre linguagens/frameworks",
        "Geração de testes unitários",
       ],
      },
      {
       category: "Integration",
       features: [
        "Extensão para VS Code",
        "Plugin para JetBrains IDEs",
        "API REST para integração customizada",
        "Webhook para CI/CD pipelines",
       ],
      },
     ].map((section, index) => (
      <Card key={index}>
       <CardHeader>
        <CardTitle className="text-lg">{section.category}</CardTitle>
       </CardHeader>
       <CardContent>
        <ul className="space-y-2">
         {section.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center gap-2">
           <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
           <span>{feature}</span>
          </li>
         ))}
        </ul>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>

   {/* Tech Stack */}
   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Stack Tecnológico Planejado</h2>
    <div className="grid md:grid-cols-3 gap-4">
     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Frontend</CardTitle>
      </CardHeader>
      <CardContent>
       <div className="flex flex-wrap gap-2">
        {["Next.js", "TypeScript", "Tailwind CSS", "Monaco Editor"].map((tech) => (
         <Badge key={tech} variant="outline">
          {tech}
         </Badge>
        ))}
       </div>
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Backend & AI</CardTitle>
      </CardHeader>
      <CardContent>
       <div className="flex flex-wrap gap-2">
        {["OpenAI API", "Prisma", "PostgreSQL", "Redis"].map((tech) => (
         <Badge key={tech} variant="outline">
          {tech}
         </Badge>
        ))}
       </div>
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Extensions</CardTitle>
      </CardHeader>
      <CardContent>
       <div className="flex flex-wrap gap-2">
        {["VS Code API", "Language Server Protocol", "Tree-sitter"].map((tech) => (
         <Badge key={tech} variant="outline">
          {tech}
         </Badge>
        ))}
       </div>
      </CardContent>
     </Card>
    </div>
   </section>

   {/* Mockup */}
   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Conceito da Interface</h2>
    <ComponentPreview>
     <AIAssistantMockup />
    </ComponentPreview>
   </section>

   {/* Development Phases */}
   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Fases de Desenvolvimento</h2>
    <div className="space-y-3">
     {[
      { phase: "MVP", tasks: "Core AI features + VS Code extension", duration: "6 semanas", priority: "Alta" },
      { phase: "Beta", tasks: "Refatoração automática + documentação", duration: "4 semanas", priority: "Alta" },
      { phase: "v1.0", tasks: "Multi-IDE support + API pública", duration: "4 semanas", priority: "Média" },
      { phase: "v1.1", tasks: "Features avançadas + analytics", duration: "3 semanas", priority: "Baixa" },
     ].map((item, index) => (
      <Card key={index}>
       <CardContent className="p-4">
        <div className="flex items-center justify-between">
         <div>
          <span className="font-medium">{item.phase}: </span>
          <span>{item.tasks}</span>
         </div>
         <div className="flex items-center gap-2">
          <Badge
           variant={
            item.priority === "Alta" ? "destructive" : item.priority === "Média" ? "default" : "secondary"
           }
          >
           {item.priority}
          </Badge>
          <Badge variant="outline">{item.duration}</Badge>
         </div>
        </div>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>

   {/* Research */}
   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Pesquisa e Preparação</h2>
    <div className="grid md:grid-cols-2 gap-4">
     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Concorrentes Analisados</CardTitle>
      </CardHeader>
      <CardContent>
       <ul className="space-y-2 text-sm">
        <li>• GitHub Copilot - Autocompletar IA</li>
        <li>• Tabnine - Sugestões contextuais</li>
        <li>• Kite - Documentação automática</li>
        <li>• CodeT5 - Geração de código</li>
       </ul>
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Diferenciais Planejados</CardTitle>
      </CardHeader>
      <CardContent>
       <ul className="space-y-2 text-sm">
        <li>• Foco em refatoração automática</li>
        <li>• Explicações detalhadas do código</li>
        <li>• Integração com múltiplas IDEs</li>
        <li>• Customização por projeto</li>
       </ul>
      </CardContent>
     </Card>
    </div>
   </section>

   {/* Action Button */}
   <div className="text-center">
    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
     <Zap className="mr-2 h-4 w-4" />
     Acompanhar Desenvolvimento
    </Button>
   </div>
  </div>
 )
}

// Mockup Component
function AIAssistantMockup() {
 return (
  <div className="bg-gray-900 text-white rounded-lg p-4 max-w-2xl mx-auto font-mono text-sm">
   <div className="flex items-center gap-2 mb-4 text-gray-400">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    <span className="ml-2">VS Code - AI Assistant</span>
   </div>

   <div className="space-y-2">
    <div className="text-blue-400">{"function calculateTotal(items) {"}</div>
    <div className="ml-4 text-gray-300">&nbsp;// AI Suggestion: Consider using reduce for better performance</div>
    <div className="ml-4 text-green-400">{"return items.reduce((sum, item) => sum + item.price, 0)"}</div>
    <div className="text-blue-400">{"}"}</div>
   </div>

   <div className="mt-4 p-2 bg-blue-900/30 rounded border border-blue-500">
    <div className="flex items-center gap-2 mb-2">
     <Zap className="h-4 w-4 text-blue-400" />
     <span className="text-blue-400 font-semibold">AI Assistant</span>
    </div>
    <p className="text-sm text-gray-300">
     Esta função pode ser otimizada usando <code className="text-yellow-400">reduce()</code>
     ao invés de um loop manual. Quer que eu refatore automaticamente?
    </p>
    <div className="flex gap-2 mt-2">
     <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
      Aplicar Sugestão
     </Button>
     <Button size="sm" variant="outline" className="text-xs bg-transparent">
      Explicar Mais
     </Button>
    </div>
   </div>
  </div>
 )
}
