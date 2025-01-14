import { useState } from "react";
import styles from "../Css/Header.module.css";

function Header() {
    const [showLinks, setShowLinks] = useState(false);

    const handleLogoClick = () => {
        setShowLinks(!showLinks); 
    };

    return (
        <div className={styles.cont}>
            <a href="https://www.google.com" target="_blank" className={`${styles.text} ${styles.blue}   ${showLinks ? styles.visible : styles.hidden}`}>Home</a>
            <a href="https://www.google.com" target="_blank" className={`${styles.text} ${styles.red} ${showLinks ? styles.visible : styles.hidden}`}>Skills</a>
            <div className={styles.logoContainer} onClick={handleLogoClick}>
                <img src="src/Main/assets/chrome-dev-tools-1-removebg-preview.png" alt="" className={styles.logo} />
            </div>
            <a href="https://www.google.com" target="_blank" className={`${styles.text} ${styles.green} ${showLinks ? styles.visible : styles.hidden}`}>Projects</a>
            <a href="https://www.google.com" target="_blank" className={`${styles.text} ${styles.yellow} ${showLinks ? styles.visible : styles.hidden}`}>Contact</a>
        </div>
    );
}

export default Header;
