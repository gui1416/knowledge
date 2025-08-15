export default function FeedbackConstrutivo() {
 return (
  <div className="container mx-auto px-4 py-8 max-w-4xl">
   <div className="mb-8">
    <h1 className="text-4xl font-bold mb-4">A Arte do Feedback Construtivo</h1>
    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
     <span>📝 Reflexão</span>
     <span>•</span>
     <span>8 min de leitura</span>
     <span>•</span>
     <span>Comunicação</span>
    </div>
   </div>

   <div className="prose prose-lg max-w-none">
    <p className="text-xl text-muted-foreground mb-8">
     Como dar e receber feedback de forma efetiva no ambiente de desenvolvimento.
    </p>

    <h2>O Poder do Feedback</h2>
    <p>
     No desenvolvimento de software, o feedback é uma das ferramentas mais poderosas para crescimento. Seja em code
     reviews, reuniões de retrospectiva ou conversas informais, a forma como comunicamos nossas observações pode
     fazer a diferença entre um time que cresce junto e um que estagnou.
    </p>

    <h2>Dando Feedback Efetivo</h2>
    <p>
     Aprendi que feedback construtivo não é sobre apontar erros, mas sobre ajudar colegas a crescer. Algumas
     práticas que adoto:
    </p>
    <ul>
     <li>
      <strong>Seja específico:</strong> "Este código poderia ser mais legível" vs "Esta função tem muitas
      responsabilidades"
     </li>
     <li>
      <strong>Foque no comportamento, não na pessoa:</strong> "O código" não "Você"
     </li>
     <li>
      <strong>Ofereça soluções:</strong> Não apenas identifique problemas, sugira melhorias
     </li>
     <li>
      <strong>Reconheça o que está bom:</strong> Feedback positivo é tão importante quanto críticas construtivas
     </li>
    </ul>

    <h2>Recebendo Feedback</h2>
    <p>
     Receber feedback pode ser desafiador, especialmente quando estamos emocionalmente investidos no código.
     Algumas estratégias que me ajudam:
    </p>
    <ul>
     <li>Escutar com mente aberta, sem se defender imediatamente</li>
     <li>Fazer perguntas para entender melhor o ponto de vista</li>
     <li>Agradecer pelo tempo investido na revisão</li>
     <li>Implementar as sugestões como oportunidade de aprendizado</li>
    </ul>

    <h2>Code Reviews como Ferramenta de Crescimento</h2>
    <p>Code reviews não são apenas sobre encontrar bugs. São momentos de:</p>
    <ul>
     <li>Compartilhar conhecimento entre o time</li>
     <li>Manter consistência no código</li>
     <li>Mentorear desenvolvedores menos experientes</li>
     <li>Aprender novas abordagens e técnicas</li>
    </ul>

    <div className="bg-muted p-6 rounded-lg my-8">
     <h3 className="text-lg font-semibold mb-3">💡 Reflexão Pessoal</h3>
     <p className="text-sm">
      "Mudei minha perspectiva sobre code reviews quando comecei a vê-las como conversas colaborativas ao invés de
      avaliações. Isso transformou não apenas a qualidade do código, mas também o relacionamento com minha
      equipe."
     </p>
    </div>

    <h2>Criando uma Cultura de Feedback</h2>
    <p>Para que o feedback seja efetivo, precisa ser parte da cultura do time. Isso significa:</p>
    <ul>
     <li>Normalizar conversas sobre melhorias</li>
     <li>Celebrar quando alguém implementa sugestões</li>
     <li>Criar espaços seguros para discussões técnicas</li>
     <li>Liderar pelo exemplo, sendo receptivo ao feedback</li>
    </ul>

    <p>
     O feedback construtivo é uma habilidade que se desenvolve com prática. Quanto mais exercitamos essa
     capacidade, mais natural se torna e maior o impacto positivo no crescimento individual e coletivo.
    </p>
   </div>
  </div>
 )
}
