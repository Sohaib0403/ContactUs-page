import styles from "./UserInput.module.css";
const UserInput = (props) => {
    const {text} = props
    return(

        <form >
            <div className={styles.form_name}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            </div>
            <div className={styles.form_name}>
            <label htmlFor="name">E-mail</label>
            <input type="text" name="name" />
            </div>
            <div className={styles.form_name}>
            <label htmlFor="Text">Text</label>
            <textarea name="Text" />
            </div>
        </form>
    )
}

export default UserInput;