import styles from "./Header.module.css"; // Importing CSS for styling

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div>
          <img
            src="https://inovattitecnologia.com.br/wp-content/uploads/2020/09/novaLogo2.png"
            alt="Logo Inovatti"
            className={styles["logo"]}/>
        </div>
        <ul>
          <li className={styles["nav-item"]}>Home</li>
          <li className={styles["nav-item"]}>Serviços</li>
          <li className={styles["nav-item"]}>Sobre nós</li>
          <li className={styles["nav-item"]}>Abrir um Chamado</li>
          <li className={styles["nav-item"]}>Blog</li>
          <li className={styles["nav-item"]}>Contato</li>
        </ul>
        <div>
          <button className={styles["agendar-visita"]}>AGENDAR VISITA</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;