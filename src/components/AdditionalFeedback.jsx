import styles from "./AdditionalFeedback.module.css";
import bulb from "../assets/icons/bulb.png";
import { useBotContext } from "../services/BotContextProvider";
import { useState } from "react";

function AdditionalFeedback() {
  const { setshowFeedback, setConversations, conversationIndex } =
    useBotContext();

  const [feedBackText, setFeedBackText] = useState("");

  const handleCLick = () => {
    setshowFeedback(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setshowFeedback(false);
    setConversations((prev) => {
      const lastIndex = conversationIndex - 1;
      const existingBotReply = prev[lastIndex].botReply;

      const updatedBotReply = {
        ...existingBotReply,
        feedback: feedBackText,
      };

      return {
        ...prev,
        [lastIndex]: {
          ...prev[lastIndex],
          botReply: updatedBotReply,
        },
      };
    });
  };

  return (
    <>
      <div className={styles.Backdropwrapper} onClick={() => handleCLick}></div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.titleFeedbackContainer}>
            <img src={bulb} alt="" className={styles.bulb} />
            <span className={styles.titlefeedback}>
              Provide Additional Feedback
            </span>
          </div>
          <form
            action=""
            className={styles.formContainer}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className={styles.inputContainer}
              value={feedBackText}
              onChange={(e) => setFeedBackText(e.target.value)}
            />
            <button className={styles.feedbackBtn} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdditionalFeedback;
