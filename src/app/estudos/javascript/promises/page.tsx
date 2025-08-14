import { mdxComponents } from "@/components/mdx-components"

const { Callout, CodeBlock, Dica } = mdxComponents

export default function PromisesPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-4xl">
   <article className="prose prose-slate dark:prose-invert max-w-none">
    <h1>Promises e Async/Await em JavaScript</h1>

    <p>
     As Promises são uma das funcionalidades mais importantes do JavaScript moderno,
     permitindo o tratamento elegante de operações assíncronas.
    </p>

    <Callout type="info" title="O que você vai aprender">
     Neste estudo, vamos explorar desde os conceitos básicos de Promises até
     padrões avançados com async/await, tratamento de erros e composição de operações assíncronas.
    </Callout>

    <h2>O que são Promises?</h2>

    <p>
     Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma
     operação assíncrona e seu valor resultante.
    </p>

    <CodeBlock language="javascript" filename="promise-basica.js">
     {`const minhaPromise = new Promise((resolve, reject) => {
  // Operação assíncrona
  setTimeout(() => {
    const sucesso = true;
    
    if (sucesso) {
      resolve("Operação concluída com sucesso!");
    } else {
      reject("Algo deu errado!");
    }
  }, 1000);
});

minhaPromise
  .then(resultado => console.log(resultado))
  .catch(erro => console.error(erro));`}
    </CodeBlock>

    <h2>Estados de uma Promise</h2>

    <p>Uma Promise pode estar em um de três estados:</p>

    <ul>
     <li><strong>Pending</strong>: Estado inicial, nem fulfilled nem rejected</li>
     <li><strong>Fulfilled</strong>: A operação foi concluída com sucesso</li>
     <li><strong>Rejected</strong>: A operação falhou</li>
    </ul>

    <Dica>
     Uma vez que uma Promise é resolvida (fulfilled ou rejected),
     ela não pode mudar de estado. Isso garante previsibilidade no código.
    </Dica>

    <h2>Async/Await - Sintaxe Moderna</h2>

    <p>
     O async/await é uma sintaxe mais limpa para trabalhar com Promises,
     tornando o código assíncrono mais legível.
    </p>

    <CodeBlock language="javascript" filename="async-await.js">
     {`async function buscarDados() {
  try {
    const resposta = await fetch('/api/dados');
    const dados = await resposta.json();
    
    console.log('Dados recebidos:', dados);
    return dados;
  } catch (erro) {
    console.error('Erro ao buscar dados:', erro);
    throw erro;
  }
}

// Uso da função
buscarDados()
  .then(dados => {
    // Processar dados
  })
  .catch(erro => {
    // Tratar erro
  });`}
    </CodeBlock>

    <h2>Padrões Avançados</h2>

    <h3>Promise.all() - Execução Paralela</h3>

    <p>
     Use Promise.all() quando precisar executar múltiplas operações assíncronas
     em paralelo e aguardar todas elas.
    </p>

    <CodeBlock language="javascript" filename="promise-all.js">
     {`async function buscarTodosDados() {
  try {
    const [usuarios, posts, comentarios] = await Promise.all([
      fetch('/api/usuarios').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comentarios').then(r => r.json())
    ]);

    return { usuarios, posts, comentarios };
  } catch (erro) {
    // Se qualquer uma falhar, todas falham
    console.error('Erro ao buscar dados:', erro);
  }
}`}
    </CodeBlock>

    <h3>Promise.allSettled() - Aguardar Todas</h3>

    <p>
     Diferente do Promise.all(), o allSettled() aguarda todas as promises
     terminarem, independente de sucesso ou falha.
    </p>

    <CodeBlock language="javascript" filename="promise-allsettled.js">
     {`async function buscarDadosComFallback() {
  const resultados = await Promise.allSettled([
    fetch('/api/dados-primarios'),
    fetch('/api/dados-secundarios'),
    fetch('/api/dados-cache')
  ]);

  const sucessos = resultados
    .filter(resultado => resultado.status === 'fulfilled')
    .map(resultado => resultado.value);

  const falhas = resultados
    .filter(resultado => resultado.status === 'rejected')
    .map(resultado => resultado.reason);

  console.log('Sucessos:', sucessos.length);
  console.log('Falhas:', falhas.length);
}`}
    </CodeBlock>

    <Callout type="warning" title="Cuidado com o Tratamento de Erros">
     Sempre trate erros adequadamente em operações assíncronas.
     Erros não tratados podem causar comportamentos inesperados na aplicação.
    </Callout>

    <h2>Boas Práticas</h2>

    <ol>
     <li><strong>Sempre trate erros</strong> com try/catch ou .catch()</li>
     <li><strong>Use async/await</strong> para código mais legível</li>
     <li><strong>Evite callback hell</strong> usando Promises</li>
     <li><strong>Use Promise.all()</strong> para operações paralelas</li>
     <li><strong>Considere timeouts</strong> para operações que podem travar</li>
    </ol>

    <CodeBlock language="javascript" filename="timeout-promise.js">
     {`function comTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), ms)
    )
  ]);
}

// Uso
try {
  const dados = await comTimeout(
    fetch('/api/dados-lentos'),
    5000 // 5 segundos de timeout
  );
} catch (erro) {
  if (erro.message === 'Timeout') {
    console.log('Operação muito lenta, cancelada');
  }
}`}
    </CodeBlock>

    <h2>Conclusão</h2>

    <p>
     Promises e async/await são fundamentais para o JavaScript moderno.
     Dominar esses conceitos é essencial para criar aplicações robustas e performáticas.
    </p>

    <Callout type="success" title="Próximos Passos">
     Agora que você entende Promises, explore tópicos relacionados como
     Generators, Web Workers e Streams para operações assíncronas mais avançadas.
    </Callout>
   </article>
  </div>
 )
}
