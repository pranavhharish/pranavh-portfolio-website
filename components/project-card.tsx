"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  slug: string
}

export function ProjectCard({ title, category, image, slug }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const getImageSrc = () => {
    if (imageError) {
      return "/placeholder.svg?height=200&width=300&text=Project"
    }
    return image || "/placeholder.svg?height=200&width=300&text=Project"
  }

  return (
    <Link href={`/projects/${slug}`} className="block h-full">
      <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden group hover:border-cyan-500/50 transition-all h-full">
        <div className="relative h-40 sm:h-48 w-full overflow-hidden">
          <Image
            src={getImageSrc() || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-3 sm:p-4">
            <div className="text-xs text-cyan-400 mb-1">{category}</div>
            <h3 className="font-medium text-sm sm:text-base">{title}</h3>
          </div>
        </div>
      </Card>
    </Link>
  )
}
