import { useState } from "react";
import { getServices, saveServices, Service } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Save, X } from "lucide-react";

const AdminServices = () => {
  const { toast } = useToast();
  const [services, setServices] = useState<Service[]>(getServices());
  const [editing, setEditing] = useState<Service | null>(null);
  const [isNew, setIsNew] = useState(false);

  const startNew = () => {
    setEditing({ id: Date.now().toString(), emoji: "🎉", title: "", description: "", price: "" });
    setIsNew(true);
  };

  const startEdit = (s: Service) => {
    setEditing({ ...s });
    setIsNew(false);
  };

  const handleSave = () => {
    if (!editing?.title.trim()) return;
    let updated: Service[];
    if (isNew) {
      updated = [...services, editing];
    } else {
      updated = services.map((s) => (s.id === editing.id ? editing : s));
    }
    setServices(updated);
    saveServices(updated);
    setEditing(null);
    toast({ title: isNew ? "Услуга добавлена" : "Услуга обновлена" });
  };

  const handleDelete = (id: string) => {
    const updated = services.filter((s) => s.id !== id);
    setServices(updated);
    saveServices(updated);
    toast({ title: "Услуга удалена" });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Услуги и цены</h2>
        <Button onClick={startNew} size="sm" className="gap-2"><Plus size={16} /> Добавить</Button>
      </div>

      {editing && (
        <div className="bg-card border border-border rounded-xl p-5 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="Эмодзи" value={editing.emoji} onChange={(e) => setEditing({ ...editing, emoji: e.target.value })} />
            <Input placeholder="Название" value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
          </div>
          <Textarea placeholder="Описание" value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} />
          <Input placeholder="Цена" value={editing.price} onChange={(e) => setEditing({ ...editing, price: e.target.value })} />
          <div className="flex gap-2">
            <Button onClick={handleSave} size="sm" className="gap-2"><Save size={14} /> Сохранить</Button>
            <Button onClick={() => setEditing(null)} variant="ghost" size="sm" className="gap-2"><X size={14} /> Отмена</Button>
          </div>
        </div>
      )}

      <div className="grid gap-3">
        {services.map((s) => (
          <div key={s.id} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-2xl">{s.emoji}</span>
              <div className="min-w-0">
                <p className="font-semibold text-foreground">{s.title}</p>
                <p className="text-sm text-muted-foreground truncate">{s.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0 ml-4">
              <span className="text-primary font-bold text-sm whitespace-nowrap">{s.price}</span>
              <Button variant="ghost" size="icon" onClick={() => startEdit(s)}><Pencil size={14} /></Button>
              <Button variant="ghost" size="icon" onClick={() => handleDelete(s.id)}><Trash2 size={14} className="text-destructive" /></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminServices;
