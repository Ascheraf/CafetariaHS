import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Inloggen</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">E-mailadres</label>
                  <Input type="email" placeholder="Uw e-mailadres" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Wachtwoord</label>
                    <Link href="#" className="text-sm text-[#995a3b] hover:underline">
                      Wachtwoord vergeten?
                    </Link>
                  </div>
                  <Input type="password" placeholder="Uw wachtwoord" />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm font-medium">
                    Onthoud mij
                  </label>
                </div>

                <Button className="w-full bg-[#995a3b] hover:bg-[#7a4730]">
                  Inloggen
                </Button>

                <div className="text-center text-sm">
                  <p>Nog geen account? <Link href="#" className="text-[#995a3b] hover:underline">Registreren</Link></p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
