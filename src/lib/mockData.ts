export interface Service {
  id: string;
  emoji: string;
  title: string;
  description: string;
  price: string;
}

export interface Review {
  id: string;
  name: string;
  type: string;
  text: string;
}

export interface Request {
  id: string;
  name: string;
  phone: string;
  eventType: string;
  date: string;
  comment: string;
  createdAt: string;
  status: "new" | "contacted" | "done";
}

export interface AboutData {
  title: string;
  paragraphs: string[];
  stats: { num: string; label: string }[];
}

export interface ContactData {
  phone: string;
  telegram: string;
  responseText: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
}

export interface VideoItem {
  id: string;
  title: string;
  url: string;
  platform: "rutube" | "youtube";
}

export interface FeaturedVideo {
  url: string;
  platform: "rutube" | "youtube";
}

const STORAGE_PREFIX = "admin_";

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function save<T>(key: string, data: T) {
  localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(data));
}

// Default data
const defaultServices: Service[] = [
  { id: "1", emoji: "💍", title: "Свадьбы", description: "Торжественная регистрация, банкет, интерактивы для гостей. Индивидуальный сценарий для каждой пары.", price: "от 35 000 ₽" },
  { id: "2", emoji: "🏢", title: "Корпоративы", description: "Новогодние вечера, тимбилдинг, юбилеи компании. Профессиональная организация от А до Я.", price: "от 25 000 ₽" },
  { id: "3", emoji: "🎂", title: "Юбилеи", description: "Тёплые поздравления, трогательные моменты и весёлая программа для юбиляра и гостей.", price: "от 20 000 ₽" },
  { id: "4", emoji: "🎓", title: "Выпускные", description: "Яркий и запоминающийся выпускной вечер с современной программой для молодёжи.", price: "от 18 000 ₽" },
  { id: "5", emoji: "🎧", title: "DJ + Звук", description: "Профессиональное звуковое оборудование и DJ-сопровождение для любого формата мероприятия.", price: "от 15 000 ₽" },
  { id: "6", emoji: "🎉", title: "Любой праздник", description: "День рождения, детский праздник, вечеринка — создам программу под ваш формат.", price: "от 15 000 ₽" },
];

const defaultReviews: Review[] = [
  { id: "1", name: "Анна и Дмитрий", type: "Свадьба", text: "Игорь сделал нашу свадьбу незабываемой! Все гости были в восторге от программы. Ни одной минуты скуки!" },
  { id: "2", name: "Елена Петрова", type: "Юбилей", text: "Отмечали юбилей мамы. Игорь нашёл подход ко всем — и к молодёжи, и к старшему поколению. Очень тактичный и весёлый!" },
  { id: "3", name: "ООО «ТехноСтар»", type: "Корпоратив", text: "Проводили новогодний корпоратив на 200 человек. Всё было организовано идеально — звук, свет, программа. Рекомендуем!" },
  { id: "4", name: "Ирина Козлова", type: "Выпускной", text: "Выпускной получился ярким и современным. Дети были в восторге! Спасибо за энергию и профессионализм!" },
];

const defaultRequests: Request[] = [
  { id: "1", name: "Мария Иванова", phone: "+7 (999) 123-45-67", eventType: "Свадьба", date: "2026-06-15", comment: "Свадьба на 80 человек, нужен DJ", createdAt: "2026-03-05T10:30:00", status: "new" },
  { id: "2", name: "Павел Сидоров", phone: "+7 (916) 555-12-34", eventType: "Корпоратив", date: "2026-04-20", comment: "Новогодний корпоратив, 150 человек", createdAt: "2026-03-03T14:15:00", status: "contacted" },
  { id: "3", name: "Ольга Кузнецова", phone: "+7 (903) 777-88-99", eventType: "Юбилей", date: "2026-05-10", comment: "Юбилей 50 лет, уютный формат", createdAt: "2026-03-01T09:00:00", status: "done" },
];

const defaultAbout: AboutData = {
  title: "Более 10 лет создаю незабываемые праздники",
  paragraphs: [
    "Привет! Меня зовут Игорь, и я — профессиональный ведущий мероприятий. За годы работы я провёл более 500 мероприятий разного формата.",
    "Мой стиль — это сочетание элегантности и искреннего юмора. Я не использую шаблонных конкурсов и пошлых шуток. Каждый праздник — это индивидуальный сценарий, созданный специально для вас.",
    "Работаю с живыми музыкантами, DJ и звукорежиссёрами. Обеспечиваю полное техническое сопровождение мероприятия.",
  ],
  stats: [
    { num: "500+", label: "мероприятий" },
    { num: "10+", label: "лет опыта" },
    { num: "100%", label: "довольных" },
  ],
};

const defaultContact: ContactData = {
  phone: "+7 (967) 001-32-72",
  telegram: "https://t.me/imshowman",
  responseText: "Расскажите о вашем мероприятии, и я подготовлю индивидуальное предложение. Обычно отвечаю в течение 2 часов.",
};

// CRUD helpers
export const getServices = (): Service[] => load("services", defaultServices);
export const saveServices = (data: Service[]) => save("services", data);

export const getReviews = (): Review[] => load("reviews", defaultReviews);
export const saveReviews = (data: Review[]) => save("reviews", data);

export const getRequests = (): Request[] => load("requests", defaultRequests);
export const saveRequests = (data: Request[]) => save("requests", data);

export const getAbout = (): AboutData => load("about", defaultAbout);
export const saveAbout = (data: AboutData) => save("about", data);

export const getContact = (): ContactData => load("contact", defaultContact);
export const saveContact = (data: ContactData) => save("contact", data);

// Auth (mock)
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

export const isAuthenticated = (): boolean => localStorage.getItem("admin_auth") === "true";
export const login = (user: string, pass: string): boolean => {
  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    localStorage.setItem("admin_auth", "true");
    return true;
  }
  return false;
};
export const logout = () => localStorage.removeItem("admin_auth");
