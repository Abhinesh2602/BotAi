import styles from "./AdditionalFeedback.module.css";
import bulb from "../assets/icons/bulb.png";
import { useBotContext } from "../services/BotContextProvider";

function AdditionalFeedback() {
  const { feedback, setshowFeedback } = useBotContext();

  const handleCLick = () => {
    setshowFeedback(false);
  };

  return (
    <>
      <div className={styles.Backdropwrapper} onClick={handleCLick}></div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.titleFeedbackContainer}>
            <img src={bulb} alt="" className={styles.bulb} />
            <span className={styles.titlefeedback}>
              Provide Additional Feedback
            </span>
          </div>
          <input type="text" className={styles.inputContainer} />
          <button className={styles.feedbackBtn}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default AdditionalFeedback;
