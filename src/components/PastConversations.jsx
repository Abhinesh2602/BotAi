import Input from "./Input";
import logo from "../assets/logo/logo.png";
import styles from "./PastConversations.module.css";
import profilePic from "../assets/icons/profilePic.png";
import { useBotContext } from "../services/BotContextProvider";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";

function PastConversations() {
  const { savedChats } = useBotContext();

  const [filterRating, setFilterRating] = useState(0);

  const [filteredChats, setFilteredChats] = useState(savedChats);

  useEffect(() => {
    if (filterRating === 0) {
      setFilteredChats(savedChats);
    } else {
      const newFilteredChats = savedChats
        .map((conversation) => {
          const filteredEntries = Object.keys(conversation)
            .filter(
              (key) =>
                conversation[key].botReply.rating === parseInt(filterRating)
            )
            .reduce((acc, key) => ({ ...acc, [key]: conversation[key] }), {});
          return Object.keys(filteredEntries).length > 0
            ? filteredEntries
            : null;
        })
        .filter((conversation) => conversation !== null);

      setFilteredChats(newFilteredChats);
    }
  }, [filterRating, savedChats]);

  const handleChange = (e) => {
    setFilterRating(parseInt(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Conversation History</div>

        <select
          name="filterForm"
          className={styles.filterDropDown}
          onChange={handleChange}
        >
          <option value="0">All Stars</option>
          <option value="1">1 Star</option>
          <option value="2">2 Star</option>
          <option value="3">3 Star</option>
          <option value="4">4 Star</option>
          <option value="5">5 Star</option>
        </select>

        <div className={styles.chatConatainer_wrapper}>
          <span className={styles.dayTitle}>Todays Chats</span>

          {filteredChats.map((conversation, index) => (
            <div key={index}>
              {Object.keys(conversation).map((key) => (
                <FeedBack
                  key={key}
                  userMessage={conversation[key].userQuestion.text}
                  userTime={conversation[key].userQuestion.time}
                  botReply={conversation[key].botReply.text}
                  feedBack={conversation[key].botReply.feedback}
                  botTime={conversation[key].botReply.time}
                  rating={conversation[key].botReply.rating}
                />
              ))}
            </div>
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default PastConversations;

const FeedBack = ({ userMessage, botReply, feedBack, botTime, rating }) => {
  return (
    <div className={styles.chatContainer}>
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
            {rating != 0 && (
              <Rating readOnly style={{ maxWidth: 80 }} value={rating} />
            )}
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
