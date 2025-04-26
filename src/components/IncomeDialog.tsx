
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export function IncomeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full h-32 bg-emerald-500 hover:bg-emerald-600 p-6 flex flex-col items-center gap-2">
          <Plus className="h-8 w-8" />
          <div className="flex flex-col items-center">
            <span className="text-xl font-medium">Receita</span>
            <span className="text-sm opacity-90">Registrar entrada</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nova Receita</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="date">Data</Label>
            <Input id="date" type="date" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Categoria</Label>
            <Input id="category" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="payment">Forma de Pagamento</Label>
            <Input id="payment" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="amount">Valor Total</Label>
            <Input id="amount" type="number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="client">Cliente</Label>
            <Input id="client" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Salvar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
