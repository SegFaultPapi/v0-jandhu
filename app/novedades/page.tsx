"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/contexts/cart-context"
import { allProducts } from "@/lib/products"
import Link from "next/link"

export default function NovedadesPage() {
  const { addToCart } = useCart()

  // Usar los últimos productos del archivo compartido como "novedades"
  // O puedes definir IDs específicos de productos nuevos
  const newProductIds = [16, 17, 18, 19, 10, 11, 12, 13]
  const newProducts = allProducts
    .filter((p) => newProductIds.includes(p.id))
    .map((product) => ({
      ...product,
      badge: "NUEVO",
    }))

  const handleAddToCart = (e: React.MouseEvent, productId: number) => {
    e.preventDefault()
    e.stopPropagation()
    const product = allProducts.find((p) => p.id === productId)
    if (product) {
      addToCart(product)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-primary/20 to-accent/20 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-bold text-4xl md:text-5xl mb-4">Lo Último en Juguetes</h1>
              <p className="text-lg text-muted-foreground">
                Descubre las novedades más recientes y emocionantes. Los juguetes más innovadores del mercado.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/producto/${product.id}`}>
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      {product.badge && (
                        <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                          {product.badge}
                        </span>
                      )}
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <Link href={`/producto/${product.id}`}>
                      <h3 className="font-semibold text-base mb-2 line-clamp-2 min-h-[3rem] hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-bold text-xl text-primary">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <Button
                      className="w-full"
                      size="sm"
                      onClick={(e) => handleAddToCart(e, product.id)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Agregar al Carrito
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
