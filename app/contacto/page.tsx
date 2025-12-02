import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Atención al Cliente</h1>
            <p className="text-lg text-muted-foreground">
              Estamos aquí para ayudarte. Contáctanos por cualquier medio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="nombre">Nombre Completo</Label>
                  <Input id="nombre" placeholder="Tu nombre" />
                </div>
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div>
                  <Label htmlFor="telefono">Teléfono (Opcional)</Label>
                  <Input id="telefono" type="tel" placeholder="(123) 456-7890" />
                </div>
                <div>
                  <Label htmlFor="asunto">Asunto</Label>
                  <Input id="asunto" placeholder="¿En qué podemos ayudarte?" />
                </div>
                <div>
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." rows={6} />
                </div>
                <Button size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">(55) 1234-5678</p>
                      <p className="text-muted-foreground">Lun - Vie: 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">contacto@jandhu.com</p>
                      <p className="text-muted-foreground">ventas@jandhu.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Dirección</h3>
                      <p className="text-muted-foreground">
                        Av. Principal 123
                        <br />
                        Colonia Centro
                        <br />
                        Ciudad de México, CDMX 01000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horario de Atención</h3>
                      <p className="text-muted-foreground">Lunes - Viernes: 9:00 AM - 8:00 PM</p>
                      <p className="text-muted-foreground">Sábados: 10:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5">
                <h3 className="font-bold text-lg mb-3">Preguntas Frecuentes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ¿Cuál es el tiempo de envío?</li>
                  <li>• ¿Puedo devolver un producto?</li>
                  <li>• ¿Cómo rastreo mi pedido?</li>
                  <li>• ¿Ofrecen envío gratis?</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  Ver Todas las Preguntas
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
