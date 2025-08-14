import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FolderOpen, ExternalLink, Github, Star, TrendingUp, Calendar, Code2 } from 'lucide-react'
import Link from "next/link"

const projectStatus = {
 "Em Desenvolvimento": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
 "Concluído": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
 "Pausado": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
 "Planejado": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
}

const featuredProjects = [
 {
  title: "E-commerce Platform",
  description: "Plataforma completa de e-commerce com Next.js, Stripe e dashboard administrativo",
  status: "Em Desenvolvimento",
  technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind"],
  startDate: "2024-01-01",
  githubUrl: "https://github.com/user/ecommerce-platform",
  liveUrl: "https://ecommerce-demo.vercel.app",
  featured: true,
  progress: 75,
  url: "/projetos/ecommerce-platform"
 },
 {
  title: "Task Manager Pro",
  description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real",
  status: "Concluído",
  technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
  startDate: "2023-10-15",
  githubUrl: "https://github.com/user/task-manager",
  liveUrl: "https://taskmanager-pro.vercel.app",
  featured: true,
  progress: 100,
  url: "/projetos/task-manager-pro"
 },
 {
  title: "Blog Engine",
  description: "CMS headless para blogs com editor markdown e sistema de comentários",
  status: "Concluído",
  technologies: ["Next.js", "MDX", "Supabase", "Vercel", "Tailwind"],
  startDate: "2023-08-01",
  githubUrl: "https://github.com/user/blog-engine",
  liveUrl: "https://blog-engine-demo.vercel.app",
  featured: false,
  progress: 100,
  url: "/projetos/blog-engine"
 },
 {
  title: "Analytics Dashboard",
  description: "Dashboard de analytics com visualizações interativas e relatórios",
  status: "Pausado",
  technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Chart.js"],
  startDate: "2023-12-01",
  githubUrl: "https://github.com/user/analytics-dashboard",
  liveUrl: null,
  featured: false,
  progress: 45,
  url: "/projetos/analytics-dashboard"
 }
]

const upcomingProjects = [
 {
  title: "AI Code Assistant",
  description: "Assistente de código com IA para desenvolvedores",
  status: "Planejado",
  technologies: ["Next.js", "OpenAI API", "Prisma", "Clerk"],
  estimatedStart: "2024-02-01",
  url: "/projetos/ai-code-assistant"
 },
 {
  title: "Real-time Chat App",
  description: "Aplicativo de chat em tempo real com salas e notificações",
  status: "Planejado",
  technologies: ["React", "Socket.io", "Redis", "Express"],
  estimatedStart: "2024-03-01",
  url: "/projetos/realtime-chat"
 },
 {
  title: "Portfolio Generator",
  description: "Gerador automático de portfólios para desenvolvedores",
  status: "Planejado",
  technologies: ["Next.js", "GitHub API", "Tailwind", "Framer Motion"],
  estimatedStart: "2024-04-01",
  url: "/projetos/portfolio-generator"
 }
]

const categories = [
 {
  title: "Web Apps",
  count: 6,
  color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
 },
 {
  title: "Mobile",
  count: 2,
  color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
 },
 {
  title: "APIs",
  count: 4,
  color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
 },
 {
  title: "Tools",
  count: 3,
  color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
 }
]

export default function ProjetosPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-6xl">
   {/* Header */}
   <div className="mb-8">
    <div className="flex items-center gap-3 mb-4">
     <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
      <FolderOpen className="h-6 w-6 text-orange-600 dark:text-orange-400" />
     </div>
     <h1 className="text-3xl font-bold">Projetos</h1>
    </div>
    <p className="text-lg text-muted-foreground max-w-2xl">
     Coleção dos meus projetos pessoais e profissionais, desde aplicações web até ferramentas e experimentos.
    </p>
   </div>

   {/* Stats */}
   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-orange-600">15</div>
      <div className="text-sm text-muted-foreground">Total Projetos</div>
     </CardContent>
    </Card>
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-green-600">8</div>
      <div className="text-sm text-muted-foreground">Concluídos</div>
     </CardContent>
    </Card>
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-blue-600">4</div>
      <div className="text-sm text-muted-foreground">Em Desenvolvimento</div>
     </CardContent>
    </Card>
    <Card>
     <CardContent className="p-4 text-center">
      <div className="text-2xl font-bold text-purple-600">3</div>
      <div className="text-sm text-muted-foreground">Planejados</div>
     </CardContent>
    </Card>
   </div>

   {/* Featured Projects */}
   <section className="mb-12">
    <div className="flex items-center gap-2 mb-6">
     <Star className="h-5 w-5 text-yellow-500" />
     <h2 className="text-2xl font-semibold">Projetos em Destaque</h2>
    </div>
    <div className="grid gap-6">
     {featuredProjects.map((project) => (
      <Card key={project.url} className="hover:shadow-md transition-shadow">
       <CardContent className="p-6">
        <div className="flex items-start gap-4">
         <div className="p-2 rounded-lg bg-muted">
          <Code2 className="h-5 w-5" />
         </div>
         <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
           <Badge className={projectStatus[project.status as keyof typeof projectStatus]}>
            {project.status}
           </Badge>
           {project.featured && (
            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
             <Star className="mr-1 h-3 w-3" />
             Destaque
            </Badge>
           )}
           <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            {new Date(project.startDate).toLocaleDateString('pt-BR')}
           </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">
           <Link href={project.url} className="hover:underline">
            {project.title}
           </Link>
          </h3>
          <p className="text-muted-foreground mb-3">{project.description}</p>

          {/* Progress Bar */}
          {project.progress < 100 && (
           <div className="mb-3">
            <div className="flex items-center justify-between text-sm mb-1">
             <span className="text-muted-foreground">Progresso</span>
             <span className="font-medium">{project.progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
             <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${project.progress}%` }}
             />
            </div>
           </div>
          )}

          <div className="flex flex-wrap gap-1 mb-4">
           {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
             {tech}
            </Badge>
           ))}
          </div>

          <div className="flex items-center gap-2">
           <Button variant="outline" size="sm" asChild>
            <Link href={project.githubUrl} target="_blank">
             <Github className="mr-2 h-3 w-3" />
             Código
            </Link>
           </Button>
           {project.liveUrl && (
            <Button variant="outline" size="sm" asChild>
             <Link href={project.liveUrl} target="_blank">
              <ExternalLink className="mr-2 h-3 w-3" />
              Demo
             </Link>
            </Button>
           )}
           <Button size="sm" asChild>
            <Link href={project.url}>
             Ver Detalhes
            </Link>
           </Button>
          </div>
         </div>
        </div>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>

   {/* Upcoming Projects */}
   <section className="mb-12">
    <div className="flex items-center gap-2 mb-6">
     <TrendingUp className="h-5 w-5 text-blue-600" />
     <h2 className="text-2xl font-semibold">Próximos Projetos</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
     {upcomingProjects.map((project) => (
      <Card key={project.url} className="hover:shadow-md transition-shadow">
       <CardHeader>
        <div className="flex items-center gap-2 mb-2">
         <Badge className={projectStatus[project.status as keyof typeof projectStatus]}>
          {project.status}
         </Badge>
        </div>
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
       </CardHeader>
       <CardContent>
        <div className="space-y-3">
         <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech) => (
           <Badge key={tech} variant="outline" className="text-xs">
            {tech}
           </Badge>
          ))}
         </div>
         <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
           Início: {new Date(project.estimatedStart).toLocaleDateString('pt-BR')}
          </span>
          <Button variant="outline" size="sm" asChild>
           <Link href={project.url}>
            Ver Planos
           </Link>
          </Button>
         </div>
        </div>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>

   {/* Categories */}
   <section>
    <h2 className="text-2xl font-semibold mb-6">Categorias</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
     {categories.map((category) => (
      <Card key={category.title} className="hover:shadow-md transition-shadow">
       <CardContent className="p-6 text-center">
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${category.color} w-fit mx-auto mb-3`}>
         {category.count} projetos
        </div>
        <h3 className="font-semibold text-lg">{category.title}</h3>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>
  </div>
 )
}
