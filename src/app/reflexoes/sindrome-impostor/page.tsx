import { mdxComponents } from "@/components/mdx-components"

const { Callout, CodeBlock, Dica } = mdxComponents

export default function SindromeImpostorPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-4xl">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>A Síndrome do Impostor no Desenvolvimento</h1>

        <p>
          &quot;Eu não sei o suficiente&quot;, &quot;Qualquer hora vão descobrir que sou uma fraude&quot;,
          &quot;Todo mundo aqui é mais inteligente que eu&quot;. Se você já pensou isso,
          você não está sozinho. A síndrome do impostor é mais comum na área de
          tecnologia do que imaginamos.
        </p>

        <Callout type="info" title="O que é a Síndrome do Impostor?">
          É um padrão psicológico onde a pessoa duvida de suas conquistas e tem
          medo persistente de ser &quot;descoberta&quot; como uma fraude, apesar de evidências
          externas de sua competência.
        </Callout>

        <h2>Por que é tão comum na programação?</h2>

        <p>
          A área de tecnologia tem características únicas que alimentam esses sentimentos:
        </p>

        <h3>1. Evolução Constante</h3>
        <p>
          Novas tecnologias, frameworks e linguagens surgem constantemente.
          É impossível saber tudo, mas isso pode gerar a sensação de estar sempre atrasado.
        </p>

        <CodeBlock language="javascript" filename="evolucao-constante.js">
          {`// 2010: jQuery era o padrão
$('#myElement').fadeIn();

// 2013: Angular.js revolucionou SPAs
angular.module('myApp').controller('MyController', function($scope) {
  $scope.message = 'Hello World';
});

// 2015: React mudou o paradigma
function MyComponent() {
  return <div>Hello World</div>;
}

// 2018: Hooks transformaram React
function MyComponent() {
  const [message, setMessage] = useState('Hello World');
  return <div>{message}</div>;
}

// 2020: Next.js trouxe SSR/SSG mainstream
export async function getStaticProps() {
  return { props: { message: 'Hello World' } };
}

// 2023: Server Components, Suspense, AI...
// E a roda continua girando...`}
        </CodeBlock>

        <h3>2. Cultura do &quot;Rockstar Developer&quot;</h3>
        <p>
          A glorificação de desenvolvedores &quot;geniais&quot; que criam projetos sozinhos
          pode fazer outros se sentirem inadequados por precisarem de ajuda ou
          tempo para aprender.
        </p>

        <h3>3. Síndrome do Stack Overflow</h3>
        <p>
          Copiar código do Stack Overflow é normal e necessário, mas pode gerar
          culpa e sensação de não ser um &quot;programador de verdade&quot;.
        </p>

        <Dica>
          Lembre-se: até os desenvolvedores mais experientes consultam documentação
          e Stack Overflow diariamente. Isso não é sinal de incompetência,
          é sinal de pragmatismo.
        </Dica>

        <h2>Os Tipos de Síndrome do Impostor</h2>

        <h3>1. O Perfeccionista</h3>
        <p>
          &quot;Meu código não está bom o suficiente. Preciso refatorar tudo antes de fazer commit.&quot;
        </p>

        <CodeBlock language="typescript" filename="perfeccionista.ts">
          {`// ❌ Perfeccionista paralisa por buscar o código "perfeito"
function calculateUserScore(user: User): number {
  // Passa horas pensando na implementação "perfeita"
  // Nunca faz commit porque "pode melhorar"
  // Refatora constantemente sem necessidade
  
  // TODO: Otimizar este algoritmo
  // TODO: Adicionar mais validações
  // TODO: Considerar edge cases
  // TODO: Melhorar performance
  // TODO: Adicionar testes
  // TODO: Documentar melhor
  
  return user.points; // Implementação simples que funciona
}

// ✅ Abordagem pragmática
function calculateUserScore(user: User): number {
  // Implementação simples que resolve o problema
  // Pode ser melhorada depois se necessário
  return user.points;
}

// Commit: "feat: add basic user score calculation"
// Próximo PR: melhorias se necessário`}
        </CodeBlock>

        <h3>2. O Especialista</h3>
        <p>
          &quot;Não posso aplicar para essa vaga porque não sei 100% das tecnologias listadas.&quot;
        </p>

        <h3>3. O Gênio Natural</h3>
        <p>
          &quot;Se eu fosse realmente bom, isso seria fácil para mim. Não deveria precisar estudar tanto.&quot;
        </p>

        <h3>4. O Individualista</h3>
        <p>
          &quot;Pedir ajuda mostra que não sou capaz. Preciso resolver tudo sozinho.&quot;
        </p>

        <h3>5. O Super-herói</h3>
        <p>
          &quot;Preciso ser o melhor em tudo e ajudar todo mundo, senão não sou valioso para a equipe.&quot;
        </p>

        <h2>Sinais de que você pode estar sofrendo</h2>

        <ul>
          <li>Atribuir sucessos à sorte ou fatores externos</li>
          <li>Medo excessivo de fazer perguntas</li>
          <li>Procrastinação por medo de não fazer &quot;perfeito&quot;</li>
          <li>Comparação constante com outros desenvolvedores</li>
          <li>Sensação de que &quot;qualquer hora vão me demitir&quot;</li>
          <li>Minimizar suas próprias conquistas</li>
          <li>Trabalhar excessivamente para &quot;compensar&quot; a suposta incompetência</li>
          <li>Evitar desafios por medo de falhar</li>
        </ul>

        <h2>Como transformar a síndrome em motivação</h2>

        <h3>1. Reframe sua perspectiva</h3>

        <p>
          Em vez de ver o não-saber como falha, veja como oportunidade de crescimento.
        </p>

        <CodeBlock language="typescript" filename="reframe-perspectiva.ts">
          {`// ❌ Pensamento de impostor
"Não sei React Hooks, sou um desenvolvedor ruim"

// ✅ Pensamento de crescimento
"Não sei React Hooks AINDA, mas vou aprender"

// ❌ Pensamento de impostor
"Todo mundo sabe mais que eu"

// ✅ Pensamento de crescimento
"Cada pessoa tem conhecimentos diferentes, posso aprender com todos"

// ❌ Pensamento de impostor
"Copiei código do Stack Overflow, não sou um programador de verdade"

// ✅ Pensamento de crescimento
"Usei recursos disponíveis para resolver um problema eficientemente"

// Exemplo prático: documentando o aprendizado
interface LearningLog {
  date: string;
  topic: string;
  source: string;
  whatILearned: string;
  howIApplied: string;
}

const myLearningJourney: LearningLog[] = [
  {
    date: "2024-01-15",
    topic: "useCallback optimization",
    source: "Stack Overflow + React docs",
    whatILearned: "useCallback prevents unnecessary re-renders",
    howIApplied: "Optimized UserList component performance"
  },
  {
    date: "2024-01-16", 
    topic: "CSS Grid",
    source: "CSS Tricks article",
    whatILearned: "Grid is better than flexbox for 2D layouts",
    howIApplied: "Redesigned dashboard layout"
  }
];`}
        </CodeBlock>

        <h3>2. Documente sua jornada</h3>

        <p>
          Manter um registro do que você aprende ajuda a visualizar seu progresso
          e combater a sensação de que &quot;não sabe nada&quot;.
        </p>

        <CodeBlock language="markdown" filename="learning-journal.md">
          {`# Meu Diário de Aprendizado

## Semana 1 - Janeiro 2024

### Segunda-feira
- **Aprendi**: Como usar TypeScript generics
- **Fonte**: TypeScript handbook
- **Aplicação**: Criei função utilitária type-safe para API calls
- **Reflexão**: Generics são mais simples do que pensava!

### Terça-feira  
- **Aprendi**: CSS Container Queries
- **Fonte**: MDN docs + experimentos
- **Aplicação**: Componente responsivo sem media queries
- **Reflexão**: Futuro do CSS responsivo

### Quarta-feira
- **Problema enfrentado**: Performance issue em lista grande
- **Solução encontrada**: React.memo + useCallback
- **Fonte**: React DevTools Profiler + documentação
- **Resultado**: 60% melhoria na performance

## Conquistas da semana
- ✅ Implementei feature complexa sozinho
- ✅ Ajudei colega com problema de CSS
- ✅ Fiz code review construtivo
- ✅ Aprendi 3 conceitos novos`}
        </CodeBlock>

        <h3>3. Pratique a vulnerabilidade intelectual</h3>

        <p>
          Admitir que não sabe algo não é fraqueza, é honestidade e abertura para aprender.
        </p>

        <CodeBlock language="typescript" filename="vulnerabilidade-intelectual.ts">
          {`// ❌ Fingir que sabe
function handleComplexLogic(data: any) {
  // Implementa algo que não entende completamente
  // Código funciona por acaso
  // Não consegue explicar como funciona
  return someComplexOperation(data);
}

// ✅ Ser honesto sobre limitações
function handleComplexLogic(data: ComplexData) {
  // TODO: Preciso entender melhor este algoritmo
  // Vou estudar e refatorar depois
  
  // Por enquanto, implementação simples que funciona
  return data.items.map(item => processItem(item));
}

// ✅ Pedir ajuda de forma inteligente
/*
Slack message:
"Pessoal, estou implementando um algoritmo de ordenação 
para a lista de usuários. Já tentei quicksort mas está 
dando problema com arrays grandes. 

Alguém já enfrentou algo similar? Que abordagem vocês 
recomendam?

Context: ~10k usuários, precisa ordenar por múltiplos 
critérios (nome, data, score).

Já pesquisei: Stack Overflow, MDN docs sobre Array.sort()
Tentei: implementação própria de quicksort, merge sort

Código atual: [link para branch]"
*/

// ✅ Compartilhar conhecimento quando aprender
function efficientSort<T>(
  items: T[], 
  compareFn: (a: T, b: T) => number
): T[] {
  // Aprendi que Array.sort() nativo é otimizado
  // e geralmente melhor que implementações próprias
  // para a maioria dos casos
  
  return [...items].sort(compareFn);
}

// Documentar o aprendizado para outros
/*
Wiki entry: "Quando usar algoritmos de ordenação customizados vs nativos"
- Array.sort() é otimizado pelo engine JS
- Implementações próprias só valem para casos muito específicos  
- Benchmark sempre antes de otimizar
*/`}
        </CodeBlock>

        <h3>4. Celebre pequenas vitórias</h3>

        <p>
          Reconheça e comemore seus progressos, por menores que pareçam.
        </p>

        <Callout type="success" title="Vitórias que merecem celebração">
          <ul>
            <li>Resolveu um bug que estava te incomodando há dias</li>
            <li>Fez uma pergunta inteligente em uma reunião</li>
            <li>Ajudou um colega com um problema</li>
            <li>Aprendeu um conceito novo, mesmo que básico</li>
            <li>Escreveu código que funcionou na primeira tentativa</li>
            <li>Recebeu feedback positivo em um code review</li>
          </ul>
        </Callout>

        <h3>5. Encontre sua comunidade</h3>

        <p>
          Conecte-se com outros desenvolvedores que passam pelos mesmos desafios.
          Você descobrirá que não está sozinho.
        </p>

        <CodeBlock language="typescript" filename="comunidade-apoio.ts">
          {`// Lugares para encontrar apoio e aprendizado
const communities = {
  online: [
    'Discord servers (Rocketseat, He4rt, etc)',
    'Twitter dev community (#100DaysOfCode)',
    'Reddit (r/webdev, r/javascript, r/reactjs)',
    'Dev.to community',
    'Stack Overflow (não só para perguntar!)',
    'GitHub discussions'
  ],
  
  offline: [
    'Meetups locais',
    'Conferências e eventos',
    'Grupos de estudo',
    'Hackathons',
    'Coworking spaces'
  ],
  
  workplace: [
    'Mentorship programs',
    'Code review sessions',
    'Tech talks internos',
    'Pair programming',
    'Book clubs técnicos'
  ]
};

// Como contribuir e se sentir parte da comunidade
const waysToContribute = {
  beginner: [
    'Responder perguntas básicas no Stack Overflow',
    'Escrever sobre o que está aprendendo',
    'Compartilhar recursos úteis que encontrou',
    'Participar de discussões com curiosidade genuína'
  ],
  
  intermediate: [
    'Criar tutoriais sobre problemas que resolveu',
    'Contribuir com documentação de projetos open source',
    'Mentorear desenvolvedores iniciantes',
    'Organizar meetups ou grupos de estudo'
  ],
  
  advanced: [
    'Palestrar em eventos',
    'Manter projetos open source',
    'Escrever artigos técnicos aprofundados',
    'Criar cursos ou conteúdo educativo'
  ]
};`}
        </CodeBlock>

        <h2>Estratégias práticas para o dia a dia</h2>

        <h3>1. A regra dos 20 minutos</h3>

        <p>
          Quando estiver travado em um problema, tente por 20 minutos.
          Se não conseguir, peça ajuda. Isso evita frustração desnecessária
          e mostra que você tentou antes de pedir ajuda.
        </p>

        <h3>2. Mantenha uma &quot;brag list&quot;</h3>

        <CodeBlock language="markdown" filename="brag-list.md">
          {`# Minhas Conquistas Profissionais

## 2024

### Janeiro
- ✅ Implementei sistema de autenticação completo
- ✅ Otimizei query que estava lenta (de 3s para 200ms)
- ✅ Fiz apresentação sobre React Hooks para o time
- ✅ Ajudei 3 colegas com problemas de CSS
- ✅ Contribuí com fix em biblioteca open source

### Fevereiro  
- ✅ Liderei implementação de nova feature
- ✅ Identifiquei e corrigi bug crítico em produção
- ✅ Escrevi documentação técnica que o time elogiou
- ✅ Fiz code review que preveniu bug importante

## Feedback recebido
- "Seu código está muito mais limpo ultimamente" - Tech Lead
- "Obrigado pela ajuda com o CSS, você salvou meu dia!" - Colega
- "Boa pegada no bug de produção" - Product Manager

## Skills desenvolvidas
- TypeScript: de básico para intermediário
- Testing: aprendi Jest e Testing Library
- Performance: entendo melhor otimizações React
- Communication: melhorei explicações técnicas`}
        </CodeBlock>

        <h3>3. Pratique o &quot;teaching effect&quot;</h3>

        <p>
          Ensinar outros é uma das melhores formas de consolidar conhecimento
          e perceber o quanto você realmente sabe.
        </p>

        <CodeBlock language="typescript" filename="teaching-effect.ts">
          {`// Exemplo: explicando conceitos para consolidar aprendizado

/**
 * Explicando closures para um colega (e para mim mesmo)
 * 
 * Closure é quando uma função "lembra" de variáveis do escopo
 * onde foi criada, mesmo depois que esse escopo não existe mais.
 */

function exemploSimples() {
  const mensagem = "Olá!"; // Variável no escopo externo
  
  return function() {
    console.log(mensagem); // Função interna acessa variável externa
  };
}

const minhaFuncao = exemploSimples();
minhaFuncao(); // "Olá!" - ainda funciona!

/**
 * Por que isso é útil?
 * 1. Encapsulamento - podemos criar "variáveis privadas"
 * 2. Factory functions - criar funções personalizadas
 * 3. Callbacks que mantêm contexto
 */

// Exemplo prático que usei no projeto
function criarContador(inicial = 0) {
  let count = inicial; // "Variável privada"
  
  return {
    incrementar: () => ++count,
    decrementar: () => --count,
    valor: () => count
  };
}

const contador = criarContador(10);
console.log(contador.valor()); // 10
contador.incrementar();
console.log(contador.valor()); // 11

// A variável 'count' não pode ser acessada diretamente
// console.log(count); // ❌ ReferenceError

/**
 * Ensinando isso para outros, percebi que:
 * - Entendo melhor do que pensava
 * - Consigo explicar com exemplos práticos
 * - Ajudar outros me fez sentir mais confiante
 */`}
        </CodeBlock>

        <h3>4. Redefina &quot;ser bom em programação&quot;</h3>

        <p>
          Ser um bom desenvolvedor não é sobre saber tudo, mas sobre:
        </p>

        <ul>
          <li><strong>Resolver problemas</strong> - não necessariamente de forma elegante na primeira tentativa</li>
          <li><strong>Aprender continuamente</strong> - estar sempre disposto a crescer</li>
          <li><strong>Colaborar bem</strong> - trabalhar efetivamente em equipe</li>
          <li><strong>Comunicar claramente</strong> - explicar problemas e soluções</li>
          <li><strong>Ser pragmático</strong> - escolher soluções que funcionam</li>
          <li><strong>Ter empatia</strong> - com usuários e colegas de trabalho</li>
        </ul>

        <h2>Quando buscar ajuda profissional</h2>

        <p>
          Se a síndrome do impostor está afetando significativamente sua vida
          profissional ou pessoal, considere buscar ajuda de um psicólogo.
          Sinais de alerta incluem:
        </p>

        <ul>
          <li>Ansiedade constante relacionada ao trabalho</li>
          <li>Evitar oportunidades por medo</li>
          <li>Insônia ou problemas de saúde relacionados ao estresse</li>
          <li>Isolamento social ou profissional</li>
          <li>Pensamentos autodepreciativos constantes</li>
        </ul>

        <Callout type="warning" title="Lembre-se">
          Buscar ajuda profissional não é sinal de fraqueza. É um investimento
          em sua saúde mental e carreira. Muitos desenvolvedores bem-sucedidos
          fazem terapia regularmente.
        </Callout>

        <h2>Mensagem final</h2>

        <p>
          A síndrome do impostor é real e comum, mas não precisa definir sua carreira.
          Lembre-se de que:
        </p>

        <ul>
          <li>Todo mundo começou do zero um dia</li>
          <li>Não saber algo não te torna menos capaz</li>
          <li>Seus colegas também têm dúvidas e inseguranças</li>
          <li>Você foi contratado por uma razão</li>
          <li>Crescimento é um processo, não um destino</li>
        </ul>

        <CodeBlock language="typescript" filename="mensagem-final.ts">
          {`// Uma reflexão pessoal
const myJourney = {
  start: "Achava que nunca seria um 'programador de verdade'",
  middle: "Percebi que todo mundo está aprendendo sempre",
  current: "Foco no progresso, não na perfeição",
  future: "Continuar crescendo e ajudando outros"
};

// Para você que está lendo isso
const reminder = {
  youBelongHere: true,
  yourProgressMatters: true,
  itsOkayToNotKnow: true,
  youCanLearn: true,
  youAreEnough: true
};

console.log("Você chegou até aqui. Isso já é uma conquista! 🚀");`}
        </CodeBlock>

        <Callout type="success" title="Você não está sozinho">
          Se este artigo ressoou com você, saiba que milhares de desenvolvedores
          passam pelos mesmos sentimentos. A diferença entre quem cresce e quem
          estagnou não é a ausência de dúvidas, mas a coragem de continuar
          apesar delas.
        </Callout>

        <p>
          <em>
            &quot;O expert em qualquer coisa já foi um iniciante.&quot; - Helen Hayes
          </em>
        </p>
      </article>
    </div>
  )
}
