
import { IncomeDialog } from "@/components/IncomeDialog";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Finanças Empresariais</h1>
          <p className="text-slate-600">Controle simples e intuitivo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <IncomeDialog />
          <Button variant="outline" className="w-full h-32 bg-white hover:bg-slate-50 p-6 flex flex-col items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-8 w-8 text-red-500"
            >
              <path d="M5 12h14" />
            </svg>
            <div className="flex flex-col items-center">
              <span className="text-xl font-medium">Despesa</span>
              <span className="text-sm text-slate-500">Registrar saída</span>
            </div>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Button variant="outline" className="w-full h-32 bg-white hover:bg-slate-50 p-6 flex flex-col items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-8 w-8 text-purple-500"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <div className="flex flex-col items-center">
              <span className="text-xl font-medium">Relatórios</span>
              <span className="text-sm text-slate-500">Visualize seus dados</span>
            </div>
          </Button>

          <Button variant="outline" className="w-full h-32 bg-white hover:bg-slate-50 p-6 flex flex-col items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-8 w-8 text-orange-500"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
            <div className="flex flex-col items-center">
              <span className="text-xl font-medium">Histórico</span>
              <span className="text-sm text-slate-500">Veja transações passadas</span>
            </div>
          </Button>

          <Button variant="outline" className="w-full h-32 bg-white hover:bg-slate-50 p-6 flex flex-col items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-8 w-8 text-emerald-500"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
            <div className="flex flex-col items-center">
              <span className="text-xl font-medium">Categorias</span>
              <span className="text-sm text-slate-500">Gerencie seus grupos</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
