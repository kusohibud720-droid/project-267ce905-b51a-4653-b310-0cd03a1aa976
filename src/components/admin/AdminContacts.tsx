import { useState } from "react";
import { getContact, saveContact, ContactData } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

const AdminContacts = () => {
  const { toast } = useToast();
  const [data, setData] = useState<ContactData>(getContact());

  const handleSave = () => {
    saveContact(data);
    toast({ title: "Контакты сохранены" });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">Контактная информация</h2>

      <div className="bg-card border border-border rounded-xl p-5 space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Телефон</label>
          <Input value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Telegram (ссылка)</label>
          <Input value={data.telegram} onChange={(e) => setData({ ...data, telegram: e.target.value })} />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Текст о времени ответа</label>
          <Textarea value={data.responseText} onChange={(e) => setData({ ...data, responseText: e.target.value })} rows={3} />
        </div>
        <Button onClick={handleSave} className="gap-2"><Save size={14} /> Сохранить</Button>
      </div>
    </div>
  );
};

export default AdminContacts;
