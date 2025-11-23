import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const signupSchema = loginSchema.extend({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, signUp, user } = useAuth();

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const signupForm = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  // Redirect if already logged in
  if (user) {
    navigate('/ticket-dashboard');
  }

  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true);
    const { error } = await signIn(data.email, data.password);
    setIsLoading(false);
    
    if (!error) {
      navigate('/ticket-dashboard');
    }
  };

  const handleSignup = async (data: SignupFormData) => {
    setIsLoading(true);
    const { error } = await signUp(data.email, data.password, data.fullName);
    setIsLoading(false);
    
    if (!error) {
      signupForm.reset();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <CardTitle>Welcome to Waks Digital</CardTitle>
          <CardDescription>Sign in to manage your tickets</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
                <div>
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    {...loginForm.register('email')}
                  />
                  {loginForm.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {loginForm.formState.errors.email.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Link 
                      to="/forgot-password" 
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="login-password"
                    type="password"
                    {...loginForm.register('password')}
                  />
                  {loginForm.formState.errors.password && (
                    <p className="text-sm text-destructive mt-1">
                      {loginForm.formState.errors.password.message}
                    </p>
                  )}
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={signupForm.handleSubmit(handleSignup)} className="space-y-4">
                <div>
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    {...signupForm.register('fullName')}
                  />
                  {signupForm.formState.errors.fullName && (
                    <p className="text-sm text-destructive mt-1">
                      {signupForm.formState.errors.fullName.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    {...signupForm.register('email')}
                  />
                  {signupForm.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {signupForm.formState.errors.email.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    {...signupForm.register('password')}
                  />
                  {signupForm.formState.errors.password && (
                    <p className="text-sm text-destructive mt-1">
                      {signupForm.formState.errors.password.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="signup-confirm">Confirm Password</Label>
                  <Input
                    id="signup-confirm"
                    type="password"
                    {...signupForm.register('confirmPassword')}
                  />
                  {signupForm.formState.errors.confirmPassword && (
                    <p className="text-sm text-destructive mt-1">
                      {signupForm.formState.errors.confirmPassword.message}
                    </p>
                  )}
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Creating account...' : 'Sign Up'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
