import { useState } from "react";
import { getReviews, saveReviews, Review } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Save, X } from "lucide-react";

const AdminReviews = () => {
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>(getReviews());
  const [editing, setEditing] = useState<Review | null>(null);
  const [isNew, setIsNew] = useState(false);

  const startNew = () => {
    setEditing({ id: Date.now().toString(), name: "", type: "", text: "" });
    setIsNew(true);
  };

  const startEdit = (r: Review) => {
    setEditing({ ...r });
    setIsNew(false);
  };

  const handleSave = () => {
    if (!editing?.name.trim() || !editing?.text.trim()) return;
    let updated: Review[];
    if (isNew) {
      updated = [...reviews, editing];
    } else {
      updated = reviews.map((r) => (r.id === editing.id ? editing : r));
    }
    setReviews(updated);
    saveReviews(updated);
    setEditing(null);
    toast({ title: isNew ? "Отзыв добавлен" : "Отзыв обновлён" });
  };

  const handleDelete = (id: string) => {
    const updated = reviews.filter((r) => r.id !== id);
    setReviews(updated);
    saveReviews(updated);
    toast({ title: "Отзыв удалён" });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Отзывы</h2>
        <Button onClick={startNew} size="sm" className="gap-2"><Plus size={16} /> Добавить</Button>
      </div>

      {editing && (
        <div className="bg-card border border-border rounded-xl p-5 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="Имя клиента" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
            <Input placeholder="Тип мероприятия" value={editing.type} onChange={(e) => setEditing({ ...editing, type: e.target.value })} />
          </div>
          <Textarea placeholder="Текст отзыва" value={editing.text} onChange={(e) => setEditing({ ...editing, text: e.target.value })} rows={3} />
          <div className="flex gap-2">
            <Button onClick={handleSave} size="sm" className="gap-2"><Save size={14} /> Сохранить</Button>
            <Button onClick={() => setEditing(null)} variant="ghost" size="sm" className="gap-2"><X size={14} /> Отмена</Button>
          </div>
        </div>
      )}

      <div className="grid gap-3">
        {reviews.map((r) => (
          <div key={r.id} className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div className="min-w-0">
                <p className="font-semibold text-foreground">{r.name} <span className="text-primary text-sm font-normal">— {r.type}</span></p>
                <p className="text-sm text-muted-foreground mt-1">«{r.text}»</p>
              </div>
              <div className="flex gap-1 shrink-0 ml-4">
                <Button variant="ghost" size="icon" onClick={() => startEdit(r)}><Pencil size={14} /></Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(r.id)}><Trash2 size={14} className="text-destructive" /></Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReviews;
