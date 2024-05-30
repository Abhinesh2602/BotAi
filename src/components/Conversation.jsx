import styles from "./Conversation.module.css";
import Input from "./Input";
import profilePic from "../assets/icons/profilePic.png";
import logo from "../assets/logo/logo.png";
import like from "../assets/icons/like.png";
import dislike from "../assets/icons/dislike.png";
import { useEffect, useState } from "react";
import { useBotContext } from "../services/BotContextProvider";
import sampleData from "../data/sampleData.json";
import React, { memo } from "react";
import getCurrentTime from "../services/time";
import AdditionalFeedback from "./AdditionalFeedback";

function Conversation() {
  const {
    conversations,
    setConversations,
    conversationIndex,
    feedback,
    setshowFeedback,
  } = useBotContext();

  console.log(conversations);

  useEffect(() => {
    if (conversationIndex > 0) {
      const lastConversation = conversations[conversationIndex - 1];

      if (lastConversation && lastConversation.botReply.text === "") {
        const filteredData = sampleData.filter(
          (data) =>
            data.question.toLowerCase() ===
            lastConversation.userQuestion.text.toLowerCase()
        );

        console.log(filteredData);

        const response =
          filteredData.length > 0
            ? filteredData[0].response
            : "Sorry, I couldn't understand that.";

        getCurrentTime().then((time) => {
          setConversations((prev) => {
            const lastIndex = conversationIndex - 1;
            return {
              ...prev,
              [lastIndex]: {
                ...prev[lastIndex],
                botReply: {
                  text: response,
                  isBot: true,
                  time: time,
                  feedback: "",
                },
              },
            };
          });
        });
      }
    }
  }, [conversationIndex, conversations, setConversations]);

  return (
    <>
      {feedback ? <AdditionalFeedback /> : ""}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <span className={styles.headerTitle}>Bot AI</span>

          <div className={styles.chatContainer}>
            {Object.keys(conversations).map((key) => (
              <div key={key}>
                <UserChat
                  userquestion={conversations[key].userQuestion.text}
                  time={conversations[key].botReply.time}
                />
                <BotChat
                  botResponse={conversations[key].botReply.text}
                  time={conversations[key].botReply.time}
                />
              </div>
            ))}
          </div>
          <Input />
        </div>
      </div>
    </>
  );
}

const UserChat = memo(({ userquestion, time }) => {
  return (
    <div className={styles.ChatContainer_details}>
      <img src={profilePic} alt="" className={styles.profilePic} />
      <div className={styles.chatDetails}>
        <span className={styles.youTitle}>You</span>
        <span className={styles.message}>{userquestion}</span>
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  );
});

UserChat.displayName = "UserChat";

const BotChat = memo(({ botResponse, time }) => {
  const { setshowFeedback } = useBotContext();

  function handleClick() {
    setshowFeedback((prev) => !prev);
  }

  return (
    <div className={styles.ChatContainer_details}>
      <img src={logo} alt="" className={styles.logoPic} />
      <div className={styles.chatDetails}>
        <span className={styles.youTitle}>Soul Ai</span>
        <span className={styles.message}>{botResponse}</span>
        <div className={styles.timeFeebackContainer}>
          <span className={styles.time}>{time}</span>
          <div className={styles.imageContainer}>
            <img src={like} alt="like" className={styles.feedbackimg} />
            <img
              src={dislike}
              alt="dislike"
              className={styles.feedbackimg}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

BotChat.displayName = "BotChat";

export default Conversation;
