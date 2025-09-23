import styles from './MyButton.module.css';

const MyButton = ({handler, children}) => {
  return (
    <button onClick={handler} className={styles.myButton}>{children}</button>
  )
}

export default MyButton