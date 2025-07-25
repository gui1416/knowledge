import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Clock, Users, Star } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getTechnology } from "@/lib/technologies"

export default function TechnologyPage({ params }: { params: { tech: string } }) {
 const technology = getTechnology(params.tech)

 if (!technology) {
  notFound()
 }

 const getBadgeVariant = (level: string) => {
  switch (level) {
   case "Iniciante":
    return "default"
   case "Intermediário":
    return "secondary"
   case "Avançado":
    return "destructive"
   default:
    return "default"
  }
 }

 return (
  <div className="min-h-screen">
   {/* Hero Section */}
   <section className="py-20 px-4 sm:px-6 lg:px-8 border-b">
    <div className="max-w-4xl mx-auto">
     <div className="text-center mb-12">
      <Badge variant={getBadgeVariant(technology.level)} className="mb-4">
       {technology.level}
      </Badge>
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">{technology.name}</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{technology.description}</p>

      <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground mb-8">
       <div className="flex items-center gap-2">
        <Clock className="w-4 h-4" />
        <span>{technology.duration}</span>
       </div>
       <div className="flex items-center gap-2">
        <Users className="w-4 h-4" />
        <span>{technology.students} estudantes</span>
       </div>
       <div className="flex items-center gap-2">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span>
         {technology.rating} ({technology.reviews} avaliações)
        </span>
       </div>
      </div>

      <Button asChild size="lg">
       <Link href={`/${technology.id}/tutorial`}>
        Começar Tutorial
        <ArrowRight className="ml-2 w-5 h-5" />
       </Link>
      </Button>
     </div>
    </div>
   </section>

   {/* Features Section */}
   <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
     <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">O que você vai aprender</h2>
      <p className="text-xl text-muted-foreground">
       {technology.id === "html" && "Desenvolva uma base sólida em HTML com conceitos práticos e modernos."}
       {technology.id === "css" && "Transforme suas páginas HTML em designs profissionais e responsivos."}
       {technology.id === "javascript" &&
        "Domine JavaScript e transforme páginas estáticas em aplicações interativas."}
       {technology.id === "react" && "Domine React e crie aplicações web modernas e escaláveis."}
       {technology.id === "nodejs" && "Domine o desenvolvimento backend e crie aplicações completas."}
      </p>
     </div>

     <div className="grid md:grid-cols-3 gap-8 mb-12">
      {technology.features.map((feature, index) => (
       <Card key={index} className="text-center">
        <CardHeader>
         <div className="mx-auto mb-4">
          <feature.icon className="w-6 h-6 text-primary" />
         </div>
         <CardTitle className="text-xl">{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
         <CardDescription>{feature.description}</CardDescription>
        </CardContent>
       </Card>
      ))}
     </div>

     <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
       <h3 className="text-2xl font-bold mb-6">Tópicos Cobertos</h3>
       <div className="grid grid-cols-1 gap-3">
        {technology.topics.map((topic, index) => (
         <div key={index} className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
          <span className="text-muted-foreground">{topic}</span>
         </div>
        ))}
       </div>
      </div>

      <Card>
       <CardHeader>
        <CardTitle>Progresso do Curso</CardTitle>
        <CardDescription>Acompanhe seu desenvolvimento</CardDescription>
       </CardHeader>
       <CardContent className="space-y-6">
        <div>
         <div className="flex justify-between text-sm mb-2">
          <span>Lições Completadas</span>
          <span className="font-medium">0/{technology.lessons}</span>
         </div>
         <Progress value={0} className="h-2" />
        </div>

        <div className="space-y-3">
         <div className="flex justify-between text-sm">
          <span>Tempo Estimado</span>
          <span className="font-medium">{technology.duration}</span>
         </div>
         <div className="flex justify-between text-sm">
          <span>Nível</span>
          <Badge variant={getBadgeVariant(technology.level)} className="text-xs">
           {technology.level}
          </Badge>
         </div>
         <div className="flex justify-between text-sm">
          <span>{technology.id === "html" ? "Certificado" : "Pré-requisito"}</span>
          <span className="font-medium">
           {technology.id === "html"
            ? "Disponível"
            : technology.id === "css"
             ? "HTML básico"
             : technology.id === "javascript"
              ? "HTML + CSS"
              : technology.id === "react"
               ? "JavaScript"
               : "JavaScript + React"}
          </span>
         </div>
        </div>

        <Button asChild className="w-full">
         <Link href={`/${technology.id}/tutorial`}>
          Iniciar Primeira Lição
          <ArrowRight className="ml-2 w-4 h-4" />
         </Link>
        </Button>
       </CardContent>
      </Card>
     </div>
    </div>
   </section>

   {/* Prerequisites Section */}
   <section className="py-20 px-4 sm:px-6 lg:px-8 border-t">
    <div className="max-w-4xl mx-auto">
     <Card>
      <CardHeader>
       <CardTitle className="text-2xl">Pré-requisitos</CardTitle>
       <CardDescription>O que você precisa saber antes de começar</CardDescription>
      </CardHeader>
      <CardContent>
       <div className="space-y-4">
        {technology.prerequisites.map((prereq, index) => (
         <div key={index} className="flex items-start gap-3">
          <div
           className={`w-2 h-2 ${prereq.level === "green" ? "bg-green-500" : "bg-blue-500"} rounded-full mt-2 flex-shrink-0`}
          ></div>
          <div>
           <h4 className="font-medium">{prereq.title}</h4>
           <p className="text-sm text-muted-foreground">{prereq.description}</p>
          </div>
         </div>
        ))}
       </div>
      </CardContent>
     </Card>
    </div>
   </section>

   {/* Next Steps */}
   <section className="py-20 px-4 sm:px-6 lg:px-8 border-t">
    <div className="max-w-4xl mx-auto text-center">
     <h2 className="text-3xl font-bold mb-6">Próximos Passos</h2>
     <p className="text-xl text-muted-foreground mb-8">
      {technology.id === "html" && "Após completar HTML, continue sua jornada com estas tecnologias."}
      {technology.id === "css" && "Após dominar CSS, adicione interatividade com JavaScript."}
      {technology.id === "javascript" && "Após dominar JavaScript, explore frameworks modernos como React."}
      {technology.id === "react" && "Após dominar React, explore o desenvolvimento backend com Node.js."}
      {technology.id === "nodejs" &&
       "Após dominar Node.js, você terá conhecimento completo de desenvolvimento full-stack."}
     </p>
     <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {technology.nextSteps.map((step, index) => (
       <Button key={index} variant="outline" asChild>
        <Link href={step.href}>
         {step.name}
         <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
       </Button>
      ))}
     </div>
    </div>
   </section>
  </div>
 )
}
