import { ShoppingCart, Search, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
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
            <h1 className="font-bold text-2xl md:text-3xl text-primary">Juguetes Jandhu</h1>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative flex w-full">
              <Input type="search" placeholder="Buscar juguetes..." className="w-full rounded-r-none border-r-0" />
              <Button className="rounded-l-none" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                3
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="flex md:hidden pb-3">
          <div className="relative flex w-full">
            <Input type="search" placeholder="Buscar juguetes..." className="w-full rounded-r-none border-r-0" />
            <Button className="rounded-l-none" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 pb-3 text-sm">
          <Button variant="ghost" className="h-auto p-0 hover:bg-transparent hover:text-primary">
            Todas las Categorías
          </Button>
          <Button variant="ghost" className="h-auto p-0 hover:bg-transparent hover:text-primary">
            Ofertas
          </Button>
          <Button variant="ghost" className="h-auto p-0 hover:bg-transparent hover:text-primary">
            Novedades
          </Button>
          <Button variant="ghost" className="h-auto p-0 hover:bg-transparent hover:text-primary">
            Marcas
          </Button>
          <Button variant="ghost" className="h-auto p-0 hover:bg-transparent hover:text-primary">
            Atención al Cliente
          </Button>
        </nav>
      </div>
    </header>
  )
}
