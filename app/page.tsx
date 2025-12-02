import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedOffers } from "@/components/featured-offers"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedBrands } from "@/components/featured-brands"
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
        <FeaturedBrands />
        <BestSellers />
      </main>
      <Footer />
    </div>
  )
}
