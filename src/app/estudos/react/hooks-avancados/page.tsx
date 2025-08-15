'use client'

import { ComponentPreview, Callout, Dica } from '@/components/mdx-components'
import { Button } from '@/components/ui/button'
import { useState, useCallback, useMemo, useRef, useEffect } from 'react'

export default function HooksAvancadosPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Hooks Avançados do React</h1>
        <p className="text-muted-foreground">
          Explore useCallback, useMemo, useRef e outros hooks avançados com exemplos práticos.
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2>useCallback</h2>
        <p>
          O useCallback memoriza uma função, evitando que ela seja recriada a cada render.
          Útil para otimizar componentes filhos que dependem de referência de função.
        </p>

        <ComponentPreview
          title="useCallback vs Função Normal"
          description="Compare o comportamento com e sem useCallback"
          code={`function CallbackExample() {
  const [count, setCount] = useState(0)
  const [other, setOther] = useState(0)

  // Função normal - recriada a cada render
  const handleClickNormal = () => {
    console.log('Função normal chamada:', count)
  }

  // Função com useCallback - memorizada
  const handleClickCallback = useCallback(() => {
    console.log('Função callback chamada:', count)
  }, [count])

  // Função com useCallback sem dependências
  const handleClickStable = useCallback(() => {
    console.log('Função estável chamada')
  }, [])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium mb-2">Count: {count}</p>
          <Button onClick={() => setCount(c => c + 1)}>
            Incrementar Count
          </Button>
        </div>
        <div>
          <p className="text-sm font-medium mb-2">Other: {other}</p>
          <Button onClick={() => setOther(o => o + 1)} variant="outline">
            Incrementar Other
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <Button onClick={handleClickNormal} variant="secondary">
          Função Normal
        </Button>
        <Button onClick={handleClickCallback} variant="secondary">
          Com useCallback
        </Button>
        <Button onClick={handleClickStable} variant="secondary">
          Callback Estável
        </Button>
      </div>
      
      <p className="text-xs text-muted-foreground">
        Abra o console para ver quando as funções são chamadas
      </p>
    </div>
  )
}`}
        >
          <CallbackExample />
        </ComponentPreview>

        <h2>useMemo</h2>
        <p>
          O useMemo memoriza o resultado de um cálculo custoso,
          recalculando apenas quando suas dependências mudam.
        </p>

        <ComponentPreview
          title="useMemo para Cálculos Custosos"
          description="Otimize cálculos pesados com useMemo"
          code={`function MemoExample() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
  const [multiplier, setMultiplier] = useState(1)
  const [unrelated, setUnrelated] = useState(0)

  // Cálculo custoso sem useMemo
  const expensiveCalculationNormal = () => {
    console.log('Calculando sem memo...')
    return numbers.reduce((acc, num) => acc + (num * multiplier), 0)
  }

  // Cálculo custoso com useMemo
  const expensiveCalculationMemo = useMemo(() => {
    console.log('Calculando com memo...')
    return numbers.reduce((acc, num) => acc + (num * multiplier), 0)
  }, [numbers, multiplier])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Multiplicador: {multiplier}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={multiplier}
            onChange={(e) => setMultiplier(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Não relacionado: {unrelated}</label>
          <Button onClick={() => setUnrelated(u => u + 1)} size="sm">
            Incrementar
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <p>Resultado sem memo: <strong>{expensiveCalculationNormal()}</strong></p>
        <p>Resultado com memo: <strong>{expensiveCalculationMemo}</strong></p>
      </div>

      <p className="text-xs text-muted-foreground">
        Veja no console quando cada cálculo é executado
      </p>
    </div>
  )
}`}
        >
          <MemoExample />
        </ComponentPreview>

        <h2>useRef</h2>
        <p>
          O useRef cria uma referência mutável que persiste durante todo o ciclo de vida do componente.
          Útil para acessar elementos DOM e armazenar valores que não causam re-render.
        </p>

        <ComponentPreview
          title="useRef para DOM e Valores Persistentes"
          description="Diferentes usos do useRef"
          code={`function RefExample() {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null)
  const renderCountRef = useRef(0)
  const previousCountRef = useRef(0)

  // Incrementa contador de renders
  renderCountRef.current += 1

  useEffect(() => {
    previousCountRef.current = count
  })

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm mb-2">Renders: {renderCountRef.current}</p>
        <p className="text-sm mb-2">Count atual: {count}</p>
        <p className="text-sm mb-2">Count anterior: {previousCountRef.current}</p>
      </div>

      <div className="flex gap-2">
        <Button onClick={() => setCount(c => c + 1)}>
          Incrementar ({count})
        </Button>
        <Button onClick={() => setCount(c => c - 1)} variant="outline">
          Decrementar
        </Button>
      </div>

      <div className="space-y-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="Digite algo..."
          className="px-3 py-2 border rounded w-full"
        />
        <div className="flex gap-2">
          <Button onClick={focusInput} size="sm">
            Focar Input
          </Button>
          <Button onClick={clearInput} size="sm" variant="outline">
            Limpar Input
          </Button>
        </div>
      </div>
    </div>
  )
}`}
        >
          <RefExample />
        </ComponentPreview>

        <Dica>
          useRef é perfeito para valores que precisam persistir entre renders
          mas não devem causar re-renderização quando alterados.
        </Dica>

        <Callout type="info" title="Quando usar cada hook?">
          <ul>
            <li><strong>useCallback</strong>: Para memorizar funções e evitar re-renders desnecessários</li>
            <li><strong>useMemo</strong>: Para memorizar resultados de cálculos custosos</li>
            <li><strong>useRef</strong>: Para referências DOM e valores que não causam re-render</li>
          </ul>
        </Callout>
      </div>
    </div>
  )
}

function CallbackExample() {
  const [count, setCount] = useState(0)
  const [other, setOther] = useState(0)

  const handleClickNormal = () => {
    console.log('Função normal chamada:', count)
  }

  const handleClickCallback = useCallback(() => {
    console.log('Função callback chamada:', count)
  }, [count])

  const handleClickStable = useCallback(() => {
    console.log('Função estável chamada')
  }, [])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium mb-2">Count: {count}</p>
          <Button onClick={() => setCount(c => c + 1)}>
            Incrementar Count
          </Button>
        </div>
        <div>
          <p className="text-sm font-medium mb-2">Other: {other}</p>
          <Button onClick={() => setOther(o => o + 1)} variant="outline">
            Incrementar Other
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Button onClick={handleClickNormal} variant="secondary">
          Função Normal
        </Button>
        <Button onClick={handleClickCallback} variant="secondary">
          Com useCallback
        </Button>
        <Button onClick={handleClickStable} variant="secondary">
          Callback Estável
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        Abra o console para ver quando as funções são chamadas
      </p>
    </div>
  )
}

function MemoExample() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
  const [multiplier, setMultiplier] = useState(1)
  const [unrelated, setUnrelated] = useState(0)

  const expensiveCalculationNormal = () => {
    console.log('Calculando sem memo...')
    return numbers.reduce((acc, num) => acc + (num * multiplier), 0)
  }

  const expensiveCalculationMemo = useMemo(() => {
    console.log('Calculando com memo...')
    return numbers.reduce((acc, num) => acc + (num * multiplier), 0)
  }, [numbers, multiplier])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Multiplicador: {multiplier}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={multiplier}
            onChange={(e) => setMultiplier(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Não relacionado: {unrelated}</label>
          <Button onClick={() => setUnrelated(u => u + 1)} size="sm">
            Incrementar
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <p>Resultado sem memo: <strong>{expensiveCalculationNormal()}</strong></p>
        <p>Resultado com memo: <strong>{expensiveCalculationMemo}</strong></p>
      </div>

      <p className="text-xs text-muted-foreground">
        Veja no console quando cada cálculo é executado
      </p>
    </div>
  )
}

function RefExample() {
  const [count, setCount] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const renderCountRef = useRef(0)
  const previousCountRef = useRef(0)

  renderCountRef.current += 1

  useEffect(() => {
    previousCountRef.current = count
  })

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm mb-2">Renders: {renderCountRef.current}</p>
        <p className="text-sm mb-2">Count atual: {count}</p>
        <p className="text-sm mb-2">Count anterior: {previousCountRef.current}</p>
      </div>

      <div className="flex gap-2">
        <Button onClick={() => setCount(c => c + 1)}>
          Incrementar ({count})
        </Button>
        <Button onClick={() => setCount(c => c - 1)} variant="outline">
          Decrementar
        </Button>
      </div>

      <div className="space-y-2">
        <input
          ref={inputRef}
          type="text"
          placeholder="Digite algo..."
          className="px-3 py-2 border rounded w-full"
        />
        <div className="flex gap-2">
          <Button onClick={focusInput} size="sm">
            Focar Input
          </Button>
          <Button onClick={clearInput} size="sm" variant="outline">
            Limpar Input
          </Button>
        </div>
      </div>
    </div>
  )
}