import styles from "./NewChat.module.css";
import logo from "../assets/logo/logo.png";
import edit from "../assets/icons/edit.svg";
import { Link } from "react-router-dom";

function NewChat() {
  return (
    <Link to={"/"} className={styles.link}>
      <div className={styles.wrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
        <span className={styles.title}>New Chat</span>
        <img src={edit} alt="icon" />
      </div>
    </Link>
  );
}

export default NewChat;
