import MainLayout from '@/components/layout/MainLayout';
import MapSection from '@/components/home/MapSection';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contactgegevens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#995a3b] mt-0.5" />
                <div>
                  <p className="font-bold">Cafetaria Hollands spoor</p>
                  <p>stationsplein 3C</p>
                  <p>2515 BT Den haag</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#995a3b]" />
                <p>0707504113</p>
              </div>

              <div className="grid grid-cols-1 gap-y-2 mt-6">
                <h3 className="font-bold flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#995a3b]" /> Bezorgtijden
                </h3>
                <div className="grid grid-cols-[100px_1fr] gap-y-1 text-sm">
                  <span>maandag:</span><span>16:00-01:00</span>
                  <span>dinsdag:</span><span>16:00-01:00</span>
                  <span>woensdag:</span><span>16:00-01:00</span>
                  <span>donderdag:</span><span>16:00-01:00</span>
                  <span>vrijdag:</span><span>16:00-01:00</span>
                  <span>zaterdag:</span><span>16:00-01:00</span>
                  <span>zondag:</span><span>16:00-00:00</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-y-2 mt-4">
                <h3 className="font-bold flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#995a3b]" /> Afhaaltijden
                </h3>
                <div className="grid grid-cols-[100px_1fr] gap-y-1 text-sm">
                  <span>maandag:</span><span>16:00-01:00</span>
                  <span>dinsdag:</span><span>16:00-01:00</span>
                  <span>woensdag:</span><span>16:00-01:00</span>
                  <span>donderdag:</span><span>16:00-01:00</span>
                  <span>vrijdag:</span><span>16:00-01:00</span>
                  <span>zaterdag:</span><span>16:00-01:00</span>
                  <span>zondag:</span><span>16:00-00:00</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Stuur ons een bericht</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Naam
                    </label>
                    <Input placeholder="Uw naam" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      E-mail
                    </label>
                    <Input type="email" placeholder="example@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Telefoonnummer
                    </label>
                    <Input type="tel" placeholder="Uw telefoonnummer" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Onderwerp
                    </label>
                    <Input placeholder="Onderwerp van uw bericht" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Bericht
                    </label>
                    <textarea
                      className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Uw bericht"
                    />
                  </div>
                </div>

                <Button className="w-full bg-[#995a3b] hover:bg-[#7a4730]">
                  Versturen
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <MapSection />
        </div>
      </div>
    </MainLayout>
  );
}
