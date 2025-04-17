export interface Faq {
  id: number
  active: boolean
  date_publication: string
  title: string
  icon: string
  description: string
  content: string
  category: { id: number; title: string }
}

export interface FaqResponse {
  pages: 1
  count: number
  results: Faq[]
}
