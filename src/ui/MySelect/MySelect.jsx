const MySelect = ({ options, defaultValue, onChange, value }) => {
    return (
        <select value={value} onChange={onChange}>
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