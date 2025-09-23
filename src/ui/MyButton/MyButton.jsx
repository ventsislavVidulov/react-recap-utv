import styles from './MyButton.module.css';

const MyButton = ({ handler, children, id, submit }) => {

    let clickHandler;

    if (submit) {
        clickHandler = (e) => handler(e)
    } else {
        clickHandler = () => handler(id)
    }

    return (
        <button onClick={clickHandler} id={id} className={styles.myButton}>{children}</button>
    )
}

export default MyButton