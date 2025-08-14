import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const components = [
 {
  name: 'Button',
  description: 'Botão interativo com múltiplas variações e estados',
  href: '/snippets/componentes/button',
  status: 'stable'
 },
 {
  name: 'Input',
  description: 'Campo de entrada de texto com validação e máscaras',
  href: '/snippets/componentes/input',
  status: 'stable'
 },
 {
  name: 'Card',
  description: 'Container flexível para agrupar conteúdo relacionado',
  href: '/snippets/componentes/card',
  status: 'stable'
 },
 {
  name: 'Modal',
  description: 'Janela modal responsiva com overlay e animações',
  href: '/snippets/componentes/modal',
  status: 'stable'
 },
 {
  name: 'Dropdown',
  description: 'Menu suspenso com opções e ações contextuais',
  href: '/snippets/componentes/dropdown',
  status: 'stable'
 },
 {
  name: 'Tabs',
  description: 'Navegação por abas para organizar conteúdo',
  href: '/snippets/componentes/tabs',
  status: 'stable'
 },
 {
  name: 'Form',
  description: 'Formulário completo com validação e estados',
  href: '/snippets/componentes/form',
  status: 'beta'
 },
 {
  name: 'DataTable',
  description: 'Tabela de dados com sorting, filtros e paginação',
  href: '/snippets/componentes/data-table',
  status: 'beta'
 },
 {
  name: 'Toast',
  description: 'Notificações temporárias não-intrusivas',
  href: '/snippets/componentes/toast',
  status: 'stable'
 },
 {
  name: 'Loading',
  description: 'Indicadores de carregamento e estados de loading',
  href: '/snippets/componentes/loading',
  status: 'stable'
 }
]

export default function ComponentsPage() {
 return (
  <div className="container mx-auto px-4 py-8 max-w-6xl">
   <div className="mb-8">
    <h1 className="text-3xl font-bold mb-4">Componentes Reutilizáveis</h1>
    <p className="text-muted-foreground text-lg">
     Coleção de componentes React prontos para uso, com exemplos interativos,
     código fonte e documentação completa.
    </p>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {components.map((component) => (
     <Link key={component.name} href={component.href}>
      <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
       <CardHeader>
        <div className="flex items-center justify-between">
         <CardTitle className="text-xl">{component.name}</CardTitle>
         <Badge
          variant={component.status === 'stable' ? 'default' : 'secondary'}
          className="text-xs"
         >
          {component.status}
         </Badge>
        </div>
        <CardDescription className="text-sm leading-relaxed">
         {component.description}
        </CardDescription>
       </CardHeader>
       <CardContent>
        <div className="text-sm text-muted-foreground">
         Clique para ver exemplos →
        </div>
       </CardContent>
      </Card>
     </Link>
    ))}
   </div>

   <div className="mt-12 p-6 bg-muted/50 rounded-lg">
    <h2 className="text-xl font-semibold mb-3">Como Usar</h2>
    <div className="space-y-2 text-sm">
     <p>• <strong>Preview</strong>: Veja o componente funcionando em tempo real</p>
     <p>• <strong>Code</strong>: Copie o código fonte completo</p>
     <p>• <strong>Props</strong>: Documentação das propriedades disponíveis</p>
     <p>• <strong>Variações</strong>: Diferentes estilos e configurações</p>
     <p>• <strong>Exemplos</strong>: Casos de uso práticos e reais</p>
    </div>
   </div>
  </div>
 )
}
