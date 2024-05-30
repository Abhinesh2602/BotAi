import Input from "./Input";
import logo from "../assets/logo/logo.png";
import stars from "../assets/icons/stars.png";
import styles from "./PastConversations.module.css";
import profilePic from "../assets/icons/profilePic.png";
import { useEffect } from "react";
import { useBotContext } from "../services/BotContextProvider";

function PastConversations() {
  const { savedChats } = useBotContext();
  console.log(savedChats);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Conversation History</div>

        <div className={styles.chatConatainer_wrapper}>
          <span className={styles.dayTitle}>Todays Chats</span>

          {savedChats.map((savedChat, key) => (
            <FeedBack
              key={key}
              userMessage={savedChat[key].userQuestion.text}
              userTime={savedChat[key].userQuestion.time}
              botReply={savedChat[key].botReply.text}
              feedBack={savedChat[key].botReply.feedback}
              botTime={savedChat[key].botReply.time}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default PastConversations;

const FeedBack = ({ userMessage, botReply, feedBack, botTime, userTime }) => {
  return (
    <div className={styles.chatConatainer}>
      <div className={styles.userChatContainer}>
        <img src={profilePic} alt="" className={styles.profilePic} />
        <div className={styles.chatDetails}>
          <span className={styles.youTitle}>You</span>
          <span className={styles.message}>{userMessage}</span>
          <span className={styles.time}>Time : {botTime}</span>
        </div>
      </div>
      <div className={styles.BotChatContainer}>
        <img src={logo} alt="" className={styles.logoPic} />
        <div className={styles.chatDetails}>
          <span className={styles.youTitle}>Soul AI</span>
          <span className={styles.message}>{botReply}</span>
          <div className={styles.timeStarContainer}>
            <span className={styles.time}>Time : {botTime}</span>
            <img src={stars} alt="" className={styles.stars} />
          </div>
          <span className={styles.Feedbackmessage}>
            <span className={styles.FeedbackTitle}>Feedback: </span>
            {feedBack}
          </span>
        </div>
      </div>
    </div>
  );
};
