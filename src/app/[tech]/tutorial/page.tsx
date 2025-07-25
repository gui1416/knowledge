// src/app/[tech]/tutorial/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight, LayoutList } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getTechnology } from "@/lib/technologies"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface PageParams {
  tech: string;
}

interface TutorialPageProps {
  params: Promise<PageParams>;
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const resolvedParams = await params;
  const technology = getTechnology(resolvedParams.tech);

  if (!technology || !technology.tutorial) {
    notFound();
  }

  const currentLessonIndex = 0
  const currentLesson = technology.tutorial.lessons[currentLessonIndex]

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r p-6 hidden md:block">
        <nav className="space-y-4">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href={`/${technology.id}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para {technology.name}
            </Link>
          </Button>

          <h3 className="text-lg font-semibold mt-6 mb-3">Lições</h3>
          <Accordion type="single" collapsible className="w-full">
            {technology.tutorial.modules.map((module, moduleIndex) => (
              <AccordionItem key={moduleIndex} value={`item-${moduleIndex}`}>
                <AccordionTrigger>
                  <div className="flex items-center space-x-2">
                    <LayoutList className="h-4 w-4" />
                    <span>Módulo {moduleIndex + 1}: {module.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="pl-4 space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex}>
                        <Button variant="ghost" className="w-full justify-start text-left h-auto py-2" asChild>
                          <Link href={`/${technology.id}/tutorial?lesson=${lesson.id}`}>
                            {lesson.title}
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </nav>
      </aside>

      <main className="flex-1 p-6 lg:p-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">{technology.name} Tutorial</h1>
          </div>

          {currentLesson ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{currentLesson.title}</CardTitle>
                <CardDescription>Lição {currentLessonIndex + 1} de {technology.tutorial.lessons.length}</CardDescription>
                <Progress value={(currentLessonIndex + 1) / technology.tutorial.lessons.length * 100} className="mt-2" />
              </CardHeader>
              <CardContent>
                <div className="prose dark:prose-invert max-w-none">
                  {currentLesson.content.map((block, blockIndex) => {
                    switch (block.type) {
                      case "paragraph":
                        return <p key={blockIndex}>{block.text}</p>
                      case "heading":
                        return <h2 key={blockIndex}>{block.text}</h2>
                      case "code":
                        return (
                          <pre key={blockIndex} className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                            <code>{block.text}</code>
                          </pre>
                        )
                      case "image":
                        return <img key={blockIndex} src={block.url} alt={block.alt} className="my-4 rounded-md" />
                      default:
                        return null
                    }
                  })}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="text-center text-muted-foreground">Nenhuma lição selecionada ou encontrada.</div>
          )}

          <div className="flex justify-between mt-8">
            <Button variant="outline" disabled={currentLessonIndex === 0}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Lição Anterior
            </Button>
            <Button disabled={currentLessonIndex === technology.tutorial.lessons.length - 1}>
              Próxima Lição
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}