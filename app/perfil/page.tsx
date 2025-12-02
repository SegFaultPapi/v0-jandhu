import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Package, Heart, Settings, MapPin } from "lucide-react"

export default function PerfilPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <Card className="lg:col-span-1 h-fit p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <h2 className="font-bold text-xl">Juan Pérez</h2>
                <p className="text-sm text-muted-foreground">juan.perez@email.com</p>
              </div>
              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Mi Perfil
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="w-4 h-4 mr-2" />
                  Mis Pedidos
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  Lista de Deseos
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="w-4 h-4 mr-2" />
                  Direcciones
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Configuración
                </Button>
              </nav>
            </Card>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="perfil" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="perfil">Perfil</TabsTrigger>
                  <TabsTrigger value="pedidos">Pedidos</TabsTrigger>
                  <TabsTrigger value="favoritos">Favoritos</TabsTrigger>
                  <TabsTrigger value="direcciones">Direcciones</TabsTrigger>
                </TabsList>

                <TabsContent value="perfil" className="space-y-4">
                  <Card className="p-6">
                    <h3 className="font-bold text-2xl mb-6">Información Personal</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input id="nombre" defaultValue="Juan" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="apellido">Apellido</Label>
                        <Input id="apellido" defaultValue="Pérez" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input id="email" type="email" defaultValue="juan.perez@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input id="telefono" defaultValue="+52 123 456 7890" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fecha">Fecha de Nacimiento</Label>
                        <Input id="fecha" type="date" defaultValue="1990-01-01" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="genero">Género</Label>
                        <Input id="genero" defaultValue="Prefiero no decirlo" />
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <Button>Guardar Cambios</Button>
                      <Button variant="outline">Cancelar</Button>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="pedidos">
                  <Card className="p-6">
                    <h3 className="font-bold text-2xl mb-6">Mis Pedidos</h3>
                    <div className="space-y-4">
                      {[1, 2, 3].map((order) => (
                        <Card key={order} className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-semibold">Pedido #{2024000 + order}</p>
                              <p className="text-sm text-muted-foreground">15 de Diciembre, 2024</p>
                            </div>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                              Entregado
                            </span>
                          </div>
                          <p className="text-sm mb-2">3 artículos - Total: $2,599.99</p>
                          <Button variant="outline" size="sm">
                            Ver Detalles
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="favoritos">
                  <Card className="p-6">
                    <h3 className="font-bold text-2xl mb-6">Mi Lista de Deseos</h3>
                    <p className="text-muted-foreground">No tienes productos en tu lista de deseos aún.</p>
                  </Card>
                </TabsContent>

                <TabsContent value="direcciones">
                  <Card className="p-6">
                    <h3 className="font-bold text-2xl mb-6">Mis Direcciones</h3>
                    <div className="space-y-4">
                      <Card className="p-4 border-2 border-primary">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-semibold">Dirección Principal</p>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold">
                            Predeterminada
                          </span>
                        </div>
                        <p className="text-sm">Juan Pérez</p>
                        <p className="text-sm text-muted-foreground">
                          Av. Reforma 123, Col. Centro
                          <br />
                          Ciudad de México, CDMX 06000
                          <br />
                          México
                          <br />
                          Tel: +52 123 456 7890
                        </p>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Eliminar
                          </Button>
                        </div>
                      </Card>
                      <Button variant="outline" className="w-full bg-transparent">
                        <MapPin className="w-4 h-4 mr-2" />
                        Agregar Nueva Dirección
                      </Button>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
