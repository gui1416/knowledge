import {
 Code,
 Palette,
 Zap,
 Component,
 Server,
 Database,
 Shield,
 Layout,
 Smartphone,
 Layers,
 Globe,
 Code2,
} from "lucide-react"

export interface Technology {
 id: string
 name: string
 description: string
 level: "Iniciante" | "Intermediário" | "Avançado"
 duration: string
 lessons: number
 students: string
 rating: number
 reviews: number
 features: {
  icon: React.ElementType
  title: string
  description: string
 }[]
 topics: string[]
 prerequisites: {
  level: "green" | "blue"
  title: string
  description: string
 }[]
 nextSteps: {
  name: string
  href: string
 }[]
 tutorialLessons: {
  id: number
  title: string
  completed: boolean
  active?: boolean
 }[]
 tutorialContent: {
  title: string
  description: string
  content: string
 }
}

export const technologies: Record<string, Technology> = {
 html: {
  id: "html",
  name: "HTML",
  description:
   "Aprenda a estrutura básica das páginas web com HTML5. Domine as tags, atributos e conceitos fundamentais para criar websites modernos e acessíveis.",
  level: "Iniciante",
  duration: "3-4 horas",
  lessons: 12,
  students: "2.5k",
  rating: 4.9,
  reviews: 324,
  features: [
   {
    icon: Code,
    title: "Estrutura Semântica",
    description: "Aprenda a criar páginas web bem estruturadas usando HTML5 semântico",
   },
   {
    icon: Globe,
    title: "Padrões Web",
    description: "Domine os padrões modernos de desenvolvimento web e acessibilidade",
   },
   {
    icon: Code,
    title: "Projetos Práticos",
    description: "Construa projetos reais enquanto aprende os conceitos fundamentais",
   },
  ],
  topics: [
   "Estrutura básica do HTML",
   "Tags semânticas HTML5",
   "Formulários e validação",
   "Tabelas e listas",
   "Multimídia e imagens",
   "Acessibilidade web",
   "SEO básico",
   "Boas práticas",
  ],
  prerequisites: [
   {
    level: "green",
    title: "Conhecimento Básico de Computador",
    description: "Saber navegar na internet e usar um editor de texto",
   },
   {
    level: "green",
    title: "Nenhuma Experiência em Programação",
    description: "Este curso é perfeito para iniciantes completos",
   },
   {
    level: "blue",
    title: "Editor de Código (Recomendado)",
    description: "Visual Studio Code ou qualquer editor de sua preferência",
   },
  ],
  nextSteps: [
   { name: "Aprender CSS", href: "/css" },
   { name: "Explorar JavaScript", href: "/javascript" },
  ],
  tutorialLessons: [
   { id: 1, title: "Introduction", completed: true },
   { id: 2, title: "Document", completed: false, active: true },
   { id: 3, title: "Basic Structure", completed: false },
   { id: 4, title: "Comments", completed: false },
   { id: 5, title: "Elements", completed: false },
   { id: 6, title: "Document Structure Elements", completed: false },
   { id: 7, title: "Metadata Elements", completed: false },
   { id: 8, title: "Sections and Layout Elements", completed: false },
   { id: 9, title: "Headings", completed: false },
   { id: 10, title: "Text Content Elements", completed: false },
  ],
  tutorialContent: {
   title: "Document",
   description:
    "Learn how HTML uses tags and attributes to structure web pages, including paired vs empty tags and the roles of the HEAD and BODY sections.",
   content: `HTML uses predefined tags and attributes to tell the browser how the content (for example, in which layout, font size, colors, images, and videos) should be displayed. HTML is a case-insensitive language which means there is no difference in upper case and lower case, i.e., 'B' and 'b' are considered the same.

There are generally two types of tags in HTML:

- Container tags (paired tags)
- Empty tags (unpaired tags)

## Container Tags

Container tags are tags that have both opening and closing tags. The content is placed between the opening and closing tags.

\`\`\`html
<tagname>content</tagname>
\`\`\`

Examples of container tags include:
- \`<html></html>\` - The root element
- \`<head></head>\` - Contains metadata
- \`<body></body>\` - Contains visible content
- \`<div></div>\` - Generic container
- \`<p></p>\` - Paragraph

## Empty Tags

Empty tags are tags that don't have closing tags. They are self-closing and don't contain any content between opening and closing tags.

\`\`\`html
<tagname />
\`\`\`

Examples of empty tags include:
- \`<br />\` - Line break
- \`<hr />\` - Horizontal rule
- \`<img />\` - Image
- \`<input />\` - Form input
- \`<meta />\` - Metadata

## Document Structure

Every HTML document follows a basic structure with essential elements:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
\`\`\`

### Key Components:
- **DOCTYPE:** Declares the document type and HTML version
- **html:** The root element that wraps all content
- **head:** Contains metadata not visible to users
- **body:** Contains all visible content`,
  },
 },
 css: {
  id: "css",
  name: "CSS",
  description:
   "Domine o design e estilização de websites modernos. Aprenda a criar layouts responsivos, animações e interfaces visuais atraentes com CSS3.",
  level: "Iniciante",
  duration: "4-5 horas",
  lessons: 15,
  students: "2.1k",
  rating: 4.8,
  reviews: 298,
  features: [
   {
    icon: Palette,
    title: "Design Visual",
    description: "Aprenda a criar designs atraentes com cores, tipografia e layouts modernos",
   },
   {
    icon: Layout,
    title: "Layouts Flexíveis",
    description: "Domine Flexbox e CSS Grid para criar layouts profissionais e flexíveis",
   },
   {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Crie sites que funcionam perfeitamente em todos os dispositivos",
   },
  ],
  topics: [
   "Seletores e propriedades CSS",
   "Box Model e posicionamento",
   "Flexbox e CSS Grid",
   "Design responsivo e media queries",
   "Animações e transições",
   "Pré-processadores (Sass/SCSS)",
   "CSS moderno e variáveis",
   "Performance e otimização",
  ],
  prerequisites: [
   {
    level: "green",
    title: "HTML Básico",
    description: "Conhecimento fundamental de HTML e estrutura de documentos",
   },
   {
    level: "green",
    title: "Editor de Código",
    description: "Visual Studio Code ou qualquer editor com suporte a CSS",
   },
   {
    level: "blue",
    title: "Navegador Moderno",
    description: "Chrome, Firefox ou Safari para testar seus estilos",
   },
  ],
  nextSteps: [
   { name: "Aprender JavaScript", href: "/javascript" },
   { name: "Revisar HTML", href: "/html" },
  ],
  tutorialLessons: [
   { id: 1, title: "Introduction", completed: true },
   { id: 2, title: "Selectors", completed: false, active: true },
   { id: 3, title: "Properties", completed: false },
   { id: 4, title: "Box Model", completed: false },
   { id: 5, title: "Layout", completed: false },
   { id: 6, title: "Flexbox", completed: false },
   { id: 7, title: "Grid", completed: false },
   { id: 8, title: "Responsive Design", completed: false },
   { id: 9, title: "Animations", completed: false },
   { id: 10, title: "Best Practices", completed: false },
  ],
  tutorialContent: {
   title: "Selectors",
   description:
    "Learn how CSS selectors target HTML elements and apply styles to create beautiful, responsive designs.",
   content: `CSS selectors are patterns used to select and style HTML elements. They are the foundation of CSS and allow you to target specific elements or groups of elements on your web page.

## Basic Selectors

### Element Selector
Selects all elements of a specific type:

\`\`\`css
p {
    color: blue;
    font-size: 16px;
}
\`\`\`

### Class Selector
Selects elements with a specific class attribute (prefixed with a dot):

\`\`\`css
.highlight {
    background-color: yellow;
    font-weight: bold;
}
\`\`\`

### ID Selector
Selects a single element with a specific ID (prefixed with a hash):

\`\`\`css
#header {
    background-color: #333;
    color: white;
    padding: 20px;
}
\`\`\`

## Combining Selectors

### Descendant Selector
Selects elements that are descendants of another element:

\`\`\`css
div p {
    margin-bottom: 10px;
}
\`\`\`

### Child Selector
Selects direct children of an element:

\`\`\`css
ul > li {
    list-style-type: none;
    padding: 5px;
}
\`\`\`

## Pseudo-classes
Pseudo-classes select elements based on their state:

\`\`\`css
a:hover {
    color: red;
    text-decoration: underline;
}

button:active {
    background-color: #ccc;
}

input:focus {
    border: 2px solid blue;
    outline: none;
}
\`\`\`

## Practical Example
Here's a complete example showing different selectors in action:

\`\`\`css
/* Element selector */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

/* Class selector */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* ID selector */
#navigation {
    background-color: #333;
    padding: 10px 0;
}

/* Descendant selector */
#navigation a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
}

/* Pseudo-class */
#navigation a:hover {
    background-color: #555;
}
\`\`\``,
  },
 },
 javascript: {
  id: "javascript",
  name: "JavaScript",
  description:
   "Adicione interatividade e lógica às suas páginas web. Aprenda a linguagem de programação mais popular do mundo e crie experiências dinâmicas para seus usuários.",
  level: "Intermediário",
  duration: "6-8 horas",
  lessons: 20,
  students: "1.8k",
  rating: 4.9,
  reviews: 412,
  features: [
   {
    icon: Zap,
    title: "Interatividade",
    description: "Adicione comportamentos dinâmicos e interações aos seus websites",
   },
   {
    icon: Code2,
    title: "Lógica de Programação",
    description: "Aprenda conceitos fundamentais de programação com JavaScript",
   },
   {
    icon: Globe,
    title: "APIs e Dados",
    description: "Conecte-se com APIs externas e manipule dados em tempo real",
   },
  ],
  topics: [
   "Variáveis e tipos de dados",
   "Funções e escopo",
   "Manipulação do DOM",
   "Eventos e interações",
   "Programação assíncrona",
   "Fetch API e AJAX",
   "ES6+ features modernas",
   "Debugging e boas práticas",
  ],
  prerequisites: [
   {
    level: "green",
    title: "HTML e CSS",
    description: "Conhecimento sólido de HTML e CSS para manipular elementos",
   },
   {
    level: "green",
    title: "Lógica Básica",
    description: "Compreensão de conceitos básicos de lógica e resolução de problemas",
   },
   {
    level: "blue",
    title: "Console do Navegador",
    description: "Familiaridade com as ferramentas de desenvolvedor do navegador",
   },
  ],
  nextSteps: [
   { name: "Aprender React", href: "/react" },
   { name: "Explorar Node.js", href: "/nodejs" },
  ],
  tutorialLessons: [
   { id: 1, title: "Introduction", completed: false },
   { id: 2, title: "Variables", completed: false, active: true },
   { id: 3, title: "Functions", completed: false },
  ],
  tutorialContent: {
   title: "Variables",
   description: "Learn how to declare and use variables in JavaScript to store and manipulate data.",
   content: "JavaScript variables content...",
  },
 },
 react: {
  id: "react",
  name: "React",
  description:
   "Construa interfaces modernas e dinâmicas com React. Aprenda a biblioteca JavaScript mais popular para desenvolvimento de interfaces de usuário interativas.",
  level: "Intermediário",
  duration: "8-10 horas",
  lessons: 18,
  students: "1.5k",
  rating: 4.8,
  reviews: 287,
  features: [
   {
    icon: Component,
    title: "Componentes",
    description: "Crie interfaces reutilizáveis com componentes React modulares",
   },
   {
    icon: Layers,
    title: "Estado e Props",
    description: "Gerencie dados e comunicação entre componentes eficientemente",
   },
   {
    icon: Zap,
    title: "Hooks Modernos",
    description: "Utilize hooks para criar aplicações React funcionais e poderosas",
   },
  ],
  topics: [
   "Componentes e JSX",
   "Props e comunicação",
   "State e useState",
   "Hooks essenciais",
   "Manipulação de eventos",
   "Renderização condicional",
   "Listas e keys",
   "Context API",
  ],
  prerequisites: [
   {
    level: "green",
    title: "JavaScript ES6+",
    description: "Conhecimento sólido de JavaScript moderno, incluindo arrow functions, destructuring e modules",
   },
   {
    level: "green",
    title: "HTML e CSS",
    description: "Base sólida em HTML e CSS para criar interfaces",
   },
   {
    level: "blue",
    title: "Node.js e npm",
    description: "Ambiente de desenvolvimento configurado com Node.js",
   },
  ],
  nextSteps: [
   { name: "Aprender Node.js", href: "/nodejs" },
   { name: "Revisar JavaScript", href: "/javascript" },
  ],
  tutorialLessons: [
   { id: 1, title: "Introduction", completed: false },
   { id: 2, title: "Components", completed: false, active: true },
   { id: 3, title: "Props", completed: false },
  ],
  tutorialContent: {
   title: "Components",
   description: "Learn how to create and use React components to build modular user interfaces.",
   content: "React components content...",
  },
 },
 nodejs: {
  id: "nodejs",
  name: "Node.js",
  description:
   "Desenvolva o backend das suas aplicações com Node.js. Aprenda a criar servidores, APIs e sistemas completos usando JavaScript no servidor.",
  level: "Avançado",
  duration: "10-12 horas",
  lessons: 16,
  students: "1.2k",
  rating: 4.7,
  reviews: 198,
  features: [
   {
    icon: Server,
    title: "Servidor Web",
    description: "Crie servidores robustos e APIs RESTful com Express.js",
   },
   {
    icon: Database,
    title: "Banco de Dados",
    description: "Conecte e manipule bancos de dados SQL e NoSQL",
   },
   {
    icon: Shield,
    title: "Autenticação",
    description: "Implemente sistemas de autenticação e autorização seguros",
   },
  ],
  topics: [
   "Fundamentos do Node.js",
   "Sistema de módulos",
   "Express.js framework",
   "APIs RESTful",
   "Middleware e roteamento",
   "Banco de dados e ORMs",
   "Autenticação JWT",
   "Deploy e produção",
  ],
  prerequisites: [
   {
    level: "green",
    title: "JavaScript Avançado",
    description: "Conhecimento profundo de JavaScript, incluindo async/await, promises e ES6+",
   },
   {
    level: "green",
    title: "Conceitos de Backend",
    description: "Compreensão básica de servidores, APIs e protocolos HTTP",
   },
   {
    level: "blue",
    title: "Terminal/Command Line",
    description: "Familiaridade com linha de comando e npm",
   },
  ],
  nextSteps: [
   { name: "Revisar React", href: "/react" },
   { name: "Sobre o Projeto", href: "/sobre" },
  ],
  tutorialLessons: [
   { id: 1, title: "Introduction", completed: false },
   { id: 2, title: "Modules", completed: false, active: true },
   { id: 3, title: "Express", completed: false },
  ],
  tutorialContent: {
   title: "Modules",
   description: "Learn how to use Node.js modules to organize and structure your backend applications.",
   content: "Node.js modules content...",
  },
 },
}

export function getTechnology(id: string): Technology | null {
 return technologies[id] || null
}

export function getAllTechnologies(): Technology[] {
 return Object.values(technologies)
}
