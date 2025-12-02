"use client"

import { ShoppingCart, Search, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/contexts/cart-context"

export function Header() {
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const { getTotalItems } = useCart()
  const cartItemCount = getTotalItems()

  const brands = [
    { name: "LEGO", href: "/marcas/lego" },
    { name: "Pokémon", href: "/marcas/pokemon" },
    { name: "Mattel", href: "/marcas/mattel" },
    { name: "Star Wars", href: "/marcas/starwars" },
    { name: "Hasbro", href: "/marcas/hasbro" },
    { name: "Disney", href: "/marcas/disney" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/productos?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/">
              <h1 className="font-bold text-2xl md:text-3xl text-primary cursor-pointer hover:opacity-80 transition-opacity">
                Juguetes Jandhu
              </h1>
            </Link>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <form onSubmit={handleSearch} className="relative flex w-full">
              <Input
                type="search"
                placeholder="Buscar juguetes..."
                className="w-full rounded-r-none border-r-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" className="rounded-l-none" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <Link href="/perfil">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/carrito">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {cartItemCount > 99 ? "99+" : cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile search */}
        <div className="flex md:hidden pb-3">
          <form onSubmit={handleSearch} className="relative flex w-full">
            <Input
              type="search"
              placeholder="Buscar juguetes..."
              className="w-full rounded-r-none border-r-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="rounded-l-none" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 pb-3 text-sm">
          <Link href="/productos">
            <Button variant="ghost" className="h-auto p-0 hover:bg-transparent hover:text-primary">
              Todas las Categorías
            </Button>
          </Link>
          <Link href="/ofertas">
            <Button variant="ghost" className="h-auto p-0 hover:bg-transparent hover:text-primary">
              Ofertas
            </Button>
          </Link>
          <Link href="/novedades">
            <Button variant="ghost" className="h-auto p-0 hover:bg-transparent hover:text-primary">
              Novedades
            </Button>
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setShowBrandsDropdown(true)}
            onMouseLeave={() => setShowBrandsDropdown(false)}
          >
            <Button variant="ghost" className="h-auto p-0 hover:bg-transparent hover:text-primary">
              Marcas
            </Button>
            {showBrandsDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-card border rounded-lg shadow-lg p-3 w-[320px]">
                <div className="grid grid-cols-2 gap-2">
                  {brands.map((brand) => (
                    <Link key={brand.name} href={brand.href}>
                      <Button
                        variant="outline"
                        className="w-full justify-start hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        {brand.name}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/contacto">
            <Button variant="ghost" className="h-auto p-0 hover:bg-transparent hover:text-primary">
              Atención al Cliente
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
