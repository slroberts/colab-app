'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

const registerSchema = loginSchema
  .extend({
    confirmPassword: z.string().min(6, {
      message: 'Password confirmation must be at least 6 characters',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type Mode = 'login' | 'signup';

type LoginValues = z.infer<typeof loginSchema>;
type RegisterValues = z.infer<typeof registerSchema>;

interface AuthFormProps {
  mode?: Mode;
  onSubmit?: (values: LoginValues | RegisterValues) => void;
}

export function AuthForm({ mode, onSubmit }: AuthFormProps) {
  const schema = mode === 'signup' ? registerSchema : loginSchema;

  const form = useForm<RegisterValues | LoginValues>({
    resolver: zodResolver(schema),
    defaultValues:
      mode === 'signup'
        ? { email: '', password: '', confirmPassword: '' }
        : { email: '', password: '' },
  });

  const handleSubmit = (values: LoginValues | RegisterValues) => {
    if (onSubmit) {
      onSubmit(values);
    } else {
      console.log(
        `${mode === 'login' ? 'Logging in' : 'Registering'} with`,
        values
      );
    }
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='email'
                  placeholder='Ex. name@company.com'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='password'
                  placeholder='Enter your password'
                />
              </FormControl>
              <FormMessage />
              {mode === 'login' && (
                <Button
                  asChild
                  variant='link'
                  className='cursor-pointer flex justify-end'
                  size='sm'
                  type='submit'
                >
                  <Link href='/auth/forgot-password'>Forgot password ?</Link>
                </Button>
              )}
            </FormItem>
          )}
        />

        {mode === 'signup' && (
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Confirm Password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button className='w-full cursor-pointer mt-2' size='lg' type='submit'>
          {mode === 'login' ? 'Login' : 'Create Account'}
        </Button>
      </form>
    </Form>
  );
}
