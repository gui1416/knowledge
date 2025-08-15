import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Heart, BookOpen, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function AprendizadoContinuoPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-4xl">

   <div className="mb-8">
    <Button variant="ghost" size="sm" asChild className="mb-4">
     <Link href="/reflexoes">
      <ArrowLeft className="mr-2 h-4 w-4" />
      Voltar às Reflexões
     </Link>
    </Button>

    <div className="flex items-center gap-3 mb-4">
     <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
      <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
     </div>
     <div>
      <h1 className="text-3xl font-bold">A Jornada do Aprendizado Contínuo</h1>
      <div className="flex items-center gap-4 mt-2">
       <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Aprendizado</Badge>
       <div className="flex items-center gap-1 text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <span>15 Jan 2024</span>
       </div>
       <div className="flex items-center gap-1 text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span>8 min de leitura</span>
       </div>
      </div>
     </div>
    </div>
   </div>

   <article className="prose prose-lg dark:prose-invert max-w-none">
    <div className="bg-muted/50 rounded-lg p-6 mb-8">
     <p className="text-lg leading-relaxed m-0">
      Depois de mais de 5 anos na área de desenvolvimento, uma coisa se tornou cristalina: o aprendizado nunca
      para. E isso não é apenas uma necessidade profissional, é o que mantém a paixão pela tecnologia viva.
     </p>
    </div>

    <h2 className="flex items-center gap-2">
     <Lightbulb className="h-6 w-6" />O Paradoxo do Conhecimento
    </h2>

    <p>
     Quanto mais aprendemos, mais percebemos o quanto não sabemos. Esse paradoxo, que inicialmente pode ser
     desencorajador, na verdade é libertador. Ele nos lembra que sempre há espaço para crescimento e que a
     humildade é uma das qualidades mais importantes de um desenvolvedor.
    </p>

    <blockquote>&quot;A única constante na tecnologia é a mudança. Quem não se adapta, fica para trás.&quot;</blockquote>

    <h2>Estratégias que Funcionam</h2>

    <p>
     Ao longo dos anos, desenvolvi algumas estratégias que têm se mostrado eficazes para manter o aprendizado
     constante sem me sobrecarregar:
    </p>

    <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
     <Card>
      <CardHeader>
       <CardTitle className="text-lg">📚 Aprendizado Estruturado</CardTitle>
      </CardHeader>
      <CardContent>
       <ul className="space-y-2 text-sm">
        <li>• 30 minutos diários de estudo focado</li>
        <li>• Um curso online por trimestre</li>
        <li>• Documentação oficial como fonte primária</li>
        <li>• Anotações organizadas por tópico</li>
       </ul>
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle className="text-lg">🛠️ Aprendizado Prático</CardTitle>
      </CardHeader>
      <CardContent>
       <ul className="space-y-2 text-sm">
        <li>• Projetos pessoais experimentais</li>
        <li>• Contribuições para open source</li>
        <li>• Code reviews como ferramenta de aprendizado</li>
        <li>• Pair programming com colegas</li>
       </ul>
      </CardContent>
     </Card>
    </div>

    <h2>A Importância da Comunidade</h2>

    <p>
     Uma das descobertas mais valiosas foi perceber que aprender sozinho é muito mais difícil. A comunidade de
     desenvolvedores é incrivelmente generosa em compartilhar conhecimento. Participar de meetups, conferências e
     fóruns online não apenas acelera o aprendizado, mas também cria conexões valiosas.
    </p>

    <h2>Lidando com a Síndrome do Impostor</h2>

    <p>
     É impossível falar de aprendizado contínuo sem mencionar a síndrome do impostor. Ela é especialmente comum em
     nossa área, onde sempre há alguém que sabe mais sobre algum tópico específico. A chave é entender que:
    </p>

    <ul>
     <li>Ninguém sabe tudo sobre tudo</li>
     <li>Cada pessoa tem sua própria jornada e ritmo</li>
     <li>Fazer perguntas é sinal de inteligência, não ignorância</li>
     <li>Erros são oportunidades de aprendizado, não fracassos</li>
    </ul>

    <h2>O Equilíbrio é Fundamental</h2>

    <p>
     Aprendi da forma mais difícil que tentar aprender tudo ao mesmo tempo leva ao burnout. É melhor focar em uma
     ou duas tecnologias por vez e realmente dominá-las do que ter conhecimento superficial de muitas.
    </p>

    <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 my-8">
     <h3 className="text-blue-800 dark:text-blue-200 mb-3">💡 Dica Prática</h3>
     <p className="text-blue-700 dark:text-blue-300 m-0">
      Mantenha um &quot;learning log&quot; - um documento onde você anota o que aprendeu a cada semana. É incrível ver o
      progresso acumulado ao longo do tempo e serve como motivação nos dias mais difíceis.
     </p>
    </div>

    <h2>Olhando para o Futuro</h2>

    <p>
     O campo da tecnologia continuará evoluindo rapidamente. IA, Web3, computação quântica - sempre haverá algo
     novo no horizonte. Mas isso não deve nos assustar. Se desenvolvermos o hábito do aprendizado contínuo,
     estaremos preparados para qualquer mudança que vier.
    </p>

    <p>
     O mais importante é lembrar que aprender deve ser prazeroso. Se você está se forçando demais ou perdendo a
     paixão pela tecnologia, talvez seja hora de reavaliar sua abordagem. O aprendizado contínuo é uma maratona,
     não uma corrida.
    </p>
   </article>

   <div className="mt-12 pt-8 border-t">
    <div className="flex items-center justify-between mb-6">
     <div className="flex flex-wrap gap-2">
      <Badge variant="outline">aprendizado</Badge>
      <Badge variant="outline">carreira</Badge>
      <Badge variant="outline">desenvolvimento-pessoal</Badge>
      <Badge variant="outline">tecnologia</Badge>
     </div>

     <div className="flex items-center gap-4 text-muted-foreground">
      <div className="flex items-center gap-1">
       <Heart className="h-4 w-4" />
       <span>42</span>
      </div>
      <div className="flex items-center gap-1">
       <BookOpen className="h-4 w-4" />
       <span>156 visualizações</span>
      </div>
     </div>
    </div>

    <div>
     <h3 className="text-lg font-semibold mb-4">Reflexões Relacionadas</h3>
     <div className="grid md:grid-cols-2 gap-4">
      <Card>
       <CardContent className="p-4">
        <h4 className="font-medium mb-2">
         <Link href="/reflexoes/burnout-e-saude-mental" className="hover:underline">
          Burnout e Saúde Mental na Tech
         </Link>
        </h4>
        <p className="text-sm text-muted-foreground">Como reconhecer os sinais e manter o equilíbrio...</p>
       </CardContent>
      </Card>

      <Card>
       <CardContent className="p-4">
        <h4 className="font-medium mb-2">
         <Link href="/reflexoes/feedback-e-crescimento" className="hover:underline">
          O Poder do Feedback Construtivo
         </Link>
        </h4>
        <p className="text-sm text-muted-foreground">Como dar e receber feedback de forma efetiva...</p>
       </CardContent>
      </Card>
     </div>
    </div>
   </div>
  </div>
 )
}
