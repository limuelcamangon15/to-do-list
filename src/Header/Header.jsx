import styles from './Header.module.css'

export default function Header(){
    return(
        <header className={styles.header}>
            <h1 className={styles.h1}>To-Do List</h1>
            <strong className={styles.strong}>Let me help you manage and track your tasks!</strong>
            <br />
            <span className={styles.span}>Developed by: <a href="https://www.facebook.com/lims.1506" target="_blank" className={styles.a}>Limuel M. Camangon</a></span>
        </header>
    );
}