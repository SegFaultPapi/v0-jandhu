"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Truck, Shield, RotateCcw, Heart, Share2, Minus, Plus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getProductById, allProducts } from "@/lib/products"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

export default function ProductoDetallePage() {
  const params = useParams()
  const router = useRouter()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const productId = parseInt(params.id as string)
  const product = getProductById(productId)

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
          <Link href="/productos">
            <Button>Volver a Productos</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setQuantity(1)
  }

  const handleBuyNow = () => {
    addToCart(product, quantity)
    router.push("/carrito")
  }

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-6">
          <Link href="/">Inicio</Link> / <Link href="/productos">Productos</Link> / {product.category} /{" "}
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              {product.discount && product.discount > 0 && (
                <Badge className="absolute top-4 right-4 bg-destructive text-lg px-3 py-1">
                  -{product.discount}% OFF
                </Badge>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary"
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`Imagen ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reseñas)</span>
              </div>
            </div>

            <div className="border-t border-b py-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-primary">${product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                    <Badge className="bg-green-500">
                      Ahorra ${(product.originalPrice - product.price).toLocaleString()}
                    </Badge>
                  </>
                )}
              </div>
              <p className="text-sm text-muted-foreground">Precio con IVA incluido</p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm">Envío gratis en compras mayores a $999</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Garantía de 30 días</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span className="text-sm">Devolución gratis en 7 días</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold mb-2 block">Cantidad:</label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.min((product.stock || 99), quantity + 1))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.stock || 99} disponibles
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="lg" className="flex-1 text-lg h-12" onClick={handleAddToCart}>
                  Agregar al Carrito
                </Button>
                <Button size="lg" variant="outline" className="h-12 bg-transparent">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 bg-transparent">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Button size="lg" variant="secondary" className="w-full text-lg h-12" onClick={handleBuyNow}>
                Comprar Ahora
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="p-6 mb-12">
          <Tabs defaultValue="descripcion">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="descripcion">Descripción</TabsTrigger>
              <TabsTrigger value="especificaciones">Especificaciones</TabsTrigger>
              <TabsTrigger value="resenas">Reseñas (156)</TabsTrigger>
            </TabsList>
            <TabsContent value="descripcion" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold mb-4">Descripción del Producto</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {product.description ||
                    "Este es un producto de alta calidad que ofrece horas de diversión y entretenimiento."}
                </p>
                {product.brand && (
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Marca: <strong>{product.brand}</strong>
                  </p>
                )}
              </div>
            </TabsContent>
            <TabsContent value="especificaciones" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between border-b py-2">
                  <span className="font-semibold">Marca:</span>
                  <span className="text-muted-foreground">LEGO</span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="font-semibold">Edad recomendada:</span>
                  <span className="text-muted-foreground">8+ años</span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="font-semibold">Número de piezas:</span>
                  <span className="text-muted-foreground">1,200</span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="font-semibold">Material:</span>
                  <span className="text-muted-foreground">Plástico ABS</span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="font-semibold">Dimensiones:</span>
                  <span className="text-muted-foreground">45 x 35 x 30 cm</span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="font-semibold">Peso:</span>
                  <span className="text-muted-foreground">2.5 kg</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="resenas" className="mt-6">
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold">Usuario {i}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">Hace 2 días</span>
                    </div>
                    <p className="text-muted-foreground">
                      Excelente producto, muy buena calidad y mi hijo lo disfrutó mucho. El envío fue rápido y llegó en
                      perfectas condiciones.
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/producto/${relatedProduct.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative aspect-square bg-muted">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3 space-y-1">
                      <h3 className="font-semibold text-sm line-clamp-2">{relatedProduct.name}</h3>
                      <p className="text-lg font-bold text-primary">${relatedProduct.price}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
