
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, TrendingUp, Clock, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Fábrica de Componentes Eletrônicos",
      description: "Expansão da produção de componentes para o setor automotivo",
      location: "São Paulo, SP",
      targetAmount: 5000000,
      raisedAmount: 3500000,
      returnRate: "15%",
      duration: "24 meses",
      riskLevel: "Médio",
      investors: 87,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Usina de Energia Solar",
      description: "Construção de usina fotovoltaica para geração de energia limpa",
      location: "Minas Gerais, MG",
      targetAmount: 8000000,
      raisedAmount: 6200000,
      returnRate: "12%",
      duration: "36 meses",
      riskLevel: "Baixo",
      investors: 134,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Indústria Alimentícia Orgânica",
      description: "Ampliação da linha de produção de alimentos orgânicos",
      location: "Rio Grande do Sul, RS",
      targetAmount: 3000000,
      raisedAmount: 1800000,
      returnRate: "18%",
      duration: "18 meses",
      riskLevel: "Médio",
      investors: 56,
      image: "/placeholder.svg"
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

  const getProgress = (raised: number, target: number) => {
    return Math.round((raised / target) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Projetos Disponíveis
          </h1>
          <p className="text-gray-600">
            Descubra oportunidades de investimento em projetos industriais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </CardDescription>
                  </div>
                  <Badge className={getRiskColor(project.riskLevel)}>
                    {project.riskLevel}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progresso</span>
                    <span className="font-medium">{getProgress(project.raisedAmount, project.targetAmount)}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${getProgress(project.raisedAmount, project.targetAmount)}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>R$ {(project.raisedAmount / 1000000).toFixed(1)}M</span>
                    <span>R$ {(project.targetAmount / 1000000).toFixed(1)}M</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                    <span className="text-gray-600">Retorno: </span>
                    <span className="font-medium ml-1">{project.returnRate}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-blue-600" />
                    <span className="text-gray-600">Prazo: </span>
                    <span className="font-medium ml-1">{project.duration}</span>
                  </div>
                  
                  <div className="flex items-center col-span-2">
                    <Users className="h-4 w-4 mr-1 text-purple-600" />
                    <span className="text-gray-600">{project.investors} investidores</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Investir Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
