import styles from './Select.module.css'
function Select({text,name,option,handleOnChange,value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Selecione a Opção</option>
            </select>
        </div>
        
    )
}
export default Select