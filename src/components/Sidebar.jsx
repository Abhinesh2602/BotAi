import NewChat from "./NewChat";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <NewChat />
        <Link to={"/past-conversations"} className={styles.pastBtn}>
          PastConversations
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
