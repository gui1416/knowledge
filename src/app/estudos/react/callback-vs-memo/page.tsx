'use client'

import { mdxComponents } from "@/components/mdx-components"

const { Callout, CodeBlock, Dica } = mdxComponents

export default function CallbackVsMemoPage() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>useCallback vs useMemo: Quando e Como Usar</h1>

        <p>
          Os hooks useCallback e useMemo são ferramentas poderosas para otimização de performance
          em React, mas é comum haver confusão sobre quando usar cada um.
        </p>

        <Callout type="info" title="Objetivo do Artigo">
          Vamos entender as diferenças práticas entre useCallback e useMemo,
          quando usar cada um e como evitar otimizações desnecessárias.
        </Callout>

        <h2>useCallback - Memorizando Funções</h2>

        <p>
          O useCallback memoriza uma função, retornando a mesma referência
          enquanto suas dependências não mudarem.
        </p>

        <CodeBlock language="typescript" filename="useCallback-exemplo.tsx">
          {`import React, { useCallback, useState } from 'react';

interface ChildProps {
  onClick: () => void;
  name: string;
}

const Child = React.memo(({ onClick, name }: ChildProps) => {
  console.log('Child renderizou:', name);
  
  return (
    <button onClick={onClick}>
      Clique em {name}
    </button>
  );
});

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('João');

  // ❌ Sem useCallback - nova função a cada render
  const handleClickBad = () => {
    console.log('Clicou!');
  };

  // ✅ Com useCallback - mesma função enquanto deps não mudarem
  const handleClickGood = useCallback(() => {
    console.log('Clicou!');
  }, []); // Sem dependências

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
      
      <Child onClick={handleClickBad} name="Bad" />
      <Child onClick={handleClickGood} name="Good" />
    </div>
  );
}`}
        </CodeBlock>

        <Dica>
          No exemplo acima, o componente Child com handleClickBad será re-renderizado
          toda vez que Parent renderizar, mesmo sendo envolvido por React.memo.
        </Dica>

        <h2>useMemo - Memorizando Valores</h2>

        <p>
          O useMemo memoriza o resultado de um cálculo, evitando recalcular
          valores caros desnecessariamente.
        </p>

        <CodeBlock language="typescript" filename="useMemo-exemplo.tsx">
          {`import React, { useMemo, useState } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  // ❌ Sem useMemo - recalcula a cada render
  const expensiveValueBad = items.reduce((acc, item) => {
    // Simula cálculo pesado
    for (let i = 0; i < 1000000; i++) {}
    return acc + item;
  }, 0);

  // ✅ Com useMemo - só recalcula quando items mudar
  const expensiveValueGood = useMemo(() => {
    console.log('Calculando valor caro...');
    return items.reduce((acc, item) => {
      // Simula cálculo pesado
      for (let i = 0; i < 1000000; i++) {}
      return acc + item;
    }, 0);
  }, [items]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValueGood}</p>
      
      <button onClick={() => setCount(count + 1)}>
        Incrementar Count
      </button>
      
      <button onClick={() => setItems([...items, items.length + 1])}>
        Adicionar Item
      </button>
    </div>
  );
}`}
        </CodeBlock>

        <h2>Casos Práticos de Uso</h2>

        <h3>useCallback - Quando Usar</h3>

        <CodeBlock language="typescript" filename="useCallback-casos.tsx">
          {`// 1. Passando funções para componentes memorizados
const MemoizedChild = React.memo(({ onSubmit }) => {
  return <form onSubmit={onSubmit}>...</form>;
});

function Parent() {
  const handleSubmit = useCallback((data) => {
    // Lógica de submit
  }, []);

  return <MemoizedChild onSubmit={handleSubmit} />;
}

// 2. Dependência de outros hooks
function useCustomHook(callback) {
  useEffect(() => {
    // callback é dependência
    callback();
  }, [callback]);
}

function Component() {
  const stableCallback = useCallback(() => {
    // Lógica
  }, []);

  useCustomHook(stableCallback);
}`}
        </CodeBlock>

        <h3>useMemo - Quando Usar</h3>

        <CodeBlock language="typescript" filename="useMemo-casos.tsx">
          {`// 1. Cálculos caros
function DataProcessor({ data }) {
  const processedData = useMemo(() => {
    return data
      .filter(item => item.active)
      .map(item => ({
        ...item,
        computed: heavyComputation(item)
      }))
      .sort((a, b) => a.priority - b.priority);
  }, [data]);

  return <DataTable data={processedData} />;
}

// 2. Objetos como dependências
function Component({ userId }) {
  const userConfig = useMemo(() => ({
    id: userId,
    settings: getDefaultSettings(),
    permissions: calculatePermissions(userId)
  }), [userId]);

  return <UserProfile config={userConfig} />;
}

// 3. Referências estáveis para Context
function Provider({ children }) {
  const [state, setState] = useState(initialState);
  
  const contextValue = useMemo(() => ({
    state,
    actions: {
      update: (data) => setState(data),
      reset: () => setState(initialState)
    }
  }), [state]);

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}`}
        </CodeBlock>

        <Callout type="warning" title="Cuidado com Over-optimization">
          Nem sempre usar useCallback e useMemo é benéfico. Eles têm um custo próprio
          e só devem ser usados quando realmente necessário.
        </Callout>

        <h2>Quando NÃO Usar</h2>

        <CodeBlock language="typescript" filename="quando-nao-usar.tsx">
          {`// ❌ Não use para valores primitivos simples
const Component = () => {
  const [name, setName] = useState('');
  
  // Desnecessário - string simples
  const uppercaseName = useMemo(() => name.toUpperCase(), [name]);
  
  // ✅ Melhor assim
  const uppercaseNameSimple = name.toUpperCase();
};

// ❌ Não use useCallback sem React.memo
const Parent = () => {
  const [count, setCount] = useState(0);
  
  // Desnecessário se Child não é memorizado
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);
  
  return <Child onClick={handleClick} />; // Child não é React.memo
};

// ❌ Dependências que sempre mudam
const Component = () => {
  const [items, setItems] = useState([]);
  
  // Inútil - objeto sempre novo
  const config = useMemo(() => ({
    timestamp: Date.now(), // Sempre diferente!
    items: items
  }), [items]);
};`}
        </CodeBlock>

        <h2>Dicas de Performance</h2>

        <ol>
          <li><strong>Meça antes de otimizar</strong>: Use React DevTools Profiler</li>
          <li><strong>Combine com React.memo</strong>: useCallback é mais útil com componentes memorizados</li>
          <li><strong>Cuidado com dependências</strong>: Arrays e objetos sempre &quot;mudam&quot;</li>
          <li><strong>Considere o custo</strong>: Memorização tem overhead próprio</li>
        </ol>

        <CodeBlock language="typescript" filename="profiling-exemplo.tsx">
          {`// Use React DevTools para identificar re-renders desnecessários
function ProfiledComponent() {
  // Envolva componentes suspeitos com Profiler
  return (
    <Profiler id="ExpensiveComponent" onRender={onRenderCallback}>
      <ExpensiveComponent />
    </Profiler>
  );
}

function onRenderCallback(id, phase, actualDuration) {
  console.log('Component:', id);
  console.log('Phase:', phase);
  console.log('Duration:', actualDuration);
}`}
        </CodeBlock>

        <h2>Conclusão</h2>

        <p>
          useCallback e useMemo são ferramentas valiosas, mas devem ser usados com parcimônia:
        </p>

        <ul>
          <li><strong>useCallback</strong>: Para estabilizar referências de funções</li>
          <li><strong>useMemo</strong>: Para evitar cálculos caros desnecessários</li>
          <li><strong>Ambos</strong>: Só quando há benefício real de performance</li>
        </ul>

        <Callout type="success" title="Regra de Ouro">
          Otimize baseado em medições reais, não em suposições.
          Use as ferramentas de profiling do React para identificar gargalos reais.
        </Callout>
      </article>
    </div>
  )
}