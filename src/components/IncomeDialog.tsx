
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, UserPlus } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export function IncomeDialog() {
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [newClientName, setNewClientName] = useState("");
  const [clients, setClients] = useState([
    "Marcelo",
    "Cristina",
  ]);

  const handleAddClient = () => {
    if (newClientName.trim()) {
      setClients([...clients, newClientName.trim()]);
      setSelectedClient(newClientName.trim());
      setNewClientName("");
    }
  };

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
      <DialogContent className="sm:max-w-[800px] p-0 gap-0">
        <div className="flex">
          <div className="w-1/3 bg-emerald-500 text-white p-8 rounded-l-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold mb-4">Nova Receita</DialogTitle>
              <p className="text-sm opacity-90">
                Registre suas entradas financeiras de forma simples e organizada
              </p>
            </DialogHeader>
            <div className="mt-8">
              <Card className="bg-white/10 border-white/20 p-4 rounded-lg">
                <p className="text-sm font-medium">Dica</p>
                <p className="text-xs opacity-80 mt-1">
                  Categorizar suas receitas ajuda a ter um melhor controle financeiro
                </p>
              </Card>
            </div>
          </div>
          
          <div className="w-2/3 p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-sm font-medium">
                  Data
                </Label>
                <Input id="date" type="date" className="border-slate-200" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category" className="text-sm font-medium">
                  Categoria
                </Label>
                <Input id="category" className="border-slate-200" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="payment" className="text-sm font-medium">
                  Forma de Pagamento
                </Label>
                <Input id="payment" className="border-slate-200" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-sm font-medium">
                  Valor Total
                </Label>
                <Input id="amount" type="number" className="border-slate-200" />
              </div>
              
              <div className="col-span-2 space-y-2">
                <Label htmlFor="client" className="text-sm font-medium">
                  Cliente
                </Label>
                <div className="flex gap-2">
                  <Select value={selectedClient} onValueChange={setSelectedClient}>
                    <SelectTrigger className="w-full border-slate-200">
                      <SelectValue placeholder="Selecione um cliente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {clients.map((client) => (
                          <SelectItem key={client} value={client}>
                            {client}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="shrink-0">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Novo Cliente
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none">Novo Cliente</h4>
                          <p className="text-sm text-muted-foreground">
                            Adicione um novo cliente à sua lista
                          </p>
                        </div>
                        <div className="grid gap-2">
                          <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="newClient">Nome</Label>
                            <Input
                              id="newClient"
                              value={newClientName}
                              onChange={(e) => setNewClientName(e.target.value)}
                              className="col-span-2"
                            />
                          </div>
                        </div>
                        <Button onClick={handleAddClient}>
                          Adicionar Cliente
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-8">
              <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600">
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
