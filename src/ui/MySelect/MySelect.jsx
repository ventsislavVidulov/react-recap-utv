import styles from './MySelect.module.css'

const MySelect = ({ options, defaultValue, onChange, value }) => {
    return (
        <select className={styles.mySelect} value={value} onChange={onChange}>
            {/* <option value="" disabled>{defaultValue}</option> */}
            {
                options.map(o =>
                    <option
                        value={o.value}
                        key={o.value}
                    >
                        {o.textContent}
                    </option>
                )
            }
        </select>
    )
}

export default MySelect