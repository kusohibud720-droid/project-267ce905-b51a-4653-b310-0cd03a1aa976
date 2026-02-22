const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-10">
    <div className="container text-center">
      <p className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
        Ведущий<span className="text-primary">.</span>
      </p>
      <p className="text-primary-foreground/60 text-sm">
        © {new Date().getFullYear()} Все права защищены
      </p>
    </div>
  </footer>
);

export default Footer;
