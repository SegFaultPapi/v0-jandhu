export function Footer() {
  return (
    <footer className="w-full border-t bg-card mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-primary">JugueteLandia</h3>
            <p className="text-sm text-muted-foreground">
              Tu tienda de juguetes de confianza desde 2010. Calidad y diversión garantizada.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Comprar</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Todas las Categorías
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Ofertas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Novedades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Marcas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Atención al Cliente
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Envíos y Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Garantía
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Trabaja con Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 JugueteLandia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
