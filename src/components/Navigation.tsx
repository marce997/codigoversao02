import { Button } from "@/components/ui/button";
import { IncomeDialog } from "@/components/IncomeDialog";
import { ExpenseDialog } from "@/components/ExpenseDialog";
import { Plus, Minus } from "lucide-react";

const Navigation = () => {
  return (
    <div className="fixed bottom-8 right-8 flex gap-4">
      <IncomeDialog />
      <ExpenseDialog />
    </div>
  );
};

export { Navigation }; 