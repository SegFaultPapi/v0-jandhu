import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FeaturedBrands() {
  const brands = [
    {
      name: "LEGO",
      image: "/lego-mario-pixel-art.jpg",
      color: "from-red-500/20 to-yellow-500/20",
    },
    {
      name: "Pokémon",
      image: "/pokemon-cards-mega-evolution.jpg",
      color: "from-blue-500/20 to-yellow-500/20",
    },
    {
      name: "Mattel",
      image: "/mattel-brick-shop-green-car.jpg",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      name: "Star Wars",
      image: "/star-wars-darth-vader.jpg",
      color: "from-blue-600/20 to-slate-800/20",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Para Los Más Fanáticos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-60`} />
            <Image
              src={brand.image || "/placeholder.svg"}
              alt={brand.name}
              fill
              className="object-cover mix-blend-normal opacity-70 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8">
                  Conoce más
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
