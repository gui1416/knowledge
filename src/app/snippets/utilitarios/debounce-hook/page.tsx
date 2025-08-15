"use client"

import { ComponentPreview } from "@/components/mdx-components"
import { useState, useEffect } from "react"

export default function DebounceHookPage() {
 return (
  <div className="container mx-auto px-4 py-8 max-w-4xl">
   <div className="mb-8">
    <h1 className="text-3xl font-bold mb-4">useDebounce Hook</h1>
    <p className="text-muted-foreground">
     Hook personalizado para debounce de valores e otimização de performance.
    </p>
   </div>

   <ComponentPreview
    title="useDebounce Hook"
    description="Hook que atrasa a atualização de um valor até que pare de mudar por um período específico"
    code={`import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function SearchExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Simula busca na API
  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      
      // Simula delay da API
      setTimeout(() => {
        const mockResults = [
          \`Resultado 1 para "\${debouncedSearchTerm}"\`,
          \`Resultado 2 para "\${debouncedSearchTerm}"\`,
          \`Resultado 3 para "\${debouncedSearchTerm}"\`
        ];
        setSearchResults(mockResults);
        setIsSearching(false);
      }, 300);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="space-y-4">
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite para buscar..."
          className="w-full px-3 py-2 border rounded-md"
        />
        <p className="text-sm text-muted-foreground mt-1">
          Valor atual: "{searchTerm}"
        </p>
        <p className="text-sm text-muted-foreground">
          Valor com debounce: "{debouncedSearchTerm}"
        </p>
      </div>

      {isSearching && (
        <div className="text-sm text-muted-foreground">
          Buscando...
        </div>
      )}

      {searchResults.length > 0 && (
        <div>
          <h4 className="font-semibold mb-2">Resultados:</h4>
          <ul className="space-y-1">
            {searchResults.map((result, index) => (
              <li key={index} className="text-sm p-2 bg-muted rounded">
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}`}
   >
    <SearchExample />
   </ComponentPreview>

   <div className="mt-12 space-y-8">
    <section>
     <h2 className="text-2xl font-semibold mb-4">Como Funciona</h2>
     <div className="prose prose-slate dark:prose-invert max-w-none">
      <p>
       O hook useDebounce atrasa a atualização de um valor até que ele pare de mudar por um período específico
       (delay). Isso é útil para:
      </p>
      <ul>
       <li>Busca em tempo real sem sobrecarregar a API</li>
       <li>Validação de formulários</li>
       <li>Redimensionamento de janela</li>
       <li>Qualquer evento que dispara frequentemente</li>
      </ul>
     </div>
    </section>

    <section>
     <h2 className="text-2xl font-semibold mb-4">Código Completo</h2>
     <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm">
       {`import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function que cancela o timeout anterior
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;`}
      </pre>
     </div>
    </section>

    <section>
     <h2 className="text-2xl font-semibold mb-4">Variações</h2>
     <div className="space-y-4">
      <div>
       <h3 className="text-lg font-semibold mb-2">useDebounceCallback</h3>
       <div className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
        <pre className="text-sm">
         {`import { useCallback, useRef } from 'react';

function useDebounceCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback(
    ((...args: Parameters<T>) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    }) as T,
    [callback, delay]
  );
}`}
        </pre>
       </div>
      </div>
     </div>
    </section>
   </div>
  </div>
 )
}

function useDebounce<T>(value: T, delay: number): T {
 const [debouncedValue, setDebouncedValue] = useState<T>(value)

 useEffect(() => {
  const handler = setTimeout(() => {
   setDebouncedValue(value)
  }, delay)

  return () => {
   clearTimeout(handler)
  }
 }, [value, delay])

 return debouncedValue
}

function SearchExample() {
 const [searchTerm, setSearchTerm] = useState("")
 const debouncedSearchTerm = useDebounce(searchTerm, 500)
 const [searchResults, setSearchResults] = useState<string[]>([])
 const [isSearching, setIsSearching] = useState(false)

 useEffect(() => {
  if (debouncedSearchTerm) {
   setIsSearching(true)

   setTimeout(() => {
    const mockResults = [
     `Resultado 1 para "${debouncedSearchTerm}"`,
     `Resultado 2 para "${debouncedSearchTerm}"`,
     `Resultado 3 para "${debouncedSearchTerm}"`,
    ]
    setSearchResults(mockResults)
    setIsSearching(false)
   }, 300)
  } else {
   setSearchResults([])
   setIsSearching(false)
  }
 }, [debouncedSearchTerm])

 return (
  <div className="space-y-4">
   <div>
    <input
     type="text"
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
     placeholder="Digite para buscar..."
     className="w-full px-3 py-2 border rounded-md"
    />
    <p className="text-sm text-muted-foreground mt-1">Valor atual: "{searchTerm}"</p>
    <p className="text-sm text-muted-foreground">Valor com debounce: "{debouncedSearchTerm}"</p>
   </div>

   {isSearching && <div className="text-sm text-muted-foreground">Buscando...</div>}

   {searchResults.length > 0 && (
    <div>
     <h4 className="font-semibold mb-2">Resultados:</h4>
     <ul className="space-y-1">
      {searchResults.map((result, index) => (
       <li key={index} className="text-sm p-2 bg-muted rounded">
        {result}
       </li>
      ))}
     </ul>
    </div>
   )}
  </div>
 )
}
