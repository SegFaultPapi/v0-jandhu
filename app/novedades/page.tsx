import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Star } from "lucide-react"
import Image from "next/image"

export default function NovedadesPage() {
  const newProducts = [
    {
      id: 1,
      name: "Set de Construcción Espacial",
      price: 1299.99,
      originalPrice: null,
      image: "/robot-programable-para-ni-os.jpg",
      rating: 5,
      badge: "NUEVO",
    },
    {
      id: 2,
      name: "Muñeca Interactiva con IA",
      price: 899.99,
      originalPrice: null,
      image: "/interactive-doll-toy-for-kids.jpg",
      rating: 5,
      badge: "NUEVO",
    },
    {
      id: 3,
      name: "Dron con Cámara para Niños",
      price: 1599.99,
      originalPrice: null,
      image: "/educational-programmable-robot-toy.jpg",
      rating: 5,
      badge: "NUEVO",
    },
    {
      id: 4,
      name: "Juego de Mesa Aventura Virtual",
      price: 699.99,
      originalPrice: null,
      image: "/juego-mesa-familiar-divertido.jpg",
      rating: 4,
      badge: "NUEVO",
    },
    {
      id: 5,
      name: "Robot Mascota Inteligente",
      price: 1899.99,
      originalPrice: null,
      image: "/interactive-dinosaur-toy.jpg",
      rating: 5,
      badge: "NUEVO",
    },
    {
      id: 6,
      name: "Telescopio Educativo Junior",
      price: 1199.99,
      originalPrice: null,
      image: "/science-experiment-kit-for-kids.jpg",
      rating: 5,
      badge: "NUEVO",
    },
    {
      id: 7,
      name: "Set de Arte Digital",
      price: 799.99,
      originalPrice: null,
      image: "/kids-art-supplies-kit.jpg",
      rating: 4,
      badge: "NUEVO",
    },
    {
      id: 8,
      name: "Pista de Carreras con App",
      price: 1499.99,
      originalPrice: null,
      image: "/racing-track-toy-set-with-cars.jpg",
      rating: 5,
      badge: "NUEVO",
    },
  ]

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
                  <div className="p-4">
                    <h3 className="font-semibold text-base mb-2 line-clamp-2 min-h-[3rem]">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">({product.rating}.0)</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-bold text-xl text-primary">${product.price.toFixed(2)}</span>
                    </div>
                    <Button className="w-full" size="sm">
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
