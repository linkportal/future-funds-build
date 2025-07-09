
import React from 'react';
import { UserPlus, Search, TrendingUp, Wallet } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Cadastre-se',
    description: 'Crie sua conta gratuitamente e complete seu perfil de investidor',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Search,
    title: 'Explore Projetos',
    description: 'Analise os projetos disponíveis com informações detalhadas e transparentes',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Wallet,
    title: 'Invista',
    description: 'Escolha o valor que deseja investir e transfira de forma segura',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: TrendingUp,
    title: 'Receba Retornos',
    description: 'Acompanhe seus investimentos e receba os rendimentos periodicamente',
    color: 'bg-orange-100 text-orange-600'
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Em apenas 4 passos simples, você começa a investir em projetos industriais de alto potencial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-8 w-8" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
                )}
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
