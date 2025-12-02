import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedOffers } from "@/components/featured-offers"
import { CategoryGrid } from "@/components/category-grid"
import { BestSellers } from "@/components/best-sellers"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedOffers />
        <CategoryGrid />
        <BestSellers />
      </main>
      <Footer />
    </div>
  )
}
