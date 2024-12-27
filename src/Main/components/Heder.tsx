import styles from '../Css/Header.module.css';

function Header() {
    return(
        
        
        <div className={styles.cont}>
        <h1 className ={styles.text}>Home</h1>
        <h1 className ={styles.text}>Projects</h1>
        <h1 className ={styles.text} >Contact</h1>
        </div>
    )
}

export default Header