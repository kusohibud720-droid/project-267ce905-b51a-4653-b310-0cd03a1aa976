import { useState } from "react";
import { getVideos, saveVideos, getFeaturedVideo, saveFeaturedVideo, VideoItem, FeaturedVideo } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Plus } from "lucide-react";
import { toast } from "sonner";

const AdminVideos = () => {
  const [videos, setVideos] = useState<VideoItem[]>(getVideos());
  const [featured, setFeatured] = useState<FeaturedVideo>(getFeaturedVideo());
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newPlatform, setNewPlatform] = useState<"youtube" | "rutube">("youtube");

  const handleAddVideo = () => {
    if (!newUrl.trim() || !newTitle.trim()) {
      toast.error("Заполните название и ссылку");
      return;
    }
    const updated = [...videos, { id: Date.now().toString(), title: newTitle, url: newUrl, platform: newPlatform }];
    setVideos(updated);
    saveVideos(updated);
    setNewTitle("");
    setNewUrl("");
    toast.success("Видео добавлено");
  };

  const handleDeleteVideo = (id: string) => {
    const updated = videos.filter((v) => v.id !== id);
    setVideos(updated);
    saveVideos(updated);
    toast.success("Видео удалено");
  };

  const handleUpdateVideo = (id: string, field: keyof VideoItem, value: string) => {
    const updated = videos.map((v) => (v.id === id ? { ...v, [field]: value } : v));
    setVideos(updated);
    saveVideos(updated);
  };

  const handleFeaturedChange = (field: keyof FeaturedVideo, value: string) => {
    const updated = { ...featured, [field]: value };
    setFeatured(updated);
    saveFeaturedVideo(updated);
    toast.success("Главное видео обновлено");
  };

  return (
    <div className="space-y-6">
      {/* Featured video */}
      <Card>
        <CardHeader>
          <CardTitle>Главное видео</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Embed-ссылка для главного видео на сайте</p>
          <div className="flex items-center gap-3">
            <Input
              value={featured.url}
              onChange={(e) => handleFeaturedChange("url", e.target.value)}
              placeholder="Embed URL"
              className="flex-1"
            />
            <Select
              value={featured.platform}
              onValueChange={(v) => handleFeaturedChange("platform", v)}
            >
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rutube">Rutube</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Video gallery */}
      <Card>
        <CardHeader>
          <CardTitle>Видеогалерея</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Embed-ссылки для видеогалереи</p>

          <div className="grid gap-4">
            {videos.map((video) => (
              <div key={video.id} className="flex items-center gap-3 p-3 border border-border rounded-lg bg-muted/30">
                <Input
                  value={video.title}
                  onChange={(e) => handleUpdateVideo(video.id, "title", e.target.value)}
                  placeholder="Название"
                  className="w-40"
                />
                <Input
                  value={video.url}
                  onChange={(e) => handleUpdateVideo(video.id, "url", e.target.value)}
                  placeholder="Embed URL"
                  className="flex-1"
                />
                <Select
                  value={video.platform}
                  onValueChange={(v) => handleUpdateVideo(video.id, "platform", v)}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rutube">Rutube</SelectItem>
                    <SelectItem value="youtube">YouTube</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="ghost" size="icon" onClick={() => handleDeleteVideo(video.id)}>
                  <Trash2 size={16} className="text-destructive" />
                </Button>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 p-3 border-2 border-dashed border-border rounded-lg">
            <Plus size={16} className="text-muted-foreground shrink-0" />
            <Input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Название"
              className="w-40"
            />
            <Input
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="Embed URL"
              className="flex-1"
            />
            <Select value={newPlatform} onValueChange={(v: "youtube" | "rutube") => setNewPlatform(v)}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rutube">Rutube</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleAddVideo} size="sm">
              Добавить
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminVideos;
