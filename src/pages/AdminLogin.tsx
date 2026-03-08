import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/lib/mockData";
import { LogIn } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(user, pass)) {
      navigate("/admin");
    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-card rounded-2xl shadow-lg border border-border p-8 w-full max-w-sm space-y-6"
      >
        <div className="text-center">
          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogIn className="text-primary" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            Админ-панель
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Войдите для управления сайтом</p>
        </div>

        {error && (
          <p className="text-destructive text-sm text-center bg-destructive/10 rounded-lg py-2">{error}</p>
        )}

        <div className="space-y-4">
          <Input
            placeholder="Логин"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="h-11"
          />
          <Input
            placeholder="Пароль"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="h-11"
          />
        </div>

        <Button type="submit" className="w-full h-11">
          Войти
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Логин: <strong>admin</strong> / Пароль: <strong>admin123</strong>
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
