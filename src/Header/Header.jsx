import styles from './Header.module.css'

export default function Header(){
    return(
        <header>
            <h1>To-Do List</h1>
            <strong>Let me help you manage and track your tasks!</strong>
            <br />
            <span>Developed by: <a href="https://www.facebook.com/lims.1506" target="_blank">Limuel M. Camangon</a></span>
        </header>
    );
}