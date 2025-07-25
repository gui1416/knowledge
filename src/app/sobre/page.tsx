import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Github, Twitter } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
 return (
  <div className="min-h-screen">
   <section className="py-20 px-4 sm:px-6 lg:px-8 border-b">
    <div className="max-w-4xl mx-auto text-center">
     <h1 className="text-4xl font-bold mb-6">Sobre o Knowledge</h1>
     <p className="text-xl text-muted-foreground mb-8">
      Nossa missão é democratizar o ensino de desenvolvimento web através de tutoriais práticos, claros e
      acessíveis para todos.
     </p>
    </div>
   </section>

   <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
     <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
       <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
       <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
         O Knowledge nasceu da frustração de ver tantas pessoas desistindo de aprender programação por causa de
         tutoriais complexos e mal estruturados.
        </p>
        <p>
         Em 2025s, Guilherme decidiu criar uma plataforma diferente - uma que priorizasse a clareza, a
         praticidade e, acima de tudo, a experiência do estudante iniciante.
        </p>
        <p>
         Hoje, mais de 10.000 pessoas já começaram sua jornada no desenvolvimento web através dos nossos
         tutoriais, e continuamos crescendo todos os dias.
        </p>
       </div>
      </div>
      <div className="relative">
       <Card>
        <CardHeader>
         <CardTitle>Estatísticas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
         <div className="flex justify-between">
          <span>Estudantes</span>
          <span className="font-semibold">10k+</span>
         </div>
         <div className="flex justify-between">
          <span>Lições</span>
          <span className="font-semibold">81</span>
         </div>
         <div className="flex justify-between">
          <span>Tecnologias</span>
          <span className="font-semibold">5</span>
         </div>
         <div className="flex justify-between">
          <span>Avaliação</span>
          <span className="font-semibold">4.8</span>
         </div>
        </CardContent>
       </Card>
      </div>
     </div>
    </div>
   </section>

   <section className="py-20 px-4 sm:px-6 lg:px-8 border-t">
    <div className="max-w-4xl mx-auto">
     <Card>
      <CardContent className="p-8">
       <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Conheça o Guilherme</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
         Desenvolvedor full-stack com mais de 5 anos de experiência, Guilherme é apaixonado por ensinar e
         compartilhar conhecimento. Acredita que a programação deve ser acessível a todos e trabalha
         incansavelmente para criar conteúdo de qualidade que realmente faça a diferença na vida das pessoas.
        </p>
        <div className="flex justify-center gap-4">
         <Button variant="outline" size="sm">
          <Github className="mr-2 w-4 h-4" />
          GitHub
         </Button>
         <Button variant="outline" size="sm">
          <Twitter className="mr-2 w-4 h-4" />
          Twitter
         </Button>
         <Button variant="outline" size="sm">
          <Mail className="mr-2 w-4 h-4" />
          Email
         </Button>
        </div>
       </div>
      </CardContent>
     </Card>
    </div>
   </section>

   {/* CTA Section */}
   <section className="py-20 px-4 sm:px-6 lg:px-8 border-t">
    <div className="max-w-4xl mx-auto text-center">
     <h2 className="text-3xl font-bold mb-6">Faça Parte da Nossa Comunidade</h2>
     <p className="text-xl text-muted-foreground mb-8">
      Junte-se a milhares de desenvolvedores que já transformaram suas carreiras com nossos tutoriais.
     </p>
     <Button asChild size="lg">
      <Link href="/tutoriais">
       Começar a Aprender
       <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
     </Button>
    </div>
   </section>
  </div>
 )
}
