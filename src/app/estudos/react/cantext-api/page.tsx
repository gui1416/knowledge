import { mdxComponents } from "@/components/mdx-components"

const { Callout, CodeBlock, Dica } = mdxComponents

export default function ContextApiPage() {
 return (
  <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-4xl">
   <article className="prose prose-slate dark:prose-invert max-w-none">
    <h1>Context API: Gerenciamento de Estado Global</h1>

    <p>
     A Context API é a solução nativa do React para compartilhar dados entre
     componentes sem prop drilling, oferecendo uma alternativa ao Redux para
     gerenciamento de estado global.
    </p>

    <Callout type="info" title="O que você vai aprender">
     Vamos explorar desde o uso básico da Context API até padrões avançados
     com múltiplos contexts, otimizações de performance e integração com hooks.
    </Callout>

    <h2>Problema: Prop Drilling</h2>

    <p>
     Antes da Context API, compartilhar dados entre componentes distantes
     exigia passar props através de vários níveis intermediários.
    </p>

    <CodeBlock language="typescript" filename="prop-drilling-problema.tsx">
     {`// ❌ Problema: Prop drilling
interface User {
  id: string;
  name: string;
  email: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  
  return (
    <div>
      <Header user={user} />
      <MainContent user={user} setUser={setUser} />
    </div>
  );
}

function Header({ user }: { user: User | null }) {
  return (
    <header>
      <Navigation user={user} />
    </header>
  );
}

function Navigation({ user }: { user: User | null }) {
  return (
    <nav>
      <UserMenu user={user} />
    </nav>
  );
}

function UserMenu({ user }: { user: User | null }) {
  return (
    <div>
      {user ? \`Olá, \${user.name}\` : 'Fazer login'}
    </div>
  );
}

function MainContent({ user, setUser }: { 
  user: User | null; 
  setUser: (user: User | null) => void; 
}) {
  return (
    <main>
      <Profile user={user} setUser={setUser} />
    </main>
  );
}

// Muitos componentes intermediários só passam props adiante!`}
    </CodeBlock>

    <h2>Solução: Context API</h2>

    <CodeBlock language="typescript" filename="context-basico.tsx">
     {`import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Definir tipos
interface User {
  id: string;
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// 2. Criar Context
const UserContext = createContext<UserContextType | undefined>(undefined);

// 3. Provider Component
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  const login = async (email: string, password: string) => {
    try {
      // Simular chamada de API
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };
  
  const value = {
    user,
    setUser,
    login,
    logout
  };
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// 4. Hook personalizado
export function useUser() {
  const context = useContext(UserContext);
  
  if (context === undefined) {
    throw new Error('useUser deve ser usado dentro de UserProvider');
  }
  
  return context;
}`}
    </CodeBlock>

    <h2>Usando o Context</h2>

    <CodeBlock language="typescript" filename="usando-context.tsx">
     {`// App.tsx
function App() {
  return (
    <UserProvider>
      <div>
        <Header />
        <MainContent />
      </div>
    </UserProvider>
  );
}

// Header.tsx
function Header() {
  return (
    <header>
      <Navigation />
    </header>
  );
}

// Navigation.tsx
function Navigation() {
  return (
    <nav>
      <UserMenu />
    </nav>
  );
}

// UserMenu.tsx
function UserMenu() {
  const { user, logout } = useUser(); // ✅ Acesso direto ao contexto
  
  if (!user) {
    return <LoginButton />;
  }
  
  return (
    <div className="user-menu">
      <span>Olá, {user.name}</span>
      <button onClick={logout}>Sair</button>
    </div>
  );
}

// LoginButton.tsx
function LoginButton() {
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
      />
      <button type="submit">Entrar</button>
    </form>
  );
}`}
    </CodeBlock>

    <Dica>
     Note como eliminamos o prop drilling! Qualquer componente dentro do
     UserProvider pode acessar o contexto diretamente usando o hook useUser.
    </Dica>

    <h2>Padrões Avançados</h2>

    <h3>1. Context com Reducer</h3>

    <CodeBlock language="typescript" filename="context-reducer.tsx">
     {`import { createContext, useContext, useReducer, ReactNode } from 'react';

// Tipos
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'SET_FILTER'; payload: 'all' | 'active' | 'completed' }
  | { type: 'CLEAR_COMPLETED' };

// Reducer
function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now().toString(),
            text: action.payload,
            completed: false
          }
        ]
      };
      
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
      
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
      
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
      
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
      
    default:
      return state;
  }
}

// Context
interface TodoContextType {
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
  // Computed values
  filteredTodos: Todo[];
  completedCount: number;
  activeCount: number;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Provider
export function TodoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    filter: 'all'
  });
  
  // Computed values
  const filteredTodos = state.todos.filter(todo => {
    switch (state.filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });
  
  const completedCount = state.todos.filter(todo => todo.completed).length;
  const activeCount = state.todos.length - completedCount;
  
  const value = {
    state,
    dispatch,
    filteredTodos,
    completedCount,
    activeCount
  };
  
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

// Hook
export function useTodos() {
  const context = useContext(TodoContext);
  
  if (context === undefined) {
    throw new Error('useTodos deve ser usado dentro de TodoProvider');
  }
  
  return context;
}`}
    </CodeBlock>

    <h3>2. Múltiplos Contexts</h3>

    <CodeBlock language="typescript" filename="multiplos-contexts.tsx">
     {`// Theme Context
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  }
  return context;
}

// Settings Context
interface Settings {
  language: string;
  notifications: boolean;
  autoSave: boolean;
}

interface SettingsContextType {
  settings: Settings;
  updateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>({
    language: 'pt-BR',
    notifications: true,
    autoSave: false
  });
  
  const updateSetting = <K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };
  
  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings deve ser usado dentro de SettingsProvider');
  }
  return context;
}

// Combinando múltiplos providers
function App() {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <UserProvider>
          <TodoProvider>
            <MainApp />
          </TodoProvider>
        </UserProvider>
      </SettingsProvider>
    </ThemeProvider>
  );
}

// Ou usando um Provider composto
function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <UserProvider>
          <TodoProvider>
            {children}
          </TodoProvider>
        </UserProvider>
      </SettingsProvider>
    </ThemeProvider>
  );
}

function App() {
  return (
    <AppProviders>
      <MainApp />
    </AppProviders>
  );
}`}
    </CodeBlock>

    <h3>3. Context com Performance Otimizada</h3>

    <CodeBlock language="typescript" filename="context-otimizado.tsx">
     {`import { createContext, useContext, useMemo, ReactNode } from 'react';

// Separar state e actions em contexts diferentes
interface AppState {
  user: User | null;
  todos: Todo[];
  theme: 'light' | 'dark';
}

interface AppActions {
  setUser: (user: User | null) => void;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

const AppStateContext = createContext<AppState | undefined>(undefined);
const AppActionsContext = createContext<AppActions | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    user: null,
    todos: [],
    theme: 'light'
  });
  
  // Memoizar actions para evitar re-renders desnecessários
  const actions = useMemo<AppActions>(() => ({
    setUser: (user) => setState(prev => ({ ...prev, user })),
    
    addTodo: (text) => setState(prev => ({
      ...prev,
      todos: [...prev.todos, {
        id: Date.now().toString(),
        text,
        completed: false
      }]
    })),
    
    toggleTodo: (id) => setState(prev => ({
      ...prev,
      todos: prev.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    })),
    
    setTheme: (theme) => setState(prev => ({ ...prev, theme }))
  }), []);
  
  return (
    <AppStateContext.Provider value={state}>
      <AppActionsContext.Provider value={actions}>
        {children}
      </AppActionsContext.Provider>
    </AppStateContext.Provider>
  );
}

// Hooks específicos
export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState deve ser usado dentro de AppProvider');
  }
  return context;
}

export function useAppActions() {
  const context = useContext(AppActionsContext);
  if (!context) {
    throw new Error('useAppActions deve ser usado dentro de AppProvider');
  }
  return context;
}

// Hooks seletores para evitar re-renders desnecessários
export function useUser() {
  const { user } = useAppState();
  return user;
}

export function useTodos() {
  const { todos } = useAppState();
  return todos;
}

export function useTheme() {
  const { theme } = useAppState();
  return theme;
}`}
    </CodeBlock>

    <Callout type="warning" title="Cuidado com Performance">
     Context API pode causar re-renders desnecessários. Use técnicas como
     separação de contexts, memoização e seletores para otimizar performance.
    </Callout>

    <h2>Context vs Redux</h2>

    <CodeBlock language="typescript" filename="context-vs-redux.tsx">
     {`// Context API - Melhor para:
// - Estado simples a médio
// - Poucos updates frequentes
// - Aplicações pequenas a médias

// Redux - Melhor para:
// - Estado complexo
// - Muitos updates frequentes
// - Aplicações grandes
// - DevTools avançadas
// - Middleware (thunks, sagas)

// Exemplo: Quando usar cada um
interface SimpleAppState {
  user: User | null;
  theme: 'light' | 'dark';
}

// ✅ Context API é suficiente
function SimpleApp() {
  return (
    <UserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserProvider>
  );
}

interface ComplexAppState {
  users: User[];
  posts: Post[];
  comments: Comment[];
  ui: {
    loading: boolean;
    errors: string[];
    modals: Modal[];
  };
  cache: {
    [key: string]: any;
  };
}

// ✅ Redux seria melhor aqui
// Muitos updates, estado complexo, necessidade de middleware`}
    </CodeBlock>

    <h2>Testes com Context</h2>

    <CodeBlock language="typescript" filename="testando-context.tsx">
     {`import { render, screen, fireEvent } from '@testing-library/react';
import { UserProvider, useUser } from './UserContext';

// Componente de teste
function TestComponent() {
  const { user, login, logout } = useUser();
  
  return (
    <div>
      {user ? (
        <div>
          <span>Logado como: {user.name}</span>
          <button onClick={logout}>Sair</button>
        </div>
      ) : (
        <button onClick={() => login('test@test.com', '123')}>
          Entrar
        </button>
      )}
    </div>
  );
}

// Helper para renderizar com provider
function renderWithUserProvider(ui: React.ReactElement) {
  return render(
    <UserProvider>
      {ui}
    </UserProvider>
  );
}

describe('UserContext', () => {
  it('deve permitir login e logout', async () => {
    renderWithUserProvider(<TestComponent />);
    
    // Estado inicial
    expect(screen.getByText('Entrar')).toBeInTheDocument();
    
    // Fazer login
    fireEvent.click(screen.getByText('Entrar'));
    
    // Verificar se logou
    await screen.findByText(/Logado como:/);
    
    // Fazer logout
    fireEvent.click(screen.getByText('Sair'));
    
    // Verificar se deslogou
    expect(screen.getByText('Entrar')).toBeInTheDocument();
  });
  
  it('deve lançar erro quando usado fora do provider', () => {
    // Suprimir console.error para este teste
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    
    expect(() => {
      render(<TestComponent />);
    }).toThrow('useUser deve ser usado dentro de UserProvider');
    
    consoleSpy.mockRestore();
  });
});`}
    </CodeBlock>

    <h2>Boas Práticas</h2>

    <ol>
     <li><strong>Crie hooks personalizados</strong> para cada context</li>
     <li><strong>Valide se o context existe</strong> nos hooks</li>
     <li><strong>Separe contexts por domínio</strong> (user, theme, etc.)</li>
     <li><strong>Use TypeScript</strong> para type safety</li>
     <li><strong>Otimize performance</strong> quando necessário</li>
     <li><strong>Teste os contexts</strong> isoladamente</li>
    </ol>

    <Callout type="success" title="Vantagens da Context API">
     <ul>
      <li>Nativa do React - sem dependências externas</li>
      <li>Elimina prop drilling</li>
      <li>Integração perfeita com hooks</li>
      <li>TypeScript friendly</li>
      <li>Boa para estado simples a médio</li>
     </ul>
    </Callout>

    <h2>Conclusão</h2>

    <p>
     A Context API é uma ferramenta poderosa para gerenciamento de estado
     em aplicações React. Use-a quando:
    </p>

    <ul>
     <li>Precisar compartilhar dados entre componentes distantes</li>
     <li>Quiser evitar prop drilling</li>
     <li>O estado for simples a médio em complexidade</li>
     <li>Não precisar de features avançadas como time travel debugging</li>
    </ul>

    <Callout type="info" title="Próximos Passos">
     Explore tópicos relacionados como useReducer, custom hooks avançados
     e padrões de state management em aplicações React complexas.
    </Callout>
   </article>
  </div>
 )
}
