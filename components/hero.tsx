import { Button } from "@/components/ui/button"
import { Tag } from "lucide-react"

export function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-primary via-secondary to-accent">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Contenido de la oferta */}
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white">
              <Tag className="h-4 w-4" />
              BLACK FRIDAY 2024
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              ¡Black Friday! Hasta 70% OFF en Juguetes
            </h2>
            <p className="text-lg md:text-xl text-white/90 text-pretty">
              Los mejores descuentos del año. Envío gratis en todas las compras. ¡Aprovecha ahora!
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-base font-semibold">
                Ver Ofertas Black Friday
              </Button>
            </div>
          </div>

          <div className="relative h-[250px] md:h-[350px] rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/black-friday-toy-sale-banner-colorful-toys.jpg"
              alt="Black Friday - Ofertas en juguetes"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-bold text-xl shadow-lg">
              -70%
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
