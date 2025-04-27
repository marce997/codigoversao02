import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp, TrendingDown, Calendar, Users, CreditCard } from "lucide-react";
import { Navigation } from "./Navigation";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-500">Bem-vindo ao seu painel de controle</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Período</span>
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600">
              Exportar Relatório
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Receitas</p>
                <h3 className="text-2xl font-bold text-emerald-500">R$ 25.000,00</h3>
                <p className="text-sm text-emerald-500 flex items-center gap-1">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>+12% em relação ao mês anterior</span>
                </p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-emerald-500" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Despesas</p>
                <h3 className="text-2xl font-bold text-red-500">R$ 15.000,00</h3>
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <ArrowDownRight className="h-4 w-4" />
                  <span>+8% em relação ao mês anterior</span>
                </p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <TrendingDown className="h-6 w-6 text-red-500" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Saldo</p>
                <h3 className="text-2xl font-bold text-slate-900">R$ 10.000,00</h3>
                <p className="text-sm text-slate-500">Saldo atual</p>
              </div>
              <div className="bg-slate-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-slate-500" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Clientes Ativos</p>
                <h3 className="text-2xl font-bold text-slate-900">24</h3>
                <p className="text-sm text-slate-500">Total de clientes</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Fluxo de Caixa</h2>
              <Button variant="outline" size="sm">
                Ver Detalhes
              </Button>
            </div>
            {/* Aqui você pode adicionar um gráfico de fluxo de caixa */}
            <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center">
              <p className="text-slate-500">Gráfico de Fluxo de Caixa</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Próximos Pagamentos</h2>
              <Button variant="outline" size="sm">
                Ver Todos
              </Button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <CreditCard className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-medium">Pagamento #{item}</p>
                      <p className="text-sm text-slate-500">Vencimento: 20/05/2024</p>
                    </div>
                  </div>
                  <span className="font-medium text-emerald-500">R$ 3.000,00</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export { Dashboard }; 