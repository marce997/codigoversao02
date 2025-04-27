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
import { Plus, UserPlus, Info, Zap, CreditCard, Banknote, DollarSign, ArrowUpDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
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
  const [installmentValue, setInstallmentValue] = useState<string>("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
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
  
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    if (amount && installments > 0) {
      const numericAmount = parseFloat(amount.replace(/[^\d,]/g, "").replace(",", "."));
      if (!isNaN(numericAmount)) {
        const value = numericAmount / installments;
        setInstallmentValue(formatCurrency(String(value * 100)));
      }
    } else {
      setInstallmentValue("");
    }
  }, [amount, installments]);

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
      setIsPopoverOpen(false);
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

  const handleInstallmentValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setInstallmentValue(value ? formatCurrency(value) : "");
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
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 bg-emerald-500 text-white p-8 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold mb-4">Nova Receita</DialogTitle>
              <p className="text-sm opacity-90">
                Registre suas entradas financeiras de forma simples e organizada
              </p>
            </DialogHeader>
            <div className="mt-8">
              <Card className="bg-[#E8F5E9] border-white/20 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 mt-0.5 shrink-0 text-[#1A1F2C]" />
                  <div>
                    <p className="text-sm font-medium text-[#1A1F2C]">Dica</p>
                    <p className="text-xs text-[#1A1F2C] mt-1">
                      Para um melhor controle financeiro, selecione se é uma receita atual ou futura e preencha todos os dados do cliente ao cadastrar um novo.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 p-8">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-lg">
                <span className={`text-sm px-3 py-1 rounded transition-colors ${!isFutureRevenue ? 'bg-emerald-100 font-medium' : ''}`}>Receita Atual</span>
                <Switch
                  checked={isFutureRevenue}
                  onCheckedChange={setIsFutureRevenue}
                />
                <span className={`text-sm px-3 py-1 rounded transition-colors ${isFutureRevenue ? 'bg-purple-100 font-medium' : ''}`}>Receita Futura</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <Label htmlFor="category" className="text-sm font-medium">Categoria</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="w-full border-slate-200">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent position="popper" className="max-h-[300px] overflow-y-auto">
                    <SelectGroup>
                      <SelectItem value="products">Venda de Produtos</SelectItem>
                      <SelectItem value="services">Prestação de Serviços</SelectItem>
                      <SelectItem value="clients">Recebimento de Clientes</SelectItem>
                      <SelectItem value="investments">Investimentos / Aplicações</SelectItem>
                      <SelectItem value="partners">Aportes dos Sócios</SelectItem>
                      <SelectItem value="loans">Empréstimos Recebidos</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="payment" className="text-sm font-medium">Forma de Pagamento</Label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger className="w-full border-slate-200">
                    <SelectValue placeholder="Selecione o método" />
                  </SelectTrigger>
                  <SelectContent position="popper">
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
                      <SelectItem value="transfer">
                        <div className="flex items-center gap-2">
                          <ArrowUpDown className="h-4 w-4" />
                          <span>Transferência</span>
                        </div>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {paymentMethod === "credit" && (
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="installments" className="text-sm font-medium">Parcelas</Label>
                    <Select value={installments.toString()} onValueChange={(value) => setInstallments(Number(value))}>
                      <SelectTrigger className="w-full border-slate-200">
                        <SelectValue placeholder="Número de parcelas" />
                      </SelectTrigger>
                      <SelectContent position="popper" className="max-h-[200px] overflow-y-auto">
                        <SelectItem value="1">À vista</SelectItem>
                        {[2,3,4,5,6,7,8,9,10,11,12].map((n) => (
                          <SelectItem key={n} value={n.toString()}>{n}x</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {installments > 1 && (
                    <div className="space-y-2">
                      <Label htmlFor="installmentValue" className="text-sm font-medium">Valor da Parcela</Label>
                      <Input
                        id="installmentValue"
                        value={installmentValue}
                        onChange={handleInstallmentValueChange}
                        className="border-slate-200"
                        placeholder="R$ 0,00"
                      />
                    </div>
                  )}
                </div>
              )}
              
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="client" className="text-sm font-medium">Cliente</Label>
                <div className="flex gap-2">
                  <Select value={selectedClient} onValueChange={setSelectedClient}>
                    <SelectTrigger className="w-full border-slate-200">
                      <SelectValue placeholder="Selecione um cliente" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      <SelectGroup>
                        {clients.map((client) => (
                          <SelectItem key={client.id} value={client.id}>
                            {client.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="shrink-0">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Novo Cliente
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Novo Cliente</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-4">
                          <div>
                            <Label htmlFor="name">Nome</Label>
                            <Input
                              id="name"
                              value={newClient.name}
                              onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                              className="mt-1"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <Label htmlFor="cpf">CPF</Label>
                              <Input
                                id="cpf"
                                value={newClient.cpf}
                                onChange={(e) => setNewClient({...newClient, cpf: e.target.value})}
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Telefone</Label>
                              <Input
                                id="phone"
                                value={newClient.phone}
                                onChange={(e) => setNewClient({...newClient, phone: e.target.value})}
                                className="mt-1"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="address">Endereço</Label>
                            <Input
                              id="address"
                              value={newClient.address}
                              onChange={(e) => setNewClient({...newClient, address: e.target.value})}
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="additionalInfo">Informações Adicionais</Label>
                            <Input
                              id="additionalInfo"
                              value={newClient.additionalInfo}
                              onChange={(e) => setNewClient({...newClient, additionalInfo: e.target.value})}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={handleAddClient} className="w-full">
                          Adicionar Cliente
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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
