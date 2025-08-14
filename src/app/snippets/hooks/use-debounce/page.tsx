import { mdxComponents } from "@/components/mdx-components"

const { Callout, CodeBlock, Dica } = mdxComponents

export default function UseDebounceHookPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-4xl">
   <article className="prose prose-slate dark:prose-invert max-w-none">
    <h1>useDebounce Hook</h1>

    <p>
     Hook personalizado para implementar debounce em valores e funções,
     muito útil para otimizar chamadas de API e melhorar a performance da aplicação.
    </p>

    <Callout type="info" title="O que é Debounce?">
     Debounce é uma técnica que atrasa a execução de uma função até que
     um determinado tempo tenha passado desde a última vez que foi chamada.
    </Callout>

    <h2>Implementação do Hook</h2>

    <CodeBlock language="typescript" filename="hooks/useDebounce.ts">
     {`import { useState, useEffect } from 'react';

/**
 * Hook para debounce de valores
 * @param value - Valor a ser "debouncado"
 * @param delay - Delay em milissegundos
 * @returns Valor debouncado
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Cria um timer que atualiza o valor debouncado após o delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Limpa o timer se o valor mudar antes do delay
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Hook para debounce de funções
 * @param callback - Função a ser executada
 * @param delay - Delay em milissegundos
 * @param deps - Dependências da função
 * @returns Função debouncada
 */
export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
  deps: React.DependencyList = []
): T {
  const [debouncedCallback, setDebouncedCallback] = useState<T | null>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCallback(() => callback);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay, ...deps]);

  return debouncedCallback || callback;
}`}
    </CodeBlock>

    <h2>Exemplo Prático - Busca com API</h2>

    <CodeBlock language="typescript" filename="components/SearchInput.tsx">
     {`import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';

interface SearchResult {
  id: string;
  title: string;
  description: string;
}

export function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Debounce do termo de busca com 500ms de delay
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchAPI(debouncedSearchTerm);
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  const searchAPI = async (term: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(\`/api/search?q=\${encodeURIComponent(term)}\`);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Erro na busca:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Digite para buscar..."
        className="search-input"
      />
      
      {isLoading && <div className="loading">Buscando...</div>}
      
      <div className="results">
        {results.map((result) => (
          <div key={result.id} className="result-item">
            <h3>{result.title}</h3>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`}
    </CodeBlock>

    <Dica>
     No exemplo acima, a API só é chamada 500ms após o usuário parar de digitar,
     evitando chamadas desnecessárias e melhorando a performance.
    </Dica>

    <h2>Versão Avançada com Cancelamento</h2>

    <CodeBlock language="typescript" filename="hooks/useAdvancedDebounce.ts">
     {`import { useState, useEffect, useRef, useCallback } from 'react';

export function useAdvancedDebounce<T>(
  value: T,
  delay: number,
  options: {
    leading?: boolean; // Executa imediatamente na primeira chamada
    trailing?: boolean; // Executa após o delay (padrão)
    maxWait?: number; // Tempo máximo para aguardar
  } = {}
) {
  const { leading = false, trailing = true, maxWait } = options;
  
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const maxTimeoutRef = useRef<NodeJS.Timeout>();
  const lastCallTimeRef = useRef<number>();
  const lastInvokeTimeRef = useRef<number>(0);

  const invokeFunc = useCallback(() => {
    setDebouncedValue(value);
    lastInvokeTimeRef.current = Date.now();
  }, [value]);

  const leadingEdge = useCallback(() => {
    lastInvokeTimeRef.current = Date.now();
    if (leading) {
      invokeFunc();
    }
  }, [leading, invokeFunc]);

  const remainingWait = useCallback((time: number) => {
    const timeSinceLastCall = time - (lastCallTimeRef.current || 0);
    const timeSinceLastInvoke = time - lastInvokeTimeRef.current;
    const timeWaiting = delay - timeSinceLastCall;

    return maxWait !== undefined
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }, [delay, maxWait]);

  const shouldInvoke = useCallback((time: number) => {
    const timeSinceLastCall = time - (lastCallTimeRef.current || 0);
    const timeSinceLastInvoke = time - lastInvokeTimeRef.current;

    return (
      lastCallTimeRef.current === undefined ||
      timeSinceLastCall >= delay ||
      timeSinceLastCall < 0 ||
      (maxWait !== undefined && timeSinceLastInvoke >= maxWait)
    );
  }, [delay, maxWait]);

  const timerExpired = useCallback(() => {
    const time = Date.now();
    if (shouldInvoke(time)) {
      if (trailing) {
        invokeFunc();
      }
      if (maxTimeoutRef.current) {
        clearTimeout(maxTimeoutRef.current);
      }
      return;
    }
    
    const remaining = remainingWait(time);
    timeoutRef.current = setTimeout(timerExpired, remaining);
  }, [shouldInvoke, trailing, invokeFunc, remainingWait]);

  useEffect(() => {
    const time = Date.now();
    lastCallTimeRef.current = time;

    if (shouldInvoke(time)) {
      leadingEdge();
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(timerExpired, delay);

    if (maxWait !== undefined && !maxTimeoutRef.current) {
      maxTimeoutRef.current = setTimeout(() => {
        if (trailing) {
          invokeFunc();
        }
      }, maxWait);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (maxTimeoutRef.current) {
        clearTimeout(maxTimeoutRef.current);
      }
    };
  }, [value, delay, shouldInvoke, leadingEdge, timerExpired, trailing, invokeFunc, maxWait]);

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (maxTimeoutRef.current) {
      clearTimeout(maxTimeoutRef.current);
    }
    lastInvokeTimeRef.current = 0;
    lastCallTimeRef.current = undefined;
  }, []);

  const flush = useCallback(() => {
    if (timeoutRef.current) {
      invokeFunc();
      cancel();
    }
  }, [invokeFunc, cancel]);

  return {
    debouncedValue,
    cancel,
    flush
  };
}`}
    </CodeBlock>

    <h2>Casos de Uso Comuns</h2>

    <h3>1. Validação de Formulário</h3>

    <CodeBlock language="typescript" filename="components/FormValidation.tsx">
     {`function FormValidation() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const debouncedEmail = useDebounce(email, 300);

  useEffect(() => {
    if (debouncedEmail) {
      validateEmail(debouncedEmail);
    }
  }, [debouncedEmail]);

  const validateEmail = async (email: string) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsValid(isValidEmail);
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email"
      />
      {isValid === false && <span>Email inválido</span>}
      {isValid === true && <span>Email válido</span>}
    </div>
  );
}`}
    </CodeBlock>

    <h3>2. Redimensionamento de Janela</h3>

    <CodeBlock language="typescript" filename="hooks/useWindowSize.ts">
     {`function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const debouncedSize = useDebounce(windowSize, 150);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return debouncedSize;
}`}
    </CodeBlock>

    <Callout type="warning" title="Cuidados Importantes">
     <ul>
      <li>Não use delays muito baixos (menos de 100ms) - pode não ter efeito</li>
      <li>Considere o contexto: busca pode usar 300-500ms, resize 100-200ms</li>
      <li>Lembre-se de limpar timeouts em componentes que podem desmontar</li>
     </ul>
    </Callout>

    <h2>Testes</h2>

    <CodeBlock language="typescript" filename="__tests__/useDebounce.test.ts">
     {`import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '../hooks/useDebounce';

jest.useFakeTimers();

describe('useDebounce', () => {
  it('should debounce value changes', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'initial', delay: 500 } }
    );

    expect(result.current).toBe('initial');

    // Muda o valor
    rerender({ value: 'updated', delay: 500 });
    expect(result.current).toBe('initial'); // Ainda não mudou

    // Avança o tempo
    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe('updated'); // Agora mudou
  });

  it('should cancel previous timeout on rapid changes', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: 'first', delay: 500 } }
    );

    rerender({ value: 'second', delay: 500 });
    
    act(() => {
      jest.advanceTimersByTime(250); // Meio caminho
    });
    
    rerender({ value: 'third', delay: 500 });
    
    act(() => {
      jest.advanceTimersByTime(500); // Completa o segundo timeout
    });

    expect(result.current).toBe('third'); // Deve ser o último valor
  });
});`}
    </CodeBlock>

    <h2>Conclusão</h2>

    <p>
     O hook useDebounce é uma ferramenta essencial para otimização de performance,
     especialmente útil em:
    </p>

    <ul>
     <li>Campos de busca e autocomplete</li>
     <li>Validação de formulários em tempo real</li>
     <li>Eventos de scroll e resize</li>
     <li>Chamadas de API frequentes</li>
    </ul>

    <Callout type="success" title="Benefícios">
     Implementar debounce corretamente pode reduzir significativamente
     o número de chamadas de API e melhorar a experiência do usuário.
    </Callout>
   </article>
  </div>
 )
}
