import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
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
import { Plus, UserPlus, X, Info, Zap, CreditCard, Banknote, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { toast } from "sonner";

interface Client {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  address: string;
  additionalInfo: string;
}

const IncomeDialog = () => {
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [isFutureRevenue, setIsFutureRevenue] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [installments, setInstallments] = useState<number>(1);
  const [amount, setAmount] = useState("");
  const [clients, setClients] = useState<Client[]>([
    { id: "1", name: "Marcelo", cpf: "", phone: "", address: "", additionalInfo: "" },
    { id: "2", name: "Cristina", cpf: "", phone: "", address: "", additionalInfo: "" },
  ]);

  const [newClient, setNewClient] = useState<Omit<Client, "id">>({
    name: "",
    cpf: "",
    phone: "",
    address: "",
    additionalInfo: "",
  });

  const handleAddClient = () => {
    if (newClient.name.trim()) {
      const newId = (clients.length + 1).toString();
      const clientToAdd = {
        id: newId,
        ...newClient
      };
      setClients([...clients, clientToAdd]);
      setSelectedClient(newId);
      setNewClient({
        name: "",
        cpf: "",
        phone: "",
        address: "",
        additionalInfo: "",
      });
    }
  };

  const handleLaunch = () => {
    toast.success("Receita lançada com sucesso!");
  };

  const formatCurrency = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, "");
    const numberFormat = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return numberFormat.format(Number(onlyNumbers) / 100);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setAmount(value ? formatCurrency(value) : "");
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
        <DialogClose className="absolute left-4 top-4 rounded-full p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
        </DialogClose>
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
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Dica</p>
                    <p className="text-xs opacity-80 mt-1">
                      Para um melhor controle financeiro, selecione se é uma receita atual ou futura e preencha todos os dados do cliente ao cadastrar um novo.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="w-2/3 p-8">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-lg">
                <span className={`text-sm ${!isFutureRevenue ? 'font-medium' : ''}`}>Receita Atual</span>
                <Switch
                  checked={isFutureRevenue}
                  onCheckedChange={setIsFutureRevenue}
                />
                <span className={`text-sm ${isFutureRevenue ? 'font-medium' : ''}`}>Receita Futura</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-sm font-medium">Data</Label>
                <Input id="date" type="date" className="border-slate-200" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-sm font-medium">Valor Total</Label>
                <Input
                  id="amount"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="R$ 0,00"
                  className="border-slate-200"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="payment" className="text-sm font-medium">Forma de Pagamento</Label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger className="w-full border-slate-200">
                    <SelectValue placeholder="Selecione o método" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="pix">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          <span>Pix</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="credit">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          <span>Cartão</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="cash">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          <span>Dinheiro</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="boleto">
                        <div className="flex items-center gap-2">
                          <Banknote className="h-4 w-4" />
                          <span>Boleto</span>
                        </div>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {paymentMethod === "credit" && (
                <div className="space-y-2">
                  <Label htmlFor="installments" className="text-sm font-medium">Parcelas</Label>
                  <Select value={installments.toString()} onValueChange={(value) => setInstallments(Number(value))}>
                    <SelectTrigger className="w-full border-slate-200">
                      <SelectValue placeholder="Número de parcelas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="1">À vista</SelectItem>
                        {[2,3,4,5,6,7,8,9,10,11,12].map((n) => (
                          <SelectItem key={n} value={n.toString()}>{n}x</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              <div className="col-span-2 space-y-2">
                <Label htmlFor="client" className="text-sm font-medium">Cliente</Label>
                <div className="flex gap-2">
                  <Select value={selectedClient} onValueChange={setSelectedClient}>
                    <SelectTrigger className="w-full border-slate-200">
                      <SelectValue placeholder="Selecione um cliente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {clients.map((client) => (
                          <SelectItem key={client.id} value={client.id}>
                            {client.name}
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
                    <PopoverContent className="w-96">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none">Novo Cliente</h4>
                          <p className="text-sm text-muted-foreground">
                            Preencha os dados do novo cliente
                          </p>
                        </div>
                        <div className="grid gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Nome</Label>
                            <Input
                              id="name"
                              value={newClient.name}
                              onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cpf">CPF</Label>
                            <Input
                              id="cpf"
                              value={newClient.cpf}
                              onChange={(e) => setNewClient({...newClient, cpf: e.target.value})}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="phone">Telefone</Label>
                            <Input
                              id="phone"
                              value={newClient.phone}
                              onChange={(e) => setNewClient({...newClient, phone: e.target.value})}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="address">Endereço</Label>
                            <Input
                              id="address"
                              value={newClient.address}
                              onChange={(e) => setNewClient({...newClient, address: e.target.value})}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="additionalInfo">Informações Adicionais</Label>
                            <Input
                              id="additionalInfo"
                              value={newClient.additionalInfo}
                              onChange={(e) => setNewClient({...newClient, additionalInfo: e.target.value})}
                            />
                          </div>
                        </div>
                        <Button onClick={handleAddClient} className="w-full">
                          Adicionar Cliente
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-8">
              <Button 
                onClick={handleLaunch}
                className="bg-emerald-500 hover:bg-emerald-600 h-12 px-8 text-lg"
              >
                Lançar
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { IncomeDialog };
