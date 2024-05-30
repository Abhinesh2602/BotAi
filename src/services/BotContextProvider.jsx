import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import getCurrentTime from "./time";

const BotContext = createContext();

function BotProvider({ children }) {
  const [question, setQuestion] = useState("");
  const [conversations, setConversations] = useState({});
  const [conversationIndex, setConversationIndex] = useState(0);
  const [feedback, setshowFeedback] = useState(false);
  const [savedChats, setSavedChats] = useState([]);

  const clearQuestion = useCallback(() => {
    setQuestion("");
  }, []);

  return (
    <BotContext.Provider
      value={{
        question,
        setQuestion,
        clearQuestion,
        conversations,
        setConversations,
        conversationIndex,
        setConversationIndex,
        feedback,
        setshowFeedback,
        savedChats,
        setSavedChats,
      }}
    >
      {children}
    </BotContext.Provider>
  );
}

const useBotContext = () => {
  const context = useContext(BotContext);
  if (context === undefined) {
    throw new Error("Context used outside the provider");
  }
  return context;
};

export { BotProvider, useBotContext };
