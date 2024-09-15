import styles from "./Button.module.css";

const Button = (props) => {
  const {isSecondary, text ,icon} = props
  return (
    <button className={isSecondary ? styles.secondary_btn : styles.primary_btn}>
      {icon}  {/* Use the icon prop here */}
      {text}  {/* Display the text prop */}
    </button>
   
  )
};

export default Button;