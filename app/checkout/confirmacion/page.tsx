"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Package, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface OrderData {
  nombre: string
  apellido: string
  email: string
  telefono: string
  direccion: string
  ciudad: string
  estado: string
  codigoPostal: string
  metodoEnvio: string
  metodoPago: string
  items: any[]
  subtotal: number
  envio: number
  total: number
  numeroPedido: string
  fecha: string
}

export default function ConfirmacionPage() {
  const router = useRouter()
  const [orderData, setOrderData] = useState<OrderData | null>(null)

  useEffect(() => {
    const lastOrder = localStorage.getItem("lastOrder")
    if (!lastOrder) {
      router.push("/productos")
      return
    }

    try {
      const order = JSON.parse(lastOrder)
      setOrderData(order)
    } catch (error) {
      console.error("Error al cargar el pedido:", error)
      router.push("/productos")
    }
  }, [router])

  if (!orderData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-muted-foreground">Cargando información del pedido...</p>
        </div>
        <Footer />
      </div>
    )
  }

  const getMetodoEnvioName = (metodo: string) => {
    switch (metodo) {
      case "estandar":
        return "Envío Estándar (5-7 días hábiles)"
      case "express":
        return "Envío Express (2-3 días hábiles)"
      case "gratis":
        return "Envío Gratis (5-7 días hábiles)"
      default:
        return metodo
    }
  }

  const getMetodoPagoName = (metodo: string) => {
    switch (metodo) {
      case "tarjeta":
        return "Tarjeta de Crédito/Débito"
      case "paypal":
        return "PayPal"
      case "efectivo":
        return "Pago contra Entrega"
      default:
        return metodo
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Mensaje de Confirmación */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">¡Pedido Confirmado!</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Gracias por tu compra. Hemos recibido tu pedido y comenzaremos a procesarlo de inmediato.
            </p>
            <Badge className="text-lg px-4 py-2">
              Número de Pedido: {orderData.numeroPedido}
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Resumen del Pedido */}
            <Card className="lg:col-span-2 p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Package className="h-5 w-5" />
                Resumen del Pedido
              </h2>

              <div className="space-y-4 mb-6">
                {orderData.items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b last:border-0">
                    <div className="relative w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">Cantidad: {item.quantity}</p>
                      <p className="text-lg font-bold text-primary mt-2">${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="font-semibold">${orderData.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Envío:</span>
                  <span className="font-semibold">{orderData.envio === 0 ? "GRATIS" : `$${orderData.envio}`}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total:</span>
                  <span className="text-primary">${orderData.total}</span>
                </div>
              </div>
            </Card>

            {/* Información de Envío */}
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Información de Envío
              </h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">{orderData.nombre} {orderData.apellido}</p>
                  <p className="text-muted-foreground">{orderData.direccion}</p>
                  <p className="text-muted-foreground">
                    {orderData.ciudad}, {orderData.estado} {orderData.codigoPostal}
                  </p>
                </div>
                <div className="pt-3 border-t">
                  <p className="font-semibold mb-1">Método de Envío:</p>
                  <p className="text-muted-foreground">{getMetodoEnvioName(orderData.metodoEnvio)}</p>
                </div>
                <div className="pt-3 border-t">
                  <p className="font-semibold mb-1">Método de Pago:</p>
                  <p className="text-muted-foreground">{getMetodoPagoName(orderData.metodoPago)}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Información de Contacto */}
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Información de Contacto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Correo Electrónico</p>
                  <p className="font-semibold">{orderData.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="font-semibold">{orderData.telefono}</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Te enviaremos un correo de confirmación a {orderData.email} con todos los detalles de tu pedido y el
              número de seguimiento una vez que sea enviado.
            </p>
          </Card>

          {/* Próximos Pasos */}
          <Card className="p-6 bg-primary/5 mb-8">
            <h2 className="text-xl font-bold mb-4">Próximos Pasos</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Recibirás un correo de confirmación en los próximos minutos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Procesaremos tu pedido y te notificaremos cuando sea enviado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Recibirás un número de seguimiento para rastrear tu envío</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>El tiempo de entrega estimado es de 5-7 días hábiles</span>
              </li>
            </ul>
          </Card>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/productos">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Seguir Comprando
              </Button>
            </Link>
            <Link href="/perfil">
              <Button size="lg" className="w-full sm:w-auto">
                Ver Mis Pedidos
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}



