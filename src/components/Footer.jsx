import { useTheme } from "../hooks/useTheme";
export default function Footer() {
  const [isDark] = useTheme();
  return (
    <footer className={`${isDark ? "dark" : ""}`}>
      <p>Ankit Kumar Mitra &copy; 2024</p>
      <img src="/logo.svg" />
      <div className="icon-container">
        <a
          href="https://www.linkedin.com/in/ankit-kumar-mitra-66a27a252/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in contact-icon"></i>
        </a>
        <a href="https://github.com/AnkitKumarMitra" target="_blank">
          <i className="fa-brands fa-github contact-icon"></i>
        </a>
        <a href="mailto:mitraankit12@gmail.com" target="_blank">
          <i className="fa-regular fa-envelope contact-icon"></i>
        </a>
      </div>
    </footer>
  );
}
