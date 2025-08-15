import { mdxComponents } from "@/components/mdx-components"

const { Callout, CodeBlock, Dica } = mdxComponents

export default function AppRouterPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-4xl">
   <article className="prose prose-slate dark:prose-invert max-w-none">
    <h1>Next.js App Router - Guia Completo</h1>

    <p>
     O App Router é a nova arquitetura de roteamento do Next.js 13+, baseada em React Server Components e
     oferecendo melhor performance e experiência de desenvolvimento.
    </p>

    <Callout type="info" title="Nova Era do Next.js">
     O App Router representa uma mudança fundamental na forma como construímos aplicações Next.js, com foco em
     Server Components e streaming.
    </Callout>

    <h2>Estrutura de Pastas</h2>

    <p>No App Router, a estrutura de pastas define automaticamente as rotas da aplicação.</p>

    <CodeBlock language="bash" filename="estrutura-app-router">
     {`app/
├── layout.tsx          # Layout raiz
├── page.tsx           # Página inicial (/)
├── loading.tsx        # UI de loading
├── error.tsx          # UI de erro
├── not-found.tsx      # Página 404
├── global-error.tsx   # Erro global
│
├── about/
│   └── page.tsx       # /about
│
├── blog/
│   ├── page.tsx       # /blog
│   ├── loading.tsx    # Loading específico do blog
│   └── [slug]/
│       └── page.tsx   # /blog/[slug]
│
└── dashboard/
    ├── layout.tsx     # Layout aninhado
    ├── page.tsx       # /dashboard
    ├── settings/
    │   └── page.tsx   # /dashboard/settings
    └── (overview)/    # Grupo de rotas
        └── page.tsx   # /dashboard (mesmo que acima)`}
    </CodeBlock>

    <h2>Server vs Client Components</h2>

    <p>
     Por padrão, todos os componentes no App Router são Server Components, executados no servidor para melhor
     performance.
    </p>

    <CodeBlock language="typescript" filename="server-component.tsx">
     {`// Server Component (padrão)
// Executa no servidor, pode acessar banco de dados diretamente
async function BlogPost({ params }: { params: { slug: string } }) {
  // Fetch de dados no servidor
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`)
    .then(res => res.json());

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Publicado em: {new Date(post.date).toLocaleDateString()}</p>
    </article>
  );
}

export default BlogPost;`}
    </CodeBlock>

    <CodeBlock language="typescript" filename="client-component.tsx">
     {`'use client' // Diretiva para Client Component

import { useState } from 'react';

// Client Component
// Executa no navegador, pode usar hooks e interatividade
function InteractiveCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default InteractiveCounter;`}
    </CodeBlock>

    <Dica>
     Use Server Components sempre que possível para melhor performance. Reserve Client Components apenas para
     interatividade que requer JavaScript no browser.
    </Dica>

    <h2>Layouts Aninhados</h2>

    <p>
     Os layouts no App Router são aninhados automaticamente, permitindo interfaces consistentes em diferentes
     níveis da aplicação.
    </p>

    <CodeBlock language="typescript" filename="layout-raiz.tsx">
     {`// app/layout.tsx - Layout raiz
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <nav>Navegação Global</nav>
        </header>
        <main>{children}</main>
        <footer>Rodapé Global</footer>
      </body>
    </html>
  );
}`}
    </CodeBlock>

    <CodeBlock language="typescript" filename="layout-aninhado.tsx">
     {`// app/dashboard/layout.tsx - Layout do dashboard
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-container">
      <aside>
        <nav>
          <a href="/dashboard">Overview</a>
          <a href="/dashboard/settings">Configurações</a>
          <a href="/dashboard/profile">Perfil</a>
        </nav>
      </aside>
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
}`}
    </CodeBlock>

    <h2>Loading e Error States</h2>

    <p>O App Router oferece arquivos especiais para gerenciar estados de loading e erro de forma declarativa.</p>

    <CodeBlock language="typescript" filename="loading.tsx">
     {`// app/blog/loading.tsx
export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner" />
      <p>Carregando posts...</p>
    </div>
  );
}

// app/blog/error.tsx
'use client' // Error components devem ser Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-container">
      <h2>Algo deu errado!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>
        Tentar novamente
      </button>
    </div>
  );
}`}
    </CodeBlock>

    <h2>Data Fetching</h2>

    <p>No App Router, o data fetching é simplificado com async/await diretamente nos Server Components.</p>

    <CodeBlock language="typescript" filename="data-fetching.tsx">
     {`// Fetch simples
async function Posts() {
  const posts = await fetch('https://api.example.com/posts', {
    // Revalidação a cada 60 segundos
    next: { revalidate: 60 }
  }).then(res => res.json());

  return (
    <div>
      {posts.map((post: any) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

// Fetch com cache personalizado
async function UserProfile({ userId }: { userId: string }) {
  const user = await fetch(\`https://api.example.com/users/\${userId}\`, {
    // Cache até ser invalidado manualmente
    cache: 'force-cache'
  }).then(res => res.json());

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// Fetch sem cache (sempre fresh)
async function RealTimeData() {
  const data = await fetch('https://api.example.com/live-data', {
    cache: 'no-store'
  }).then(res => res.json());

  return <div>Dados em tempo real: {data.value}</div>;
}`}
    </CodeBlock>

    <h2>Route Handlers (API Routes)</h2>

    <p>
     Os Route Handlers substituem as API Routes do Pages Router, oferecendo mais flexibilidade e melhor integração.
    </p>

    <CodeBlock language="typescript" filename="route-handler.ts">
     {`// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';

// GET /api/posts
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get('page') || '1';
  
  const posts = await fetchPosts(parseInt(page));
  
  return NextResponse.json(posts);
}

// POST /api/posts
export async function POST(request: NextRequest) {
  const body = await request.json();
  
  const newPost = await createPost(body);
  
  return NextResponse.json(newPost, { status: 201 });
}

// app/api/posts/[id]/route.ts
// GET /api/posts/123
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const post = await fetchPost(params.id);
  
  if (!post) {
    return NextResponse.json(
      { error: 'Post não encontrado' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(post);
}`}
    </CodeBlock>

    <h2>Middleware</h2>

    <p>
     O middleware no App Router permite interceptar requests antes que cheguem às rotas, ideal para autenticação e
     redirecionamentos.
    </p>

    <CodeBlock language="typescript" filename="middleware.ts">
     {`// middleware.ts (na raiz do projeto)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Verificar autenticação
  const token = request.cookies.get('auth-token');
  
  // Proteger rotas do dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  // Redirecionamento baseado em geolocalização
  const country = request.geo?.country || 'US';
  if (request.nextUrl.pathname === '/') {
    if (country === 'BR') {
      return NextResponse.redirect(new URL('/pt-br', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Aplicar middleware a todas as rotas exceto arquivos estáticos
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};`}
    </CodeBlock>

    <h2>Streaming e Suspense</h2>

    <p>O App Router suporta streaming nativo, permitindo carregar partes da página progressivamente.</p>

    <CodeBlock language="typescript" filename="streaming.tsx">
     {`import { Suspense } from 'react';

// Componente que demora para carregar
async function SlowComponent() {
  // Simula delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const data = await fetch('https://api.example.com/slow-data')
    .then(res => res.json());
  
  return <div>Dados carregados: {data.result}</div>;
}

// Página com streaming
export default function StreamingPage() {
  return (
    <div>
      <h1>Página com Streaming</h1>
      <p>Este conteúdo carrega imediatamente</p>
      
      <Suspense fallback={<div>Carregando dados...</div>}>
        <SlowComponent />
      </Suspense>
      
      <p>Este conteúdo também carrega imediatamente</p>
    </div>
  );
}`}
    </CodeBlock>

    <Callout type="success" title="Vantagens do App Router">
     <ul>
      <li>
       <strong>Performance</strong>: Server Components reduzem bundle JavaScript
      </li>
      <li>
       <strong>Streaming</strong>: Carregamento progressivo da interface
      </li>
      <li>
       <strong>Layouts</strong>: Sistema de layouts mais flexível
      </li>
      <li>
       <strong>Data Fetching</strong>: Mais simples e poderoso
      </li>
      <li>
       <strong>Caching</strong>: Sistema de cache mais granular
      </li>
     </ul>
    </Callout>

    <h2>Migração do Pages Router</h2>

    <p>A migração pode ser feita gradualmente, mantendo ambos os sistemas funcionando simultaneamente.</p>

    <CodeBlock language="bash" filename="estrutura-hibrida">
     {`projeto/
├── app/           # Novas rotas (App Router)
│   ├── dashboard/
│   └── blog/
├── pages/         # Rotas existentes (Pages Router)
│   ├── api/
│   ├── about.tsx
│   └── contact.tsx
└── ...`}
    </CodeBlock>

    <h2>Conclusão</h2>

    <p>
     O App Router representa o futuro do Next.js, oferecendo melhor performance, experiência de desenvolvimento
     mais intuitiva e recursos avançados como Server Components e streaming. A migração pode ser gradual,
     permitindo adoção progressiva dos novos recursos.
    </p>
   </article>
  </div>
 )
}
