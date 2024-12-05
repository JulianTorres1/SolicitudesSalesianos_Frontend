import { Menu } from 'lucide-react';
import Logo from '../media/img/LOGO-C-SAN-PEDRO-CLAVER-OFICIAL-EN-HORIZONTAL.png';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-700" />
            <a href="/">
              <img src={Logo} alt="Company Logo" style={{ height: '3.5rem', marginLeft: '2rem' }} className="w-auto" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Preguntas Frecuentes</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Ayuda</a>
            <a href="/Login" className="text-gray-600 hover:text-gray-900">Administracion</a>
          </div>
        </div>
      </div>
    </nav>
  );
}