import { AuthForm } from '@/components/auth/AuthForm';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Auth() {
  return (
    <div>
      <Tabs defaultValue='login' className='w-full max-w-md mx-auto'>
        <TabsList className='mb-6'>
          <TabsTrigger value='login'>Login</TabsTrigger>
          <TabsTrigger value='signup'>Create Account</TabsTrigger>
        </TabsList>
        <TabsContent value='login'>
          <p className='mb-4'>Login to account</p>
          <div className='divide-y-2 divide-gray-100'>
            <div className='pb-8'>
              <AuthForm mode='login' />
            </div>

            <div className='pt-4'>
              <p>Continue with</p>
              <Button className='w-full cursor-pointer mt-4' size='lg'>
                Google
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value='signup'>
          <p className='mb-4'>We are excited to have you on board.</p>
          <AuthForm mode='signup' />
        </TabsContent>
      </Tabs>
    </div>
  );
}
