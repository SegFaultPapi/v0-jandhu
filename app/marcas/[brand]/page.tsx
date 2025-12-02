"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Package } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { allProducts } from "@/lib/products"
import { useCart } from "@/contexts/cart-context"

const brandNames: Record<string, string> = {
  lego: "LEGO",
  pokemon: "Pokémon",
  mattel: "Mattel",
  starwars: "Star Wars",
  hasbro: "Hasbro",
  disney: "Disney",
}

export default function MarcaPage({ params }: { params: { brand: string } }) {
  const { addToCart } = useCart()
  const brandSlug = params.brand.toLowerCase()
  const brandName = brandNames[brandSlug] || params.brand
  const products = allProducts.filter((p) => p.brand?.toLowerCase() === brandSlug)

  const handleAddToCart = (e: React.MouseEvent, productId: number) => {
    e.preventDefault()
    e.stopPropagation()
    const product = allProducts.find((p) => p.id === productId)
    if (product) {
      addToCart(product)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Productos {brandName}</h1>
          <p className="text-muted-foreground">
            {products.length > 0
              ? `${products.length} productos encontrados`
              : "No hay productos disponibles en este momento"}
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
                <Link href={`/producto/${product.id}`}>
                  <div className="relative aspect-square bg-muted">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.discount && product.discount > 0 && (
                      <Badge className="absolute top-2 right-2 bg-destructive">-{product.discount}%</Badge>
                    )}
                  </div>
                </Link>
                <div className="p-4 space-y-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.brand}
                  </Badge>
                  <Link href={`/producto/${product.id}`}>
                    <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">{product.name}</h3>
                  </Link>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button className="w-full" onClick={(e) => handleAddToCart(e, product.id)}>
                    Agregar al Carrito
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 space-y-4">
            <div className="rounded-full bg-muted p-6">
              <Package className="h-16 w-16 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold">No hay productos disponibles</h2>
            <p className="text-muted-foreground text-center max-w-md">
              Actualmente no tenemos productos de {brandName} en stock. Te invitamos a explorar otras marcas y
              categorías.
            </p>
            <Link href="/productos">
              <Button size="lg" className="mt-4">
                Buscar Más Juguetes
              </Button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
