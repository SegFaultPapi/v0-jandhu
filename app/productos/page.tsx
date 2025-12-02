import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Star, SlidersHorizontal } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "LEGO Set Castillo Medieval",
    price: 1299,
    originalPrice: 1699,
    discount: 24,
    rating: 4.8,
    reviews: 156,
    image: "/lego-castillo-medieval.jpg",
    category: "Construcción",
  },
  {
    id: 2,
    name: "Muñeca Barbie Fashionista",
    price: 349,
    originalPrice: 499,
    discount: 30,
    rating: 4.6,
    reviews: 203,
    image: "/muneca-barbie-fashionista.jpg",
    category: "Muñecas",
  },
  {
    id: 3,
    name: "Hot Wheels Pista Extreme",
    price: 599,
    originalPrice: 799,
    discount: 25,
    rating: 4.7,
    reviews: 89,
    image: "/hot-wheels-pista.jpg",
    category: "Autos",
  },
  {
    id: 4,
    name: "Nerf Mega Thunderhawk",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.9,
    reviews: 234,
    image: "/nerf-mega-thunderhawk.jpg",
    category: "Acción",
  },
  {
    id: 5,
    name: "Peluche Unicornio Rosa",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.5,
    reviews: 167,
    image: "/peluche-unicornio-rosa.jpg",
    category: "Peluches",
  },
  {
    id: 6,
    name: "Puzzle 1000 Piezas Mundo",
    price: 249,
    originalPrice: 349,
    discount: 29,
    rating: 4.4,
    reviews: 92,
    image: "/puzzle-mundo.jpg",
    category: "Educativos",
  },
  {
    id: 7,
    name: "Robot Programable STEM",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    rating: 4.9,
    reviews: 178,
    image: "/robot-programable-stem.jpg",
    category: "Educativos",
  },
  {
    id: 8,
    name: "Set de Arte Premium 150 Piezas",
    price: 449,
    originalPrice: 599,
    discount: 25,
    rating: 4.7,
    reviews: 143,
    image: "/set-arte-premium.jpg",
    category: "Arte",
  },
  {
    id: 9,
    name: "Patineta Eléctrica Infantil",
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    rating: 4.6,
    reviews: 67,
    image: "/patineta-electrica-infantil.jpg",
    category: "Deportes",
  },
]

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg">Filtros</h2>
                <Button variant="ghost" size="sm">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>

              {/* Categories */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Categorías</h3>
                  <div className="space-y-2">
                    {["Construcción", "Muñecas", "Autos", "Acción", "Peluches", "Educativos", "Arte", "Deportes"].map(
                      (cat) => (
                        <div key={cat} className="flex items-center space-x-2">
                          <Checkbox id={cat} />
                          <Label htmlFor={cat} className="text-sm cursor-pointer">
                            {cat}
                          </Label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3">Precio</h3>
                  <div className="space-y-2">
                    {["Menos de $500", "$500 - $1000", "$1000 - $2000", "Más de $2000"].map((price) => (
                      <div key={price} className="flex items-center space-x-2">
                        <Checkbox id={price} />
                        <Label htmlFor={price} className="text-sm cursor-pointer">
                          {price}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <h3 className="font-semibold mb-3">Calificación</h3>
                  <div className="space-y-2">
                    {[5, 4, 3].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <Label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer flex items-center">
                          <div className="flex items-center">
                            {Array.from({ length: rating }).map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="ml-1">y más</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Todos los Productos</h1>
              <select className="border rounded-md px-3 py-2 text-sm">
                <option>Más relevantes</option>
                <option>Precio: menor a mayor</option>
                <option>Precio: mayor a menor</option>
                <option>Mejor calificados</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link key={product.id} href={`/producto/${product.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="relative aspect-square bg-muted">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.discount > 0 && (
                        <Badge className="absolute top-2 right-2 bg-destructive">-{product.discount}%</Badge>
                      )}
                    </div>
                    <div className="p-4 space-y-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                      <h3 className="font-semibold line-clamp-2">{product.name}</h3>
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
                      <Button className="w-full">Agregar al Carrito</Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
