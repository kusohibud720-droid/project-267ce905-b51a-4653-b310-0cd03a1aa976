import { useState } from "react";
import { getGallery, saveGallery, GalleryPhoto } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Plus, GripVertical } from "lucide-react";
import { toast } from "sonner";

const AdminGallery = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(getGallery());
  const [newAlt, setNewAlt] = useState("");
  const [newSrc, setNewSrc] = useState("");

  const handleAdd = () => {
    if (!newSrc.trim() || !newAlt.trim()) {
      toast.error("Заполните URL и подпись");
      return;
    }
    const updated = [...photos, { id: Date.now().toString(), src: newSrc, alt: newAlt }];
    setPhotos(updated);
    saveGallery(updated);
    setNewSrc("");
    setNewAlt("");
    toast.success("Фото добавлено");
  };

  const handleDelete = (id: string) => {
    const updated = photos.filter((p) => p.id !== id);
    setPhotos(updated);
    saveGallery(updated);
    toast.success("Фото удалено");
  };

  const handleUpdate = (id: string, field: keyof GalleryPhoto, value: string) => {
    const updated = photos.map((p) => (p.id === id ? { ...p, [field]: value } : p));
    setPhotos(updated);
    saveGallery(updated);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Фотогалерея</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Укажите URL изображения (прямая ссылка) и подпись. Без Cloud загрузка файлов недоступна.
        </p>

        <div className="grid gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="flex items-center gap-3 p-3 border border-border rounded-lg bg-muted/30">
              <GripVertical size={16} className="text-muted-foreground shrink-0" />
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-16 h-12 object-cover rounded shrink-0 bg-muted"
                onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
              />
              <Input
                value={photo.src}
                onChange={(e) => handleUpdate(photo.id, "src", e.target.value)}
                placeholder="URL изображения"
                className="flex-1"
              />
              <Input
                value={photo.alt}
                onChange={(e) => handleUpdate(photo.id, "alt", e.target.value)}
                placeholder="Подпись"
                className="w-40"
              />
              <Button variant="ghost" size="icon" onClick={() => handleDelete(photo.id)}>
                <Trash2 size={16} className="text-destructive" />
              </Button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 p-3 border-2 border-dashed border-border rounded-lg">
          <Plus size={16} className="text-muted-foreground shrink-0" />
          <Input
            value={newSrc}
            onChange={(e) => setNewSrc(e.target.value)}
            placeholder="URL нового фото"
            className="flex-1"
          />
          <Input
            value={newAlt}
            onChange={(e) => setNewAlt(e.target.value)}
            placeholder="Подпись"
            className="w-40"
          />
          <Button onClick={handleAdd} size="sm">
            Добавить
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminGallery;
