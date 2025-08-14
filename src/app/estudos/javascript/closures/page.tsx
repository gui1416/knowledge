import { ComponentPreview, Callout, Dica } from '@/components/mdx-components'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function ClosuresPage() {
 return (
  <div className="container mx-auto px-4 py-8 max-w-4xl">
   <div className="mb-8">
    <h1 className="text-3xl font-bold mb-4">Closures em JavaScript</h1>
    <p className="text-muted-foreground">
     Entenda como funcionam as closures e por que são fundamentais no JavaScript.
    </p>
   </div>

   <div className="prose prose-slate dark:prose-invert max-w-none">
    <h2>O que são Closures?</h2>
    <p>
     Uma closure é uma função que tem acesso ao escopo da função externa mesmo após
     a função externa ter retornado. É uma das características mais poderosas do JavaScript.
    </p>

    <Callout type="info" title="Definição">
     Uma closure dá acesso ao escopo de uma função externa a partir de uma função interna.
    </Callout>

    <h3>Exemplo Básico</h3>

    <ComponentPreview
     title="Contador com Closure"
     description="Um contador que mantém seu estado através de closure"
     code={`function criarContador() {
  let count = 0
  
  return function() {
    count++
    return count
  }
}

function ContadorExample() {
  const [contador1, setContador1] = useState(() => criarContador())
  const [contador2, setContador2] = useState(() => criarContador())
  const [valor1, setValor1] = useState(0)
  const [valor2, setValor2] = useState(0)

  const incrementar1 = () => {
    const novoValor = contador1()
    setValor1(novoValor)
    console.log('Contador 1:', novoValor)
  }

  const incrementar2 = () => {
    const novoValor = contador2()
    setValor2(novoValor)
    console.log('Contador 2:', novoValor)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button onClick={incrementar1}>
          Contador 1: {valor1}
        </Button>
        <Button onClick={incrementar2} variant="outline">
          Contador 2: {valor2}
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Cada contador mantém seu próprio estado independente
      </p>
    </div>
  )
}`}
    >
     <ContadorExample />
    </ComponentPreview>

    <Dica>
     Abra o console do navegador para ver os logs dos contadores.
     Note como cada contador mantém seu próprio estado!
    </Dica>

    <h3>Closure com Parâmetros</h3>

    <ComponentPreview
     title="Multiplicador com Closure"
     description="Função que cria multiplicadores específicos"
     code={`function criarMultiplicador(fator) {
  return function(numero) {
    return numero * fator
  }
}

function MultiplicadorExample() {
  const [resultado2x, setResultado2x] = useState(0)
  const [resultado5x, setResultado5x] = useState(0)
  const [input, setInput] = useState(10)

  const multiplicarPor2 = criarMultiplicador(2)
  const multiplicarPor5 = criarMultiplicador(5)

  const calcular = () => {
    const res2 = multiplicarPor2(input)
    const res5 = multiplicarPor5(input)
    setResultado2x(res2)
    setResultado5x(res5)
    console.log(\`\${input} x 2 = \${res2}\`)
    console.log(\`\${input} x 5 = \${res5}\`)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
          className="px-3 py-2 border rounded w-20"
        />
        <Button onClick={calcular}>Calcular</Button>
      </div>
      <div className="space-y-2">
        <p>Resultado x2: <strong>{resultado2x}</strong></p>
        <p>Resultado x5: <strong>{resultado5x}</strong></p>
      </div>
    </div>
  )
}`}
    >
     <MultiplicadorExample />
    </ComponentPreview>

    <h3>Vantagens das Closures</h3>
    <ul>
     <li><strong>Encapsulamento</strong>: Variáveis privadas que não podem ser acessadas diretamente</li>
     <li><strong>Factory Functions</strong>: Criar funções especializadas</li>
     <li><strong>Callbacks</strong>: Manter contexto em funções assíncronas</li>
     <li><strong>Módulos</strong>: Padrão de módulo para organizar código</li>
    </ul>

    <Callout type="warning" title="Cuidado com Memory Leaks">
     Closures mantêm referências às variáveis do escopo externo.
     Em alguns casos, isso pode causar vazamentos de memória se não for gerenciado adequadamente.
    </Callout>
   </div>
  </div>
 )
}

function ContadorExample() {
 function criarContador() {
  let count = 0

  return function () {
   count++
   return count
  }
 }

 const [contador1, setContador1] = useState(() => criarContador())
 const [contador2, setContador2] = useState(() => criarContador())
 const [valor1, setValor1] = useState(0)
 const [valor2, setValor2] = useState(0)

 const incrementar1 = () => {
  const novoValor = contador1()
  setValor1(novoValor)
  console.log('Contador 1:', novoValor)
 }

 const incrementar2 = () => {
  const novoValor = contador2()
  setValor2(novoValor)
  console.log('Contador 2:', novoValor)
 }

 return (
  <div className="space-y-4">
   <div className="flex items-center gap-4">
    <Button onClick={incrementar1}>
     Contador 1: {valor1}
    </Button>
    <Button onClick={incrementar2} variant="outline">
     Contador 2: {valor2}
    </Button>
   </div>
   <p className="text-sm text-muted-foreground">
    Cada contador mantém seu próprio estado independente
   </p>
  </div>
 )
}

function MultiplicadorExample() {
 function criarMultiplicador(fator: number) {
  return function (numero: number) {
   return numero * fator
  }
 }

 const [resultado2x, setResultado2x] = useState(0)
 const [resultado5x, setResultado5x] = useState(0)
 const [input, setInput] = useState(10)

 const multiplicarPor2 = criarMultiplicador(2)
 const multiplicarPor5 = criarMultiplicador(5)

 const calcular = () => {
  const res2 = multiplicarPor2(input)
  const res5 = multiplicarPor5(input)
  setResultado2x(res2)
  setResultado5x(res5)
  console.log(`${input} x 2 = ${res2}`)
  console.log(`${input} x 5 = ${res5}`)
 }

 return (
  <div className="space-y-4">
   <div className="flex items-center gap-2">
    <input
     type="number"
     value={input}
     onChange={(e) => setInput(Number(e.target.value))}
     className="px-3 py-2 border rounded w-20"
    />
    <Button onClick={calcular}>Calcular</Button>
   </div>
   <div className="space-y-2">
    <p>Resultado x2: <strong>{resultado2x}</strong></p>
    <p>Resultado x5: <strong>{resultado5x}</strong></p>
   </div>
  </div>
 )
}
