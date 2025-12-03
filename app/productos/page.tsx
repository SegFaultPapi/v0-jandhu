"use client"

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
import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { allProducts, filterProducts, searchProducts } from "@/lib/products"
import { useCart } from "@/contexts/cart-context"

const categories = ["Construcción", "Muñecas", "Autos", "Acción", "Peluches", "Educativos", "Arte", "Deportes"]
const priceRanges = ["Menos de $500", "$500 - $1000", "$1000 - $2000", "Más de $2000"]
const sortOptions = [
  { value: "relevance", label: "Más relevantes" },
  { value: "price-asc", label: "Precio: menor a mayor" },
  { value: "price-desc", label: "Precio: mayor a menor" },
  { value: "rating", label: "Mejor calificados" },
]

function ProductosContent() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("search") || ""
  const { addToCart } = useCart()

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState("relevance")

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    let products = searchQuery ? searchProducts(searchQuery) : allProducts

    products = filterProducts({
      categories: selectedCategories.length > 0 ? selectedCategories : undefined,
      priceRange: selectedPriceRanges.length > 0 ? selectedPriceRanges : undefined,
      minRating: selectedRating || undefined,
    })

    // Ordenar
    switch (sortBy) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        products.sort((a, b) => b.price - a.price)
        break
      case "rating":
        products.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return products
  }, [searchQuery, selectedCategories, selectedPriceRanges, selectedRating, sortBy])

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handlePriceRangeToggle = (range: string) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range],
    )
  }

  const handleRatingToggle = (rating: number) => {
    setSelectedRating((prev) => (prev === rating ? null : rating))
  }

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
                    {categories.map((cat) => (
                      <div key={cat} className="flex items-center space-x-2">
                        <Checkbox
                          id={cat}
                          checked={selectedCategories.includes(cat)}
                          onCheckedChange={() => handleCategoryToggle(cat)}
                        />
                        <Label htmlFor={cat} className="text-sm cursor-pointer">
                          {cat}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3">Precio</h3>
                  <div className="space-y-2">
                    {priceRanges.map((price) => (
                      <div key={price} className="flex items-center space-x-2">
                        <Checkbox
                          id={price}
                          checked={selectedPriceRanges.includes(price)}
                          onCheckedChange={() => handlePriceRangeToggle(price)}
                        />
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
                        <Checkbox
                          id={`rating-${rating}`}
                          checked={selectedRating === rating}
                          onCheckedChange={() => handleRatingToggle(rating)}
                        />
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
              <h1 className="text-2xl font-bold">
                {searchQuery ? `Resultados para "${searchQuery}"` : "Todos los Productos"} ({filteredProducts.length})
              </h1>
              <select
                className="border rounded-md px-3 py-2 text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No se encontraron productos con los filtros seleccionados.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedPriceRanges([])
                    setSelectedRating(null)
                  }}
                >
                  Limpiar Filtros
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
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
                        {product.category}
                      </Badge>
                      <Link href={`/producto/${product.id}`}>
                        <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">
                          {product.name}
                        </h3>
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
                      <Button
                        className="w-full"
                        onClick={(e) => handleAddToCart(e, product.id)}
                      >
                        Agregar al Carrito
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function ProductosPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center py-12">
            <p className="text-muted-foreground">Cargando productos...</p>
          </div>
        </div>
        <Footer />
      </div>
    }>
      <ProductosContent />
    </Suspense>
  )
}


