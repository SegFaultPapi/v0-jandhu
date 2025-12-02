import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { FeaturedOffers } from "@/components/featured-offers"

export default function OfertasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedOffers />
      <Footer />
    </div>
  )
}
