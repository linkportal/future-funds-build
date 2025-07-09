
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, Users } from 'lucide-react';
import { AuthModal } from '@/components/AuthModal';

export const Hero = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Invista no Futuro da
            <span className="block text-yellow-400">Indústria Brasileira</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Conectamos investidores a projetos industriais de alto potencial com rentabilidade superior ao mercado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 text-lg"
              onClick={() => setShowAuthModal(true)}
            >
              Começar a Investir
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Saiba Mais
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rentabilidade Elevada</h3>
              <p className="text-blue-100">Projetos com retorno acima de 15% a.a.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Segurança Garantida</h3>
              <p className="text-blue-100">Projetos auditados e regulamentados</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunidade Ativa</h3>
              <p className="text-blue-100">Mais de 10.000 investidores ativos</p>
            </div>
          </div>
        </div>
      </div>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </section>
  );
};
