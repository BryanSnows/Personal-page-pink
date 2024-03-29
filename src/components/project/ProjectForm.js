import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({btnText}){
    return (
        <form className={styles.form}>
            <Input
             type="text"
             text="Nome do Projeto"
             name="Nome"
             placeholder="Insira o Nome do Projeto"
            />
            <Input
             type="text"
             text="Nome do Projeto"
             name="Nome"
             placeholder="Insira o Nome do Projeto"
            />
            
            <Select name="category_id" text="Selecione a categoria"/>
            <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm