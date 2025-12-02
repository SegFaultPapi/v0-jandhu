"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Minus, Plus, X, Truck, Tag, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"

export default function CarritoPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart()
  const subtotal = getTotalPrice()
  const envio = subtotal > 999 ? 0 : 99
  const total = subtotal + envio

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId)
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Mi Carrito</h1>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">Tu carrito está vacío</h2>
            <p className="text-muted-foreground mb-6">Agrega algunos productos para comenzar a comprar</p>
            <Link href="/productos">
              <Button size="lg">Explorar Productos</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex gap-4">
                    <Link href={`/producto/${item.id}`} className="relative w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </Link>

                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <Link href={`/producto/${item.id}`}>
                          <h3 className="font-semibold hover:text-primary transition-colors">{item.name}</h3>
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <p className="text-lg font-bold text-primary mb-3">${item.price}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-transparent"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-transparent"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
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

              <div className="flex gap-2">
                <Link href="/productos" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full bg-transparent">
                    Seguir Comprando
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-destructive hover:text-destructive"
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </Button>
              </div>

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
        )}
      </div>

      <Footer />
    </div>
  )
}
