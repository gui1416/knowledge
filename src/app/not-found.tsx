import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
 return (
  <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
   <div className="max-w-md w-full text-center">
    <Card>
     <CardHeader>
      <div className="text-6xl font-bold text-muted-foreground mb-4">404</div>
      <CardTitle className="text-2xl">Página Não Encontrada</CardTitle>
      <CardDescription>
       A página que você está procurando não existe ou foi movida para outro local.
      </CardDescription>
     </CardHeader>
     <CardContent className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
       <Button asChild className="flex-1">
        <Link href="/">
         <Home className="mr-2 w-4 h-4" />
         Ir para Home
        </Link>
       </Button>
       <Button variant="outline" asChild className="flex-1 bg-transparent">
        <Link href="/tutoriais">
         <BookOpen className="mr-2 w-4 h-4" />
         Ver Tutoriais
        </Link>
       </Button>
      </div>
      <Button variant="ghost" asChild className="w-full">
       <Link href="javascript:history.back()">
        <ArrowLeft className="mr-2 w-4 h-4" />
        Voltar
       </Link>
      </Button>
     </CardContent>
    </Card>
   </div>
  </div>
 )
}
