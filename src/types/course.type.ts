export interface Course {
  id: number
  title: string
  description: string
  category: string // e.g., "ml"
  language: string // e.g., "en"
  level: string // e.g., "Beginner"
  thumbnailPath: string // URL to course thumbnail image
  trailerPath: string // URL to course trailer video
  rating?: number // Optional rating (if available)
  status: boolean // Course availability status (true for available, false for not available)
}
