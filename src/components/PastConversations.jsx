import Input from "./Input";
import logo from "../assets/logo/logo.png";
import stars from "../assets/icons/stars.png";
import styles from "./PastConversations.module.css";
import profilePic from "../assets/icons/profilePic.png";

function PastConversations() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Conversation History</div>

        <div className={styles.chatConatainer_wrapper}>
          <span className={styles.dayTitle}>Todays Chats</span>

          <div className={styles.chatConatainer}>
            <div className={styles.userChatContainer}>
              <img src={profilePic} alt="" className={styles.profilePic} />
              <div className={styles.chatDetails}>
                <span className={styles.youTitle}>You</span>
                <span className={styles.message}>Message</span>
                <span className={styles.time}>Time : 10:33PM</span>
              </div>
            </div>
            <div className={styles.BotChatContainer}>
              <img src={logo} alt="" className={styles.logoPic} />
              <div className={styles.chatDetails}>
                <span className={styles.youTitle}>Soul AI</span>
                <span className={styles.message}>Message</span>
                <div className={styles.timeStarContainer}>
                  <span className={styles.time}>Time : 10:33PM</span>
                  <img src={stars} alt="" className={styles.stars} />
                </div>
                <span className={styles.Feedbackmessage}>
                  <span className={styles.FeedbackTitle}>Feedback: </span>
                  Feedback Message
                </span>
              </div>
            </div>
          </div>
          <div className={styles.chatConatainer}>
            <div className={styles.userChatContainer}>
              <img src={profilePic} alt="" className={styles.profilePic} />
              <div className={styles.chatDetails}>
                <span className={styles.youTitle}>You</span>
                <span className={styles.message}>Message</span>
                <span className={styles.time}>Time : 10:33PM</span>
              </div>
            </div>
            <div className={styles.BotChatContainer}>
              <img src={logo} alt="" className={styles.logoPic} />
              <div className={styles.chatDetails}>
                <span className={styles.youTitle}>Soul AI</span>
                <span className={styles.message}>Message</span>
                <div className={styles.timeStarContainer}>
                  <span className={styles.time}>Time : 10:33PM</span>
                  <img src={stars} alt="" className={styles.stars} />
                </div>
                <span className={styles.Feedbackmessage}>
                  <span className={styles.FeedbackTitle}>Feedback: </span>
                  Feedback Message
                </span>
              </div>
            </div>
          </div>

          <div className={styles.chatConatainer}>
            <div className={styles.userChatContainer}>
              <img src={profilePic} alt="" className={styles.profilePic} />
              <div className={styles.chatDetails}>
                <span className={styles.youTitle}>You</span>
                <span className={styles.message}>Message</span>
                <span className={styles.time}>Time : 10:33PM</span>
              </div>
            </div>
            <div className={styles.BotChatContainer}>
              <img src={logo} alt="" className={styles.logoPic} />
              <div className={styles.chatDetails}>
                <span className={styles.youTitle}>Soul AI</span>
                <span className={styles.message}>Message</span>
                <div className={styles.timeStarContainer}>
                  <span className={styles.time}>Time : 10:33PM</span>
                  <img src={stars} alt="" className={styles.stars} />
                </div>
                <span className={styles.Feedbackmessage}>
                  <span className={styles.FeedbackTitle}>Feedback: </span>
                  Feedback Message
                </span>
              </div>
            </div>
          </div>
        </div>
        <Input />
      </div>
    </div>
  );
}

export default PastConversations;
