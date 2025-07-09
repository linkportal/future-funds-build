
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Wallet, PieChart, Clock } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: "Total Investido",
      value: "R$ 25.000,00",
      icon: Wallet,
      color: "text-blue-600"
    },
    {
      title: "Rendimento Total",
      value: "R$ 3.750,00",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Projetos Ativos",
      value: "5",
      icon: PieChart,
      color: "text-purple-600"
    },
    {
      title: "Próximo Vencimento",
      value: "15 dias",
      icon: Clock,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bem-vindo de volta, {user?.user_metadata?.full_name || 'Investidor'}!
          </h1>
          <p className="text-gray-600">
            Acompanhe seus investimentos e descubra novas oportunidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Meus Investimentos</CardTitle>
              <CardDescription>
                Projetos em que você está investindo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Fábrica de Componentes Eletrônicos", value: "R$ 10.000", return: "+15%" },
                  { name: "Usina de Energia Solar", value: "R$ 8.000", return: "+12%" },
                  { name: "Indústria Alimentícia", value: "R$ 7.000", return: "+18%" }
                ].map((investment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{investment.name}</p>
                      <p className="text-sm text-gray-600">{investment.value}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">{investment.return}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rendimentos Recentes</CardTitle>
              <CardDescription>
                Seus últimos rendimentos recebidos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: "15 Dez 2024", project: "Fábrica de Componentes", value: "R$ 150,00" },
                  { date: "01 Dez 2024", project: "Usina Solar", value: "R$ 120,00" },
                  { date: "15 Nov 2024", project: "Indústria Alimentícia", value: "R$ 180,00" }
                ].map((earning, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{earning.project}</p>
                      <p className="text-sm text-gray-600">{earning.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">{earning.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
