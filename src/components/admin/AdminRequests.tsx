import { useState } from "react";
import { getRequests, saveRequests, Request } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const statusLabels: Record<Request["status"], string> = {
  new: "Новая",
  contacted: "Связались",
  done: "Завершена",
};

const statusColors: Record<Request["status"], string> = {
  new: "bg-primary/15 text-primary border-primary/30",
  contacted: "bg-accent/15 text-accent border-accent/30",
  done: "bg-muted text-muted-foreground border-border",
};

const nextStatus: Record<Request["status"], Request["status"]> = {
  new: "contacted",
  contacted: "done",
  done: "new",
};

const AdminRequests = () => {
  const { toast } = useToast();
  const [requests, setRequests] = useState<Request[]>(getRequests());

  const cycleStatus = (id: string) => {
    const updated = requests.map((r) =>
      r.id === id ? { ...r, status: nextStatus[r.status] } : r
    );
    setRequests(updated);
    saveRequests(updated);
  };

  const handleDelete = (id: string) => {
    const updated = requests.filter((r) => r.id !== id);
    setRequests(updated);
    saveRequests(updated);
    toast({ title: "Заявка удалена" });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Заявки от клиентов</h2>

      {requests.length === 0 && (
        <p className="text-muted-foreground text-center py-12">Заявок пока нет</p>
      )}

      <div className="grid gap-3">
        {requests.map((r) => (
          <div key={r.id} className="bg-card border border-border rounded-xl p-4 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-foreground">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.phone}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  className={`cursor-pointer select-none ${statusColors[r.status]}`}
                  onClick={() => cycleStatus(r.id)}
                >
                  {statusLabels[r.status]}
                </Badge>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(r.id)}>
                  <Trash2 size={14} className="text-destructive" />
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span>📅 {r.date || "—"}</span>
              <span>🎉 {r.eventType || "—"}</span>
              <span className="text-xs">
                {new Date(r.createdAt).toLocaleDateString("ru-RU")}
              </span>
            </div>
            {r.comment && <p className="text-sm text-foreground">{r.comment}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminRequests;
