import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const [isDark, setIsDark] = useTheme();
  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">
            <img src="/logo.svg" alt="Logo" />
          </a>
        </h2>
        <div className="nav-btns">
          <p
            className="theme-changer"
            onClick={() => {
              setIsDark(!isDark);
              localStorage.setItem("isDarkMode", !isDark);
            }}
          >
            <i className={`fa-solid fa-${isDark ? "sun" : "moon"} item`} />
          </p>

          <li className="item">
            <a
              href="https://www.linkedin.com/in/ankit-kumar-mitra-66a27a252/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li className="item">
            <a href="https://github.com/AnkitKumarMitra" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="item">
            <a href="mailto:mitraankit12@gmail.com" target="_blank">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </li>
        </div>
      </div>
    </header>
  );
}
