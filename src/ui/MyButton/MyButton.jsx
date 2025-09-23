import styles from './MyButton.module.css';

const MyButton = ({content, handler}) => {
  return (
    <button onClick={handler} className={styles.myButton}>{content}</button>
  )
}

export default MyButton