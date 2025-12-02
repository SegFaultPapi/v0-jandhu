export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  discount?: number
  rating: number
  reviews: number
  image: string
  category: string
  brand?: string
  description?: string
  stock?: number
}

export const allProducts: Product[] = [
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
    brand: "LEGO",
    description: "Construye tu propio castillo medieval con este increíble set LEGO de 1,200 piezas.",
    stock: 12,
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
    brand: "Mattel",
    stock: 8,
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
    brand: "Mattel",
    stock: 15,
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
    brand: "Hasbro",
    stock: 10,
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
    stock: 20,
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
    stock: 18,
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
    stock: 5,
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
    stock: 12,
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
    stock: 3,
  },
  {
    id: 10,
    name: "Dinosaurio T-Rex Interactivo",
    price: 79.99,
    rating: 4.9,
    reviews: 1234,
    image: "/interactive-dinosaur-toy.jpg",
    category: "Educativos",
    stock: 25,
  },
  {
    id: 11,
    name: "Kit de Arte Completo",
    price: 34.99,
    rating: 4.8,
    reviews: 892,
    image: "/kids-art-supplies-kit.jpg",
    category: "Arte",
    stock: 30,
  },
  {
    id: 12,
    name: "Castillo de Princesas Grande",
    price: 119.99,
    rating: 4.7,
    reviews: 654,
    image: "/princess-castle-toy-playset.jpg",
    category: "Construcción",
    brand: "Disney",
    stock: 7,
  },
  {
    id: 13,
    name: "Set de Ciencias para Niños",
    price: 44.99,
    rating: 4.9,
    reviews: 445,
    image: "/science-experiment-kit-for-kids.jpg",
    category: "Educativos",
    stock: 14,
  },
  {
    id: 14,
    name: "Patineta Eléctrica Junior",
    price: 199.99,
    rating: 4.6,
    reviews: 328,
    image: "/patineta-electrica-para-ni-os.jpg",
    category: "Deportes",
    stock: 6,
  },
  {
    id: 15,
    name: "Peluche Unicornio Gigante",
    price: 59.99,
    rating: 4.9,
    reviews: 876,
    image: "/peluche-unicornio-gigante.jpg",
    category: "Peluches",
    stock: 22,
  },
  {
    id: 16,
    name: "Set de Construcción Mega Bloques",
    price: 89.99,
    originalPrice: 129.99,
    discount: 31,
    rating: 4.8,
    reviews: 234,
    image: "/colorful-building-blocks-set-toy.jpg",
    category: "Construcción",
    stock: 16,
  },
  {
    id: 17,
    name: "Muñeca Interactiva Premium",
    price: 54.99,
    originalPrice: 79.99,
    discount: 31,
    rating: 4.9,
    reviews: 567,
    image: "/interactive-doll-toy-for-kids.jpg",
    category: "Muñecas",
    stock: 11,
  },
  {
    id: 18,
    name: "Robot Educativo Programable",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    rating: 4.7,
    reviews: 189,
    image: "/educational-programmable-robot-toy.jpg",
    category: "Educativos",
    stock: 9,
  },
  {
    id: 19,
    name: "Pista de Carreras Extreme",
    price: 69.99,
    originalPrice: 99.99,
    discount: 30,
    rating: 4.6,
    reviews: 423,
    image: "/racing-track-toy-set-with-cars.jpg",
    category: "Autos",
    stock: 13,
  },
]

export function getProductById(id: number): Product | undefined {
  return allProducts.find((p) => p.id === id)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery) ||
      product.brand?.toLowerCase().includes(lowerQuery),
  )
}

export function filterProducts(filters: {
  categories?: string[]
  priceRange?: string[]
  minRating?: number
}): Product[] {
  let filtered = [...allProducts]

  if (filters.categories && filters.categories.length > 0) {
    filtered = filtered.filter((p) => filters.categories!.includes(p.category))
  }

  if (filters.priceRange && filters.priceRange.length > 0) {
    filtered = filtered.filter((p) => {
      return filters.priceRange!.some((range) => {
        if (range === "Menos de $500") return p.price < 500
        if (range === "$500 - $1000") return p.price >= 500 && p.price <= 1000
        if (range === "$1000 - $2000") return p.price > 1000 && p.price <= 2000
        if (range === "Más de $2000") return p.price > 2000
        return true
      })
    })
  }

  if (filters.minRating) {
    filtered = filtered.filter((p) => p.rating >= filters.minRating!)
  }

  return filtered
}

