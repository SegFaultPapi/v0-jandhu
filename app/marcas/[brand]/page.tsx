import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Package } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data - productos por marca
const productsByBrand: Record<string, any[]> = {
  lego: [
    {
      id: 1,
      name: "LEGO Set Castillo Medieval",
      price: 1299,
      originalPrice: 1699,
      discount: 24,
      rating: 4.8,
      reviews: 156,
      image: "/lego-castillo-medieval.jpg",
      brand: "LEGO",
    },
    {
      id: 10,
      name: "LEGO City Estación de Bomberos",
      price: 899,
      originalPrice: 1199,
      discount: 25,
      rating: 4.7,
      reviews: 143,
      image: "/lego-fire-station.jpg",
      brand: "LEGO",
    },
    {
      id: 11,
      name: "LEGO Technic Auto de Carreras",
      price: 1599,
      originalPrice: 2099,
      discount: 24,
      rating: 4.9,
      reviews: 189,
      image: "/lego-technic-race-car.png",
      brand: "LEGO",
    },
  ],
  pokemon: [
    {
      id: 12,
      name: "Set de Cartas Pokémon Elite Trainer Box",
      price: 649,
      originalPrice: 849,
      discount: 24,
      rating: 4.8,
      reviews: 267,
      image: "/pokemon-cards-elite-trainer-box.jpg",
      brand: "Pokémon",
    },
    {
      id: 13,
      name: "Peluche Pikachu Gigante 50cm",
      price: 499,
      originalPrice: 699,
      discount: 29,
      rating: 4.9,
      reviews: 312,
      image: "/giant-pikachu-plush-toy.jpg",
      brand: "Pokémon",
    },
  ],
  mattel: [
    {
      id: 2,
      name: "Muñeca Barbie Fashionista",
      price: 349,
      originalPrice: 499,
      discount: 30,
      rating: 4.6,
      reviews: 203,
      image: "/muneca-barbie-fashionista.jpg",
      brand: "Mattel",
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
      brand: "Mattel",
    },
  ],
  starwars: [
    {
      id: 14,
      name: "Figura Star Wars The Mandalorian",
      price: 799,
      originalPrice: 1099,
      discount: 27,
      rating: 4.9,
      reviews: 234,
      image: "/mandalorian-figure-star-wars.jpg",
      brand: "Star Wars",
    },
  ],
  hasbro: [
    {
      id: 4,
      name: "Nerf Mega Thunderhawk",
      price: 899,
      originalPrice: 1199,
      discount: 25,
      rating: 4.9,
      reviews: 234,
      image: "/nerf-mega-thunderhawk.jpg",
      brand: "Hasbro",
    },
  ],
  disney: [],
}

const brandNames: Record<string, string> = {
  lego: "LEGO",
  pokemon: "Pokémon",
  mattel: "Mattel",
  starwars: "Star Wars",
  hasbro: "Hasbro",
  disney: "Disney",
}

export default function MarcaPage({ params }: { params: { brand: string } }) {
  const brandSlug = params.brand.toLowerCase()
  const brandName = brandNames[brandSlug] || params.brand
  const products = productsByBrand[brandSlug] || []

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
              <Link key={product.id} href={`/producto/${product.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group h-full">
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
                      {product.brand}
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
