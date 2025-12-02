import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Truck, Shield, RotateCcw, Heart, Share2, Minus, Plus } from "lucide-react"
import Image from "next/image"

export default function ProductoDetallePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-6">
          Inicio / Productos / Construcción / <span className="text-foreground">LEGO Set Castillo Medieval</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
              <Image src="/lego-castillo-medieval.jpg" alt="LEGO Set Castillo Medieval" fill className="object-cover" />
              <Badge className="absolute top-4 right-4 bg-destructive text-lg px-3 py-1">-24% OFF</Badge>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary"
                >
                  <Image src="/lego-castillo-medieval.jpg" alt={`Imagen ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                Construcción
              </Badge>
              <h1 className="text-3xl font-bold mb-2">LEGO Set Castillo Medieval Premium</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold">4.8</span>
                <span className="text-muted-foreground">(156 reseñas)</span>
              </div>
            </div>

            <div className="border-t border-b py-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-primary">$1,299</span>
                <span className="text-xl text-muted-foreground line-through">$1,699</span>
                <Badge className="bg-green-500">Ahorra $400</Badge>
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
                  <Button variant="outline" size="icon">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">1</span>
                  <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground ml-2">12 disponibles</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="lg" className="flex-1 text-lg h-12">
                  Agregar al Carrito
                </Button>
                <Button size="lg" variant="outline" className="h-12 bg-transparent">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 bg-transparent">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <Button size="lg" variant="secondary" className="w-full text-lg h-12">
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
                  Construye tu propio castillo medieval con este increíble set LEGO de 1,200 piezas. Incluye torres,
                  murallas, un puente levadizo funcional y 8 minifiguras de caballeros, guardias y un rey.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Este set es perfecto para niños de 8 años en adelante y ofrece horas de diversión constructiva. Las
                  piezas son de alta calidad y compatibles con otros sets LEGO.
                </p>
                <h4 className="font-semibold mt-6 mb-2">Características destacadas:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>1,200 piezas premium</li>
                  <li>8 minifiguras incluidas</li>
                  <li>Puente levadizo funcional</li>
                  <li>Torres desmontables</li>
                  <li>Compatible con otros sets LEGO</li>
                  <li>Manual de instrucciones paso a paso</li>
                </ul>
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
        <div>
          <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative aspect-square bg-muted">
                  <Image
                    src={`/lego-producto-${i}.jpg`}
                    alt={`Producto relacionado ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 space-y-1">
                  <h3 className="font-semibold text-sm line-clamp-2">LEGO Set {i}</h3>
                  <p className="text-lg font-bold text-primary">$899</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
