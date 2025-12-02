import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Set de Construcción Mega Bloques",
    price: 89.99,
    originalPrice: 129.99,
    discount: 31,
    rating: 4.8,
    reviews: 234,
    image: "/colorful-building-blocks-set-toy.jpg",
  },
  {
    id: 2,
    name: "Muñeca Interactiva Premium",
    price: 54.99,
    originalPrice: 79.99,
    discount: 31,
    rating: 4.9,
    reviews: 567,
    image: "/interactive-doll-toy-for-kids.jpg",
  },
  {
    id: 3,
    name: "Robot Educativo Programable",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    rating: 4.7,
    reviews: 189,
    image: "/educational-programmable-robot-toy.jpg",
  },
  {
    id: 4,
    name: "Pista de Carreras Extreme",
    price: 69.99,
    originalPrice: 99.99,
    discount: 30,
    rating: 4.6,
    reviews: 423,
    image: "/racing-track-toy-set-with-cars.jpg",
  },
]

export function FeaturedOffers() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ofertas Destacadas</h2>
            <p className="text-muted-foreground mt-2">Los mejores descuentos disponibles solo por tiempo limitado</p>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent">
            Ver Todas
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Badge className="absolute top-3 left-3 z-10 bg-destructive text-destructive-foreground">
                    -{product.discount}%
                  </Badge>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-base line-clamp-2 text-balance">{product.name}</h3>

                  <div className="flex items-center gap-1 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="ml-1 font-medium">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({product.reviews})</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">${product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    </div>
                  </div>

                  <Button className="w-full" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Agregar al Carrito
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline">Ver Todas las Ofertas</Button>
        </div>
      </div>
    </section>
  )
}
