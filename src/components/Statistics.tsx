
import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Agronegócio', value: 35, color: '#22c55e' },
  { name: 'Tecnologia', value: 25, color: '#3b82f6' },
  { name: 'Energia', value: 20, color: '#f59e0b' },
  { name: 'Logística', value: 20, color: '#8b5cf6' },
];

const barData = [
  { month: 'Jan', value: 12.5 },
  { month: 'Fev', value: 14.2 },
  { month: 'Mar', value: 16.8 },
  { month: 'Abr', value: 15.3 },
  { month: 'Mai', value: 18.7 },
  { month: 'Jun', value: 17.2 },
];

export const Statistics = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Resultados que Impressionam
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja como nossos investidores estão obtendo retornos excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Distribuição por Setor
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Rentabilidade Mensal (%)
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">R$ 2.5B</div>
            <div className="text-gray-600">Volume Investido</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">18.5%</div>
            <div className="text-gray-600">Rentabilidade Média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
            <div className="text-gray-600">Projetos Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">12.5K</div>
            <div className="text-gray-600">Investidores</div>
          </div>
        </div>
      </div>
    </section>
  );
};
