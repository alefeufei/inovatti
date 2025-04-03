import styles from "./Header.module.css"; // Importing CSS for styling

function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://inovattitecnologia.com.br/wp-content/uploads/2020/09/novaLogo2.png"
        alt="Logo Inovatti"
        className="logo"
        width={200} // Added width and height attributes for better performance
      />
      <nav>
        <li>Home</li>
        <li>Serviços</li>
        <li>Sobre nós</li>
        <li>Contatos</li>
      </nav>
    </header>
  );
}

export default Header;