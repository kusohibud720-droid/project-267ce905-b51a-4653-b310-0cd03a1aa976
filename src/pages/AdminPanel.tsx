import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "@/lib/mockData";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LogOut, LayoutDashboard, Briefcase, Star, MessageSquare, User, Phone, Image, Video } from "lucide-react";
import AdminServices from "@/components/admin/AdminServices";
import AdminReviews from "@/components/admin/AdminReviews";
import AdminRequests from "@/components/admin/AdminRequests";
import AdminAbout from "@/components/admin/AdminAbout";
import AdminContacts from "@/components/admin/AdminContacts";
import AdminGallery from "@/components/admin/AdminGallery";
import AdminVideos from "@/components/admin/AdminVideos";

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) navigate("/admin/login");
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  if (!isAuthenticated()) return null;

  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-card border-b border-border sticky top-0 z-30">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <LayoutDashboard size={20} className="text-primary" />
            <span className="font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
              Админ-панель
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← На сайт
            </a>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut size={16} />
              Выйти
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-6">
        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-card border border-border p-1">
            <TabsTrigger value="requests" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <MessageSquare size={16} /> Заявки
            </TabsTrigger>
            <TabsTrigger value="services" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Briefcase size={16} /> Услуги
            </TabsTrigger>
            <TabsTrigger value="reviews" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Star size={16} /> Отзывы
            </TabsTrigger>
            <TabsTrigger value="gallery" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Image size={16} /> Фото
            </TabsTrigger>
            <TabsTrigger value="videos" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Video size={16} /> Видео
            </TabsTrigger>
            <TabsTrigger value="about" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <User size={16} /> Обо мне
            </TabsTrigger>
            <TabsTrigger value="contacts" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Phone size={16} /> Контакты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="requests"><AdminRequests /></TabsContent>
          <TabsContent value="services"><AdminServices /></TabsContent>
          <TabsContent value="reviews"><AdminReviews /></TabsContent>
          <TabsContent value="gallery"><AdminGallery /></TabsContent>
          <TabsContent value="videos"><AdminVideos /></TabsContent>
          <TabsContent value="about"><AdminAbout /></TabsContent>
          <TabsContent value="contacts"><AdminContacts /></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
