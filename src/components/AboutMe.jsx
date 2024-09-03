import { useTheme } from "../hooks/useTheme";

export default function AboutMe({ onClose }) {
    const [isDark] = useTheme();
  return (
    <div className={`popup ${isDark ? "dark" : ""}`}>
      <div className="popup-left">
        <h2>Hello, My Name is Ankit Kumar Mitra</h2>
        <p>
          Hello! I'm a full-stack developer with expertise in HTML, CSS, JavaScript, Node.js, and Express. My
          focus is on creating intuitive user interfaces and architecting scalable back-end systems. Committed to
          staying current with industry trends, I bring a blend of creativity and technical proficiency to every
          project. Whether optimizing database performance or solving complex coding challenges, I'm dedicated to
          delivering efficient and user-centric solutions. Let's collaborate to transform ideas into digital success!
        </p>
        <button className="info-btn back-btn" onClick={onClose}>Back</button>
      </div>
      <div className={`vertical-line-popup ${isDark ? "dark" : ""}`}></div>
      <img src="programmer-vector.png" className='popup-img' alt="programmer"/>
    </div>
  )
}
