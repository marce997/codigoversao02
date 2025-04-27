import { IncomeDialog } from "@/components/IncomeDialog";
import { ExpenseDialog } from "@/components/ExpenseDialog";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import "./HomeDashboard.css";

const HomeDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden animated-bg">
      {/* Botão Pessoa Física */}
      <div className="absolute top-8 right-8 z-10">
        <Button variant="outline" className="rounded-full px-6 py-2 flex items-center gap-2 bg-white shadow-md">
          <User className="h-5 w-5 text-emerald-600" />
          Pessoa Física
        </Button>
      </div>
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 text-center">Finanças Pessoais</h1>
      <p className="text-lg text-slate-500 mb-10 text-center">Controle simples e intuitivo</p>
      {/* Cards principais */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="card-animated group bg-white rounded-2xl shadow-lg p-8 flex items-center gap-6 min-w-[320px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="bg-emerald-50 rounded-xl p-4 flex items-center justify-center transition-colors duration-300 group-hover:bg-emerald-100">
            <span className="text-emerald-500 text-4xl font-bold">+</span>
          </div>
          <div>
            <IncomeDialog />
            <span className="block text-2xl font-semibold text-slate-900">Receita</span>
            <span className="block text-slate-500">Registrar entrada</span>
          </div>
        </div>
        <div className="card-animated group bg-white rounded-2xl shadow-lg p-8 flex items-center gap-6 min-w-[320px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="bg-red-50 rounded-xl p-4 flex items-center justify-center transition-colors duration-300 group-hover:bg-red-100">
            <span className="text-red-500 text-4xl font-bold">-</span>
          </div>
          <div>
            <ExpenseDialog />
            <span className="block text-2xl font-semibold text-slate-900">Despesa</span>
            <span className="block text-slate-500">Registrar saída</span>
          </div>
        </div>
      </div>
      {/* Cards secundários */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="card-animated bg-white rounded-2xl shadow p-8 flex flex-col items-center min-w-[220px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <span className="text-purple-500 text-3xl mb-2">📈</span>
          <span className="text-xl font-semibold text-slate-900">Relatórios</span>
          <span className="text-slate-500 text-center">Visualize seus dados</span>
        </div>
        <div className="card-animated bg-white rounded-2xl shadow p-8 flex flex-col items-center min-w-[220px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <span className="text-orange-400 text-3xl mb-2">⏪</span>
          <span className="text-xl font-semibold text-slate-900">Histórico</span>
          <span className="text-slate-500 text-center">Veja transações passadas</span>
        </div>
        <div className="card-animated bg-white rounded-2xl shadow p-8 flex flex-col items-center min-w-[220px] transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <span className="text-teal-500 text-3xl mb-2">✅</span>
          <span className="text-xl font-semibold text-slate-900">Categorias</span>
          <span className="text-slate-500 text-center">Gerencie seus grupos</span>
        </div>
      </div>
      {/* Fundo animado */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="bg-gradient-to-br from-[#e0e7ff] via-[#f4f8fc] to-[#c1f7fa] animate-gradient-move w-full h-full absolute opacity-80" />
      </div>
    </div>
  );
};

export { HomeDashboard }; 