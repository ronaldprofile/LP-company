'use client'
import { useState } from 'react'
import { Button } from '../Button'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerPortal
} from '../ui/drawer'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'

import styles from './style.module.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { SolicitationFormValues, solicitationSchema } from './schema'
import { X } from 'lucide-react'
import { toast } from 'sonner'
import { maskCNPJ, maskPhone } from '@/utils/mask'

type SolicitationDrawerProps = {
  Trigger: React.ReactNode
  open?: boolean
  onOpenChange?: () => void
}

const path = `${process.env.NEXT_PUBLIC_GEST_API_BASE_URL}/leads/api/lead/`

export function SolicitationDrawer({
  Trigger,
  open,
  onOpenChange
}: SolicitationDrawerProps) {
  const [loading, setLoading] = useState(false)

  const form = useForm<SolicitationFormValues>({
    resolver: zodResolver(solicitationSchema),
    defaultValues: {
      name: '',
      email: '',
      cnpj: '',
      contact01: '',
      lead_origin: 'Site'
    }
  })

  async function onSubmit(data: SolicitationFormValues) {
    setLoading(true)
    try {
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        toast.error('Não foi possível enviar a solicitação', {
          style: {
            backgroundColor: '#f8d7da',
            color: '#721c24',
            border: '1px solid #f5c6cb'
          }
        })
        return
      }

      closeDrawer()
      toast.success('Solicitação enviada com sucesso!', {
        style: {
          backgroundColor: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb'
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  function closeDrawer() {
    form.clearErrors()
    form.reset()
    if (onOpenChange) onOpenChange()
  }

  return (
    <Drawer direction='right' open={open} onOpenChange={closeDrawer}>
      <DrawerTrigger asChild>{Trigger}</DrawerTrigger>

      <DrawerPortal>
        <DrawerContent className={styles['solicitation-content']}>
          <DrawerHeader className='flex-row items-center justify-between'>
            <DrawerTitle className='text-xl'>
              Marque uma demonstração
            </DrawerTitle>
            <DrawerClose title='Fechar'>
              <X className='cursor-pointer' />
            </DrawerClose>
          </DrawerHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-4 px-4 py-2'
            >
              <FormField
                name='name'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-gray-text'>Empresa *</FormLabel>
                    <FormControl className='h-12 '>
                      <Input
                        placeholder='como gostaria de ser chamado?'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='email'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-gray-text'>E-mail *</FormLabel>
                    <FormControl className='h-12 '>
                      <Input
                        type='email'
                        placeholder='nome@minhaempresa.com.br'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='cnpj'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-gray-text'>CNPJ *</FormLabel>
                    <FormControl className='h-12 focus-within:ring-highlight'>
                      <Input
                        className='focus:ring-highlight'
                        placeholder='00.000.000/0000-00'
                        value={field.value}
                        onChange={e => field.onChange(maskCNPJ(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='contact01'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-gray-text'>
                      Nº do celular *
                    </FormLabel>
                    <FormControl className='h-12 focus-within:ring-highlight'>
                      <Input
                        className='focus:ring-highlight'
                        placeholder='número com DDD'
                        value={field.value}
                        onChange={e =>
                          field.onChange(maskPhone(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DrawerFooter className='w-full px-0'>
                <Button
                  type='submit'
                  disabled={loading || form.formState.isSubmitting}
                  className='w-full text-black p-2 lg:px-6 lg:py-4'
                >
                  {loading ? 'Enviando...' : 'Solicitar uma demonstração'}
                </Button>
              </DrawerFooter>
            </form>
          </Form>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}
