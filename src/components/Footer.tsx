
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">InvestBrasil</h3>
            <p className="text-gray-300">
              Conectando investidores aos melhores projetos industriais do Brasil com segurança e transparência.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Investimentos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Agronegócio</a></li>
              <li><a href="#" className="hover:text-white">Energia Renovável</a></li>
              <li><a href="#" className="hover:text-white">Tecnologia</a></li>
              <li><a href="#" className="hover:text-white">Logística</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white">Como Investir</a></li>
              <li><a href="#" className="hover:text-white">Segurança</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contato@investbrasil.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(11) 3000-0000</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 InvestBrasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
