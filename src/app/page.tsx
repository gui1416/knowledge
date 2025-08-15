import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code2, FileText, Lightbulb, FolderOpen, ArrowRight, Clock, Star } from 'lucide-react'
import Link from "next/link"

const recentUpdates = [
  {
    title: "Hooks Avançados em React",
    description: "Explorando useCallback, useMemo e useRef com exemplos práticos",
    category: "Estudos",
    date: "2024-01-15",
    url: "/estudos/react/hooks-avancados",
    icon: BookOpen,
  },
  {
    title: "Debounce Hook Personalizado",
    description: "Hook reutilizável para debounce de funções e otimização de performance",
    category: "Snippets",
    date: "2024-01-12",
    url: "/snippets/utilitarios/debounce-hook",
    icon: Code2,
  },
  {
    title: "Arquitetura Frontend Moderna",
    description: "Padrões e boas práticas para aplicações React escaláveis",
    category: "Artigos",
    date: "2024-01-10",
    url: "/artigos/arquitetura-frontend",
    icon: FileText,
  },
]

const featuredContent = [
  {
    title: "JavaScript Avançado",
    description: "Conceitos fundamentais como closures, event loop e promises",
    url: "/estudos/javascript",
    icon: BookOpen,
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  },
  {
    title: "Componentes Reutilizáveis",
    description: "Biblioteca de componentes React prontos para uso",
    url: "/snippets/componentes",
    icon: Code2,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  {
    title: "Reflexões sobre Carreira",
    description: "Pensamentos e aprendizados sobre desenvolvimento de carreira em tech",
    url: "/reflexoes/carreira-tech",
    icon: Lightbulb,
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  },
]

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Bem-vindo à minha documentação pessoal
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
          Um espaço organizado para meus estudos, códigos, pensamentos e aprendizados em desenvolvimento de software.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/estudos">
              <BookOpen className="mr-2 h-4 w-4" />
              Explorar Estudos
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/snippets">
              <Code2 className="mr-2 h-4 w-4" />
              Ver Snippets
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <Card>
          <CardContent className="p-4 text-center">
            <BookOpen className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold">25+</div>
            <div className="text-sm text-muted-foreground">Estudos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Code2 className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold">40+</div>
            <div className="text-sm text-muted-foreground">Snippets</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <FileText className="h-8 w-8 mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-muted-foreground">Artigos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <FolderOpen className="h-8 w-8 mx-auto mb-2 text-orange-600" />
            <div className="text-2xl font-bold">8</div>
            <div className="text-sm text-muted-foreground">Projetos</div>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Atualizações Recentes</h2>
          <Button variant="ghost" asChild>
            <Link href="/recentes">
              Ver todas <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4">
          {recentUpdates.map((update) => (
            <Card key={update.url} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-muted">
                    <update.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{update.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {new Date(update.date).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-1">
                      <Link href={update.url} className="hover:underline">
                        {update.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-sm">{update.description}</p>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={update.url}>
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
        <div className="flex items-center gap-2 mb-6">
          <Star className="h-5 w-5 text-yellow-500" />
          <h2 className="text-2xl font-semibold">Conteúdo em Destaque</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredContent.map((content) => (
            <Card key={content.url} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${content.color}`}>
                  <content.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{content.title}</CardTitle>
                <CardDescription>{content.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={content.url}>
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
