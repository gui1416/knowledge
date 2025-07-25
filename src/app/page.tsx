import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, BookOpen, Users, Clock } from "lucide-react"
import Link from "next/link"

const technologies = [
  {
    name: "HTML",
    description: "Aprenda a estrutura básica das páginas web",
    level: "Iniciante",
    lessons: 12,
    href: "/html",
  },
  {
    name: "CSS",
    description: "Domine o design e estilização de websites",
    level: "Iniciante",
    lessons: 15,
    href: "/css",
  },
  {
    name: "JavaScript",
    description: "Adicione interatividade às suas páginas",
    level: "Intermediário",
    lessons: 20,
    href: "/javascript",
  },
  {
    name: "React",
    description: "Construa interfaces modernas e dinâmicas",
    level: "Intermediário",
    lessons: 18,
    href: "/react",
  },
  {
    name: "Node.js",
    description: "Desenvolva o backend das suas aplicações",
    level: "Avançado",
    lessons: 16,
    href: "/nodejs",
  },
]

const faqs = [
  {
    question: "Os tutoriais são realmente gratuitos?",
    answer:
      "Sim! Todos os nossos tutoriais são completamente gratuitos. Acreditamos que o conhecimento deve ser acessível a todos.",
  },
  {
    question: "Preciso de experiência prévia em programação?",
    answer:
      "Não! Nossos tutoriais são projetados especificamente para iniciantes. Começamos do básico e avançamos gradualmente.",
  },
  {
    question: "Quanto tempo leva para completar um tutorial?",
    answer: "Cada lição leva entre 10-30 minutos. Você pode aprender no seu próprio ritmo, quando e onde quiser.",
  },
  {
    question: "Posso sugerir novos tópicos?",
    answer: "Claro! Adoramos feedback da comunidade. Entre em contato conosco através da página de contato.",
  },
  {
    question: "Como posso acompanhar meu progresso?",
    answer:
      "Cada tutorial possui um sistema de progresso visual que mostra quais lições você já completou e seu avanço geral.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Easy Dev Tutorials</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Selecione um tutorial para começar. Cada tutorial é projetado para ser conciso, prático e amigável para
            iniciantes.
          </p>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground mb-12">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>81+ Lições</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>10k+ Estudantes</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Aprenda no seu ritmo</span>
            </div>
          </div>

          <Button asChild size="lg">
            <Link href="/tutoriais">
              Explorar Tutoriais
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tecnologias Disponíveis</h2>
            <p className="text-xl text-muted-foreground">
              Escolha uma tecnologia para começar sua jornada no desenvolvimento web.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <Card key={tech.name} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{tech.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {tech.level}
                    </Badge>
                  </div>
                  <CardDescription>{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{tech.lessons} lições</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={tech.href}>
                      Começar
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre nossa plataforma e metodologia de ensino.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Começar?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Junte-se a milhares de desenvolvedores que já transformaram suas carreiras.
          </p>
          <Button asChild size="lg">
            <Link href="/html">
              Começar com HTML
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
