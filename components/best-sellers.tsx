import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp } from "lucide-react"

const bestSellers = [
  {
    id: 1,
    rank: 1,
    name: "Dinosaurio T-Rex Interactivo",
    price: 79.99,
    rating: 4.9,
    reviews: 1234,
    image: "/interactive-dinosaur-toy.jpg",
  },
  {
    id: 2,
    rank: 2,
    name: "Kit de Arte Completo",
    price: 34.99,
    rating: 4.8,
    reviews: 892,
    image: "/kids-art-supplies-kit.jpg",
  },
  {
    id: 3,
    rank: 3,
    name: "Castillo de Princesas Grande",
    price: 119.99,
    rating: 4.7,
    reviews: 654,
    image: "/princess-castle-toy-playset.jpg",
  },
  {
    id: 4,
    rank: 4,
    name: "Set de Ciencias para Niños",
    price: 44.99,
    rating: 4.9,
    reviews: 445,
    image: "/science-experiment-kit-for-kids.jpg",
  },
  {
    id: 5,
    rank: 5,
    name: "Patineta Eléctrica Junior",
    price: 199.99,
    rating: 4.6,
    reviews: 328,
    image: "/patineta-electrica-para-ni-os.jpg",
  },
  {
    id: 6,
    rank: 6,
    name: "Peluche Unicornio Gigante",
    price: 59.99,
    rating: 4.9,
    reviews: 876,
    image: "/peluche-unicornio-gigante.jpg",
  },
]

export function BestSellers() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="h-8 w-8 text-primary" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Los Más Vendidos</h2>
            <p className="text-muted-foreground mt-1">Los juguetes favoritos de nuestros clientes</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellers.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex gap-4 p-4">
                  <div className="relative">
                    <Badge className="absolute -top-2 -left-2 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-secondary text-secondary-foreground p-0">
                      #{product.rank}
                    </Badge>
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-2">
                    <h3 className="font-semibold text-sm line-clamp-2 text-balance">{product.name}</h3>

                    <div className="flex items-center gap-1 text-xs">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-accent text-accent" />
                        <span className="ml-1 font-medium">{product.rating}</span>
                      </div>
                      <span className="text-muted-foreground">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">${product.price}</span>
                      <Button size="sm" variant="outline">
                        Ver
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
