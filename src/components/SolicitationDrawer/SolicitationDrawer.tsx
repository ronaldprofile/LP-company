'use client'
import { Button } from '../Button'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
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

type SolicitationDrawerProps = {
  Trigger: React.ReactNode
}

export function SolicitationDrawer({ Trigger }: SolicitationDrawerProps) {
  const form = useForm<SolicitationFormValues>({
    resolver: zodResolver(solicitationSchema),
    defaultValues: {
      name: '',
      email: '',
      cnpj: '',
      phone: ''
    }
  })

  const onSubmit = (data: SolicitationFormValues) => {
    console.log('Form Data:', data)
  }

  function closeDrawer() {
    form.clearErrors()
    form.reset()
  }

  return (
    <Drawer onOpenChange={closeDrawer} direction='right'>
      <DrawerTrigger asChild>{Trigger}</DrawerTrigger>
      <DrawerContent className={styles['solicitation-content']}>
        <DrawerHeader className='flex-row items-center justify-between'>
          <DrawerTitle className='text-xl'>Marque uma demonstração</DrawerTitle>
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
                  <FormLabel className='text-gray-text'>Nome *</FormLabel>
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
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='phone'
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
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DrawerFooter className='w-full px-0'>
              <Button type='submit' className='w-full text-black'>
                Quero solicitar uma demonstração
              </Button>
            </DrawerFooter>
          </form>
        </Form>
      </DrawerContent>
    </Drawer>
  )
}
