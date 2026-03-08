import { useState } from "react";
import { getAbout, saveAbout, AboutData } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

const AdminAbout = () => {
  const { toast } = useToast();
  const [data, setData] = useState<AboutData>(getAbout());

  const handleSave = () => {
    saveAbout(data);
    toast({ title: "Раздел «Обо мне» сохранён" });
  };

  const updateParagraph = (i: number, val: string) => {
    const p = [...data.paragraphs];
    p[i] = val;
    setData({ ...data, paragraphs: p });
  };

  const updateStat = (i: number, field: "num" | "label", val: string) => {
    const s = [...data.stats];
    s[i] = { ...s[i], [field]: val };
    setData({ ...data, stats: s });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">Обо мне</h2>

      <div className="bg-card border border-border rounded-xl p-5 space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Заголовок</label>
          <Input value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
        </div>

        {data.paragraphs.map((p, i) => (
          <div key={i}>
            <label className="text-sm font-medium text-foreground mb-1 block">Абзац {i + 1}</label>
            <Textarea value={p} onChange={(e) => updateParagraph(i, e.target.value)} rows={3} />
          </div>
        ))}

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Статистика</label>
          <div className="grid grid-cols-3 gap-3">
            {data.stats.map((s, i) => (
              <div key={i} className="space-y-1">
                <Input placeholder="Число" value={s.num} onChange={(e) => updateStat(i, "num", e.target.value)} />
                <Input placeholder="Подпись" value={s.label} onChange={(e) => updateStat(i, "label", e.target.value)} />
              </div>
            ))}
          </div>
        </div>

        <Button onClick={handleSave} className="gap-2"><Save size={14} /> Сохранить</Button>
      </div>
    </div>
  );
};

export default AdminAbout;
