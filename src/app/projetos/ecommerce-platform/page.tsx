import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"
import { ComponentPreview } from "@/components/mdx-components"

export default function EcommercePlatformPage() {
 return (
  <div className="container mx-auto px-6 py-8 max-w-4xl">
   <div className="mb-8">
    <Button variant="ghost" size="sm" asChild className="mb-4">
     <Link href="/projetos">
      <ArrowLeft className="mr-2 h-4 w-4" />
      Voltar aos Projetos
     </Link>
    </Button>

    <div className="flex items-center gap-3 mb-4">
     <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
      <TrendingUp className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
     </div>
     <div>
      <h1 className="text-3xl font-bold">E-commerce Platform</h1>
      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 mt-2">
       Em Desenvolvimento
      </Badge>
     </div>
    </div>

    <p className="text-lg text-muted-foreground max-w-2xl">
     Plataforma completa de e-commerce com Next.js 14, integração Stripe, dashboard administrativo e sistema de
     inventário em tempo real.
    </p>
   </div>

   <Card className="mb-8">
    <CardHeader>
     <CardTitle className="flex items-center gap-2">
      <Zap className="h-5 w-5" />
      Progresso do Desenvolvimento
     </CardTitle>
    </CardHeader>
    <CardContent>
     <div className="space-y-4">
      <div className="flex items-center justify-between">
       <span>Progresso Geral</span>
       <span className="font-semibold">75%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3">
       <div
        className="bg-yellow-600 h-3 rounded-full transition-all duration-300"
        style={{ width: "75%" }}
       ></div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
       <div>
        <h4 className="font-medium mb-2">Concluído ✅</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
         <li>• Autenticação e autorização</li>
         <li>• Catálogo de produtos</li>
         <li>• Carrinho de compras</li>
         <li>• Integração Stripe</li>
        </ul>
       </div>
       <div>
        <h4 className="font-medium mb-2">Em Desenvolvimento 🚧</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
         <li>• Dashboard administrativo</li>
         <li>• Sistema de reviews</li>
         <li>• Notificações por email</li>
         <li>• Analytics avançado</li>
        </ul>
       </div>
      </div>
     </div>
    </CardContent>
   </Card>

   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Stack Tecnológico</h2>
    <div className="grid md:grid-cols-3 gap-4">
     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Frontend</CardTitle>
      </CardHeader>
      <CardContent>
       <div className="flex flex-wrap gap-2">
        {["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
         <Badge key={tech} variant="outline">
          {tech}
         </Badge>
        ))}
       </div>
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Backend</CardTitle>
      </CardHeader>
      <CardContent>
       <div className="flex flex-wrap gap-2">
        {["Prisma", "PostgreSQL", "Stripe API", "NextAuth"].map((tech) => (
         <Badge key={tech} variant="outline">
          {tech}
         </Badge>
        ))}
       </div>
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle className="text-lg">Deploy</CardTitle>
      </CardHeader>
      <CardContent>
       <div className="flex flex-wrap gap-2">
        {["Vercel", "Supabase", "Cloudinary", "Resend"].map((tech) => (
         <Badge key={tech} variant="outline">
          {tech}
         </Badge>
        ))}
       </div>
      </CardContent>
     </Card>
    </div>
   </section>

   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Preview da Interface</h2>
    <ComponentPreview>
     <EcommerceDemo />
    </ComponentPreview>
   </section>

   <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-4">Próximos Passos</h2>
    <div className="space-y-3">
     {[
      { task: "Finalizar dashboard administrativo", priority: "Alta", eta: "1 semana" },
      { task: "Implementar sistema de reviews", priority: "Média", eta: "2 semanas" },
      { task: "Adicionar notificações por email", priority: "Média", eta: "1 semana" },
      { task: "Testes de performance e otimização", priority: "Alta", eta: "1 semana" },
     ].map((item, index) => (
      <Card key={index}>
       <CardContent className="p-4">
        <div className="flex items-center justify-between">
         <span className="font-medium">{item.task}</span>
         <div className="flex items-center gap-2">
          <Badge variant={item.priority === "Alta" ? "destructive" : "secondary"}>{item.priority}</Badge>
          <span className="text-sm text-muted-foreground">{item.eta}</span>
         </div>
        </div>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>

   <div className="flex gap-4">
    <Button asChild>
     <Link href="https://github.com/user/ecommerce-platform" target="_blank">
      <Github className="mr-2 h-4 w-4" />
      Ver Código
     </Link>
    </Button>
    <Button variant="outline" asChild>
     <Link href="https://ecommerce-demo.vercel.app" target="_blank">
      <ExternalLink className="mr-2 h-4 w-4" />
      Ver Demo
     </Link>
    </Button>
   </div>
  </div>
 )
}

function EcommerceDemo() {
 return (
  <div className="bg-white dark:bg-gray-900 rounded-lg border p-4 max-w-sm mx-auto">
   <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded mb-3 flex items-center justify-center">
    <span className="text-gray-400">Produto Image</span>
   </div>

   <h3 className="font-semibold mb-1">Smartphone Pro Max</h3>
   <p className="text-sm text-muted-foreground mb-2">Último modelo com câmera avançada</p>

   <div className="flex items-center justify-between mb-3">
    <span className="text-lg font-bold">R$ 2.999,00</span>
    <div className="flex items-center gap-1">
     <span className="text-yellow-500">★★★★★</span>
     <span className="text-sm text-muted-foreground">(128)</span>
    </div>
   </div>

   <Button className="w-full" size="sm">
    Adicionar ao Carrinho
   </Button>
  </div>
 )
}
