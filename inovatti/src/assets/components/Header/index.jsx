import styles from "./Header.module.css"; // Importing CSS for styling

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <div className="logo">
          <img
            src="https://inovattitecnologia.com.br/wp-content/uploads/2020/09/novaLogo2.png"
            alt="Logo Inovatti"
            className="logo"
            width={150}
            height={30} // Added width and height attributes for better performance
          />
        </div>
        <ul>
          <li className={styles["nav-item"]}>Home</li>
          <li className={styles["nav-item"]}>Serviços</li>
          <li className={styles["nav-item"]}>Sobre nós</li>
          <li className={styles["nav-item"]}>Contatos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;