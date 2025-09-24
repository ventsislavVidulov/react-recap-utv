import styles from './MyModal.module.css'

const MyModal = ({ children, visible, togleModalHandler }) => {

    const appledCssClasses = [styles.myModal];

    if (visible) {
        appledCssClasses.push(styles.active)
    }

    return (
        <div onClick={togleModalHandler}className={appledCssClasses.join(' ')}>
            <div className={styles.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal