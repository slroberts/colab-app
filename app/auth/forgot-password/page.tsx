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

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgetPassword() {
  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const handleSubmit = (values: ForgotPasswordValues) => {
    console.log('Sending password reset link to', values.email);
    form.reset();
  };

  return (
    <div className='flex items-center justify-center '>
      <div className='w-full max-w-md p-8 '>
        <h2 className='mb-6 text-2xl font-bold text-center'>Forget Password</h2>
        <p className='mb-4 text-center text-gray-600'>
          Enter your email address to receive a password reset link.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className='space-y-4'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type='email' placeholder='Email' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className='w-full cursor-pointer mt-2'
              size='lg'
              type='submit'
            >
              Send Reset Link
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
