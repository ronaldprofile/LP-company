'use client'
import { z } from 'zod'

export const solicitationSchema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  email: z.string().email('E-mail inválido'),
  cnpj: z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CNPJ inválido'),
  contact01: z.string().min(1, 'Campo obrigatório'),
  lead_origin: z.string()
})

export type SolicitationFormValues = z.infer<typeof solicitationSchema>
