import { mdxComponents } from "@/components/mdx-components"

const { Callout, CodeBlock, Dica } = mdxComponents

export default function ArquiteturaFrontendModernaPage() {
 return (
  <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-4xl">
   <article className="prose prose-slate dark:prose-invert max-w-none">
    <h1>Arquitetura Frontend Moderna: Guia Completo</h1>

    <p>
     A arquitetura frontend evoluiu drasticamente nos últimos anos.
     Este guia explora padrões modernos, ferramentas e práticas para
     construir aplicações escaláveis e maintíveis.
    </p>

    <Callout type="info" title="O que você vai aprender">
     Vamos abordar desde princípios fundamentais até implementações práticas
     de arquiteturas modernas como JAMstack, Micro Frontends e Component-Driven Development.
    </Callout>

    <h2>Evolução da Arquitetura Frontend</h2>

    <p>
     A jornada do desenvolvimento frontend passou por várias fases,
     cada uma trazendo novos desafios e soluções.
    </p>

    <CodeBlock language="typescript" filename="evolucao-frontend.ts">
     {`// Era 1: Páginas Estáticas (1990s-2000s)
// HTML + CSS + JavaScript básico
function showAlert() {
  alert('Hello World!');
}

// Era 2: AJAX e SPA (2000s-2010s)
// jQuery, Backbone.js, Angular.js
$.ajax({
  url: '/api/data',
  success: function(data) {
    $('#content').html(data);
  }
});

// Era 3: Component-Based (2010s-presente)
// React, Vue, Angular
function UserProfile({ user }: { user: User }) {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// Era 4: Full-Stack Frontend (presente)
// Next.js, Nuxt.js, SvelteKit
export async function getServerSideProps() {
  const user = await fetchUser();
  return { props: { user } };
}`}
    </CodeBlock>

    <h2>Princípios Fundamentais</h2>

    <h3>1. Separação de Responsabilidades</h3>

    <CodeBlock language="typescript" filename="separacao-responsabilidades.ts">
     {`// ❌ Componente fazendo muitas coisas
function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Lógica de API
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  // Lógica de validação
  const validateUser = (user: User) => {
    return user.email && user.name && user.email.includes('@');
  };
  
  // Lógica de formatação
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR');
  };
  
  // Renderização complexa
  return (
    <div>
      {/* Muito código JSX aqui */}
    </div>
  );
}

// ✅ Separação clara de responsabilidades
// 1. Hook para lógica de estado
function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const users = await userService.getAll();
      setUsers(users);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };
  
  return { users, loading, error, fetchUsers };
}

// 2. Serviço para lógica de API
class UserService {
  async getAll(): Promise<User[]> {
    const response = await fetch('/api/users');
    if (!response.ok) {
      throw new Error('Falha ao buscar usuários');
    }
    return response.json();
  }
  
  async create(user: CreateUserDto): Promise<User> {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    
    if (!response.ok) {
      throw new Error('Falha ao criar usuário');
    }
    
    return response.json();
  }
}

// 3. Utilitários para lógica de formatação
export const dateUtils = {
  formatToBrazilian: (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR');
  },
  
  formatToISO: (date: Date) => {
    return date.toISOString();
  }
};

// 4. Validadores
export const userValidators = {
  isValidEmail: (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  
  isValidUser: (user: Partial<User>) => {
    return !!(user.name && user.email && userValidators.isValidEmail(user.email));
  }
};

// 5. Componente focado apenas na apresentação
function UserDashboard() {
  const { users, loading, error, fetchUsers } = useUsers();
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  
  return (
    <div className="user-dashboard">
      <UserList users={users} />
      <CreateUserForm onUserCreated={fetchUsers} />
    </div>
  );
}`}
    </CodeBlock>

    <h3>2. Composição sobre Herança</h3>

    <CodeBlock language="typescript" filename="composicao-vs-heranca.tsx">
     {`// ❌ Herança - difícil de manter e estender
class BaseButton {
  protected size: 'sm' | 'md' | 'lg' = 'md';
  protected variant: 'primary' | 'secondary' = 'primary';
  
  render() {
    return \`<button class="\${this.getClasses()}">\${this.getContent()}</button>\`;
  }
  
  protected getClasses() {
    return \`btn btn-\${this.variant} btn-\${this.size}\`;
  }
  
  protected getContent() {
    return 'Button';
  }
}

class IconButton extends BaseButton {
  constructor(private icon: string) {
    super();
  }
  
  protected getContent() {
    return \`<i class="\${this.icon}"></i> \${super.getContent()}\`;
  }
}

// ✅ Composição - flexível e reutilizável
interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'danger';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ 
  size = 'md', 
  variant = 'primary', 
  children, 
  ...props 
}: ButtonProps) {
  const classes = cn(
    'btn',
    \`btn-\${variant}\`,
    \`btn-\${size}\`,
    props.disabled && 'btn-disabled'
  );
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

// Composição com Higher-Order Components
function withIcon(WrappedComponent: React.ComponentType<any>) {
  return function IconWrapper({ icon, ...props }: any) {
    return (
      <WrappedComponent {...props}>
        {icon && <Icon name={icon} />}
        {props.children}
      </WrappedComponent>
    );
  };
}

const IconButton = withIcon(Button);

// Composição com Render Props
function DataFetcher<T>({ 
  url, 
  children 
}: { 
  url: string; 
  children: (data: T | null, loading: boolean, error: string | null) => ReactNode;
}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);
  
  return <>{children(data, loading, error)}</>;
}

// Uso
function UserProfile({ userId }: { userId: string }) {
  return (
    <DataFetcher<User> url={\`/api/users/\${userId}\`}>
      {(user, loading, error) => {
        if (loading) return <Spinner />;
        if (error) return <Error message={error} />;
        if (!user) return <NotFound />;
        
        return (
          <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        );
      }}
    </DataFetcher>
  );
}`}
    </CodeBlock>

    <h2>Padrões Arquiteturais Modernos</h2>

    <h3>1. Feature-Based Architecture</h3>

    <CodeBlock language="text" filename="estrutura-feature-based.txt">
     {`src/
├── shared/                    # Código compartilhado
│   ├── components/           # Componentes reutilizáveis
│   │   ├── ui/              # Componentes básicos (Button, Input)
│   │   └── layout/          # Componentes de layout
│   ├── hooks/               # Hooks personalizados
│   ├── utils/               # Utilitários
│   ├── services/            # Serviços de API
│   └── types/               # Tipos TypeScript globais
│
├── features/                 # Features da aplicação
│   ├── auth/                # Feature de autenticação
│   │   ├── components/      # Componentes específicos
│   │   ├── hooks/           # Hooks da feature
│   │   ├── services/        # Serviços da feature
│   │   ├── types/           # Tipos da feature
│   │   └── index.ts         # Barrel export
│   │
│   ├── dashboard/           # Feature do dashboard
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   │
│   └── user-management/     # Feature de gerenciamento
│       ├── components/
│       ├── hooks/
│       └── services/
│
├── pages/                   # Páginas/Rotas
│   ├── auth/
│   ├── dashboard/
│   └── users/
│
└── app/                     # Configuração da aplicação
    ├── store/               # Estado global
    ├── router/              # Configuração de rotas
    └── providers/           # Providers React`}
    </CodeBlock>

    <CodeBlock language="typescript" filename="feature-structure-example.ts">
     {`// features/user-management/types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: string;
}

export interface CreateUserDto {
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// features/user-management/services/userService.ts
import { User, CreateUserDto } from '../types';

export class UserService {
  private baseUrl = '/api/users';
  
  async getAll(): Promise<User[]> {
    const response = await fetch(this.baseUrl);
    return response.json();
  }
  
  async getById(id: string): Promise<User> {
    const response = await fetch(\`\${this.baseUrl}/\${id}\`);
    return response.json();
  }
  
  async create(user: CreateUserDto): Promise<User> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    return response.json();
  }
}

export const userService = new UserService();

// features/user-management/hooks/useUsers.ts
import { useState, useEffect } from 'react';
import { User } from '../types';
import { userService } from '../services/userService';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await userService.getAll();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  return {
    users,
    loading,
    error,
    refetch: fetchUsers
  };
}

// features/user-management/components/UserList.tsx
import { User } from '../types';

interface UserListProps {
  users: User[];
  onUserSelect?: (user: User) => void;
}

export function UserList({ users, onUserSelect }: UserListProps) {
  return (
    <div className="user-list">
      {users.map(user => (
        <div 
          key={user.id} 
          className="user-item"
          onClick={() => onUserSelect?.(user)}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <span className="role">{user.role}</span>
        </div>
      ))}
    </div>
  );
}

// features/user-management/index.ts (Barrel export) from './components/UserList'; from './hooks/useUsers'; from './services/userService';
export type { User, CreateUserDto } from './types';`}
    </CodeBlock>

    <Dica>
     A arquitetura baseada em features mantém código relacionado junto,
     facilitando manutenção e permitindo que equipes trabalhem independentemente
     em diferentes features.
    </Dica>

    <h3>2. Layered Architecture</h3>

    <CodeBlock language="typescript" filename="layered-architecture.ts">
     {`// Camada de Apresentação (Presentation Layer)
// Responsável pela UI e interação com usuário
interface UserListProps {
  users: User[];
  onCreateUser: (user: CreateUserDto) => void;
  onDeleteUser: (id: string) => void;
}

function UserListView({ users, onCreateUser, onDeleteUser }: UserListProps) {
  return (
    <div>
      <UserForm onSubmit={onCreateUser} />
      <UserTable users={users} onDelete={onDeleteUser} />
    </div>
  );
}

// Camada de Aplicação (Application Layer)
// Orquestra casos de uso e regras de negócio
class UserApplicationService {
  constructor(
    private userRepository: UserRepository,
    private emailService: EmailService,
    private logger: Logger
  ) {}
  
  async createUser(userData: CreateUserDto): Promise<User> {
    // Validação
    if (!this.isValidEmail(userData.email)) {
      throw new Error('Email inválido');
    }
    
    // Verificar se usuário já existe
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('Usuário já existe');
    }
    
    // Criar usuário
    const user = await this.userRepository.create(userData);
    
    // Enviar email de boas-vindas
    await this.emailService.sendWelcomeEmail(user.email);
    
    // Log da operação
    this.logger.info(\`Usuário criado: \${user.id}\`);
    
    return user;
  }
  
  async deleteUser(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    
    // Verificar se pode deletar (regra de negócio)
    if (user.role === 'admin' && await this.isLastAdmin()) {
      throw new Error('Não é possível deletar o último admin');
    }
    
    await this.userRepository.delete(id);
    this.logger.info(\`Usuário deletado: \${id}\`);
  }
  
  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  private async isLastAdmin(): Promise<boolean> {
    const admins = await this.userRepository.findByRole('admin');
    return admins.length <= 1;
  }
}

// Camada de Domínio (Domain Layer)
// Entidades e regras de negócio puras
class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly role: UserRole,
    public readonly createdAt: Date
  ) {}
  
  canDelete(): boolean {
    // Regra de negócio: usuários criados há menos de 24h não podem ser deletados
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    return this.createdAt < oneDayAgo;
  }
  
  isAdmin(): boolean {
    return this.role === 'admin';
  }
  
  updateEmail(newEmail: string): User {
    if (!this.isValidEmail(newEmail)) {
      throw new Error('Email inválido');
    }
    
    return new User(
      this.id,
      this.name,
      newEmail,
      this.role,
      this.createdAt
    );
  }
  
  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

// Camada de Infraestrutura (Infrastructure Layer)
// Implementações concretas de repositórios e serviços
class ApiUserRepository implements UserRepository {
  private baseUrl = '/api/users';
  
  async findAll(): Promise<User[]> {
    const response = await fetch(this.baseUrl);
    const data = await response.json();
    return data.map(this.mapToUser);
  }
  
  async findById(id: string): Promise<User | null> {
    try {
      const response = await fetch(\`\${this.baseUrl}/\${id}\`);
      if (!response.ok) return null;
      const data = await response.json();
      return this.mapToUser(data);
    } catch {
      return null;
    }
  }
  
  async create(userData: CreateUserDto): Promise<User> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    return this.mapToUser(data);
  }
  
  private mapToUser(data: any): User {
    return new User(
      data.id,
      data.name,
      data.email,
      data.role,
      new Date(data.createdAt)
    );
  }
}

// Camada de Interface (Interface Layer)
// Contratos e abstrações
interface UserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findByRole(role: UserRole): Promise<User[]>;
  create(user: CreateUserDto): Promise<User>;
  delete(id: string): Promise<void>;
}

interface EmailService {
  sendWelcomeEmail(email: string): Promise<void>;
}

interface Logger {
  info(message: string): void;
  error(message: string): void;
}`}
    </CodeBlock>

    <h3>3. Micro Frontends</h3>

    <CodeBlock language="typescript" filename="micro-frontends.ts">
     {`// Shell Application (Container)
// Responsável por orquestrar os micro frontends
class MicroFrontendLoader {
  private loadedApps = new Map<string, any>();
  
  async loadMicroFrontend(name: string, url: string) {
    if (this.loadedApps.has(name)) {
      return this.loadedApps.get(name);
    }
    
    // Carregar o micro frontend dinamicamente
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    
    return new Promise((resolve, reject) => {
      script.onload = () => {
        const app = (window as any)[name];
        if (app) {
          this.loadedApps.set(name, app);
          resolve(app);
        } else {
          reject(new Error(\`Micro frontend \${name} não encontrado\`));
        }
      };
      
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  async mountMicroFrontend(name: string, element: HTMLElement, props: any = {}) {
    const app = await this.loadMicroFrontend(name, \`/mf/\${name}/bundle.js\`);
    
    if (app.mount) {
      return app.mount(element, props);
    }
    
    throw new Error(\`Micro frontend \${name} não possui método mount\`);
  }
  
  unmountMicroFrontend(name: string, element: HTMLElement) {
    const app = this.loadedApps.get(name);
    if (app && app.unmount) {
      app.unmount(element);
    }
  }
}

// Micro Frontend Component
function MicroFrontend({ 
  name, 
  url, 
  props = {} 
}: { 
  name: string; 
  url: string; 
  props?: any; 
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loader = useMemo(() => new MicroFrontendLoader(), []);
  
  useEffect(() => {
    if (containerRef.current) {
      loader.mountMicroFrontend(name, containerRef.current, props)
        .catch(console.error);
    }
    
    return () => {
      if (containerRef.current) {
        loader.unmountMicroFrontend(name, containerRef.current);
      }
    };
  }, [name, url, props, loader]);
  
  return <div ref={containerRef} />;
}

// Uso no Shell App
function App() {
  const [currentRoute, setCurrentRoute] = useState('/dashboard');
  
  return (
    <div className="app">
      <Header />
      <Navigation onNavigate={setCurrentRoute} />
      
      <main>
        {currentRoute === '/dashboard' && (
          <MicroFrontend 
            name="dashboard" 
            url="/mf/dashboard/bundle.js"
            props={{ userId: 'current-user' }}
          />
        )}
        
        {currentRoute === '/users' && (
          <MicroFrontend 
            name="userManagement" 
            url="/mf/user-management/bundle.js"
          />
        )}
        
        {currentRoute === '/analytics' && (
          <MicroFrontend 
            name="analytics" 
            url="/mf/analytics/bundle.js"
          />
        )}
      </main>
    </div>
  );
}

// Micro Frontend Individual (User Management)
// Este seria um app React separado
const UserManagementApp = {
  mount(element: HTMLElement, props: any) {
    const root = ReactDOM.createRoot(element);
    root.render(<UserManagementRoot {...props} />);
    return root;
  },
  
  unmount(element: HTMLElement) {
    const root = (element as any)._reactRoot;
    if (root) {
      root.unmount();
    }
  }
};

// Expor globalmente
(window as any).userManagement = UserManagementApp;

// Comunicação entre Micro Frontends
class EventBus {
  private events = new Map<string, Function[]>();
  
  subscribe(event: string, callback: Function) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)!.push(callback);
    
    // Retornar função de unsubscribe
    return () => {
      const callbacks = this.events.get(event);
      if (callbacks) {
        const index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      }
    };
  }
  
  publish(event: string, data?: any) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback(data));
    }
  }
}

// Instância global do event bus
(window as any).eventBus = new EventBus();

// Uso nos micro frontends
function UserList() {
  useEffect(() => {
    const unsubscribe = (window as any).eventBus.subscribe(
      'user:created',
      (user: User) => {
        console.log('Novo usuário criado:', user);
        // Atualizar lista
      }
    );
    
    return unsubscribe;
  }, []);
  
  const handleCreateUser = (user: User) => {
    // Notificar outros micro frontends
    (window as any).eventBus.publish('user:created', user);
  };
  
  return <div>...</div>;
}`}
    </CodeBlock>

    <Callout type="warning" title="Considerações sobre Micro Frontends">
     Micro frontends trazem complexidade adicional. Use apenas quando os benefícios
     (equipes independentes, deploy separado, tecnologias diferentes) superarem
     os custos de coordenação e performance.
    </Callout>

    <h2>State Management Moderno</h2>

    <CodeBlock language="typescript" filename="state-management-patterns.ts">
     {`// 1. Context + useReducer para estado local complexo
interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  notifications: Notification[];
}

type AppAction = 
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'TOGGLE_THEME' }
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string };

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'ADD_NOTIFICATION':
      return { ...state, notifications: [...state.notifications, action.payload] };
    case 'REMOVE_NOTIFICATION':
      return { 
        ...state, 
        notifications: state.notifications.filter(n => n.id !== action.payload) 
      };
    default:
      return state;
  }
}

// 2. Zustand para estado global simples
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
    }
  )
);

// 3. TanStack Query para estado do servidor
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => userService.getAll(),
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
}

function useCreateUser() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: userService.create,
    onSuccess: () => {
      // Invalidar cache dos usuários
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}

// 4. Jotai para estado atômico
import { atom, useAtom } from 'jotai';

const userAtom = atom<User | null>(null);
const themeAtom = atom<'light' | 'dark'>('light');

// Atom derivado
const userNameAtom = atom((get) => {
  const user = get(userAtom);
  return user?.name ?? 'Anônimo';
});

function UserProfile() {
  const [user, setUser] = useAtom(userAtom);
  const [userName] = useAtom(userNameAtom);
  
  return (
    <div>
      <h1>Olá, {userName}</h1>
      {/* ... */}
    </div>
  );
}

// 5. Valtio para estado mutável
import { proxy, useSnapshot } from 'valtio';

const appState = proxy({
  user: null as User | null,
  theme: 'light' as 'light' | 'dark',
  notifications: [] as Notification[],
});

// Ações
export const appActions = {
  setUser: (user: User | null) => {
    appState.user = user;
  },
  
  toggleTheme: () => {
    appState.theme = appState.theme === 'light' ? 'dark' : 'light';
  },
  
  addNotification: (notification: Notification) => {
    appState.notifications.push(notification);
  },
  
  removeNotification: (id: string) => {
    const index = appState.notifications.findIndex(n => n.id === id);
    if (index > -1) {
      appState.notifications.splice(index, 1);
    }
  },
};

function App() {
  const snap = useSnapshot(appState);
  
  return (
    <div className={snap.theme}>
      {snap.user ? (
        <UserDashboard user={snap.user} />
      ) : (
        <LoginForm />
      )}
    </div>
  );
}`}
    </CodeBlock>

    <h2>Performance e Otimização</h2>

    <CodeBlock language="typescript" filename="performance-patterns.ts">
     {`// 1. Code Splitting por rota
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const UserManagement = lazy(() => import('./pages/UserManagement'));
const Analytics = lazy(() => import('./pages/Analytics'));

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

// 2. Component Splitting
const HeavyChart = lazy(() => 
  import('./components/HeavyChart').then(module => ({
    default: module.HeavyChart
  }))
);

function Dashboard() {
  const [showChart, setShowChart] = useState(false);
  
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setShowChart(true)}>
        Mostrar Gráfico
      </button>
      
      {showChart && (
        <Suspense fallback={<ChartSkeleton />}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
}

// 3. Virtualization para listas grandes
import { FixedSizeList as List } from 'react-window';

interface VirtualizedListProps {
  items: any[];
  height: number;
  itemHeight: number;
}

function VirtualizedList({ items, height, itemHeight }: VirtualizedListProps) {
  const Row = ({ index, style }: { index: number; style: any }) => (
    <div style={style}>
      <UserItem user={items[index]} />
    </div>
  );
  
  return (
    <List
      height={height}
      itemCount={items.length}
      itemSize={itemHeight}
      width="100%"
    >
      {Row}
    </List>
  );
}

// 4. Memoização inteligente
const ExpensiveComponent = memo(({ data, onAction }: {
  data: ComplexData;
  onAction: (id: string) => void;
}) => {
  // Computação cara
  const processedData = useMemo(() => {
    return data.items
      .filter(item => item.active)
      .map(item => ({
        ...item,
        computed: heavyComputation(item)
      }))
      .sort((a, b) => a.priority - b.priority);
  }, [data.items]);
  
  // Callback estável
  const handleAction = useCallback((id: string) => {
    onAction(id);
  }, [onAction]);
  
  return (
    <div>
      {processedData.map(item => (
        <ItemComponent 
          key={item.id} 
          item={item} 
          onAction={handleAction}
        />
      ))}
    </div>
  );
});

// 5. Web Workers para processamento pesado
class DataProcessor {
  private worker: Worker;
  
  constructor() {
    this.worker = new Worker('/workers/data-processor.js');
  }
  
  async processLargeDataset(data: any[]): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.worker.postMessage({ type: 'PROCESS_DATA', data });
      
      this.worker.onmessage = (event) => {
        if (event.data.type === 'PROCESS_COMPLETE') {
          resolve(event.data.result);
        } else if (event.data.type === 'PROCESS_ERROR') {
          reject(new Error(event.data.error));
        }
      };
    });
  }
  
  terminate() {
    this.worker.terminate();
  }
}

// 6. Service Worker para cache
// sw.js
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      caches.open('api-cache').then(cache => {
        return cache.match(event.request).then(response => {
          if (response) {
            // Servir do cache e atualizar em background
            fetch(event.request).then(fetchResponse => {
              cache.put(event.request, fetchResponse.clone());
            });
            return response;
          }
          
          // Não está no cache, buscar da rede
          return fetch(event.request).then(fetchResponse => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
  }
});`}
    </CodeBlock>

    <h2>Testing Strategy</h2>

    <CodeBlock language="typescript" filename="testing-strategy.ts">
     {`// 1. Pirâmide de Testes
// Unit Tests (70%) - Testes rápidos e isolados
describe('UserService', () => {
  it('should create user with valid data', async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ id: '1', name: 'John', email: 'john@test.com' })
    });
    
    global.fetch = mockFetch;
    
    const userService = new UserService();
    const result = await userService.create({
      name: 'John',
      email: 'john@test.com',
      role: 'user'
    });
    
    expect(result).toEqual({
      id: '1',
      name: 'John',
      email: 'john@test.com'
    });
    
    expect(mockFetch).toHaveBeenCalledWith('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'John',
        email: 'john@test.com',
        role: 'user'
      })
    });
  });
});

// 2. Integration Tests (20%) - Testes de componentes
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function renderWithProviders(ui: React.ReactElement) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });
  
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
}

describe('UserList Component', () => {
  it('should display users and handle creation', async () => {
    // Mock API
    const mockUsers = [
      { id: '1', name: 'John', email: 'john@test.com', role: 'user' },
      { id: '2', name: 'Jane', email: 'jane@test.com', role: 'admin' }
    ];
    
    global.fetch = jest.fn()
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockUsers)
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({
          id: '3',
          name: 'Bob',
          email: 'bob@test.com',
          role: 'user'
        })
      });
    
    renderWithProviders(<UserManagement />);
    
    // Verificar se usuários são carregados
    await waitFor(() => {
      expect(screen.getByText('John')).toBeInTheDocument();
      expect(screen.getByText('Jane')).toBeInTheDocument();
    });
    
    // Testar criação de usuário
    fireEvent.click(screen.getByText('Adicionar Usuário'));
    
    fireEvent.change(screen.getByLabelText('Nome'), {
      target: { value: 'Bob' }
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'bob@test.com' }
    });
    
    fireEvent.click(screen.getByText('Salvar'));
    
    await waitFor(() => {
      expect(screen.getByText('Bob')).toBeInTheDocument();
    });
  });
});

// 3. E2E Tests (10%) - Testes de fluxo completo
// cypress/e2e/user-management.cy.ts
describe('User Management Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/users', { fixture: 'users.json' }).as('getUsers');
    cy.intercept('POST', '/api/users', { fixture: 'new-user.json' }).as('createUser');
    
    cy.visit('/users');
  });
  
  it('should complete user management workflow', () => {
    // Verificar carregamento inicial
    cy.wait('@getUsers');
    cy.contains('John Doe').should('be.visible');
    
    // Criar novo usuário
    cy.get('[data-testid="add-user-button"]').click();
    cy.get('[data-testid="user-form"]').should('be.visible');
    
    cy.get('input[name="name"]').type('New User');
    cy.get('input[name="email"]').type('newuser@test.com');
    cy.get('select[name="role"]').select('user');
    
    cy.get('[data-testid="submit-button"]').click();
    
    cy.wait('@createUser');
    cy.contains('Usuário criado com sucesso').should('be.visible');
    cy.contains('New User').should('be.visible');
  });
});

// 4. Visual Regression Tests
// .storybook/test-runner.ts
import { injectAxe, checkA11y } from 'axe-playwright';

export default {
  async preRender(page) {
    await injectAxe(page);
  },
  
  async postRender(page) {
    await checkA11y(page, '#root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};

// 5. Performance Tests
describe('Performance Tests', () => {
  it('should render large list efficiently', async () => {
    const startTime = performance.now();
    
    const largeUserList = Array.from({ length: 10000 }, (_, i) => ({
      id: i.toString(),
      name: \`User \${i}\`,
      email: \`user\${i}@test.com\`,
      role: 'user' as const
    }));
    
    render(<VirtualizedUserList users={largeUserList} />);
    
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    expect(renderTime).toBeLessThan(100); // Menos de 100ms
  });
});`}
    </CodeBlock>

    <h2>Conclusão</h2>

    <p>
     A arquitetura frontend moderna requer uma abordagem holística que considera:
    </p>

    <ul>
     <li><strong>Escalabilidade</strong>: Estruturas que crescem com o projeto</li>
     <li><strong>Manutenibilidade</strong>: Código limpo e bem organizado</li>
     <li><strong>Performance</strong>: Otimizações em todos os níveis</li>
     <li><strong>Developer Experience</strong>: Ferramentas e processos eficientes</li>
     <li><strong>User Experience</strong>: Foco na experiência do usuário final</li>
    </ul>

    <Callout type="success" title="Próximos Passos">
     <ul>
      <li>Implemente gradualmente esses padrões em seus projetos</li>
      <li>Meça o impacto das mudanças na performance e DX</li>
      <li>Adapte os padrões às necessidades específicas do seu contexto</li>
      <li>Mantenha-se atualizado com as evoluções do ecossistema</li>
     </ul>
    </Callout>
   </article>
  </div>
 )
}
