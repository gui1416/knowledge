import Link from "next/link"
import { Code, Heart, Github, Twitter, Mail } from "lucide-react"

export default function Footer() {
 return (
  <footer className="bg-gray-900 text-white">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid md:grid-cols-4 gap-8">
     {/* Logo and Description */}
     <div className="md:col-span-2">
      <Link href="/" className="flex items-center space-x-2 mb-4">
       <Code className="h-8 w-8 text-blue-400" />
       <span className="text-2xl font-bold">Knowledge</span>
      </Link>
      <p className="text-gray-400 mb-6 max-w-md">
       Democratizando o ensino de desenvolvimento web através de tutoriais práticos, claros e acessíveis para
       todos.
      </p>
      <div className="flex space-x-4">
       <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
        <Github className="h-5 w-5" />
       </a>
       <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
        <Twitter className="h-5 w-5" />
       </a>
       <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
        <Mail className="h-5 w-5" />
       </a>
      </div>
     </div>

     {/* Quick Links */}
     <div>
      <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
      <ul className="space-y-2">
       <li>
        <Link href="/tutoriais" className="text-gray-400 hover:text-white transition-colors">
         Todos os Tutoriais
        </Link>
       </li>
       <li>
        <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
         Sobre Nós
        </Link>
       </li>
       <li>
        <Link href="/apoie-me" className="text-gray-400 hover:text-white transition-colors">
         Apoie o Projeto
        </Link>
       </li>
       <li>
        <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
         Contato
        </Link>
       </li>
      </ul>
     </div>

     {/* Technologies */}
     <div>
      <h3 className="text-lg font-semibold mb-4">Tecnologias</h3>
      <ul className="space-y-2">
       <li>
        <Link href="/tutoriais/html" className="text-gray-400 hover:text-white transition-colors">
         HTML
        </Link>
       </li>
       <li>
        <Link href="/tutoriais/css" className="text-gray-400 hover:text-white transition-colors">
         CSS
        </Link>
       </li>
       <li>
        <Link href="/tutoriais/javascript" className="text-gray-400 hover:text-white transition-colors">
         JavaScript
        </Link>
       </li>
       <li>
        <Link href="/tutoriais/react" className="text-gray-400 hover:text-white transition-colors">
         React
        </Link>
       </li>
       <li>
        <Link href="/tutoriais/nodejs" className="text-gray-400 hover:text-white transition-colors">
         Node.js
        </Link>
       </li>
      </ul>
     </div>
    </div>

    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
     <p className="text-gray-400 text-sm">© 2025 - Knowledge. Todos os direitos reservados.</p>
     <div className="flex items-center space-x-4 mt-4 md:mt-0">
      <span className="text-gray-400 text-sm">Feito com</span>
      <Heart className="h-4 w-4 text-red-500" />
      <span className="text-gray-400 text-sm">por Guilherme</span>
     </div>
    </div>
   </div>
  </footer>
 )
}
