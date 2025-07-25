"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Bookmark, PlayCircle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getTechnology } from "@/lib/technologies"

export default function TutorialPage({ params }: { params: { tech: string } }) {
 const technology = getTechnology(params.tech)
 const [isSaved, setIsSaved] = useState(false)

 if (!technology) {
  notFound()
 }

 const activeLesson = technology.tutorialLessons.find((lesson) => lesson.active)

 const handleSave = () => {
  setIsSaved(true)
  setTimeout(() => setIsSaved(false), 2000)
 }

 const renderContent = (content: string) => {
  return content.split("\n").map((paragraph, index) => {
   if (paragraph.startsWith("## ")) {
    return (
     <h2 key={index} className="text-xl font-semibold mb-4 mt-8">
      {paragraph.replace("## ", "")}
     </h2>
    )
   }
   if (paragraph.startsWith("### ")) {
    return (
     <h3 key={index} className="text-lg font-semibold mb-3 mt-6">
      {paragraph.replace("### ", "")}
     </h3>
    )
   }
   if (paragraph.startsWith("```")) {
    const nextIndex = content.split("\n").findIndex((line, i) => i > index && line.startsWith("```"))
    if (nextIndex !== -1) {
     const codeContent = content
      .split("\n")
      .slice(index + 1, nextIndex)
      .join("\n")
     return (
      <div key={index} className="bg-muted p-4 rounded-lg mb-6">
       <pre className="text-sm overflow-x-auto">
        <code>{codeContent}</code>
       </pre>
      </div>
     )
    }
   }
   if (paragraph.startsWith("- ")) {
    return (
     <li key={index} className="ml-6 mb-1">
      {paragraph.replace("- ", "")}
     </li>
    )
   }
   if (paragraph.trim() === "") {
    return <br key={index} />
   }
   if (paragraph.includes("`") && !paragraph.startsWith("```")) {
    const parts = paragraph.split("`")
    return (
     <p key={index} className="text-base leading-relaxed mb-4">
      {parts.map((part, i) =>
       i % 2 === 0 ? (
        part
       ) : (
        <code key={i} className="bg-muted px-1 rounded text-sm">
         {part}
        </code>
       ),
      )}
     </p>
    )
   }
   if (paragraph.includes("**")) {
    const parts = paragraph.split("**")
    return (
     <p key={index} className="text-base leading-relaxed mb-4">
      {parts.map((part, i) => (i % 2 === 0 ? part : <strong key={i}>{part}</strong>))}
     </p>
    )
   }
   return (
    <p key={index} className="text-base leading-relaxed mb-6">
     {paragraph}
    </p>
   )
  })
 }

 return (
  <div className="min-h-screen flex">
   {/* Sidebar */}
   <div className="w-64 border-r bg-muted/30 flex-shrink-0">
    <div className="p-4">
     <h2 className="font-semibold text-lg mb-4">{technology.name.toUpperCase()}</h2>
     <nav className="space-y-1">
      {technology.tutorialLessons.map((lesson) => (
       <button
        key={lesson.id}
        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${lesson.active
          ? "bg-primary text-primary-foreground"
          : lesson.completed
           ? "text-muted-foreground hover:text-foreground"
           : "text-muted-foreground hover:text-foreground hover:bg-muted"
         }`}
       >
        <div className="flex items-center gap-2">
         {lesson.completed ? <CheckCircle className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
         {lesson.title}
        </div>
       </button>
      ))}
     </nav>
    </div>
   </div>

   {/* Main Content */}
   <div className="flex-1 flex flex-col">
    {/* Breadcrumb */}
    <div className="border-b px-6 py-3">
     <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/" className="hover:text-foreground">
       Tutorials
      </Link>
      <span>›</span>
      <Link href={`/${technology.id}`} className="hover:text-foreground">
       {technology.name}
      </Link>
      <span>›</span>
      <span className="text-foreground">{activeLesson?.title || technology.tutorialContent.title}</span>
     </div>
    </div>

    {/* Content */}
    <div className="flex-1 p-6">
     <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
       <div className="flex items-center gap-4 mb-4">
        <h1 className="text-3xl font-bold">{activeLesson?.title || technology.tutorialContent.title}</h1>
        <Button
         variant="ghost"
         size="sm"
         onClick={handleSave}
         className={`transition-all duration-300 ${isSaved
           ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 scale-105"
           : "hover:bg-muted"
          }`}
        >
         <Bookmark
          className={`w-4 h-4 mr-2 transition-all duration-300 ${isSaved ? "fill-current scale-110" : ""}`}
         />
         {isSaved ? "Saved!" : "Save"}
        </Button>
       </div>

       <blockquote className="border-l-4 border-muted-foreground pl-4 italic text-muted-foreground mb-8">
        {technology.tutorialContent.description}
       </blockquote>
      </div>

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
       {renderContent(technology.tutorialContent.content)}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t">
       <Button variant="outline" asChild>
        <Link href={`/${technology.id}`}>
         <ArrowLeft className="w-4 h-4 mr-2" />
         Back to {technology.name}
        </Link>
       </Button>

       <div className="flex items-center gap-2">
        <Button variant="outline">Previous</Button>
        <Button>
         Next:{" "}
         {technology.tutorialLessons.find((l) => l.id === (activeLesson?.id || 2) + 1)?.title ||
          "Basic Structure"}
        </Button>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}
