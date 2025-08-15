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
      className={`my-3 sm:my-4 md:my-6 ${type === "warning"
          ? "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950"
          : type === "success"
            ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950"
            : type === "error"
              ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950"
              : "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950"
        }`}
    >
      <Icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5 sm:mt-1" />
      <div className="flex-1 min-w-0 ml-2 sm:ml-3">
        {title && (
          <AlertTitle className="text-sm sm:text-base md:text-lg mb-1 sm:mb-2 font-semibold">{title}</AlertTitle>
        )}
        <AlertDescription className="text-xs sm:text-sm md:text-base leading-relaxed">{children}</AlertDescription>
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
  return (
    <div className="w-full overflow-hidden">
      <CodeHighlighter code={children} language={language} filename={filename} />
    </div>
  )
}

interface ComponentPreviewProps {
  children: ReactNode
  code?: string // Made code prop optional
  title?: string
  description?: string
}

export function ComponentPreview({ children, code = "", title, description }: ComponentPreviewProps) {
  return (
    <div className="my-4 sm:my-6 md:my-8 w-full">
      {(title || description) && (
        <div className="mb-3 sm:mb-4 md:mb-6 px-1">
          {title && <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">{title}</h4>}
          {description && (
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
          )}
        </div>
      )}

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-8 sm:h-9 md:h-10 mb-2 sm:mb-3">
          <TabsTrigger
            value="preview"
            className="text-xs sm:text-sm md:text-base flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3"
          >
            <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline sm:text-xs md:text-sm">Preview</span>
          </TabsTrigger>
          {code && (
            <TabsTrigger
              value="code"
              className="text-xs sm:text-sm md:text-base flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3"
            >
              <Code className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline sm:text-xs md:text-sm">Code</span>
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="preview" className="mt-2 sm:mt-3 md:mt-4">
          <div className="rounded-lg border bg-background p-3 sm:p-4 md:p-6 lg:p-8 min-h-[150px] sm:min-h-[200px] md:min-h-[250px] flex items-center justify-center overflow-auto">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">{children}</div>
          </div>
        </TabsContent>

        {code && (
          <TabsContent value="code" className="mt-2 sm:mt-3 md:mt-4">
            <div className="w-full overflow-hidden">
              <CodeHighlighter code={code} language="tsx" />
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}

export function Dica({ children }: { children: React.ReactNode }) {
  return (
    <Card className="my-3 sm:my-4 md:my-6 border-l-2 sm:border-l-4 border-l-blue-500 w-full">
      <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-5">
        <CardTitle className="text-sm sm:text-base md:text-lg flex items-center gap-2 sm:gap-3">
          <Info className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
          <span className="font-semibold">Dica</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-5 text-xs sm:text-sm md:text-base leading-relaxed">
        {children}
      </CardContent>
    </Card>
  )
}

export const mdxComponents = {
  Callout,
  CodeBlock,
  ComponentPreview,
  Dica,
  hr: () => <Separator className="my-4 sm:my-6 md:my-8" />,
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="scroll-m-20 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight px-1">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="scroll-m-20 border-b pb-2 sm:pb-3 text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0 mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight px-1">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="scroll-m-20 text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight mt-3 sm:mt-4 md:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4 leading-tight px-1">
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="leading-relaxed mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base lg:text-lg px-1">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="my-3 sm:my-4 md:my-6 ml-3 sm:ml-4 md:ml-6 list-disc space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base lg:text-lg px-1">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="my-3 sm:my-4 md:my-6 ml-3 sm:ml-4 md:ml-6 list-decimal space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base lg:text-lg px-1">
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => <li className="leading-relaxed">{children}</li>,
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="relative rounded bg-muted px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-1 font-mono text-xs sm:text-sm md:text-base font-semibold break-words">
      {children}
    </code>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="mt-3 sm:mt-4 md:mt-6 border-l-2 sm:border-l-4 pl-3 sm:pl-4 md:pl-6 italic text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
      {children}
    </blockquote>
  ),
}
