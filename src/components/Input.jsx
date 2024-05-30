import { useCallback, useState } from "react";
import styles from "./Home.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useBotContext } from "../services/BotContextProvider";

function Input() {
  const navigate = useNavigate();
  const {
    question,
    setQuestion,
    clearQuestion,
    setConversations,
    conversations,
    conversationIndex,
    setConversationIndex,
    currentTime,
    setSavedChats,
  } = useBotContext();

  const location = useLocation();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const newMessage = {
        text: question,
        isBot: false,
        time: currentTime,
      };
      const botMessage = { text: "", isBot: true };

      setConversations((prev) => ({
        ...prev,
        [conversationIndex]: {
          userQuestion: newMessage,
          botReply: botMessage,
        },
      }));

      setConversationIndex((prevIndex) => prevIndex + 1);

      clearQuestion();
      if (location.pathname !== "/conversations") {
        navigate("/conversations");
      }
    },
    [
      question,
      clearQuestion,
      conversationIndex,
      setConversations,
      navigate,
      location.pathname,
      setConversationIndex,
      currentTime,
    ]
  );

  const handleChange = useCallback(
    (e) => {
      setQuestion(e.target.value);
    },
    [setQuestion]
  );

  const handleSave = (e) => {
    e.preventDefault();
    setSavedChats((prev) => [...prev, conversations]);
  };

  return (
    <form action="" className={styles.inputContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        value={question}
        onChange={handleChange}
      />
      <button className={styles.inputContainer_btn} type="submit">
        Ask
      </button>
      <button className={styles.inputContainer_btn} onClick={handleSave}>
        Save
      </button>
    </form>
  );
}

export default Input;
