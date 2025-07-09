
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, TrendingUp, Calendar, Shield } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'AgroTech Vale do Paraíba',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
    location: 'São Paulo, SP',
    sector: 'Agronegócio',
    risk: 'Baixo',
    profitability: '16.5% a.a.',
    duration: '24 meses',
    raised: 75,
    target: 50000000,
    description: 'Modernização de fazendas com tecnologia de precisão para aumentar produtividade.'
  },
  {
    id: 2,
    name: 'Usina Solar Nordeste',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop',
    location: 'Ceará, CE',
    sector: 'Energia',
    risk: 'Médio',
    profitability: '19.2% a.a.',
    duration: '36 meses',
    raised: 60,
    target: 80000000,
    description: 'Construção de complexo de energia solar para abastecer 50 mil residências.'
  },
  {
    id: 3,
    name: 'Hub Logístico Amazônia',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
    location: 'Manaus, AM',
    sector: 'Logística',
    risk: 'Médio',
    profitability: '17.8% a.a.',
    duration: '30 meses',
    raised: 45,
    target: 35000000,
    description: 'Centro de distribuição estratégico para facilitar o comércio na região Norte.'
  },
  {
    id: 4,
    name: 'Fábrica de Semicondutores',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    location: 'Campinas, SP',
    sector: 'Tecnologia',
    risk: 'Alto',
    profitability: '22.5% a.a.',
    duration: '48 meses',
    raised: 30,
    target: 120000000,
    description: 'Primeira fábrica brasileira de semicondutores para reduzir dependência externa.'
  }
];

const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'Baixo': return 'bg-green-100 text-green-800';
    case 'Médio': return 'bg-yellow-100 text-yellow-800';
    case 'Alto': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getSectorColor = (sector: string) => {
  switch (sector) {
    case 'Agronegócio': return 'bg-green-100 text-green-800';
    case 'Energia': return 'bg-orange-100 text-orange-800';
    case 'Logística': return 'bg-purple-100 text-purple-800';
    case 'Tecnologia': return 'bg-blue-100 text-blue-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Invista nos melhores projetos industriais do Brasil com alta rentabilidade e segurança
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={getSectorColor(project.sector)}>
                    {project.sector}
                  </Badge>
                  <Badge className={getRiskColor(project.risk)}>
                    Risco {project.risk}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    <span className="text-sm font-semibold">{project.profitability}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progresso da Captação</span>
                    <span className="text-sm font-semibold text-blue-600">{project.raised}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.raised}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">
                      Meta: R$ {(project.target / 1000000).toFixed(1)}M
                    </span>
                    <span className="text-xs text-gray-500">
                      Captado: R$ {((project.target * project.raised / 100) / 1000000).toFixed(1)}M
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Resumo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Captação
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Investir
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 py-4">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};
