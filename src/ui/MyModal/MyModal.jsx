import styles from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {

    const appledCssClasses = [styles.myModal];

    if (!visible) {
        appledCssClasses.push(styles.active)
    }

    return (
        <div className={appledCssClasses.join(' ')}>
            <div className={styles.myModalContent}>
                {children}
            </div>
        </div>
    )
}

export default MyModal