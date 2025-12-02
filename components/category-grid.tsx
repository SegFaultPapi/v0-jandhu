import { Blocks, Car, Sparkles, Gamepad2, GraduationCap, TreePine } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Muñecas y Peluches",
    icon: Sparkles,
    productCount: 1234,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 2,
    name: "Construcción",
    icon: Blocks,
    productCount: 856,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 3,
    name: "Vehículos",
    icon: Car,
    productCount: 672,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 4,
    name: "Juegos de Mesa",
    icon: Gamepad2,
    productCount: 445,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 5,
    name: "Educativos",
    icon: GraduationCap,
    productCount: 923,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 6,
    name: "Aire Libre",
    icon: TreePine,
    productCount: 534,
    color: "bg-teal-100 text-teal-600",
  },
]

export function CategoryGrid() {
  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">Explora por Categoría</h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className="group cursor-pointer flex flex-col items-center gap-3 hover:scale-105 transition-transform"
              >
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${category.color} flex items-center justify-center group-hover:shadow-lg transition-shadow`}
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.productCount}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
