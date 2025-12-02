import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Minus, Plus, X, Truck, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const cartItems = [
  {
    id: 1,
    name: "LEGO Set Castillo Medieval",
    price: 1299,
    quantity: 2,
    image: "/lego-castillo-medieval.jpg",
  },
  {
    id: 2,
    name: "Muñeca Barbie Fashionista",
    price: 349,
    quantity: 1,
    image: "/muneca-barbie-fashionista.jpg",
  },
  {
    id: 3,
    name: "Hot Wheels Pista Extreme",
    price: 599,
    quantity: 1,
    image: "/hot-wheels-pista.jpg",
  },
]

export default function CarritoPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const envio = subtotal > 999 ? 0 : 99
  const total = subtotal + envio

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Mi Carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex gap-4">
                  <div className="relative w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold">{item.name}</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <p className="text-lg font-bold text-primary mb-3">${item.price}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <p className="font-bold">Subtotal: ${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Coupon */}
            <Card className="p-4">
              <div className="flex gap-2">
                <Input placeholder="Código de cupón" />
                <Button variant="outline" className="flex-shrink-0 bg-transparent">
                  <Tag className="h-4 w-4 mr-2" />
                  Aplicar
                </Button>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Resumen del Pedido</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="font-semibold">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Envío:</span>
                  <span className="font-semibold">{envio === 0 ? "GRATIS" : `$${envio}`}</span>
                </div>
                {envio === 0 && (
                  <Badge className="bg-green-500 w-full justify-center">
                    <Truck className="h-3 w-3 mr-1" />
                    Envío gratis aplicado
                  </Badge>
                )}
                <div className="border-t pt-3 flex justify-between text-lg">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-primary text-2xl">${total}</span>
                </div>
              </div>

              <Button size="lg" className="w-full mb-3 text-lg h-12">
                Proceder al Pago
              </Button>

              <Link href="/productos">
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  Seguir Comprando
                </Button>
              </Link>

              {/* Benefits */}
              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <Truck className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Envío gratis en compras mayores a $999</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Tag className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Devolución gratis en 7 días</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
