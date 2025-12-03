"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Truck, CreditCard, Lock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/contexts/cart-context"
import { toast } from "sonner"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotalPrice, clearCart } = useCart()
  const subtotal = getTotalPrice()
  const envio = subtotal > 999 ? 0 : 99
  const total = subtotal + envio

  const [formData, setFormData] = useState({
    // Información de envío
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    estado: "",
    codigoPostal: "",
    notas: "",
    // Método de envío
    metodoEnvio: "",
    // Método de pago
    metodoPago: "",
    // Términos
    aceptaTerminos: false,
    aceptaNewsletter: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validaciones básicas
    if (!formData.nombre || !formData.apellido || !formData.email || !formData.telefono) {
      toast.error("Por favor completa todos los campos obligatorios")
      return
    }

    if (!formData.direccion || !formData.ciudad || !formData.codigoPostal) {
      toast.error("Por favor completa la información de envío")
      return
    }

    if (!formData.metodoEnvio) {
      toast.error("Por favor selecciona un método de envío")
      return
    }

    if (!formData.metodoPago) {
      toast.error("Por favor selecciona un método de pago")
      return
    }

    if (!formData.aceptaTerminos) {
      toast.error("Debes aceptar los términos y condiciones para continuar")
      return
    }

    if (items.length === 0) {
      toast.error("Tu carrito está vacío")
      router.push("/productos")
      return
    }

    // Aquí se enviaría a PHP/Backend
    // Por ahora, guardamos en localStorage y redirigimos a confirmación
    const orderData = {
      ...formData,
      items,
      subtotal,
      envio,
      total,
      fecha: new Date().toISOString(),
      numeroPedido: `PED-${Date.now()}`,
    }

    localStorage.setItem("lastOrder", JSON.stringify(orderData))
    clearCart()
    router.push("/checkout/confirmacion")
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Tu carrito está vacío</h1>
          <p className="text-muted-foreground mb-6">Agrega productos antes de proceder al pago</p>
          <Link href="/productos">
            <Button>Explorar Productos</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/carrito" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al carrito
          </Link>
          <h1 className="text-3xl font-bold">Finalizar Compra</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulario Principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* Información de Envío */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-6">Información de Envío</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nombre">
                      Nombre <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Juan"
                    />
                  </div>
                  <div>
                    <Label htmlFor="apellido">
                      Apellido <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="apellido"
                      name="apellido"
                      required
                      value={formData.apellido}
                      onChange={handleInputChange}
                      placeholder="Pérez"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">
                      Correo Electrónico <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="juan@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefono">
                      Teléfono <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="+52 123 456 7890"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="direccion">
                      Dirección <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="direccion"
                      name="direccion"
                      required
                      value={formData.direccion}
                      onChange={handleInputChange}
                      placeholder="Av. Reforma 123, Col. Centro"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ciudad">
                      Ciudad <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="ciudad"
                      name="ciudad"
                      required
                      value={formData.ciudad}
                      onChange={handleInputChange}
                      placeholder="Ciudad de México"
                    />
                  </div>
                  <div>
                    <Label htmlFor="estado">
                      Estado <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="estado"
                      name="estado"
                      required
                      value={formData.estado}
                      onChange={handleInputChange}
                      placeholder="CDMX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="codigoPostal">
                      Código Postal <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="codigoPostal"
                      name="codigoPostal"
                      required
                      value={formData.codigoPostal}
                      onChange={handleInputChange}
                      placeholder="06000"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="notas">Notas de entrega (opcional)</Label>
                    <Textarea
                      id="notas"
                      name="notas"
                      value={formData.notas}
                      onChange={handleInputChange}
                      placeholder="Instrucciones especiales para la entrega..."
                      rows={3}
                    />
                  </div>
                </div>
              </Card>

              {/* Método de Envío */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-6">Método de Envío</h2>
                <Select
                  value={formData.metodoEnvio}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, metodoEnvio: value }))}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un método de envío" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="estandar">Envío Estándar - $99 (5-7 días hábiles)</SelectItem>
                    <SelectItem value="express">Envío Express - $199 (2-3 días hábiles)</SelectItem>
                    <SelectItem value="gratis">Envío Gratis - GRATIS (5-7 días hábiles, compras mayores a $999)</SelectItem>
                  </SelectContent>
                </Select>
              </Card>

              {/* Método de Pago */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-6">Método de Pago</h2>
                <RadioGroup
                  value={formData.metodoPago}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, metodoPago: value }))}
                  required
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="tarjeta" id="tarjeta" />
                      <Label htmlFor="tarjeta" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5" />
                            <span className="font-semibold">Tarjeta de Crédito/Débito</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Visa, Mastercard, American Express</p>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5" />
                            <span className="font-semibold">PayPal</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Paga de forma segura con PayPal</p>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                      <RadioGroupItem value="efectivo" id="efectivo" />
                      <Label htmlFor="efectivo" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5" />
                            <span className="font-semibold">Pago contra Entrega</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Paga en efectivo al recibir tu pedido</p>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </Card>

              {/* Términos y Condiciones */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-6">Términos y Condiciones</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terminos"
                      checked={formData.aceptaTerminos}
                      onCheckedChange={(checked) => handleCheckboxChange("aceptaTerminos", checked as boolean)}
                      required
                    />
                    <Label htmlFor="terminos" className="text-sm cursor-pointer">
                      Acepto los{" "}
                      <Link href="/terminos" className="text-primary hover:underline">
                        términos y condiciones
                      </Link>{" "}
                      y la{" "}
                      <Link href="/privacidad" className="text-primary hover:underline">
                        política de privacidad
                      </Link>
                      <span className="text-destructive"> *</span>
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.aceptaNewsletter}
                      onCheckedChange={(checked) => handleCheckboxChange("aceptaNewsletter", checked as boolean)}
                    />
                    <Label htmlFor="newsletter" className="text-sm cursor-pointer">
                      Deseo recibir ofertas especiales y novedades por correo electrónico
                    </Label>
                  </div>
                </div>
              </Card>
            </div>

            {/* Resumen del Pedido */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Resumen del Pedido</h2>

                {/* Productos */}
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm line-clamp-2">{item.name}</h3>
                        <p className="text-xs text-muted-foreground">Cantidad: {item.quantity}</p>
                        <p className="text-sm font-bold text-primary">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-3 mb-6">
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

                <Button type="submit" size="lg" className="w-full mb-3 text-lg h-12">
                  <Lock className="h-4 w-4 mr-2" />
                  Confirmar Pedido
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Tu información está protegida con encriptación SSL
                </p>
              </Card>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}

