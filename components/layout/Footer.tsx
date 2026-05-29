import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-neutral-dark py-12 border-t border-primary-100">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <Link href="/" className="font-serif text-2xl font-bold mb-4 block">
            Pamela<span className="text-primary-400">Bakery</span>
          </Link>
          <p className="text-sm opacity-80 mt-4 leading-relaxed">
            Creando momentos dulces con amor y dedicación. Pastelería artesanal y diseños premium para celebrar la vida.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#productos" className="hover:text-primary-400 transition-colors">Nuestros Productos</Link></li>
            <li><Link href="#eventos" className="hover:text-primary-400 transition-colors">Mesas Dulces</Link></li>
            <li><Link href="#nosotros" className="hover:text-primary-400 transition-colors">Sobre Mi</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm mb-6">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary-400" />
              <span>+54 351 572-2774</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary-400 font-bold">@</span>
              <span>pamelagisel27@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-400" />
              <span>Córdoba, Argentina</span>
            </li>
          </ul>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:text-primary-400 transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md hover:text-primary-400 transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-black/5 text-center text-xs opacity-60">
        &copy; {new Date().getFullYear()} Pamela Bakery. Todos los derechos reservados.
      </div>
    </footer>
  );
}
