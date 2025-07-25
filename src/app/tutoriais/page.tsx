import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users, Star } from "lucide-react"
import Link from "next/link"

const tutorials = [
   {
      id: "html",
      name: "HTML",
      description: "Aprenda a estrutura básica das páginas web com HTML5",
      level: "Iniciante",
      duration: "3-4 horas",
      lessons: 12,
      students: "2.5k",
      rating: 4.9,
      href: "/html",
   },
   {
      id: "css",
      name: "CSS",
      description: "Domine o design e estilização de websites modernos",
      level: "Iniciante",
      duration: "4-5 horas",
      lessons: 15,
      students: "2.1k",
      rating: 4.8,
      href: "/css",
   },
   {
      id: "javascript",
      name: "JavaScript",
      description: "Adicione interatividade e lógica às suas páginas",
      level: "Intermediário",
      duration: "6-8 horas",
      lessons: 20,
      students: "1.8k",
      rating: 4.9,
      href: "/javascript",
   },
   {
      id: "react",
      name: "React",
      description: "Construa interfaces modernas e dinâmicas",
      level: "Intermediário",
      duration: "8-10 horas",
      lessons: 18,
      students: "1.5k",
      rating: 4.8,
      href: "/react",
   },
   {
      id: "nodejs",
      name: "Node.js",
      description: "Desenvolva o backend das suas aplicações",
      level: "Avançado",
      duration: "10-12 horas",
      lessons: 16,
      students: "1.2k",
      rating: 4.7,
      href: "/nodejs",
   },
]

export default function TutorialsPage() {
   return (
      <div className="min-h-screen">
         <section className="py-16 px-4 sm:px-6 lg:px-8 border-b">
            <div className="max-w-4xl mx-auto text-center">
               <h1 className="text-4xl font-bold mb-6">Todos os Tutoriais</h1>
               <p className="text-xl text-muted-foreground mb-8">
                  Escolha uma tecnologia e comece sua jornada no desenvolvimento web.
               </p>
               <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                     <Users className="w-4 h-4" />
                     <span>7.1k+ estudantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Star className="w-4 h-4" />
                     <span>4.8 avaliação média</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Clock className="w-4 h-4" />
                     <span>Aprenda no seu ritmo</span>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tutorials.map((tutorial) => (
                     <Card
                        key={tutorial.id}
                        className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                     >
                        <CardHeader>
                           <div className="flex items-center justify-between mb-2">
                              <CardTitle className="text-xl">{tutorial.name}</CardTitle>
                              <Badge
                                 variant={
                                    tutorial.level === "Iniciante"
                                       ? "default"
                                       : tutorial.level === "Intermediário"
                                          ? "secondary"
                                          : "destructive"
                                 }
                              >
                                 {tutorial.level}
                              </Badge>
                           </div>
                           <CardDescription>{tutorial.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                           <div className="grid grid-cols-3 gap-4 text-center text-sm">
                              <div>
                                 <div className="font-semibold">{tutorial.lessons}</div>
                                 <div className="text-muted-foreground">Lições</div>
                              </div>
                              <div>
                                 <div className="font-semibold">{tutorial.students}</div>
                                 <div className="text-muted-foreground">Alunos</div>
                              </div>
                              <div>
                                 <div className="font-semibold flex items-center justify-center gap-1">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    {tutorial.rating}
                                 </div>
                                 <div className="text-muted-foreground">Rating</div>
                              </div>
                           </div>

                           <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span>Duração: {tutorial.duration}</span>
                           </div>

                           <Button asChild className="w-full">
                              <Link href={tutorial.href}>
                                 Começar Tutorial
                                 <ArrowRight className="ml-2 w-4 h-4" />
                              </Link>
                           </Button>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>
      </div>
   )
}
