import type React from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Info, CheckCircle, XCircle, Eye, Code } from "lucide-react"
import { CodeHighlighter } from "./code-highlighter"
import type { ReactNode } from "react"

interface CalloutProps {
  type?: "info" | "warning" | "success" | "error"
  title?: string
  children: React.ReactNode
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const icons = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: XCircle,
  }

  const Icon = icons[type]

  return (
    <Alert
      className={`my-3 sm:my-4 ${type === "warning"
          ? "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950"
          : type === "success"
            ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
            : type === "error"
              ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950"
              : "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950"
        }`}
    >
      <Icon className="h-4 w-4 flex-shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        {title && <AlertTitle className="text-sm sm:text-base mb-1">{title}</AlertTitle>}
        <AlertDescription className="text-sm leading-relaxed">{children}</AlertDescription>
      </div>
    </Alert>
  )
}

interface CodeBlockProps {
  children: string
  language?: string
  filename?: string
}

export function CodeBlock({ children, language, filename }: CodeBlockProps) {
  return <CodeHighlighter code={children} language={language} filename={filename} />
}

interface ComponentPreviewProps {
  children: ReactNode
  code: string
  title?: string
  description?: string
}

export function ComponentPreview({ children, code, title, description }: ComponentPreviewProps) {
  return (
    <div className="my-4 sm:my-6">
      {(title || description) && (
        <div className="mb-3 sm:mb-4">
          {title && <h4 className="text-base sm:text-lg font-semibold mb-1">{title}</h4>}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      )}

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-9 sm:h-10">
          <TabsTrigger value="preview" className="text-xs sm:text-sm flex items-center gap-1.5">
            <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Preview</span>
          </TabsTrigger>
          <TabsTrigger value="code" className="text-xs sm:text-sm flex items-center gap-1.5">
            <Code className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Code</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="mt-2 sm:mt-4">
          <div className="rounded-lg border bg-background p-4 sm:p-6 min-h-[200px] flex items-center justify-center">
            <div className="w-full max-w-md">{children}</div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-2 sm:mt-4">
          <CodeHighlighter code={code} language="tsx" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export function Dica({ children }: { children: React.ReactNode }) {
  return (
    <Card className="my-3 sm:my-4 border-l-4 border-l-blue-500">
      <CardHeader className="pb-2 px-3 sm:px-6 pt-3 sm:pt-4">
        <CardTitle className="text-sm sm:text-base flex items-center gap-2">
          <Info className="h-4 w-4 text-blue-500 flex-shrink-0" />
          <span>Dica</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 px-3 sm:px-6 pb-3 sm:pb-4 text-sm leading-relaxed">{children}</CardContent>
    </Card>
  )
}

export const mdxComponents = {
  Callout,
  CodeBlock,
  ComponentPreview,
  Dica,
  hr: () => <Separator className="my-6 sm:my-8" />,
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="scroll-m-20 text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 lg:mb-8 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="scroll-m-20 border-b pb-2 text-lg sm:text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0 mt-6 sm:mt-8 lg:mt-10 mb-3 sm:mb-4 lg:mb-6 leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="scroll-m-20 text-base sm:text-xl lg:text-2xl font-semibold tracking-tight mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4 leading-tight">
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="my-4 sm:my-6 ml-4 sm:ml-6 list-disc space-y-1 sm:space-y-2 text-sm sm:text-base">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="my-4 sm:my-6 ml-4 sm:ml-6 list-decimal space-y-1 sm:space-y-2 text-sm sm:text-base">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => <li className="leading-relaxed">{children}</li>,
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="relative rounded bg-muted px-1 sm:px-1.5 py-0.5 font-mono text-xs sm:text-sm font-semibold">
      {children}
    </code>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="mt-4 sm:mt-6 border-l-2 sm:border-l-4 pl-3 sm:pl-6 italic text-sm sm:text-base">
      {children}
    </blockquote>
  ),
}
