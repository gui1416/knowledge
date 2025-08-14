"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"

interface CodeHighlighterProps {
 code: string
 language?: string
 filename?: string
}

interface Token {
 type: string
 value: string
 start: number
 end: number
}

export function CodeHighlighter({ code, language, filename }: CodeHighlighterProps) {
 const [copied, setCopied] = useState(false)

 const copyToClipboard = async () => {
  await navigator.clipboard.writeText(code)
  setCopied(true)
  setTimeout(() => setCopied(false), 2000)
 }

 const tokenize = (code: string, lang?: string): Token[] => {
  if (!lang || lang === "text") return [{ type: "text", value: code, start: 0, end: code.length }]

  const tokens: Token[] = []
  const patterns = [
   // Comentários (deve vir primeiro)
   { type: "comment", regex: /\/\/.*$/gm },
   { type: "comment", regex: /\/\*[\s\S]*?\*\//g },
   // Strings (deve vir antes de outras patterns)
   { type: "string", regex: /"(?:[^"\\]|\\.)*"/g },
   { type: "string", regex: /'(?:[^'\\]|\\.)*'/g },
   { type: "string", regex: /`(?:[^`\\]|\\.)*`/g },
   // Keywords
   {
    type: "keyword",
    regex:
     /\b(?:const|let|var|function|return|if|else|for|while|class|interface|type|import|export|from|default|async|await|try|catch|finally|throw|new|this|super|extends|implements|public|private|protected|static|readonly|abstract|enum|namespace|module|declare|as|in|of|typeof|instanceof|void|null|undefined|true|false)\b/g,
   },
   // Números
   { type: "number", regex: /\b\d+(?:\.\d+)?\b/g },
   // Tags JSX/HTML
   { type: "tag", regex: /<\/?[a-zA-Z][a-zA-Z0-9]*(?:\s[^>]*)?\/?>/g },
   // Propriedades JSX
   { type: "attr", regex: /\b[a-zA-Z-]+(?==)/g },
   // Operadores
   { type: "operator", regex: /[+\-*/%=<>!&|^~?:]/g },
   // Pontuação
   { type: "punctuation", regex: /[{}[\]();,.]/g },
  ]

  // Encontrar todas as matches
  const allMatches: Array<{ type: string; match: RegExpMatchArray }> = []

  patterns.forEach((pattern) => {
   let match
   while ((match = pattern.regex.exec(code)) !== null) {
    allMatches.push({ type: pattern.type, match })
   }
  })

  // Ordenar por posição
  allMatches.sort((a, b) => a.match.index! - b.match.index!)

  // Resolver conflitos (primeiro match ganha)
  const resolvedTokens: Token[] = []
  let lastEnd = 0

  allMatches.forEach(({ type, match }) => {
   const start = match.index!
   const end = start + match[0].length

   // Se não há sobreposição com tokens anteriores
   if (start >= lastEnd) {
    // Adicionar texto normal antes do token, se houver
    if (start > lastEnd) {
     resolvedTokens.push({
      type: "text",
      value: code.slice(lastEnd, start),
      start: lastEnd,
      end: start,
     })
    }

    // Adicionar o token
    resolvedTokens.push({
     type,
     value: match[0],
     start,
     end,
    })

    lastEnd = end
   }
  })

  // Adicionar texto restante
  if (lastEnd < code.length) {
   resolvedTokens.push({
    type: "text",
    value: code.slice(lastEnd),
    start: lastEnd,
    end: code.length,
   })
  }

  return resolvedTokens
 }

 const renderToken = (token: Token) => {
  const classMap: Record<string, string> = {
   comment: "text-slate-500 italic",
   string: "text-emerald-400",
   keyword: "text-purple-400 font-medium",
   number: "text-orange-400",
   tag: "text-blue-400",
   attr: "text-yellow-400",
   operator: "text-pink-400",
   punctuation: "text-slate-300",
   text: "text-slate-100",
  }

  const className = classMap[token.type] || "text-slate-100"

  return (
   <span key={`${token.start}-${token.end}`} className={className}>
    {token.value}
   </span>
  )
 }

 const highlightCode = (code: string, lang?: string) => {
  const tokens = tokenize(code, lang)
  return tokens.map(renderToken)
 }

 return (
  <div className="relative my-3 sm:my-4 w-full overflow-hidden rounded-lg border bg-slate-950">
   {filename && (
    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-3 py-2 sm:px-4">
     <span className="text-xs sm:text-sm font-medium text-slate-300 truncate pr-2">{filename}</span>
     {language && (
      <span className="text-xs px-2 py-0.5 bg-slate-800 text-slate-300 rounded flex-shrink-0">{language}</span>
     )}
    </div>
   )}
   <div className="relative">
    <pre className="overflow-x-auto p-3 sm:p-4 text-xs sm:text-sm leading-relaxed">
     <code className="font-mono">{highlightCode(code, language)}</code>
    </pre>
    <Button
     size="icon"
     variant="ghost"
     className="absolute right-2 top-2 h-7 w-7 sm:h-8 sm:w-8 text-slate-400 hover:text-slate-100 hover:bg-slate-800"
     onClick={copyToClipboard}
    >
     {copied ? <Check className="h-3 w-3 sm:h-4 sm:w-4" /> : <Copy className="h-3 w-3 sm:h-4 sm:w-4" />}
    </Button>
   </div>
  </div>
 )
}
